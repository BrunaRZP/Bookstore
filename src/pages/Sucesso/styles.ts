import styled from "styled-components";
import Link from '../../components/Link';
import { colors } from "../../styles/themes";

export const DivSucesso = styled.div`
text-align: center;
`;

export const Back = styled.a`
color: red;
`;

export const Ul = styled.ul`
width: 25%;
margin: 5%;
background-color: ${colors.another};
li {
    div {
            h1 {
                list-style: none;
            }
    }
}
`;