import React, {Component} from 'react';

import fire from '../config/fire';
 
class Home extends Component {
    constructor(props){
       super(props);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return(
            <div>
                You are logged in 
            <button onClick={this.logout}>Logout</button>
            </div>

        );
    }
}

export default Home