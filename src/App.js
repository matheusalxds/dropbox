import React, { Component } from 'react';
import './App.css';

import SidebarPrimary from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  render() {
    return(
    <div className={"dashboard"}>
      <SidebarPrimary/>

      <Content>
        {this.props.children ? React.cloneElement(this.props.children) : null}
      </Content>
    </div>
    )
  }
}

export default App;
