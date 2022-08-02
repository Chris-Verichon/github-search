import { useState, useEffect } from 'react';
import axios from 'axios';
import { Message } from 'semantic-ui-react';
import SearchBar from '../SearchBar';
import Spinner from '../Spinner';
import ReposResults from '../ReposResults';
import MoreButton from '../MoreButton';

function SearchPage() {
  const [repos, setRepos] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  // add queryString to change call the callback useEffect
  // Send API
  const [queryString, setQueryString] = useState('');

  const loadData = () => {
    setIsLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${queryString}&sort=stars&order=desc&page=${page}&per_page=9`)
      .then((result) => {
        // update state with total answer
        setTotalCount(result.data.total_count);

        setRepos([
          ...repos,
          ...result.data.items,
        ]);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loadMore = () => {
    // console.log('load next page');
    setPage(page + 1);
  };

  const loadNewSearch = () => {
    // console.log('new search');
    // reset state
    setRepos([]);
    setTotalCount(0);
    setIsError(false);
    setPage(1);

    setQueryString(search);
  };

  useEffect(
    // callback render componant
    () => {
      // test to prevent the request from launching on 1st rendering
      if (search !== '') {
        loadData();
      }
    },
    [queryString, page],
  );

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} loadData={loadNewSearch} />
      {
        isError
          ? <Message color="red">Une erreur est survenue</Message>
          : <Message>{`${totalCount} repos correspondent à la recherche`}</Message>
      }
      {!isError && <ReposResults repos={repos} />}
      {isLoading && <Spinner />}
      {totalCount > repos.length && <MoreButton loadMore={loadMore} />}
    </>
  );
}

// == Export
export default SearchPage;
