import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const { title } = this.props;
    return title ? (
    <div className="content__header--title">
      <span className="content__header--title heading-secondary">{ title }</span>
    </div>
    ) : null
  }
}
