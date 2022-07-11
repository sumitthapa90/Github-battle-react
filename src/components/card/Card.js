import "./card.css";

function Card(props) {
  return (
    <div className="single-card">
      <div className="card">
        <h2>#{props.score}</h2>
        <div>
          <img src={props.owner.avatar_url} alt={props.owner.login} />
        </div>
        <a href={props.html_url }>
          <h2>{props.owner.login}</h2>
        </a>

        <div>
          <div className="flex">
            <i className="fas fa-user text-green-300 mr-3"></i>
            <h3>{props.owner.login}</h3>
          </div>
        </div>
        <div className="flex">
          <i className="fas fa-star text-yellow-500 mr-3"></i>
          <h3 className="text-xl inline-block">
            {props.stargazers_count} Stars
          </h3>
        </div>
        <div className="flex">
          <i className="fas fa-code-branch text-blue-500 mr-3"></i>
          <h3 className="text-xl inline-block">{props.forks} forks</h3>
        </div>
        <div className="flex">
          <i className="fas fa-exclamation-triangle text-red-700 mr-3"></i>
          <h3 className="text-xl inline-block">{props.open_issues} issues</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
