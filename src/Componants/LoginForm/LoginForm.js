import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './style.css'
import { required, email } from 'redux-form-validators'
import renderInput from '../Application/inputfield/inputfield'
import renderLabel from '../Application/label/label'

const results = (values) => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

let pwd_visibility = () => {
    let visible_icon = document.getElementById("pwd_visible").className
    if (visible_icon === "fa fa-fw fa-eye-slash") {
        document.getElementById("pwd_visible").className = "fa fa-fw fa-eye"
        document.getElementById("pwd_field").type = "text"
    }
    else if (visible_icon === "fa fa-fw fa-eye") {
        document.getElementById("pwd_visible").className = "fa fa-fw fa-eye-slash"
        document.getElementById("pwd_field").type = "password"
    }

}

let LoginForm = ({ handleSubmit, submitting }) =>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <div className="card text-center">
                    <div className="card-header">
                        Login Here
                        <span style={{paddingLeft:"1%"}} className="fa fa-sign-in"></span>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(results)}>
                            <div className="row align-items-start">
                                <div className="col-6">
                                    <Field
                                        label={'Email'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">
                                    <Field
                                        name="email"
                                        component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            email({ message: "Not a valid email" })
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-6">
                                    <Field
                                        label={'Password'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">

                                    <Field
                                        name="password"
                                        id="pwd_field"
                                        field_type={'password'}
                                        component={renderInput}
                                        validate={required({ message: "This field is required" })}

                                    />

                                </div>
                                <div className="align-items-end">
                                    <span id="pwd_visible" value="abc" style={{ marginTop: "90%" }} className="fa fa-fw fa-eye-slash" onClick={pwd_visibility}></span>
                                </div>


                            </div>
                            <button className="btn btn-primary" type="submit"  disabled={submitting}>Login</button>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        Not a member? <a href="/register">Register here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


LoginForm = reduxForm({
    form: "loginForm",
    destroyOnUnmount: false
})(LoginForm)
export default LoginForm