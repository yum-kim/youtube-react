import { useRef } from 'react';

// import styles from './search_header.module.scss';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };

  const onKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header>
      <i className="ico-logoplay"></i>
      <div className="input-group">
        <i className="ico-search"></i>
        <input
          ref={inputRef}
          className="form-input"
          type="text"
          placeholder="search"
          onKeyPress={onKeyPress}
        />
      </div>
    </header>
  );
};

export default SearchHeader;
