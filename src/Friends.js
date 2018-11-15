import React, { Component } from 'react';
import { connect } from 'react-redux';


class Friends extends Component {
    render() {
        return (
            <div onClick={this.props.doTest}>
                <h1>Friends</h1>
                <p>
                    Here is content for friends!
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
)(Friends);