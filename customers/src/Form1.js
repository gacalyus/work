import React, { Component } from 'react'

export default class Form1 extends Component {
    state = { customerName: "" }
    onChangeHandler = (event) => {
        this.setState({ customerName: event.target })
    }
    render() {
        return (
            <div>
                <form>
                    <title>Customer Name</title>
                    <input onChange={this.onChangeHandler} type="text"></input>
                    <title>Customer Name is {this.state.customerName}</title>
                </form>
            </div>
        )
    }
}
