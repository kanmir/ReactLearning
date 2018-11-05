import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
        <div className="search-bar">
            <input
                value={this.state.term}
                onChange={ event => this.onInputChange(event.target.value) } />
        </div>
        );

    }

    onInputChange(term) {
        clearTimeout(this.state.timeoutId);
        this.setState({term});
        const timeoutId = setTimeout(() => {
            this.props.onSearchTermChange(term);
        }, 400);
        this.setState({timeoutId});
    }
}

export default SearchBar;