import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <>
      <label htmlFor="searchContact">
        Find contacts by name
        <input
          type="text"
          name="searchContact"
          value={value}
          onChange={onSearch}
        />
      </label>
    </>
  );
};

export default SearchBox;
