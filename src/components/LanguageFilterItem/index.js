import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, languageFilter} = props
  const {id, language} = languageDetails

  const onLanguageFilterClick = () => {
    languageFilter(id)
  }

  return (
    <li className="filter-button-container">
      <button
        type="button"
        className="language-filter-button"
        onClick={onLanguageFilterClick}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
