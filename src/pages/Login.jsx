import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import { InputSubmit } from '../styled-components/InputSubmit';
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
            <InputSubmit type='submit' value='Sign in' />
        </FormCase>
    );
};

export default Login;