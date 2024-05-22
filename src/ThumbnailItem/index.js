import './index.css'

const ThumbnailItem = props => {
  const {eachImage, addedToClickedList} = props
  const {thumbnailUrl, id} = eachImage

  const onClickingImage = () => {
    addedToClickedList(id)
  }
  return (
    <li className="thumbnail-image-item-container">
      <button
        type="button"
        onClick={onClickingImage}
        className="ThumbnailItem-button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
