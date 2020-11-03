import React, { useState } from 'react';

const Form = (props) => {
    // One way to establish State
    // const [firstName, setFName] = useState("");
    // const [lastName, setLName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPW, setConfPW] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    // Another way to establish state using a key:value; all form inputs in one object
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPW: "",
        HasBeenSubmitted: false
    });

    const createUser = (e) => {
        e.preventDefault();
        const newUser = form;
        console.log("Welcome", newUser);
        setForm({
            // spread form adds everything that was already in the form
            ...form,
            // as well as what was changed
            HasBeenSubmitted: true
        });
    };

    const formMessage = () => {
        if( form.HasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const onChangeHandler = (e) => {
        setForm({
            // spread form adds everything that was already in the form
            ...form,
            // as well as what was changed
            [e.target.name]: e.target.value
        });
    };

    const nameValidation = (nameInput) => {
        if(nameInput.length >= 2)
            return true;
        return false;
    };

    const emailValidation = (emailInput) => {
        if(emailInput.length >= 5)
            return true;
        return false;
    };

    const PWValidation = (passwordInput) => {
        if(passwordInput.length >= 8)
            return true;
        return false;
    };

    const allValid = (formInput) => {
        return nameValidation(formInput.firstName)
        && nameValidation(formInput.lastName)
        && emailValidation(formInput.email)
        && PWValidation(formInput.password)
        && PWValidation(formInput.confPW);
    };

    return(
        <div className="container">

            <form onSubmit={ createUser }>
                <h3>{ formMessage() }</h3>
                    <div className="form-group">
                    <label>First Name:</label>
                    {/* <input className="form-control" name="firstName" onChange={(e) => setFName(e.target.value)}></input> */}
                    <input className="form-control" name="firstName" onChange={onChangeHandler}></input>
                    {/* nameValidation, if the first part is false and the second part is true */}
                    <small id="passwordHelpBlock" >{!nameValidation(form.firstName) && <p className="alert alert-danger" small>Field must be at least two characters.</p>}</small>

                </div>
                <div className="form-group">
                <label>Last Name:</label>
                    {/* <input className="form-control" name="lastName" onChange={(e) => setLName(e.target.value)}></input> */}
                    <input className="form-control" name="lastName" onChange={onChangeHandler}></input>
                    {/* nameValidation using ternary operator */}
                    <small id="passwordHelpBlock">{nameValidation(form.lastName) ? "" : <p className="alert alert-danger">Field must be at least two characters.</p>}</small>
                </div>
                <div className="form-group">
                <label>Email:</label>
                    {/* <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)}></input> */}
                    <input className="form-control" name="email" onChange={onChangeHandler}></input>
                    <small id="passwordHelpBlock">{!emailValidation(form.email) && <p className="alert alert-danger">Field must be at least five characters.</p>}</small>
                </div>

                <div className="form-group">
                <label>Password:</label>
                    {/* <input className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} v></input> */}
                    <input type="password" className="form-control" name="password" onChange={onChangeHandler}></input>
                    <small id="passwordHelpBlock">{!PWValidation(form.password) && <p className="alert alert-danger">Password must be at least eight characters</p>}</small>
                </div>

                <div className="form-group">
                <label>Confirm Password:</label>
                    {/* <input className="form-control" name="confPW" onChange={(e) => setConfPW(e.target.value)} v></input> */}
                    <input type="password" className="form-control" name="confPW" onChange={onChangeHandler}></input>
                    <small id="passwordHelpBlock">{!PWValidation(form.confPW) && <p className="alert alert-danger">Invalid entry</p>}</small>
                </div>

                {allValid(form) ? <input type="submit" className="btn btn-primary"/> : <input type="submit" className="btn btn-danger" disabled/>}
                {/* <input type="submit" className="btn btn-primary" disabled/> */}
            </form>

            {/* <div>
                <h2>Live Form State</h2>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password} </p>
                <p>Confirm Password: {form.confPW}</p>
            </div> */}
        </div>
    );
}

export default Form;