import React, { Component } from 'react';

import SidebarPrimary from '../layout/Sidebar';
import Content from '../layout/Content';

class Base extends Component {
  render() {
    return(
    <div className={"dashboard"}>
      <SidebarPrimary />

      <Content>
        {this.props.children ? React.cloneElement(this.props.children) : null}
      </Content>
    </div>
    )
  }
}

export default Base;
