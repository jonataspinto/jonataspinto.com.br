import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
} from 'react-instantsearch-dom';
import * as S from './SearchStyled';
import HitComponent from './Hit';

const algolia = {
  appID: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const searchClient = algoliasearch(algolia.appID, algolia.searchOnlyApiKey);

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch
      searchClient={searchClient}
      indexName={algolia.indexName}
    >
      <SearchBox
        autoFocus
        translations={{ placeholder: 'Pesquisar...' }}
      />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`;
          },
        }}
      />
      <Hits hitComponent={HitComponent} />
    </InstantSearch>
    <S.Title>
      Powered by Algolia
      <S.AlgoliaIcon />
    </S.Title>
  </S.SearchWrapper>
);

export default Search;
