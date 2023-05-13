import React, { useState } from 'react';
import { FormCase } from '../styled-components/FormCase';
import { Icon } from '../styled-components/Icon';
import { Title } from '../styled-components/Title';
import { InputSubmit } from '../styled-components/InputSubmit';
import { InputField } from '../styled-components/InputField';
import padlock from '../img/padlock.svg';
import { Label } from '../styled-components/Label';
import { InputCheckbox } from '../styled-components/InputCheckbox';
import { LinkStyled, LinkLeft } from '../styled-components/LinkStyled';
import { NameContainer } from '../styled-components/NameContainer';

const Login = () => {

    const [ login, setLogin ] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin(values => ({...values, [name]: value}))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(`Login:`);
        console.log(login);
    }

    return (
        <FormCase onSubmit={handleSubmit}>
            <Icon src={padlock} alt='padlock' />
            <Title>Sign in</Title>
            <InputField name="email" value={login.email || ""} onChange={handleChange} type="email" placeholder='Email Address' required="required" />
            <InputField name="password" value={login.password || ""} onChange={handleChange} type="password" placeholder='Password' required="required" />
            <Label>
                <InputCheckbox name="checkbox" value={login.checkbox || "off"} onChange={handleChange} type='checkbox' />
                <span>Remember me</span>
            </Label>
            <InputSubmit type='submit' value='Sign in' />
            <NameContainer>
                <LinkLeft to='#'>Forgot password?</LinkLeft>
                <LinkStyled to='/react_styled/register'>Don't have an account? Sign up</LinkStyled>
            </NameContainer>
        </FormCase>
    );
};

export default Login;