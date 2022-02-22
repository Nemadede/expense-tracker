import React, { useState } from 'react'

function ExpenseCards({ expense, checkedFunc }) {



    const initialState = "unchecked";


    let [className, setClassName] = useState(initialState)

    const eventHandler = (e) => {
        if (e.target.checked) {
            setClassName("checked")
            checkedFunc(expense)
        }
        else
            return
    }



    console.log(className);

    return (

        <React.Fragment>
            <div className={`card ${className}`}>
                <h3>{expense.label}</h3>

                <div>
                    <span className="amt">{expense.amount} CFA</span>
                    <nav className="card-period">
                        <span className="period">{expense.period}</span>
                        <span><input type="checkbox" onChange={eventHandler} /></span>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExpenseCards

