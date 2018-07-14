import React, { Component } from 'react';

import Upload from '../../common/Upload';
import List from '../../common/List';

export default class ContentBody extends Component {

  renderHeading = (heading) => (
  <div className={ 'heading-quaternary' }>{ heading }</div>
  );

  renderText = (text) => (
  <div className={ 'content__body--text' }>{ text }</div>
  );

  renderList = (data) => (
  <div className={ 'wrapper__list' }>
    <span className="wrapper__text">
      Recent
    </span>
    <List
    data={ data }
    />
  </div>
  );

  render() {
    const { data, heading, text } = this.props;
    return (
    <div className="content__body">
      <div className="content__body--main content__body--item">
        { heading ? this.renderHeading(heading) : null }
        <span className={'line'}/>
        { text ? this.renderText(text) : null }
        { data ? this.renderList(data) : null }
      </div>
      <div className="content__body--nav-secondary">
        <Upload/>
      </div>
    </div>
    )
  }
}
