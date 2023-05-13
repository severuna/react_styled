import React, { useState } from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import { InputSubmit } from '../styled-components/InputSubmit';
import { NameContainer } from '../styled-components/NameContainer';
import { InputField } from '../styled-components/InputField';
import padlock from '../img/padlock.svg';
import { Label } from '../styled-components/Label';
import { InputCheckbox } from '../styled-components/InputCheckbox';
import { LinkStyled } from '../styled-components/LinkStyled';

const Register = () => {

    const [ register, setRegister ] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegister(values => ({...values, [name]: value}))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(`Register:`);
        console.log(register);
    }

    return (
        <FormCase onSubmit={handleSubmit}>
            <Icon src={padlock} alt='padlock' />
            <Title>Sign up</Title>
            <NameContainer>
                <InputField name="name" value={register.name || ""} onChange={handleChange} type="text" placeholder='First Name' required="required" />
                <InputField name="lastName" value={register.lastName || ""} onChange={handleChange} type="text" placeholder='Last Name' required="required" />
            </NameContainer>
            <InputField name="email" value={register.email || ""} onChange={handleChange} type="email" placeholder='Email Address' required="required" />
            <InputField name="password" value={register.password || ""} onChange={handleChange} type="password" placeholder='Password' required="required" />
            <Label>
                <InputCheckbox name="checkbox" value={register.checkbox || "off"} onChange={handleChange} type='checkbox' />
                <span>I want to receive inspiration, marketing promotions and updates via email</span>
            </Label>
            <InputSubmit type='submit' value='Sign up' /> 
            <LinkStyled to='/react_styled/' >Already have an account? Sign in</LinkStyled>
        </FormCase>
    );
};

export default Register;