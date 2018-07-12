import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
    <div className={ 'dashboard__nav-primary' }>
      <div className={ 'sidebar__primary' }>
        <div className="sidebar__container">
          <div className={ 'sidebar__content' }>
            <div className="sidebar__icon">
              <img src="icon-dropbox.png "/>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <a href={ '/home' }>
                  Home
                </a>
              </li>
              <li className="sidebar__item">
                <a href={ '/files' }>
                  Files
                </a>
              </li>
              <li className="sidebar__item">
                Paper
              </li>
              <li className="sidebar__item">
                Showcase
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
