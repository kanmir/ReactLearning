import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange = (event) => {
        this.setState({ term: event.target.value});
        // console.log(this.state.term);
    }

    render() {
        return (
        <div>
            <input value={this.state.term} onChange={ this.onInputChange } />
        </div>
        );

    }
}

export default SearchBar;