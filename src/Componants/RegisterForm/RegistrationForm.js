import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './style.css'
import { required, format, confirmation, email, length } from 'redux-form-validators'
import options from './options'
import renderInput from '../Application/inputfield/inputfield'
import renderSelect from '../Application/dropdown/dropdown'

const results = (values) => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}
const renderLabel = ({ label }) =>
    <label>{label}</label>


let RegistrationForm = ({ handleSubmit, submitting }) =>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <div class="card text-center">
                    <div class="card-header">
                        Registration Form
                    </div>
                    <form onSubmit={handleSubmit(results)}>
                        <div class="card-body">

                            <div className="row align-items-start">
                                <div className="col-6">
                                    <Field
                                        label={'First Name'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-6">
                                    <Field
                                        name="first_name"
                                        component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            format({ with: /^[a-zA-z ]*$/i, message: "Invalid Name" }),
                                            length({ min: 2 })
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-6">
                                    <Field
                                        label={'Last name'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-6">
                                    <Field
                                        name="last_name"
                                        component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            format({ with: /^[a-zA-z ]*$/i, message: "Invalid Name" }),
                                            length({ min: 2 })
                                        ]}
                                    />
                                </div>
                            </div>
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
                                            required({ message: "This field is required" }),
                                            email({ message: "Invalid Email format" })
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-6">
                                    <Field
                                        label={'District'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-6">
                                    <Field
                                        name="option"
                                        component={renderSelect}
                                        validate={required({ message: "This field is required" })} >
                                        <option />
                                        {options.map(options =>
                                            <option key={options} value={options}>
                                                {options}
                                            </option>
                                        )}
                                    </Field>
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
                                        field_type="password"
                                        name="password"
                                        field_ component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            length({ min: 6, max: 10, message: "Password should between 6-10 chars" })
                                            ]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-6">
                                    <Field
                                        label={'Confirm Password'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-6">
                                    <Field
                                        field_type="password"
                                        name="conf_password"
                                        component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            confirmation({ field: "password", message: "Passwords do not match" })
                                        ]}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>

                        </div>
                    </form>
                    <div class="card-footer text-muted">
                        Already a member? <a href="/login">Login here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

RegistrationForm = reduxForm({
    form: "registration",
    destroyOnUnmount: false
})(RegistrationForm)
export default RegistrationForm