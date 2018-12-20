import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HomePage extends Component {
    constructor(props) {
        super(props);
          this.state = {
            storage: sessionStorage.getItem('username'),
          };
        };

    render() {
        return (
            <div className="content-area">
            <h1>HomePage</h1>
            <h2>{this.state.storage}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages : state.testReducer.messages,
    };
};

export default connect(
)(HomePage);
