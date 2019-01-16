import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


class App extends React.Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="ui container">

                    <SearchBar />

                </div>
                <VideoDetail />
                <VideoList />
            </Fragment>
        )
    }
}

export default App;