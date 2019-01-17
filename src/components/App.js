import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };
    state = {}
    render() {
        return (
            <Fragment>
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                </div>
                <VideoDetail />
                <VideoList />
            </Fragment>
        )
    }
}

export default App;