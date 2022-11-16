export type PaginationConfiguration = {
    page: number;
    limit: number;
  };
  
  export type PaginatedSearchConfiguration<TSearch> = PaginationConfiguration & {
    search: TSearch;
  };
  
  export type PaginatedResults<TModel> = {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    results: Array<TModel>;
  };
  
  export type SearchConfiguration<TSearch> = {
    search: TSearch;
  };
  