import React, {Component} from 'react';
import LotteryGame from './LotteryGame';

class LotteryController extends Component {
       constructor(props){
           super(props);
           this.state={
               displayNum: 6,
               maxValue: 40
           }
       }


    render() {
        return (
           <div>
               <LotteryGame displayNum={this.state.displayNum} maxValue={this.state.maxValue} />
           </div>
        );
    }
}
export default LotteryController;