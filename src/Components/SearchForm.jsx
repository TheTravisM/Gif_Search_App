import React, { useRef } from 'react';
import "../scss/searchForm.scss"

const SearchForm = props => {
  const searchText = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    props.changeGifQuery(searchText.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={e => handleSubmit(e)} >
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input type="search"
        ref={searchText}
        name="search"
        className='search-input'
        placeholder="Search..." />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search">
          search
        </i>
      </button>
    </form>
  );
}

export default SearchForm;