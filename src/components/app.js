import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyBrGyv9sWYJXJ7g-9XPKpxdZjWtxmBRBTA';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.startVideoSearch("");

  }
  startVideoSearch(term){
    YTSearch({key: API_KEY, term}, (videos)=> {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos)=> {
      this.setState({
        videos
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SearchBar  onSearchTermChange={videoSearch}/>
          </div>
        </div>
         <div className="row">
           <div className="col-md-8">
             <VideoDetail video={this.state.selectedVideo}/>
           </div>
            <div className="col-md-4">
              <VideoList
                 onVideoSelect={selectedVideo=> this.setState({selectedVideo})}
                 videos={this.state.videos}/>
            </div>
         </div>
      </div>
    );
  }
}
