import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 > Chat App </ h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/Photo/">Photo</Link>
                        </li>
                        <li>
                            <Link to="/Friends/">Friends</Link>
                        </li>
                        <li>
                            <Link to="/Login/">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        testBanner: state.testReducer.test,
    };
};

const mapDispatchToProps = { doTest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);