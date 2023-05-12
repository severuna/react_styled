import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinkStyled = styled(Link)`
    color: mediumturquoise;
    font-size: 2rem;
    font-weight: 400;
    width: 100%;
    text-align: right;
    text-decoration: none;
`;

export const LinkLeft = styled(LinkStyled)`
    text-align: left;
`;
