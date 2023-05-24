export type Genre = {
  _id: string;
};

export type Genres = Array<Genre>;

export type ListItem = {
  _id: string;
  title: string;
  alternativeTitles?: string[];
  ranking: number;
  genres: string[];
  episodes: number;
  hasEpisode: boolean;
  hasRanking: boolean;
  image: string;
  link: string;
  status: string;
  synopsis: string;
  thumb: string;
  type: string;
};

export type ListItems = Array<ListItem>;

export type Meta = {
  page: number;
  size: number;
  totalData: number;
  totalPage: number;
};

export type AxiosListItems = {
  data: ListItems;
  meta: Meta;
};
