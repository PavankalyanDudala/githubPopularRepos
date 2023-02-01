import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repositoryData: [],
    isLoading: true,
    activeId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    const {activeId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    const updatedData = fetchedData.popular_repos.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      issueCount: eachItem.issue_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
    }))
    this.setState({repositoryData: updatedData, isLoading: false})
  }

  languageFilter = id => {
    this.setState({isLoading: true})
    this.setState({activeId: id}, this.getRepos)
  }

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderPopularRepos = () => {
    const {repositoryData} = this.state
    return (
      <ul className="repos-container">
        {repositoryData.map(repoDetails => (
          <RepositoryItem key={repoDetails.id} repoDetails={repoDetails} />
        ))}
      </ul>
    )
  }

  renderFilterButtons = () => (
    <ul className="language-details-containers">
      {languageFiltersData.map(languageDetails => (
        <LanguageFilterItem
          key={languageDetails.id}
          languageDetails={languageDetails}
          languageFilter={this.languageFilter}
        />
      ))}
    </ul>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="main-title">
          <h1 className="main-title-text">Popular</h1>
        </div>
        {this.renderFilterButtons()}
        {isLoading ? this.renderLoader() : this.renderPopularRepos()}
      </div>
    )
  }
}

export default GithubPopularRepos
