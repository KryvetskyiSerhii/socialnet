import {reduxForm, Field} from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators'
import {connect} from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Navigate } from "react-router-dom";
import classes from '../Common/FormsControls/FormControls.module.css'

const maxLength20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field  placeholder={'Email'} name={'email'} component={Input} validate={[requiredField, maxLength20]}/>
                </div>
                <div>
                    <Field  placeholder={'Password'} name={'password'} component={Input} validate={[requiredField, maxLength20]} type='password' />
                </div>
                <div>
                    <Field type='checkbox' component={Input} name={'rememberMe'} />Remember me
                </div>
                {props.error && <div className={classes.form__summary}>
                    {props.error}
                </div>}
                <div>
                    <button>Submit</button>
                </div>

            </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'Login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Navigate to={'profile'} />
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.data.isAuth
})

export default connect(mapStateToProps, {login}) (Login)