import React, { Component } from 'react';
import { connect } from 'react-redux';


class Chat extends Component {
    render() {
        return (
            <div onClick={this.props.doTest}>
                <h1 id="banner3">Chat</h1>
                <p>
                    Here is content for chat!
                </p>
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
)(Chat);