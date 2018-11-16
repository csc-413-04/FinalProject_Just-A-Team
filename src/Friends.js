import React, { Component } from 'react';
import { connect } from 'react-redux';


class Friends extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }


    render() {
        return (
            <div onClick={this.props.doTest}>
                <h1 id="banner">Friends</h1>
                <p id="friendbox">
                    Frinds will be listed here.
                </p>
                <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter friend's username" name="name" value={this.state.name} onChange={this.handleChange} /> 
                <button className="FormField__Button mr-20">Add Friend</button> <button className="FormField__Button mr-20">Delete Friend</button>
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
)(Friends);