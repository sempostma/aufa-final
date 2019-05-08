import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Element {...this.props} style={{ padding: '50px 0' }}>
            <div className="container spaced"></div>
        </Element> );
    }
}
 
export default Page;