import {
  MWMediaProvider,
  MWMediaType,
  MWPortableMedia,
  MWMediaStream,
  MWQuery,
  MWMediaSeasons,
  MWProviderMediaResult
} from "providers/types";

import {
  searchTheFlix,
  getDataFromSearch,
  turnDataIntoMedia,
} from "providers/list/theflix/search";

import { getDataFromPortableSearch } from "providers/list/theflix/portableToMedia";
import { CORS_PROXY_URL } from "mw_constants";

export const theFlixScraper: MWMediaProvider = {
  id: "theflix",
  enabled: false,
  type: [MWMediaType.MOVIE, MWMediaType.SERIES],
  displayName: "theflix",

  async getMediaFromPortable(
    media: MWPortableMedia
  ): Promise<MWProviderMediaResult> {
    const data: any = await getDataFromPortableSearch(media);

    return {
      ...media,
      year: new Date(data.releaseDate).getFullYear().toString(),
      title: data.name,
    };
  },

  async searchForMedia(query: MWQuery): Promise<MWProviderMediaResult[]> {
    const searchRes = await searchTheFlix(query);
    const searchData = await getDataFromSearch(searchRes, 10);

    const results: MWProviderMediaResult[] = [];
    for (const item of searchData) {
      results.push(turnDataIntoMedia(item));
    }

    return results;
  },

  async getStream(media: MWPortableMedia): Promise<MWMediaStream> {
    // movie https://www.wcostream.com/a-bugs-life
    // series https://www.wcostream.com/gravity-falls-episode-1-tourist-trapped
    // series https://www.wcostream.com/one-piece-episode-1-english-subbed-2-2
    // series https://www.wcostream.com/one-piece-episode-1-english-dubbed-2-2
    // media name is unpredictable so we need to search for it and cannot directly edit episodes via it


    // Following is redundant/unnecessary
    // generated iframe by obfuscated (utf-16 characters as array) inside wcostream page
    // embed https://www.wcostream.com/inc/animeuploads/embed.php?file=gravity%20falls%2FGravity.Falls.S01E01.Tourist.Trapped.720p-HERO.flv&pid=163634&h=8c807acc3c4b5182831752268ac18854&t=1653007993

    // 1. easily get file name from page source meta itemprop="embedURL" and change file extension

    // 2. get media url https://www.wcostream.com/inc/embed/getvidlink.php?v=gravity%20falls/Gravity.Falls.S01E01.Tourist.Trapped.720p-HERO.mp4&embed=anime
    // referrer https://www.wcostream.com/inc/animeuploads/embed.php?file=gravity%20falls%2FGravity.Falls.S01E01.Tourist.Trapped.720p-HERO.flv&pid=163634&h=8c807acc3c4b5182831752268ac18854&t=1653007993
    // FIGURED IT: 1. Requires x-requested-with=XMLHttpRequest to work 2. It logs the user agent so https://lb.watchanimesub.net/getvid won't work if UA is different

    // 3. get media https://lb.watchanimesub.net/getvid?evid=pa1lgCHTdJbnLFwA0R-ev55X3eW8wE5p70N9CSs7OQC8KhFjK7mWmHwUmhG5dCko7AOGt-EgWz9WWvIUG_yUjdsfGwBlfrChXi3C0MfbNdQVqcAmf-d2iAHunjlU4QVjxCfZHtDXpWHuVCObRHOtMIdPXgV1tm-Ii57g2ENF0byOxiV7bMxzLslMnEG3SsOFlGR0zDYkD3nk18lhRnZvJtgPDzRHJsYJ7zcnqWypofHzK1ihZPTCFmMz7oX2GpovDJ7s6LBl0XS-C_JFoK7LY4DG35jvES5qzna9M0WisJCdq88rx7AKI0OCCkrvTfsmW-6RNYKPJzyqVOJuGJiWb3YsmpFDEQhn9IVZt4r1-y3LQm0_vEcoYAJR8gnmtNzHIyXXk-X_GBdZrw751HvASuClFTQEXMNRTkx17olUZjV61COB3YQqY5l25-3KcQdiDJZw06eLztxdBoZodWxigOkJrdS8EC0Wd9eIKVh1itVaT10xzX_TqdQxeJYS-Kxn
    // FIGURED IT: 1. Requires same user agent

    const GET_VIDEO_LINK = `https://www.wcostream.com/inc/embed/getvidlink.php?v=${media.id}&embed=anime`;
    const wcoEncodedId = await fetch(GET_VIDEO_LINK, { headers: { "x-requested-with": "XMLHttpRequest" } }).then(response => response.json()).then(data => data.enc);;

    const MEDIA_URL = `https://lb.watchanimesub.net/getvid?evid=${wcoEncodedId}`

    let url = "";

    if (media.mediaType === MWMediaType.MOVIE) {
      url = `${CORS_PROXY_URL}https://theflix.to/movie/${media.mediaId}?movieInfo=${media.mediaId}`;
    } else if (media.mediaType === MWMediaType.SERIES) {
      url = `${CORS_PROXY_URL}https://theflix.to/tv-show/${media.mediaId}/season-${media.seasonId}/episode-${media.episodeId}`;
    }

    const res = await fetch(url).then((d) => d.text());

    const prop: HTMLElement | undefined = Array.from(
      new DOMParser()
        .parseFromString(res, "text/html")
        .querySelectorAll("script")
    ).find((e) => e.textContent?.includes("theflixvd.b-cdn"));

    if (!prop || !prop.textContent) {
      throw new Error("Could not find stream");
    }

    const data = JSON.parse(prop.textContent);

    return { url: data.props.pageProps.videoUrl, type: "mp4", captions: [] };
  },
};
