import React, { Component } from 'react';

import { Link, withRouter } from 'react-router';

@withRouter
export default class Sidebar extends Component {
  render() {
    console.log(this.props);
    return (
    <div className={ 'dashboard__nav-primary' }>
      <div className={ 'sidebar__primary' }>
        <div className="sidebar__container">
          <div className={ 'sidebar__content' }>
            <div className="sidebar__icon">
              <img src="icon-dropbox.png " alt={ 'dropbox' }/>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <Link to={ '/home' }>
                  Home
                </Link>
              </li>
              <li className="sidebar__item">
                <Link to={ '/files' }>
                  Files
                </Link>
              </li>
              <li className="sidebar__item">
                <Link to={ '/paper' }>
                  Paper
                </Link>
              </li>
              <li className="sidebar__item">
                <Link to={ '/showcase' }>
                  Showcase
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
