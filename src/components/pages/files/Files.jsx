import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../layout/ContentWrapper'

import { loadFileData } from "../../../store/modules/files/actions/files";
import { selectData } from "../../../store/modules/files/reducers/files";

import Shimmer from '../../common/Shimmer';

@connect(
state => ({
  data: selectData(state),
}),
{ loadFileData })

export default class Files extends Component {

  componentDidMount() {
    this.props.loadFileData(true);
  }

  render() {
    const { data } = this.props;
    return data ? (
    <ContentWrapper
    title={ 'Files' }
    heading={ "Starred with files" }
    text={ "When you star items, they’ll show up here for easy access. Learn more" }
    data={ data }
    />
    ) : <Shimmer/>
  }
}
