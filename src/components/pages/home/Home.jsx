import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadHomeData } from '../../../store/modules/home/actions/home';
import { selectData } from '../../../store/modules/home/reducers/home';

import ContentWrapper from '../layout/ContentWrapper'
import Shimmer from '../../common/Shimmer';

@connect(
state => ({
  data: selectData(state),
}),
{ loadHomeData })
export default class Home extends Component {

  componentDidMount() {
    this.props.loadHomeData(true);
  }

  render() {
    const { data } = this.props;
    return data ? (
    <ContentWrapper
    title={ 'Home' }
    heading={ "Starred" }
    text={ "When you star items, they’ll show up here for easy access. Learn more" }
    data={ data }
    />
    ) : <Shimmer/>;
  }
}
