useEffect(() => {
  const fetchMovies = async () => {
    const trendingMovies = await fetchTrendingMovies(page);
    setMovies(prevMovies => [...prevMovies, ...trendingMovies]);
  };
  fetchMovies();
}, [page]);
