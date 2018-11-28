import React, { Component } from 'react';
import { connect } from 'react-redux';


class Page1 extends Component {
    render() {
        return (
            <div>
                <h1>Chat App</h1>
                <label for="msg"><b>Message</b></label>
                <div>
                <p><img src="https://www.screengeek.net/wp-content/uploads/2018/02/iron-man.jpg" width="64"></img>hi, How are you?</p>
                <p>I'm fine, Thanks?<img src="https://media.wired.com/photos/5927013bf3e2356fd800b27c/master/w_628,c_limit/CA.jpg" width="64"></img></p>
                </div>
                <div>
                    <input></input>
                    <button type="submit" class="btn">Send</button>
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
)(Page1);