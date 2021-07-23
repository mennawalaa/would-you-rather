import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar';
import { saveQuestionAction, addUnansweredQ } from '../actions/newquestion'
import { Redirect } from 'react-router-dom';

class NewQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optionone: " ",
            optiontwo: " ",
            backtoHome: false
        }
    }

    handleChange1 = (event) => {
        console.log("change", event);
        this.setState({ optionone: event.target.value })
    }
    handleChange2 = (event) => {

        this.setState({ optiontwo: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ backtoHome: true })

        if (this.props.saveQuestionAction(this.state.optionone, this.state.optiontwo, this.props.loggeduser)) {
            //    console.log("back to home bage");
            this.setState({ backtoHome: true })
        }

    }

    render() {


        if (this.state.backtoHome === true) {
            console.log("the user id  back to home");

            return <Redirect
                to={{
                    pathname: `/Home/${this.props.loggeduser.id}`,
                    state: { from: this.state.backtoHome }
                }}
            />
        }
        return (
            <div>

                <p className='center'>new question</p>
                <div className='card'>
                    <p className='active'>would you rather </p>
                    <br />
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            first option :
                            <br />
                            <input
                                type="text"
                                placeholder="optionOne"
                                onChange={this.handleChange1}

                            />
                        </label>
                        <br />
                        <label>
                            second option :
                            <br />
                            <input
                                type="text"
                                placeholder="optionTwo"
                                onChange={this.handleChange2}

                            />
                        </label>
                        <br />
                        <button>submit</button>
                    </form>

                </div>
                <NavBar />
            </div>
        )
    }
}

const mapStateToProps = (state) => {


    return {

        loggeduser: state.login.loggeduser,

    }
}

const mapDispatchToProps = {
    saveQuestionAction,
    addUnansweredQ,
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQ)