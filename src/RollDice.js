import React, { Component } from 'react';
import Die from './Die';
import './RollDice.scss'

class RollDice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dice1: 1,
            dice2: 1
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
        this.Roll();
    }



    render() {

        return (
            <div className="playPanel">
                <div className="dicePanel">
                    <div className="Die"> <Die num={this.state.dice1} /></div>
                    <div className="Die"> <Die num={this.state.dice2} /></div>
                </div>

                <button className="rollButton" onClick={this.clickHandler}>Click to Roll!!!!</button>
            </div>

        );
    }
}

export default RollDice; 