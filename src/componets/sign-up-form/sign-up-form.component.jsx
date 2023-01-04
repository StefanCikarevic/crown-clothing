import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.style.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formFields.password !== formFields.confirmPassword) return;

        try {
            const {user} = await createAuthUserWithEmailAndPassword(formFields.email, formFields.password)
            await createUserDocumentFromAuth(user, {displayName: formFields.displayName});
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display name' type='text' required name='displayName' value={formFields.displayName}
                           onChange={handleChange}/>
                <FormInput label='Email' type='email' required name='email' value={formFields.email}
                           onChange={handleChange}/>
                <FormInput label='Password' type='password' required name='password' value={formFields.password}
                           onChange={handleChange}/>
                <FormInput label='Confirm Password' type='password' required name='confirmPassword'
                           value={formFields.confirmPassword}
                           onChange={handleChange}/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;
