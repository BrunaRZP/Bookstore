import styled from "styled-components";
import Link from '../components/Link';
// import { colors } from "../../styles/themes";

export const Header1 = styled.header`
  margin: 1% 5%;
  padding: 20px;
  border-bottom: solid 1px #f1f1f1;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  margin: 0.5% 2%;

  &:first-child {
    font-weight: 800;
  }
`;

export const SearchBarDiv = styled.div`
  margin-left: 2%;
`;

export const StyledIconWrapper = styled.div`
  margin-left: auto;
  margin-top: 5px; 
  margin-right: 40px;
  a {
    text-decoration: none;
  }
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
  margin-top: -29px; 
  vertical-align: top;
  margin-right: 40px;
`;

export const CartItemCount = styled.span<{ itemCount: number }>`
  background-color: orange;
  color: #fff;
  border-radius: 50%;
  padding: ${({ itemCount }) => (itemCount > 9 ? '4px 6px' : '4px 9px')};
  margin-left: -80px;
  margin-top: 30px;
`;


export const P = styled.p`
  margin-left: 1%;
`;
