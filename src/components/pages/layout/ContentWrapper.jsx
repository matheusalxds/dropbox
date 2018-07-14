import React, { Component } from 'react';

import ContentHeader from '../layout/ContentHeader'
import ContentBody from '../layout/ContentBody'


export default class ContentWrapper extends Component {
  render() {
    const { title, heading, text, data } = this.props;
    return (
    <div className={ 'content' }>
      <ContentHeader
      title={ title }
      />
      <ContentBody
      heading={ heading }
      text={ text }
      data={ data }
      />
    </div>
    )
  }
}
