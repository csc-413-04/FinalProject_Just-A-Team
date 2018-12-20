import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {loadAllMessages} from './redux/actions';

//axios.defaults.withCredentials = true;
class Message extends Component {
    render() {
        return (
            <div className="message">
                {this.props.content}
            </div>
        );
    }
}

class Messages extends Component {
    constructor(props) {
        super(props);
        
        this.sendSomeData = this.sendSomeData.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.state = {
            messageValue: '',
        };
        this.state.username = sessionStorage.getItem('username');
    }

    updateMessage(e) {
        this.setState({
            messageValue: e.target.value,
        });
    }

    sendSomeData() {
        axios(
        {
            method: 'POST',
            url: '/api/sendmessage', 
            data: {
              username: this.state.username,
              message: this.state.messageValue
            }
          })
        .then((res) => {
            console.log(res)
            window.location.reload()
        }).catch((e) => {
            // this is an async catch
            console.log(e);
        });
        this.setState({
            messageValue: '',
        })
    }

    componentDidMount() {
        // this is the url of where your spark server is
        // load up initial messages
        axios.get('/api/messages')
        .then((res) => {
           console.log(res.data)
            this.props.loadAllMessages(res.data);
        }).catch((e) => {
            // this is an async catch
            console.log(e);
        });
        this.scrollToBottom();
    }

    componentDidUpdate() {
            this.scrollToBottom();
    }
    
    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div className="row">
                <div className="column side">
                    <div class="card">
                        <img src={require('./img/images.png')} alt="Avatar"  width="100%"></img>
                        <div class="container-card">
                            <h4><b>{this.state.username}</b></h4> 
                        </div>
                    </div>
                    <div className="friendlist">
                        <div className="container-card">
                            <h5>friendlist</h5>
                        </div>
                    </div>
                </div>
                <div className="column middle">
                    <div className="content-area">
                        <h1>Messages</h1>
                        {this.state.content}
                        <div className="messages">
                        {
                            this.props.messages.map((messageData, i) => {
                            return <Message key={i} content={messageData}/>
                            })
                        }
                        <div ref={el => { this.el = el; }} />
                        </div>
                        <div className="message-addon">
                            <input value={this.state.messageValue} onChange={this.updateMessage}/>
                            <button onClick={this.sendSomeData}>Send</button>
                        </div>
                    </div>
                </div>
                <div className="column side">
                    <div className="conversation">
                        <div className="container-conversation">
                            <h5>Conversations</h5>
                            <p>General</p>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        messages : state.testReducer.messages,
    };
};


const mapDispatchToProps = {loadAllMessages};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages);
