import React from 'react';
import UseMyApi from '../hooks/useMyApi'

import '../App.css';

export default class GetMyApi extends React.Component {
  constructor(props) {
    super(props)
  }
  state = { isLoading : true, data : [] }

  componentDidMount() {
    this.fetchApi()
  }


  render () {
    const {isLoading, data} = this.state
    if (isLoading) {
      return (
        <p className="fetching">Fetching API ...</p>
      )
    } else {
      return (
        <React.Fragment>
          <UseMyApi data={this.state.data}/>
        </React.Fragment>
      )
    }
  }

  fetchApi () {
    console.log("Fetching API ...");
    const dataApi = fetch('https://robinb-dev-api.herokuapp.com/projects').then(response => {
      return response.json()
    }).then(res => {
      this.setState({
        isLoading: false,
        data : res
      })
    });
  }
}

