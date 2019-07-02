import React, {Component} from 'react';
import './Lottery.scss'

class Lottery extends Component{


    render() {
        return (
             <div className="LotteryName">
              {this.props.num}
             </div>
        );
    }
}

export default Lottery;