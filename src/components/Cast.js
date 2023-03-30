const Cast = ({ cast }) => {
  return (
    <div>
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map(actor => (
          <div key={actor.id} className="cast-item">
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;