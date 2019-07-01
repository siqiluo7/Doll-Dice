import React, {Component} from 'react';
import Die from './Die';

class RollDice extends Component {

    constructor(props){
        super(props);
        this.state={
            dice1: Math.floor(Math.random()*6),
            dice2: Math.floor(Math.random()*6)
        }
    }

  //  componentDidMount(){
   //     this.rando()
   // }
   

    Roll(){

        this.setState({dice1: Math.floor(Math.random()*6)});
        this.setState({dice2: Math.floor(Math.random()*6)});
    }



    render() {

        return (
            <div>
            <div> <Die num={this.state.dice1}/></div>
            <div> <Die num={this.state.dice2}/></div>
            </div>
            
        );
    }
}

export default RollDice; 