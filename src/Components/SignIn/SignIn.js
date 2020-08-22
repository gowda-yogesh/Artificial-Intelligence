import React from 'react';


class SignIn extends React.Component {
    constructor({ onRouteChange, updateUser }) {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    onEnteringName = (event) => {

        this.setState({ email: event.target.value });
        console.log(event.target.value);

    }

    onEnteringPassword = (event) => {

        this.setState({ password: event.target.value });
        console.log(event.target.value);

    }

    onSignin = () => {

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        fetch("https://obscure-shore-32374.herokuapp.com/signin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(user)
        })
            .then(user => user.json())
            .then(user => {
                console.log(user)
                console.log("Fetch complete , login Complete ")
                console.log("user info is - ", user);
                // Login to home page if user .id is prespresent else its a false so else execution 
                if (user.id) {
                    this.props.updateUser(user);
                    this.props.onRouteChange("home");
                } else {
                    console.log("sorry sorry sorry");
                }

            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <div >
                <article className="br3 ba dark-gray b--black-10 mv0 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        {/* <form className="measure "> */}
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEnteringName}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    email="email-address"
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onEnteringPassword}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    email="password"
                                    id="password" />
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSignin}
                                // onClick={() => onRouteChange("home")}
                                className=" center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <button
                                onClick={() => this.props.onRouteChange("register")}
                                className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                                Register
                                </button>

                        </div>
                        {/* </form> */}
                    </main>
                </article>
            </div >
        )
    }
}

export default SignIn;
