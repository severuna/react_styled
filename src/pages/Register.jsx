import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import { InputSubmit } from '../styled-components/InputSubmit';
import padlock from '../img/padlock.svg';
import { handleSubmit } from './Login';

const Register = () => {
    return (
        <FormCase onSubmit={handleSubmit}>
            <Icon src={padlock} alt='padlock' />
            <Title>Sign up</Title>
            <InputSubmit type='submit' value='Sign up' /> 
        </FormCase>
    );
};

export default Register;