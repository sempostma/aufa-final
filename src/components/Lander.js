import React, { Component } from 'react';
import arrow from './arrow.svg';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const canvas = <div>
    <canvas style={{ position: 'absolute', left: 0, bottom: 0 }} width="800" height="600" id="platformer-canvas"></canvas>
    {document.write('<script src="https://esstudio.site/little-game/little-game.js"></script>')}
</div>;

class Lander extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const Canvas = () => canvas;
        return (<Element name="lander" className="lander" style={{ marginBottom: 50 }}>
            <div className="navbar">
                <div className="container">
                    <h1>Aufa</h1>
                    <div className="languages">
                        <div className="language">NL</div>
                        <div className="language">EN</div>
                    </div>
                </div>
            </div>
            <div className="spaced container relative">
                <div className="spaced relative red" style={{ width: '50%', position: 'absolute', left: 0 }}>
                    <div className="scroll-down">
                        <span>Scroll</span>
                        <img className="arrow" alt="Arrow" src={arrow}></img>
                    </div>
                </div>
                <div className="relative spaced game-container" style={{ width: '50%', position: 'absolute', right: 0, zIndex: 20 }}>
                    <div style={{ overflow: 'hidden', position: 'absolute', left: '0', right: 0, bottom: 0, top: 0 }}>
                        <Canvas />
                    </div>
                    <div className="hello">
                        He<br />
                        llo
                    </div>
                </div>
            </div>
        </Element>);
    }
}

export default Lander;

