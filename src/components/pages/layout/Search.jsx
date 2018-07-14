import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
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
    )
  }
}
