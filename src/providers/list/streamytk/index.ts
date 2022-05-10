import {
  MWMediaProvider,
  MWMediaType,
  MWPortableMedia,
  MWMediaStream,
  MWQuery,
  MWProviderMediaResult,
  MWMediaStreamType,
  MWMediaSeasons
} from "providers/types";

export const streamytkProvider: MWMediaProvider = {
  id: "streamytk",
  enabled: true,
  type: [MWMediaType.MOVIE, MWMediaType.MOVIE],
  displayName: "streamy.tk",

  async getMediaFromPortable(media: MWPortableMedia): Promise<MWProviderMediaResult> {
    let type = "movie";
    if (media.mediaType === MWMediaType.SERIES)
      type = "tv";
    const res = await fetch(
      `https://streamy.tk/api/item/${type}/${media.mediaId}`,
    ).then(d => d.json());

    return {
      ...media,
      title: res.data.title as string,
      year: (new Date(res.data.title.release_date)).getFullYear().toString(),
    };
  },

  async searchForMedia(query: MWQuery): Promise<MWProviderMediaResult[]> {
    // TODO api needs way of searching
    throw new Error("NO SEARCH POSSIBLE");
  },

  async getStream(media: MWPortableMedia): Promise<MWMediaStream> {
    let type = "movie";
    if (media.mediaType === MWMediaType.SERIES)
      type = "tv";
    const res = await fetch(
      `https://streamy.tk/api/item/${type}/${media.mediaId}`,
    ).then(d => d.json());

    const convertMap = {
      "application/x-mpegurl": "m3u8"
    }
    const bestSource = res.sources.find((v: any) => {
      if (Object.keys(convertMap).includes(v.type))
        return true;
      return false;
    }) as undefined | { type: keyof typeof convertMap, src: string }
    if (!bestSource) {
      throw new Error("No source found for media");
    }

    return {
      captions: [],
      type: convertMap[bestSource.type] as MWMediaStreamType,
      url: bestSource.src,
    };
  },

  async getSeasonDataFromMedia(
    media: MWPortableMedia
  ): Promise<MWMediaSeasons> {
    const res = await fetch(
      `https://streamy.tk/api/item/tv/${media.mediaId}`,
    ).then(d => d.json());

    // TODO api needs way of finding season data
    throw new Error("NO SEASON DATA POSSIBLE");
  },
};
