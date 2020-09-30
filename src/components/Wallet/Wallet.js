import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../../actions/balance/balance';

export class Wallet extends Component {
    constructor() {
        super();

        this.state = {
            balance: undefined
        };
    }

    onUpdateBalance = event => {
        this.setState({ balance: parseInt(event.target.value) });
    };

    onDeposit = () => this.props.deposit(this.state.balance);

    onWithdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
                <input className='input-wallet' onChange={this.onUpdateBalance} />
                <button className='btn-deposit' onClick={this.onDeposit}>Deposit</button>
                <button className='btn-withdraw' onClick={this.onWithdraw}>Withdraw</button>
            </div>
        )
    }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);