import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails
  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar-size" />
      <h1 className="repo-name">{name}</h1>
      <div className="stars-forks-issues-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars-forks-issues-image"
        />
        <p className="stars-forks-issues-count">{starsCount} stars</p>
      </div>
      <div className="stars-forks-issues-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars-forks-issues-image"
        />
        <p className="stars-forks-issues-count">{forksCount} forks</p>
      </div>
      <div className="stars-forks-issues-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="stars-forks-issues-image"
        />
        <p className="stars-forks-issues-count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
