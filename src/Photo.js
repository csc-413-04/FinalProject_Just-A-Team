import React, { Component } from 'react';
import { connect } from 'react-redux';


class Page2 extends Component {
    render() {
        return (
            <div onClick={this.props.doTest}>
                <h1>Photo</h1>
                <p>
                    Here is content for photos!
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
)(Page2);