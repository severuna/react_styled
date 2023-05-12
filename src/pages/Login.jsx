import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import padlock from '../img/padlock.svg';

const Login = () => {
    return (
        <FormCase>
            <Icon src={padlock} alt='padlock' />
            <h1 className='title'>Login</h1>
        </FormCase>
    );
};

export default Login;