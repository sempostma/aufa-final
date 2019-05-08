import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        Events.scrollEvent.remove('end');
    }

    onSetActive = index => e => {
        this.props.onSetActive(index);
    }

    handleClick = e => {
        e.stopPropagation();
    }

    render() {
        console.log(this.props);
        return (<div>
            <nav onClick={this.handleClick} className={'sidebar ' + (this.props.open ? 'open' : 'closed')}>
                <div className="sidebar-inner">
                    <Link onClick={this.props.onClose} activeClass="active" to="lander" spy={true} smooth={true} duration={500} onSetActive={this.onSetActive(0)}>
                        <h2>Top</h2>
                    </Link>
                    <Link onClick={this.props.onClose} activeClass="active" to="page1" spy={true} smooth={true} duration={500} onSetActive={this.onSetActive(1)}>
                        <h2>Projects</h2>
                    </Link>
                    <Link onClick={this.props.onClose} activeClass="active" to="page2" spy={true} smooth={true} duration={500} onSetActive={this.onSetActive(2)}>
                        <h2>Page 2</h2>
                    </Link>
                </div>
            </nav>
            <div onClick={this.props.onClose} className={'mask ' + (this.props.open ? 'open' : 'closed')}></div>
        </div>);
    }
}

export default Menu;