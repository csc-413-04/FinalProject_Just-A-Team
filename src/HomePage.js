import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div onClick={this.props.doTest}>
                <h1  >Home</h1>
                <p>
                    Welcome to the Chat App! :^)
                </p>
                <p>
                    {/* <a href="https://reacttraining.com/react-router/web/guides/quick-start">Click me to find out more about routing</a> */}
                </p>
                <div id="box">
                    {/* <div id="buffer"> &nbsp; </div> */}
                    <div id="box_l"><Link to="/Friends/">Friends</Link></div>
                    <div id="box_r" ><Link to="/Chat">Chat</Link></div>
                </div>
                <div id="box2">
                    
                    <div id="box_l"><Link to="/Photo/">Photo</Link></div>
                    <div id="box_r"><Link to="/Login/">Login</Link></div>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);