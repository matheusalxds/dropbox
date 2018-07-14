import React, { Component } from 'react';

import data from './__mock.paper';
import ContentWrapper from '../layout/ContentWrapper'

export default class Papers extends Component {
  render() {
    return (
    <ContentWrapper
    title={ 'Papers' }
    heading={ "You've some papers..." }
    text={ "List of papers" }
    data={ data }
    />
    )
  }
}
