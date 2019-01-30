import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


class App extends React.Component {

    state = { videos: [], selectedVideo: null, channelId: null, results: 0 }

    // to avoid blank video area, create default video when App component first rendered to screen
    componentDidMount() {
        this.onTermSubmit('fun');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                channelId: this.state.channelId
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0], //default to showing first video if none selected from list
            results: response.data.pageInfo.totalResults,
        });
    };

    onVideoSelect = async (video) => {
        this.setState({ selectedVideo: video });
    };

    onCheckOracleVideos = async (event) => {
        event.target.checked === true ? this.setState({ channelId: 'UCdDhYMT2USoLdh4SZIsu_1g' }) : this.setState({ channelId: null })
    };

    render() {

        if (this.state.results === 0) {
            return (
                <Fragment>
                    <div className="ui container paddingtop">
                        <SearchBar onFormSubmit={this.onTermSubmit} />
                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="oraclevideos" value="true" onChange={(event) => this.onCheckOracleVideos(event)} />
                            <label htmlFor="oraclevideos">Oracle Only</label>
                            <br />
                        </div>
                        <div className="ui grid">
                            <div className="ui row">
                                <div className="sixteen wide column">
                                    Your search provided no results, please try a different search term.
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else
            return (
                <Fragment>
                    <div className="ui container paddingtop">
                        <SearchBar onFormSubmit={this.onTermSubmit} />
                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="oraclevideos" value="true" onChange={(event) => this.onCheckOracleVideos(event)} />
                            <label htmlFor="oraclevideos">Oracle Only</label>
                            <br />
                        </div>
                        <div className="ui two column stackable grid">
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