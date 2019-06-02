import React, { Component } from 'react';
import CleaningItem from './CleaningItem';

class AccountItem extends Component {

  render() {
    let cleaningItem;
    let totalArea = 0;
    let totalTime = 0;

    if (this.props.cleanings) {
      cleaningItem = this.props.cleanings.map(cleaning => {
        if (cleaning.account === this.props.account.id) {
          totalArea = cleaning.area + totalArea;
          totalTime = cleaning.time + totalTime;
          return (
            <CleaningItem key={cleaning.id} cleaning={cleaning} />
          )}
        return (
          null
        )
      });
    }

    let counter = 0;
    counter = '#id' + this.props.account.id;

    return (
      <div className="Account" >
        <div className="card-header" id="headingOne">
          <h5 className="mb-0 text-center">

            <button className="btn btn-link text-center" type="button" data-toggle="collapse" data-target={counter} aria-expanded="true" aria-controls="collapseOne">
              <h1 className="text-center">{this.props.account.name} </h1>
            </button>
          </h5>
        </div>

        <div id={'id' + (this.props.account.id)} className="collapse"  aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body container-fluid">
            <div className="row">
              {cleaningItem}
            </div>
            <br />
            <h2> Total Area Cleaned: <strong>{totalArea}</strong> Meters </h2>  <h2> Total Time: <strong>{(totalTime / 60).toFixed(2)}</strong> Hours </h2>
          </div>
        </div>
          </div>
    );
  }
}
export default AccountItem;