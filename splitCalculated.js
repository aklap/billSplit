import React from 'react'

var SplitCalculated = React.createClass({
    calcSplit: function (amount, numPeople) {
        console.log(amount, numPeople);
        return '$'+parseFloat(amount/numPeople).toFixed(2);
    }, 

    render: function () {
        console.log(this.props);
        return (
            <div>
                <h3>You pay: {this.calcSplit(this.props.amount, this.props.numPeople)}</h3>
            </div>        
        )
    }
});

export default SplitCalculated;
