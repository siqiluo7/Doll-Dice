import React, {Component} from 'react';
import Lottery from './Lottery';
import './LotteryGame.scss'


class LotteryGame extends Component {
constructor(props){
    super(props);
    let intialNums=[];
    for(let i=0;i<this.props.displayNum;i++){
        intialNums.push(0);
    }
     this.state={
       numbers:intialNums
     }
    this.clickHandler=this.clickHandler.bind(this);
}

clickHandler(){
     let num=this.props.displayNum;
     
    let newNumbers=this.state.numbers.map(n=>Math.floor(Math.random()*this.props.maxValue));
    this.setState({numbers:newNumbers});
}
render() {
    const lotteries = this.state.numbers.map(n => <Lottery num={n}/>)
    // lotteries = [
    //    <Lottery num={n1} />,<Lottery num={n2} />,<Lottery num={n3} />
    // ]
    return (
         <div className="GamePanel">
             <div className="ResultPanel">
             {lotteries}
             </div>  
           <button onClick={this.clickHandler}>Click me</button>
         </div>
    );
}

}

export default LotteryGame;