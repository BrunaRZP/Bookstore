import styled from "styled-components";
import Link from '../../Link';
import { colors } from "../../../styles/themes";

export const Input = styled.input`
border-right: none;
outline: none;
width: 17.375rem;
height: 2.5rem;
::placeholder {
    padding-left: 5%;
}
/* &:focus {
    box-shadow: 0px 2px 4px #000;
} */
`;

export const Button = styled.button`
border-left: none;
width: 7.5rem;
height: 2.875rem;
background-color: #fff;
/* font-weight: 800; */
cursor: pointer;
&:hover{
    transition: 0.3s;
    box-shadow: 0px 2px 4px #000;
}
`;