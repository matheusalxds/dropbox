import React, { Component } from 'react';
import { connect } from 'react-redux';

import data from './__mock.home';
import ContentWrapper from '../layout/ContentWrapper'

import { loadHomeData } from '../../../store/modules/home/actions/home';
import { selectData } from '../../../store/modules/home/reducers/home';

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
    if (this.props.data) console.log('data -->', data);
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
