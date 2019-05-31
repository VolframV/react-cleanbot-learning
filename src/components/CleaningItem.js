import React, { Component } from 'react';

class CleaningItem extends Component {

   
  render() {
    let area = this.props.cleaning.area;
    let time = this.props.cleaning.time;
    let productivity =  (area / time).toFixed(4)  ; 

    let batNumber =  Math.floor(Math.random() * 100);
    
    return (
      <div className="Cleaning">

      <div className='col-sm'>
      
     <h1><img alt="robot"src="https://vignette.wikia.nocookie.net/lab-rats/images/f/f3/Cartoon_Robot.png/revision/latest?cb=20151212205742" height='120ex' /> 
     <strong>Bot{this.props.cleaning.robot} </strong> <br /> </h1>
       Area Cleaned: <strong>{this.props.cleaning.area} </strong> Meters<br />
       Cleaning Time: <strong>{((this.props.cleaning.time)/60).toFixed(2)} </strong>Hours<br />
       Productivity: <strong>{productivity}</strong>
       <br />
       <p>Battery: </p>
       <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width: batNumber + '%'}} > {batNumber + '%'}</div>
        </div>
       
         <hr/>
         </div>
      </div>
    );
    
    
  }
}

export default CleaningItem;