import React from 'react'
import ReactDOM from 'react-dom'
import SplitCalculated from './splitCalculated.js'

var BillSplitApp = React.createClass({
    getInitialState: function () {
        return {
            amount: 0,
            numPeople: 1
        }
    },

    handleInput: function (name, event) {
        var change = {};
        change[name] = event.target.value;
        this.setState(change);
    },

    render: function (){
        return (
            <div>
                <div>
                <h2>Total bill amount:</h2>
                    <input 
                        onChange = {this.handleInput.bind(this, 'amount')}
                        value={this.state.amount}>
                    </input>
                </div>
                <div>
                    <h2>Number in party:</h2>
                    <input 
                        onChange = {this.handleInput.bind(this, 'numPeople')}
                        value = {this.state.numPeople}>
                    </input>
                </div>
                <div>
                    <SplitCalculated 
                        numPeople = {this.state.numPeople}
                        amount = {this.state.amount} /> 
                </div>               
            </div>
        )
    }
})

ReactDOM.render(
    <BillSplitApp />,
    document.getElementById("container")              
)
