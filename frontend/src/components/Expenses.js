import React, { Component } from 'react'
import ExpenseCards from './ExpenseCards'
import ExpenseForm from './ExpenseForm'

class Expenses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFirstCreate: true,
            showExpenseForm: false,
            expenseList: [],
            checkedList: []

        }
    }

    createExpenseLabel = () => {
        this.setState({
            isFirstCreate: false,
            showExpenseForm: true
        })
    }

    submitExpense = (formState) => {
        this.setState({
            expenseList: [formState, ...this.state.expenseList],
            showExpenseForm: false
        })


    }

    handleCheckedExpense = (expenseItem) => {
        let index = this.state.expenseList.indexOf(expenseItem)
        console.log(index);
        if (index > -1) {
            let removed = this.state.expenseList.splice(index, 1)
            console.log(removed);
            this.setState((previousList) => ({
                expenseList: [...previousList.expenseList],
                checkedList: [expenseItem, ...previousList.checkedList]
            }))

            this.props.updateTotalAmount(expenseItem['amount'])

            if (this.state.expenseList.length === 0)
                this.setState({
                    isFirstCreate: true
                })

        }

    }



    render() {
        const { isFirstCreate, showExpenseForm, expenseList } = this.state
        let totalAmtJSX = <div className="total-amount-container">
            <h1>Total Amount Left</h1>
            <hr></hr>
            <span>{this.props.totalAmount} FCFA</span>
        </div>

        return isFirstCreate ? (
            <div className="component-holder">
                <div className="no-expense-view">
                    <span>No Expenses Here</span>
                    <button onClick={this.createExpenseLabel}>Create Expense</button>

                </div>
                {totalAmtJSX}
            </div>
        ) : showExpenseForm ?
            (
                < ExpenseForm updateList={this.submitExpense} />
            ) : (
                <div className="component-holder">
                    <div id="add-expense-button">
                        <button onClick={this.createExpenseLabel}>Add Expense</button>
                    </div>
                    <div className="cards">

                        {expenseList.map(expense => <ExpenseCards key={expense.label} expense={expense} checkedFunc={this.handleCheckedExpense}></ExpenseCards>)}

                    </div>
                    {totalAmtJSX}
                </div>
            )
    }
}

export default Expenses
