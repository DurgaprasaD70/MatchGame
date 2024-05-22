import './index.css'

const MatchGameTabItem = props => {
  const {eachTab, isActive, showImagesRelatedToTabId} = props
  const {tabId, displayText} = eachTab

  const showTabRealatedImages = () => {
    showImagesRelatedToTabId(tabId)
  }

  const addClassName = isActive ? 'add-active' : ''

  return (
    <li className="tab-item-container">
      <button
        className={`tab-button ${addClassName}`}
        type="button"
        onClick={showTabRealatedImages}
      >
        <p className="tab-name">{displayText}</p>
      </button>
    </li>
  )
}

export default MatchGameTabItem
