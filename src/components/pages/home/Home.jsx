import React, { Component } from 'react';

import data from './__mock.home';
import ContentWrapper from '../layout/ContentWrapper'

export default class Home extends Component {
  render() {
    return (
    <ContentWrapper
    title={ 'Home' }
    heading={ "Starred" }
    text={ "When you star items, they’ll show up here for easy access. Learn more" }
    data={ data }
    />
    )
  }
}
