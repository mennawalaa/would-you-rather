import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { saveQuestionAction } from '../actions/newquestion'
import { Redirect } from 'react-router-dom';

class NewQ extends Component {
    state = {
        optionone: " ",
        optiontwo: " ",
        backtoHome: false
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
            console.log("back to home bage");
            this.setState({ backtoHome: true })
        }
        // console.log("back to home bage");
        //  this.setState({ backtoHome: true })
        //   <Redirect to={`/Home/${this.props.loggeduser.id}`} />
    }
    componentDidMount() {
        this.setState({ backtoHome: false });
    }
    render() {
        const backtohome = () => {
            return (
                <Redirect to={`/Home/${this.props.loggeduser.id}`} />
            )
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
                    {(this.state.backtoHome === true) && (backtohome())}
                </div>
                <NavBar />
            </div>
        )
    }
}
const mapStateToProps = (state) => {


    return {

        loggeduser: state.login.loggeduser,
        //   images: Object.keys(state.login.users.avatarURL)
    }
}

const mapDispatchToProps = {
    saveQuestionAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQ)