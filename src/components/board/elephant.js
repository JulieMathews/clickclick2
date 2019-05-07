import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';

export default class Elephant extends Component {

    handleClick = () => {
        this.props.onClick(this.props.index);
    }

    render(){ return(
        <FadeIn
            delay="1.5s"
            duration={500}>
            <div className="elephant">
                <img 
                    src={this.props.elephant.img} 
                    alt="elephant" 
                    className="profile-pic"
                    onClick={this.handleClick}/>
            </div>
        </FadeIn>
    )
    }
}
