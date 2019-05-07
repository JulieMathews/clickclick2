import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import ElephantBox from './elephantBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Elephant01',
        img: 'images/img/e1.jpeg',
        clicked: false
    },
    {
        name: 'Elephant02',
        img: 'images/img//e2.jpeg',
        clicked: false
    },
    {
        name: 'Elephant03',
        img: 'images/img/e3.jpeg',
        clicked: false
    },
    {
        name: 'Elephant04',
        img: 'images/img/e4.jpeg',
        clicked: false
    },
    {
        name: 'Elephant05',
        img: 'images/img/e5.jpeg',
        clicked: false
    },
    {
        name: 'Elephant06',
        img: 'images/img/e6.jpeg',
        clicked: false
    },
    {
        name: 'Elephant07',
        img: 'images/img/e7.jpeg',
        clicked: false
    },
    {
        name: 'Elephant08',
        img: 'images/img/e8.jpeg',
        clicked: false
    },
    {
        name: 'Elephant09',
        img: 'images/img/e9.jpeg',
        clicked: false
    },
    {
        name: 'Elephant10',
        img: 'images/img/e10.jpeg',
        clicked: false
    },
    {
        name: 'Elephant11',
        img: 'images/img/e11.jpeg',
        clicked: false
    },
    {
        name: 'Elephant12',
        img: 'images/img/e12.jpeg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            elephants: shuffleArray( initialChars )
        };
    }

    onClick = ( index ) =>{
        if( !this.state.elephants[index].clicked ){
            this.setState({
                elephants: shuffleArray( this.state.elephants.map( (elephant, current) =>  {
                    return ( current === index ) ? { ...elephant, clicked:true } : elephant
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                elephants: shuffleArray(this.state.elephants.map( elephant => { return { ...elephant, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every elephant once. Once you click an elephant, the grid will shuffle.<br/>Try not to click the same elephant twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <ElephantBox 
                    elephants={this.state.elephants} 
                    onClick={this.onClick} />
            </div>
        )
    }

}