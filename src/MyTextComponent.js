import React from 'react';

class MyTextComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          text: 'Look at Me!',
          bold: false, color:'black'
      };
    }

    MouseOverhandler(){
      this.setState({bold: true });
    }

    MouseOuthandler(){
      this.setState({bold: false });
    }

    Clickhandler(){
      if(this.state.color ==='red')
          this.setState({color: 'black' });
      else
          this.setState({color: 'red' });
    }

    render(){
      var myColor = this.state.color;
      var weight = this.state.bold? 'bold':'normal';
      return(
      <span style = {{color:myColor,fontWeight:weight}}
            onClick = {this.Clickhandler.bind(this)}
            onMouseOver = {this.MouseOverhandler.bind(this)} 
            onMouseOut = {this.MouseOuthandler.bind(this)}>   
        {this.state.text}
      </span>
      )
    }
  }

  export default MyTextComponent;

