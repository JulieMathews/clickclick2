import React from 'react';
import FadeIn from '../transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={60} length={'50px'} direction={'bottom'} >
            <h2>Clicky Game</h2>
        </FadeIn>
    </header>
)};

export default Header;