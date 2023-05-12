import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import padlock from '../img/padlock.svg';

const Register = () => {
    return (
        <FormCase>
            <Icon src={padlock} alt='padlock' />
            <Title>Register</Title>
        </FormCase>
    );
};

export default Register;