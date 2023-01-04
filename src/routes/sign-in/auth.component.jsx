
import SignUpForm from "../../componets/sign-up-form/sign-up-form.component";
import SignInForm from "../../componets/sign-in-form/sign-in-form.component";
import './auth.style.scss'

const Authentication = () => {


    return (  <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>)
}

export default Authentication;
