import styled from "styled-components";
import Link from "../Link";
import { colors, fonts } from "../../styles/themes";

export const Footer1 = styled.footer`
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  background-color: ${colors.TopDown};
  padding: 5% 0%;
  text-align: center;
`;

export const Nav = styled.nav`
display: flex;
justify-content: space-evenly;
`;

export const H1 = styled.h1`
font-size: 2.25rem;
`;

export const P = styled.p`
font-size: 0.875rem;
margin: 7% 0%;
width: 22.5rem;
`;

export const Ul = styled.ul`
font-size: ${fonts.footer};
font-weight: 800;
list-style: none;
margin-top: 28%;
`;

export const LiDiv = styled.div`
margin-top: 1.438rem; 
`;

export const Li = styled.li`
font-size: ${fonts.footer};
font-weight: 200;
margin-top: 11px; 
`;

export const FooterLink = styled(Link)`
text-decoration: none;
`;
