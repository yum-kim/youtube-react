import { useRef, memo } from 'react';
import './search_header.scss';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = '';
  };

  const onKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header>
      <h1 className="title">Yumi Youtube</h1>
      <div className="search">
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
      </div>
    </header>
  );
});

export default SearchHeader;
