import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBb6acmfaH3Ipdb2pCl4qSDD8o2Z7ZoFT4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [],  };

        YTSearch({key: API_KEY, term: 'Best of web'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]} />
            <VideoList videos={this.state.videos} />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));