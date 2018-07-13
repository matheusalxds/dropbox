import React, { Component } from 'react';

export default class List extends Component {
  renderCeil = (item) => (
  <div className={ 'list__ceil' } key={item.title}>
    <div className="list__icon">
      <img src={ 'folder.png' } alt={'folder img'}/>
    </div>
    <div className="list__info">
      <div className="list__item list__title ">
        { item.title }
        <span className="list__star u-margin-left-small"> star </span>
      </div>
      <div className="list__item">{ item.subTitle }</div>
    </div>

    <div className="list__share u-margin-right">
      Share
    </div>
    <div className="list__btn u-margin-right">
      ...
    </div>
  </div>
  );

  render() {
    const { data } = this.props;
    return data ? (
    <div className={ 'list' }>
      {
        data.map(item => this.renderCeil(item))
      }
    </div>
    ) : null;
  }
}

