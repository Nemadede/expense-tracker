import React, { Component } from 'react'

export class ExpenseForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            label: '',
            amount: '',
            period: ''

        }
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitExpense = (e) => {
        e.preventDefault();
        this.props.updateList(this.state)
    }

    render() {
        const { label, amount, period } = this.state
        return (
            <div className="component-holder">
                <form onSubmit={this.submitExpense} className="form form-special">
                    <h1>New Expense to Track</h1>
                    <div className="form-input">
                        <label>Label:</label>
                        <input name="label" value={label} onChange={this.inputChangeHandler} />
                    </div>
                    <div className="form-input">
                        <label>Amount:</label>
                        <input name="amount" value={amount} onChange={this.inputChangeHandler} />
                    </div>
                    <div className="form-input">
                        <label>Period:</label>
                        <input name="period" value={period} onChange={this.inputChangeHandler} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExpenseForm
