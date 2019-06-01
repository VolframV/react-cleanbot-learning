import React, { Component } from 'react';
import AccountItem from './AccountItem';

class Accounts extends Component {
    constructor() {
        super();
        this.state = {
            accounts: [],
            cleanings: []
        }
    }

    getCleanings() {
        const cleanings = [];

        for (let i = 0; i < 100; i++) {
            cleanings.push({
                id: i,
                account: Math.floor(Math.random() * 10),
                robot: Math.floor(Math.random() * 100),
                area: Math.floor(Math.random() * 100),
                time: Math.floor(Math.random() * 1000)
            });
        }
        this.setState({ cleanings: cleanings });

    }
    componentWillMount() {
        this.getCleanings();
    }

    render() {
        let accountItem;
        if (this.props.accounts) {
            accountItem = this.props.accounts.map(account => {
                return (
                    <AccountItem key={account.id} account={account} cleanings={this.state.cleanings} />
                )
            });
        }
        return (
            <div className="Accounts container">
                <div class="jumbotron">
                    <h1 class="display-4 text-center">ACCOUNT LIST </h1>
                    <hr/>
                    <h3 class="text-center">List of all the accounts with details about the cleanbots and their activity.</h3>
                </div>

                <div className="card">
                    {accountItem}
                </div>

                <div className="accordion" id={"accordion"}>
                </div>
            </div>


        );
    }
}


export default Accounts;
