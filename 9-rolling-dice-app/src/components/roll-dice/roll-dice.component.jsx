import React, {Component} from 'react';
import './roll-dice.styles.scss';
import Die from '../die/die.component';

class RollDice extends Component{
    constructor(props){
        super(props);

        this.state={
            die1: 'one',
            die2: 'six',
            isRolling: false
        };
    }

    static defaultProps = {
        faces: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    
    roll = (e) => {
        const randIndex1 = Math.floor(Math.random()*this.props.faces.length);
        const randIndex2 = Math.floor(Math.random()*this.props.faces.length);

        const randFace1 = this.props.faces[randIndex1];
        const randFace2 = this.props.faces[randIndex2];

        this.setState({
            die1: randFace1,
            die2: randFace2,
            isRolling: true
        });

        setTimeout(() => {
            this.setState({ isRolling: false });
        },1000);
    }

    render(){
        return(
            <div className='roll-dice'>
                <div className='dice'>
                    <Die face={this.state.die1} isRolling={this.state.isRolling} />
                    <Die face={this.state.die2} isRolling={this.state.isRolling} />
                </div>
                <button className='button' onClick={this.roll} disabled={this.state.isRolling}>
                    {
                        this.state.isRolling ? 'Rolling ...' : 'Roll Dice'
                    }
                </button>
            </div>
        );
    }
}

export default RollDice;