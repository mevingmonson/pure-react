import React, { Component } from 'react';
import Sample from './Sample';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App Constructor');

    this.state = {
      name: 'Mevin',
      showSample: true,
    };
  }

  static getDerivedStateFromProps(props, prevState) {
    console.log('App getDervivedStateFromProps');
    console.log(props, prevState);

    return null;
  }

  componentDidMount() {
    console.log('App Component Mounted');
    this.setState({
      name: this.props.name
    })
    console.log('===========================');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App Should Component Update');
    // this.setState({
    //   name: nextProps.name
    // })
    console.log(nextProps, nextState)

    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('App getSnapshotBeforeUpdate');
    return 12345;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('App componentDidUpdate');
    console.log(prevProps, prevState, snapShot)

    // this.setState({
    //   name: nextProps.name
    // })
    console.log('============')
  }

  render() {
    console.log('App Render');
    return (
      <>
        <p>
          Name:
          {' '}
          {this.state.name}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({ showSample: false });
          }}
        >
          Update
        </button>
        {this.state.showSample ? <Sample /> : null}

      </>
    );
  }
}

export default App;