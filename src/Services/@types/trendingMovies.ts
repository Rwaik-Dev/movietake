export type trendingMovies = {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string | null;
      genre_ids: [number];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      poster_path: string | null;
      release_date: string;
      title: string;
      video: boolean ;
      vote_average: number;
      vote_count: number;
      popularity: number;
    }
  ];
  total_pages: number;
  total_results: number;
};
