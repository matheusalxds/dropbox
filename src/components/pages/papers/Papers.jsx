import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPaperData } from '../../../store/modules/paper/actions/paper';
import { selectData } from '../../../store/modules/paper/reducers/paper';

// import data from './__mock.paper';
import ContentWrapper from '../layout/ContentWrapper'
import Shimmer from '../../common/Shimmer';


@connect(
state => ({
  data: selectData(state),
}),
{ loadPaperData })

export default class Papers extends Component {

  componentDidMount() {
    this.props.loadPaperData(true);
  }

  render() {
    const { data } = this.props;
    return data ? (
    <ContentWrapper
    title={ 'Papers' }
    heading={ "You've some papers..." }
    text={ "List of papers" }
    data={ data }
    />
    ) : <Shimmer/>
  }
}
