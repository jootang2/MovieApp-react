import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({coverImg, title, summary, genres}) {
    return <div>
    <img src={coverImg}></img>
    <h3>
      <Link to="/detail">{title}</Link>
      </h3>
    <div>{summary}</div>
    <ul>
      {genres.map((genre)=>(
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </div>
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;