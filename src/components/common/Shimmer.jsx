import React, { Component } from 'react';

export default class Shimmer extends Component {
  render() {
    return(
      <div className={'shimmer'}>
        <div className="shimmer__header">
          <div className="shimmer__header--title ">
            <div className="shimmer__shine shimmer__header--text"></div>
          </div>
          <div className="shimmer__shine shimmer__header--search"></div>
          <div className="shimmer__shine shimmer__header--icons"></div>
          <div className="shimmer__shine shimmer__header--icons"></div>
        </div>

        <div className="shimmer__body">
          <div className="shimmer__body--main">
            <div className="shimmer__shine shimmer__body--heading"></div>
            <span className="shimmer__shine shimmer__body--line"></span>
            <div className="shimmer__shine shimmer__body--heading-2"></div>
            <div className="shimmer__body--list">
              <div className="shimmer__shine shimmer__body--heading"></div>
            <span className="shimmer__shine shimmer__body--line"></span>
              <div className="shimmer__body--ceil">
                <div className="shimmer__shine shimmer__body--box"></div>
                <div className="shimmer__shine shimmer__body--info"></div>
              </div>
            <span className="shimmer__shine shimmer__body--line"></span>
              <div className="shimmer__body--ceil">
                <div className="shimmer__shine shimmer__body--box"></div>
                <div className="shimmer__shine shimmer__body--info"></div>
              </div>
              <span className="shimmer__shine shimmer__body--line"></span>
            </div>
          </div>
          <div className="shimmer__body--nav-secondary">
            <div className="shimmer__shine shimmer__body--btn"></div>
          </div>
        </div>
      </div>
    )
  }
}

