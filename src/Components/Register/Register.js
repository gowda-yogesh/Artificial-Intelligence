import React from 'react';


class Register extends React.Component {

    constructor({ onRouteChange, updateUser }) {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            id: ""
        }
    }

    onEnteringName = (event) => {

        this.setState({ name: event.target.value });
        console.log(event.target.value);

    }

    onEnteringemail = (event) => {

        this.setState({ email: event.target.value });
        console.log(event.target.value);

    }
    onEnteringPassword = (event) => {

        this.setState({ password: event.target.value });
        console.log(event.target.value);

    }

    onRegister = () => {

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password  //Number(this.state.password)
        }

        fetch("https://obscure-shore-32374.herokuapp.com/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                console.log("Fetch complete , login Complete ")
                // Login to home page if res = true 
                if (res) {
                    this.props.updateUser(res);
                    this.props.onRouteChange("home");
                }

            })
            .catch(err => { console.log(err) });

        // this.props.onRouteChange("home");
    }

    render() {
        return (
            <div >
                <article className="br3 ba dark-gray b--black-10 mv0 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        {/* <form className="measure "> */}
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                                <input
                                    onChange={this.onEnteringName}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEnteringemail}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onEnteringPassword}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password" />
                            </div>
                            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onRegister}
                                // onClick={() => onRouteChange("home")}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                                type="submit"
                                value="register" />
                        </div>

                        {/* </form> */}
                    </main>
                </article>
            </div>
        );
    }
}

export default Register;
