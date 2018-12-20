import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.registerData = this.registerData.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getPass = this.getPass.bind(this);
        this.state = {
            unameValue: '',
            pswValue: ''
        };
    }

    getUser(e){
        this.setState({
            unameValue: e.target.value,
        });
    }

    getPass(e){
        this.setState({
            pswValue: e.target.value,
        });
    }

    registerData(){
        console.log(this.state.unameValue)
        axios(
            {
                method: 'POST',
                url: '/api/register', 
                data: {
                  uname: this.state.unameValue,
                  psw: this.state.pswValue,
                }
              })
            .then((res) => {
                console.log(res)
            }).catch((e) => {
                // this is an async catch
                console.log(e);
            });
            this.setState({
                unameValue: '',
                pswValue: '',
            })
    }
    render() {
        return (
            <div>
            <h1>Register Page</h1>
            <form>
            <div className="imgcontainer">
                <img src={require('./img/images.png')} alt="Avatar" class="avatar"></img>
            </div>
            <div className="container">
                <div>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required value={this.state.unameValue} onChange={this.getUser}></input>
                </div>
                <div>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required value={this.state.pswValue} onChange={this.getPass}></input>
                </div>

                <button type="submit" onClick={this.registerData}>Register</button>
            </div>

            <div className="container" styles="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
            </div>
            </form>
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
)(Register);