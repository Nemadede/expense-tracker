import React, { Component } from 'react'

class TotalAmount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            totalAmount: '',
        }
    }

    getTotalAmount = (e) => {
        this.setState({
            totalAmount: e.target.value
        })
    }

    submitAmount = (e) => {
        e.preventDefault();

        this.props.submitAmount(this.state.totalAmount)
    }

    render() {
        const { totalAmount } = this.state

        return (
            <div className="component-holder">
                {/* <h1>Start with Xpense Tracker</h1> */}

                <form onSubmit={this.submitAmount} className="form ">
                    <h1>Total Amount to Track</h1>
                    <div className="form-input">
                        <label>Total amount: </label>
                        <input name="totalAmount" value={totalAmount} onChange={this.getTotalAmount} />
                    </div>
                    <div>

                        <button type="submit">Submit</button>
                    </div>
                </form>


            </div>
        )
    }
}

export default TotalAmount
