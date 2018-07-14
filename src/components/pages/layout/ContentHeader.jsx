import React, { Component } from 'react';

import Search from '../layout/Search';
import BellIcon from '../layout/BellIcon';
import UserIcon from '../layout/UserIcon';
import Title from '../layout/Title'

export default class ContentHeader extends Component {
  renderTitle = (title) => (
  <Title
  title={ title }
  />
  );

  render() {
    const { title } = this.props;
    return (
    <div className="content__header">
      { title ? this.renderTitle(title) : null }
      <Search/>
      <BellIcon/>
      <UserIcon/>
    </div>
    )
  }
}
