import React, { Component } from 'react';
import Lander from './Lander';
import Page from './Page';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Menu from './Menu';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

    componentDidMount = (...args) => {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log("begin", args);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log("end", args);
        });
        scrollSpy.update();

    }


    componentWillUnmount = () => {
        Events.scrollEvent.remove('begin');
    }

    toggleMenu = e => {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    setActive = index => {
        console.log('set activ', index);
        this.setState({ index });
    }

    render() {
        return (<div className="view">
            <div onClick={this.toggleMenu} className="menu-btn" style={{ top: `calc(${100 * this.state.index + 50}% - 10px)` }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <Menu onClose={() => this.setState({ menuOpen: false })} onSetActive={this.setActive} open={this.state.menuOpen} />
            <Lander onMenu={this.toggleMenu}></Lander>
            <Page name="page1" onMenu={this.toggleMenu} />
            <Page name="page2" onMenu={this.toggleMenu} />
        </div>);
    }
}

export default View;