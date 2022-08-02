import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

function SearchBar({ search, setSearch, loadData }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      loadData();
    }}
    >
      <Input
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default SearchBar;
