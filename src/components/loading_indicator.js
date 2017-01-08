import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadingIndicator extends Component{
  constructor(props) {
    super()
  }

  render() {
      let loading_indicator = ''
      if (this.props.is_fetching) {
        loading_indicator = <div className='loading-text-area'><p>LOADING, PLEASE WAIT</p></div>
      }
      return(
        <div>
          {loading_indicator}
        </div>
      )
  }
}

function mapStateToProps(state) {
  return { is_fetching: state.is_fetching }
}

export default connect(mapStateToProps)(LoadingIndicator)
