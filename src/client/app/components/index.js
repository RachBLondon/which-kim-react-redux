import React, { Component } from 'react';
import { connnect } from 'redux';
import { Link } from 'react-router';


class Index extends Component {

  render(){
    return (<div>
              <Link to='/play' className='btn btn-default'> Play </Link>
            </div>)
  }
}

export default Index;
