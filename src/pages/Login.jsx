import React from 'react';
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
            <Label>
                <InputCheckbox type='checkbox' />
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