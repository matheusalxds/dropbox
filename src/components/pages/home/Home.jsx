import React, { Component } from 'react';

import Upload from '../../common/Upload';
import Table from '../../common/Table';
import data from '../../__mock.home';

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
              <img src="icon-magnifier.png" alt={ 'magnifier' }/>
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
          <img src="icon-bell.png" alt={ 'bell' }/>
        </div>
        <div className="content__header--user">
          <img src="elton-john.jpg" alt={ 'elton jonh' }/>
        </div>
      </div>
      { /* BODY */ }
      <div className="content__body">
        <div className="content__body--main content__body--item">
          <div className={ 'heading-quaternary' }>Starred</div>
          <div className={ 'content__body--text' }>When you star items, they’ll show up here for easy access. Learn
            more
          </div>
          <div className={'wrapper__table'}>
              Recent
            <Table
              data={data}
            />
          </div>
        </div>
        <div className="content__body--nav-secondary">
          <Upload/>
        </div>
      </div>
    </div>
    )
  }
}
