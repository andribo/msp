import React, { Component } from 'react';
import RTM from 'satori-rtm-sdk';

const endpoint = 'wss://open-data.api.satori.com';
const appKey = '80F69EC9e2A81E7b130be1CfFacF4854';
const channel = 'test';

class MainPage extends Component {
    state = { message: '' };

    componentWillMount() {
        this.client = new RTM(endpoint, appKey);
        this.client.on('enter-connected', () => {
            console.log('Connected to Satori RTM!');
        })

        this.subscription = this.client.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {
            filter: "select count(*) as 'Number of Tweets',CASE when possibly_sensitive=true then 'sensitive tweet' when possibly_sensitive=false then 'None sensitive tweets' else 'Not categorized' end as 'sensitivity flag' from `Twitter-statuses-sample` group by possibly_sensitive"
        });

        this.subscription.on('rtm/subscription/data', (pdu) => {
            pdu.body.messages.forEach((message) => {
                this.setState({ message: JSON.stringify(message) });
            });
        });
        this.client.start();
    }

    componentWillUnmount() {
        this.client.stop();
        this.client.unsubscribe(channel);
    }

    render() {
        const { message } = this.state;
        return (
            <div>{message}</div>
        );
    }
}

export default MainPage;
