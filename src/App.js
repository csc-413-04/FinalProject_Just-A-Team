import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';
import HomePage from './HomePage';
import Chat from './Chat';
import Photo from './Photo';
import Friends from './Friends';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    console.log(this.props)
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  render() {
    let myVariable = <h2>Brian</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner} />;
    }
    return (
      <Router>
        <div className="App">
          <Header banner={this.state.banner} />
          <div className="page-content">
            <Switch>
              <Route path="/Chat" component={Chat} />
              <Route path="/Photo" component={Photo} />
              <Route path="/Friends" component={Friends} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
