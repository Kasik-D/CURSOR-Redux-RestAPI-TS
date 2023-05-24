export const searchParams = {
  search: 'search',
  genres: 'genres',
  sortBy: 'sortBy',
  sortOrder: 'sortOrder',
};

export type searchParamsType = {
  search?: string;
  genres?: string[];
  sortBy?: 'ranking' | 'title';
  sortOrder?: 'asc' | 'desc';
};
