import './index.css'

import {BsSearch} from 'react-icons/bs'

const CategoryList = props => {
  const {eachcategory, changeCategory} = props
  const {name, categoryId} = eachcategory

  const onclickCategoryItem = () => changeCategory(categoryId)
  return (
    <li className="categoryList" onClick={onclickCategoryItem}>
      <p>{name}</p>
    </li>
  )
}

const RatingList = props => {
  const {RatingDetails, changeRating} = props
  const {ratingId, imageUrl} = RatingDetails

  const onclickRatingItem = () => changeRating(ratingId)
  return (
    <li className="RatingListClass" onClick={onclickRatingItem}>
      <img src={imageUrl} className="starsImage" alt={`rating ${ratingId}`} />
      <p>& up</p>
    </li>
  )
}

const FiltersGroup = props => {
  const {changeSearchInput} = props
  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="searchInputClass">
        <input
          placeholder="Search"
          value={searchInput}
          type="search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const rendercategory = () => {
    const {category, changeCategory} = props
    return (
      <div className="category-List">
        <h1>Category</h1>
        <ul className="categories-list">
          {category.map(eachcategory => (
            <CategoryList
              eachcategory={eachcategory}
              key={eachcategory.categoryId}
              changeCategory={changeCategory}
            />
          ))}
        </ul>
      </div>
    )
  }

  const renderRating = () => {
    const {ratingsList, changeRating} = props
    return (
      <div>
        <h1>Rating</h1>
        {ratingsList.map(eachRating => (
          <RatingList RatingDetails={eachRating} changeRating={changeRating} />
        ))}
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {rendercategory()}
      {renderRating()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
