import React, { Component } from 'react'
import Expenses from './Expenses'
import TotalAmount from './TotalAmount'
import '../css/dashboard.css'
import '../css/form.css'

export class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            totalAmount: 0,
            getTotalAmount: true
        }
    }

    submitAmount = (totalAmount) => {
        this.setState({
            totalAmount: totalAmount,
            getTotalAmount: false
        })
    }

    updateTotalAmount = (usedAmount) => {
        this.setState({
            totalAmount: this.state.totalAmount - usedAmount
        })
    }

    render() {
        const { totalAmount, getTotalAmount } = this.state
        return getTotalAmount ?
            (
                <TotalAmount submitAmount={this.submitAmount}></TotalAmount>
            ) :
            (
                <div className="component-holder">
                    <Expenses updateTotalAmount={this.updateTotalAmount} totalAmount={totalAmount} />
                </div>
            )
    }
}

export default Dashboard
