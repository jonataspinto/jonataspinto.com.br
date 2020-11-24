import React from 'react'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import * as S from './SearchStyled'
import HitComponent from './Hit'

const algolia = {
  appID: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const searchClient = algoliasearch(algolia.appID, algolia.searchOnlyApiKey);

function Search() {
  return (
    <S.SearchWrapper>
      <InstantSearch
        // appId={algolia.appID}
        // apiKey={algolia.searchOnlyApiKey}
        searchClient={searchClient}
        indexName={algolia.indexName}
      >
        <SearchBox
          // autoFocus
          translations={{ placeholder: "Pesquisar..." }}
        />
        <Stats
        translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={HitComponent}/>
      </InstantSearch>
    </S.SearchWrapper>
  )
};

export default Search
