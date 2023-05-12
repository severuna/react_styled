import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import { InputSubmit } from '../styled-components/InputSubmit';
import { InputField } from '../styled-components/InputField';
import padlock from '../img/padlock.svg';

export const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log(e)
}

const Login = () => {
    return (
        <FormCase onSubmit={handleSubmit}>
            <Icon src={padlock} alt='padlock' />
            <Title>Sign in</Title>
            <InputField type="email" placeholder='Email Address' required="required" />
            <InputField type="password" placeholder='Password' required="required" />
            <InputSubmit type='submit' value='Sign in' />
        </FormCase>
    );
};

export default Login;