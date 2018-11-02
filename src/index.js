import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyBb6acmfaH3Ipdb2pCl4qSDD8o2Z7ZoFT4';

YTSearch({key: API_KEY, term: '+10050'}, function(data) {
    console.log(data);
});

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));