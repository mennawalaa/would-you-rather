import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
class Pleaselogin extends Component {
    render() {

        alert("please login");
        console.log("props in please login", this.props);
        console.log("adress bar content", window.location.href);
        return (
            <div>

                <Redirect to={{
                    pathname: '/',
                    state: { frompleaselogin: this.props.location }
                }} />
            </div>

        )
    }
}
export default Pleaselogin;