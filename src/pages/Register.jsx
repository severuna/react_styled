import React from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import { InputSubmit } from '../styled-components/InputSubmit';
import { NameContainer } from '../styled-components/NameContainer';
import { InputField } from '../styled-components/InputField';
import padlock from '../img/padlock.svg';
import { handleSubmit } from './Login';
import { Label } from '../styled-components/Label';
import { InputCheckbox } from '../styled-components/InputCheckbox';

const Register = () => {
    return (
        <FormCase onSubmit={handleSubmit}>
            <Icon src={padlock} alt='padlock' />
            <Title>Sign up</Title>
            <NameContainer>
                <InputField type="text" placeholder='First Name' required="required" />
                <InputField type="text" placeholder='Last Name' required="required" />
            </NameContainer>
            <InputField type="email" placeholder='Email Address' required="required" />
            <InputField type="password" placeholder='Password' required="required" />
            <Label>
                <InputCheckbox type='checkbox' />
                <span>I want to receive inspiration, marketing promotions and updates via email</span>
            </Label>
            <InputSubmit type='submit' value='Sign up' /> 
        </FormCase>
    );
};

export default Register;