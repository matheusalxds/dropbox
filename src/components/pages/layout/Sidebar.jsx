import React, { Component } from 'react';

import { Link, withRouter } from 'react-router';

@withRouter
export default class Sidebar extends Component {


  isRoute = (router) => {
    return this.props.location.pathname === router ? 'sidebar__item sidebar__item--active' : 'sidebar__item' ;
  }

  render() {
    // Só criar uma função pra testar se a routa corrente é a mesma do link, se for mostrar uma classe x do css
    console.log('props', this.props);
    return (
    <div className={ 'dashboard__nav-primary' }>
      <div className={ 'sidebar__primary' }>
        <div className="sidebar__container">
          <div className={ 'sidebar__content' }>
            <div className="sidebar__icon">
              <img src="icon-dropbox.png " alt={ 'dropbox' }/>
            </div>
            <ul className="sidebar__list">
              <li className={ this.isRoute('/home') }>
                <Link to={ '/home' }>
                  Home
                </Link>
              </li>
              <li className={ this.isRoute('/files') }>
                <Link to={ '/files' }>
                  Files
                </Link>
              </li>
              <li className={ this.isRoute('/paper') }>
                <Link to={ '/paper' }>
                  Paper
                </Link>
              </li>
              <li className={ this.isRoute('/showcase') }>
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
