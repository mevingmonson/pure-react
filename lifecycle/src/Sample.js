import React, { Component } from 'react';

class Sample extends Component {
    constructor(props) {
        super(props);

        console.log('Sample Contructor');
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('Sample Component Mounted');

        // this.interval = setInterval(() => {
        //     console.log(this.state.count);
        //     this.setState({
        //         count: this.state.count + 1,
        //     });
        // }, 1000);
    }

    componentWillUnmount() {
        console.log('Sample Component Unmounted');
        // clearInterval(this.interval);
    }

    render() {
        return <h1>Sample Component</h1>;
    }
}

export default Sample;