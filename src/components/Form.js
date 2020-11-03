import React, { useState } from 'react';

const Form = (props) => {
    // One way to establish State
    // const [firstName, setFName] = useState("");
    // const [lastName, setLName] = useState("");
    // const [email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");
    // const [confirmPW, setConfPW] = useState("");

    // Another way to establish state using a key:value; all form inputs in one object
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPW: ""
    });

    const onChangeHandler = (e) => {
        setForm({
            // spread form adds everything that was already in the form
            ...form,
            // as well as what was changed
            [e.target.name]: e.target.value
        });
    }

    const nameValidation = (nameInput) => {
        if(nameInput.length >= 1)
            return true;
        return false;
    }

    const emailValidation = (emailInput) => {
        if(emailInput.length >= 7)
            return true;
        return false;
    }

    const PWValidation = (passwordInput) => {
        if(passwordInput.length >= 8)
            return true;
        return false;
    }

    const allValid = (formInput) => {
        return nameValidation(formInput.firstName)
        && nameValidation(formInput.lastName)
        && emailValidation(formInput.email)
        && PWValidation(formInput.password)
        && PWValidation(formInput.confPW);
    }

    return(
        <div>
            <h1>Please complete the form below</h1>

            <form>
                {/* </form> className="col-5"> */}
                <div className="form-group">
                    <label>First Name:</label>
                    {/* <input className="form-control" name="firstName" onChange={(e) => setFName(e.target.value)}></input> */}
                    <input className="form-control" name="firstName" onChange={onChangeHandler}></input>
                    {/* nameValidation, if the first part is false and the second part is true */}
                    {!nameValidation(form.firstName) && <p className="alert alert-danger" small>Must enter at least one character.</p>}

                </div>
                <div className="form-group">
                <label>Last Name:</label>
                    {/* <input className="form-control" name="lastName" onChange={(e) => setLName(e.target.value)}></input> */}
                    <input className="form-control" name="lastName" onChange={onChangeHandler}></input>
                    {/* nameValidation using ternary operator */}
                    {nameValidation(form.lastName) ? "" : <p className="alert alert-danger">Must enter at least one character</p>}
                </div>

                <div className="form-group">
                <label>Email:</label>
                    {/* <input className="form-control" name="email" onChange={(e) => setEmail(e.target.value)}></input> */}
                    <input className="form-control" name="email" onChange={onChangeHandler}></input>
                    {!emailValidation(form.email) && <p className="alert alert-danger">Invalid input</p>}
                </div>

                <div className="form-group">
                <label>Password:</label>
                    {/* <input className="form-control" name="password" onChange={(e) => setPassword(e.target.value)} v></input> */}
                    <input type="password" className="form-control" name="password" onChange={onChangeHandler}></input>
                    {!PWValidation(form.password) && <p className="alert alert-danger">Password must be at least eight characters</p>}
                </div>

                <div className="form-group">
                <label>Confirm Password:</label>
                    {/* <input className="form-control" name="confPW" onChange={(e) => setConfPW(e.target.value)} v></input> */}
                    <input type="password" className="form-control" name="confPW" onChange={onChangeHandler}></input>
                    {!PWValidation(form.confPW) && <p className="alert alert-danger">Must match password above</p>}
                </div>

                {allValid(form) ? <input type="submit" className="btn btn-primary"/> : <input type="submit" className="btn btn-danger" disabled/>}
                {/* <input type="submit" className="btn btn-primary" disabled/> */}
            </form>

            <div>
                <h2>Live Form State</h2>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password:  {form.password} </p>
                <p>Confirm Password: {form.confPW}</p>
            </div>
        </div>
    )
}

export default Form;