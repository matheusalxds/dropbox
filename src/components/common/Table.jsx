import React, { Component } from 'react';

export default class Table extends Component {
  renderCeil = (item) => (
  <div className={ 'list__ceil' }>
    <div className="list__icon">
      <img src={'folder.png'} />
    </div>
    <div className="list__info">
      <div className="list__info--item list__info--title ">{ item.title }</div>
      <div className="list__info--item">{ item.subTitle }</div>

    </div>
    <div className="list__btn">
      ...
    </div>
  </div>
  );

  render() {
    const { data } = this.props;
    if (data) console.log('data ->', data);
    return data ? (
    <div className={ 'list' }>
      {
        data.map(item => this.renderCeil(item))
      }
    </div>
    ) : null;
  }
}

