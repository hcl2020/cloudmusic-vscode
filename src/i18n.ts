import { env } from "vscode";
import { join } from "path";

// eslint-disable-next-line @typescript-eslint/naming-convention
declare function __non_webpack_require__(_: string): unknown;

type AvailableLanguages = "en" | "zh-cn" | "zh-tw";

const availableLanguages: AvailableLanguages[] = ["zh-cn", "zh-tw"];

export const i18n = (() => {
  let lang: AvailableLanguages = "en";

  const idx = availableLanguages.findIndex((value) => env.language === value);
  if (idx !== -1) {
    lang = availableLanguages[idx];
  }

  return __non_webpack_require__(
    join(__dirname, "..", "i18n", `${lang}.json`)
  ) as {
    sentence: {
      error: {
        needSignIn: string;
        network: string;
        systemSupport: string;
      };
      fail: {
        signIn: string;
      };
      hint: {
        account: string;
        button: string;
        confirmation: string;
        countrycode: string;
        desc: string;
        keyword: string;
        lyricDelay: string;
        name: string;
        password: string;
        search: string;
        signIn: string;
        trySignIn: string;
        volume: string;
      };
      label: {
        cellphone: string;
        dailyRecommendedPlaylists: string;
        dailyRecommendedSongs: string;
        email: string;
        lyricDelay: string;
        newsongRecommendation: string;
        playlistRecommendation: string;
        qrcode: string;
      };
      success: {
        dailyCheck: string;
        signIn: string;
      };
    };
    word: {
      account: string;
      addToQueue: string;
      album: string;
      albumNewest: string;
      all: string;
      allTime: string;
      area: string;
      artist: string;
      artistList: string;
      ascending: string;
      band: string;
      categorie: string;
      cellphone: string;
      cleanCache: string;
      close: string;
      comment: string;
      confirmation: string;
      content: string;
      copyLink: string;
      createPlaylist: string;
      default: string;
      descending: string;
      description: string;
      detail: string;
      download: string;
      editPlaylist: string;
      email: string;
      en: string;
      explore: string;
      female: string;
      followeds: string;
      follows: string;
      forward: string;
      fullLyric: string;
      hide: string;
      highqualityPlaylist: string;
      hotSongs: string;
      hottest: string;
      initial: string;
      ja: string;
      kr: string;
      like: string;
      loading: string;
      lyric: string;
      lyricDelay: string;
      male: string;
      more: string;
      latest: string;
      nextPage: string;
      nextTrack: string;
      other: string;
      pause: string;
      personalFm: string;
      play: string;
      playCount: string;
      playlist: string;
      previousPage: string;
      previousTrack: string;
      private: string;
      public: string;
      qrcode: string;
      recommendation: string;
      refresh: string;
      refreshing: string;
      reply: string;
      save: string;
      saved: string;
      saveToPlaylist: string;
      search: string;
      show: string;
      signIn: string;
      signOut: string;
      similarArtists: string;
      similarPlaylists: string;
      similarSongs: string;
      single: string;
      song: string;
      songList: string;
      submit: string;
      subscribedCount: string;
      topAlbums: string;
      topArtists: string;
      toplist: string;
      topSong: string;
      trackCount: string;
      trash: string;
      type: string;
      dislike: string;
      unsave: string;
      user: string;
      userRankingList: string;
      volume: string;
      weekly: string;
      zh: string;
    };
  };
})();
