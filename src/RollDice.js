import React, { Component } from 'react';
import Die from './Die';
import './RollDice.scss'

class RollDice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dice1: 1,
            dice2: 1,
            rolling: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    //  componentDidMount(){
    //     this.rando()
    // }


    Roll() {

        this.setState({ dice1: Math.floor(Math.random() * 6) });
        this.setState({ dice2: Math.floor(Math.random() * 6) });
    }

    clickHandler() {
        this.setState({rolling:true});
        this.Roll();
        setTimeout(()=>(this.setState({rolling:false})),1000);
      
        
    }



    render() {

        return (
            <div className="playPanel">
                <div className="dicePanel">
                    <div className="Die"> <Die num={this.state.dice1} rolling={this.state.rolling} /></div>
                    <div className="Die"> <Die num={this.state.dice2} rolling={this.state.rolling} /></div>
                </div>

                <button className="rollButton" disabled={this.state.rolling} onClick={this.clickHandler}>{this.state.rolling?"Rolling":"Click to Roll!!!!"}</button>
            </div>

        );
    }
}

export default RollDice; 