import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import padlock from '../img/padlock.svg';

const Login = () => {
    return (
        <FormCase>
            <Icon src={padlock} alt='padlock' />
            <Title>Login</Title>
        </FormCase>
    );
};

export default Login;