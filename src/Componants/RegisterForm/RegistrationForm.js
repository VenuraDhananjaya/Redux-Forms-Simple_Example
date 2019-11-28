import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './style.css'
import { required, format, confirmation, email, length } from 'redux-form-validators'
import options from './options'
import renderInput from '../Application/inputfield/inputfield'
import renderSelect from '../Application/dropdown/dropdown'
import renderLabel from '../Application/label/label'

const results = (values) => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
}

let pwd_visibility = () => {
    let visible_icon = document.getElementById("pwd_visible").className
    let normal_eye = "fa fa-eye"
    let eye_slash = "fa fa-eye-slash"
    if (visible_icon === eye_slash) {
        document.getElementById("pwd_visible").className = normal_eye
        document.getElementById("registration_pwd").type = "text"
    }
    else if (visible_icon === normal_eye) {
        document.getElementById("pwd_visible").className = eye_slash
        document.getElementById("registration_pwd").type = "password"
    }

}

let conf_pwd_visibility = () => {
    let visible_icon = document.getElementById("conf_pwd_visible").className
    let normal_eye = "fa fa-eye"
    let eye_slash = "fa fa-eye-slash"
    if (visible_icon === eye_slash) {
        document.getElementById("conf_pwd_visible").className = normal_eye
        document.getElementById("registration_conf_pwd").type = "text"
    }
    else if (visible_icon === normal_eye) {
        document.getElementById("conf_pwd_visible").className = eye_slash
        document.getElementById("registration_conf_pwd").type = "password"
    }

}


let RegistrationForm = ({ handleSubmit, submitting }) =>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <div className="card text-center">
                    <div className="card-header ">
                        Registration Form
                    </div>
                    <form onSubmit={handleSubmit(results)}>
                        <div className="card-body">

                            <div className="row align-items-start">
                                <div className="col-5">
                                    <Field
                                        label={'First Name'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">
                                    <Field
                                        name="first_name"
                                        component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            format({ with: /^[a-zA-z ]*$/i, message: "Invalid Name" }),
                                            length({ min: 3, message: "Invalid Name" })
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-5">
                                    <Field
                                        label={'Last name'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">
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
                                <div className="col-5">
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
                                            email({ message: "Invalid Email format" })
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-5">
                                    <Field
                                        label={'District'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">
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
                                <div className="col-5">
                                    <Field
                                        label={'Password'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">
                                    <Field
                                        id="registration_pwd"
                                        field_type="password"
                                        name="password"
                                        field_ component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            length({ min: 6, max: 10, message: "Password should between 6-10 chars" })
                                        ]}
                                    />
                                </div>
                                <div className="align-items-end">
                                    <span id="pwd_visible" style={{ marginTop: "90%" }} className="fa fa-eye-slash" onClick={pwd_visibility} ></span>
                                </div>
                            </div>
                            <div className="row align-items-start">
                                <div className="col-5">
                                    <Field
                                        label={'Confirm Password'}
                                        component={renderLabel}
                                    />
                                </div>
                                <div className="col-5">
                                    <Field
                                        id="registration_conf_pwd"
                                        field_type="password"
                                        name="conf_password"
                                        component={renderInput}
                                        validate={[
                                            required({ message: "This field is required" }),
                                            confirmation({ field: "password", message: "Passwords do not match" })
                                        ]}
                                    />
                                </div>
                                <div className="align-items-end">
                                    <span id="conf_pwd_visible" style={{ marginTop: "90%" }} className="fa fa-eye-slash" onClick={conf_pwd_visibility}></span>
                                </div>
                            </div>

                            <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>

                        </div>
                    </form>
                    <div className="card-footer text-muted">
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