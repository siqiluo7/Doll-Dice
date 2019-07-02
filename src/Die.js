import React, {Component} from 'react';
import './Die.scss'

let numToWord=['one','two','three','four','five','six'];

class Die extends Component {

   

  //  static getDerivedStateFromProps(props, state) {
   //     return {num: props.num}
  //  }

    render() {
        
        let  diceClass='fas fa-7x fa-dice-'+numToWord[this.props.num];
        diceClass=(this.props.rolling?diceClass+' shaking':diceClass);
        console.log(diceClass);
        return (
            <i className={diceClass}></i>
        );
    }
}

export default Die;