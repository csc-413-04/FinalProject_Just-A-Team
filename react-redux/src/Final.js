import React, {Component } from 'react';
import {connect } from 'react-redux';

class Final extends Component {
    constructor(){
        this.state={
            data: ['some data', 'something else'],
        };
    }
    constructor(pros){
        super(pros);
        this.state = {
            data:[{
                key: 'key',
                value: 'something'
            },
            {
                key: 'key',
                value: 'something else'
            }],
        };
    }
    render() {
        return (
          <div>
            <table>
              {this.state.data.map(r => {
                return (
                  <tr>
                    <td>{r.key}</td>
                    <td>{r.value}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        );
    }
}