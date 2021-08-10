import React from 'react';

class TimesViewedComponent extends React.Component{
    constructor(props){
        super(props);
        var timesViewed = 0;
        if(localStorage.timesViewed){
          timesViewed = localStorage.timesViewed;
        }
        timesViewed++;
        this.state = {numViews: timesViewed};
        localStorage.timesViewed = timesViewed;
    }

    render(){
      return(<b>{this.state.numViews}</b>)
    }
  }

  export default TimesViewedComponent;