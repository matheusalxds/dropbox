import React, { Component } from 'react';
import data from "./__mock.files";
import ContentWrapper from '../layout/ContentWrapper'

export default class Files extends Component {
  render() {
    return (
    <ContentWrapper
    title={ 'Files' }
    heading={ "Starred with files" }
    text={ "When you star items, they’ll show up here for easy access. Learn more" }
    data={ data }
    />
    )
  }
}
