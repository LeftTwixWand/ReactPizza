import React from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

const Search = () => {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((inputValue) => {
      setSearchValue(inputValue);
    }, 250),
    [],
  );

  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 32 32">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>

      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={onChangeInput}
      />

      {value && (
        <svg
          className={styles.clearIcon}
          onClick={onClickClear}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
