import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './style.css'
import { required, email } from 'redux-form-validators'
import renderInput from '../Application/inputfield/inputfield'
import renderLabel from '../Application/label/label'

let LoginForm = ({ handleSubmit, submitting }) =>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <div className="card text-center">
                    <div className="card-header">
                        Login Here
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row align-items-start">
                            <div className="col-6">
                                <Field
                                    label={'Email'}
                                    component={renderLabel}
                                />
                            </div>
                            <div className="col-6">
                                <Field
                                    name="email"
                                    component={renderInput}
                                    validate={[
                                        required({message:"This field is required"}),
                                        email({message:"Not a valid email"})
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
                            <div className="col-6">
                                <Field
                                    name="password"
                                    field_type={'password'}
                                    component={renderInput}
                                    validate={required({message:"This field is required"})}

                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={submitting}>Login</button>
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