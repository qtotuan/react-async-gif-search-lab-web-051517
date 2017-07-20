import React from 'react';

class GifSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    }
  }

  handleChange(event) {
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("In the submit handler");
    this.props.fetchData(this.state.searchTerm)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            value={this.state.searchTerm}
            onChange={this.handleChange.bind(this)}
            name="search-term"
            type="text"
          />
          <input type="submit" value="Submit"/>
        </form>
    )
  }
}

export default GifSearch;
