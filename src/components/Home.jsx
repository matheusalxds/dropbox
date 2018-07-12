import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
    <div className={ 'content' }>
      <div className="content__header">
        <div className="content__header--title">
          <span className="content__header--title heading-secondary">Home</span>
        </div>
        <div className="content__header--search">
          <form className={ 'form' }>
            <div className={ 'form__search' }>
            <span className="form__icon">
              <img src="icon-magnifier.png"/>
            </span>
              <span className="form__field">
              <input
              className={ 'form__input' }
              type={ "text" }
              placeholder={ "Search" }
              />
            </span>
            </div>
          </form>
        </div>
        <div className="content__header--icons">
          <img src="icon-bell.png"/>
        </div>
        <div className="content__header--user">
            <img src="elton-john.jpg"/>
        </div>
      </div>
      <div className="content__body">
        <div className="content__body--main">
          <div className={'heading-quaternary'}>Starred</div>
          <div className={'content__body--text'}>When you star items, they’ll show up here for easy access. Learn more</div>
        </div>
        <div className="content__body--nav-secondary">
          Nav
        </div>
      </div>
    </div>
    )
  }
}
