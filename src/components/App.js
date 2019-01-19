import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };

    onVideoSelect = async (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <Fragment>
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;