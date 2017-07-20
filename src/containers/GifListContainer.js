import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      gifs: []
    }
  }


    fetchData(searchTerm) {
      console.log("Fetching...");
      let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`;

      fetch(url)
        .then(res => res.json())
        .then(json => {
          this.setState({
            gifs: json["data"]
          })
        })
    }

    render() {
      return(
        <div>
          <GifList gifs={this.state.gifs}/>
          <GifSearch fetchData={this.fetchData.bind(this)}/>
        </div>
      );
    }
  }


export default GifListContainer;
