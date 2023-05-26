import styled from "styled-components";
import Link from '../Link';
import { colors } from "../../styles/themes";

export const Main = styled.main`
margin: 4% 1%;
`;

export const EmptyCart = styled.div`
text-align: center;
padding: 5% 0%;
h3 {
  font-size: 2rem;
  margin-bottom: 4%;
}
`;

export const DivEmpty = styled.div`
margin-bottom: 3%;
`;

export const Shopping = styled(Link)`
text-decoration: none;
border: none;
font-weight: 500;
`;

export const ButtonEmpty = styled.button`
padding: 10px 60px;
margin-bottom: 10%;
border: none;
background-color: orange;
color: #fff;
font-size: 1.6rem;
  &:hover {
    transition: 0.5s;
    background-color: rgba(255, 165, 0, 0.7);
    cursor: pointer;
  }
`;

export const Carrinho = styled.div`
margin-left: 4%;
h3 {
  font-size: 2rem;
  font-weight: 500;
  margin: 1% 0;
}
`;

export const NoReady = styled(Link)`
text-decoration: none;
font-size: 1rem;
&:hover {
  text-decoration: underline;
  font-weight: 500;
}
`;

export const DivFlex = styled.div`
display: flex;
margin-top: 2%;
margin-bottom: 14%;
`;

export const DivUl = styled.ul`
list-style: none;
width: 38%;
padding-left: 0;
margin-bottom: 6%;
`;

export const LiUnit = styled.li`
padding: 5% 0;
margin: 2% 0%;
border-block-end: 1px solid #f1f1f1;

h1 {
  font-size: 1.6rem;
  font-weight: 500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.36);
}

p {
  font-size: 1.3rem;
  margin-top: 2%;
}

b {
  margin-top: 3%;
}
`;

export const Quantity = styled.div`
display: flex;
`;

export const BLess = styled.button`
padding: 5px 11px;
margin: 0 2%;
margin-top: 2%;
height: 100%;
&:hover {
  cursor: pointer;
}
`;

export const BMore = styled.button`
padding: 5px 9px;
margin-left: 2%;
margin-top: 2%;
height: 100%;
&:hover {
  cursor: pointer;
}
`;

export const Remove = styled.button`
width: 17%;
font-size: 1rem;
font-weight: 600;
margin-left: 90%;
padding: 7px;
background-color: #fff;
color: #FF8C00;
border: none;
&:hover {
  cursor: pointer;
  box-shadow: 0px 2px 4px #000;
  border-radius: 20px;
}
`;

export const SectionDetails = styled.section`
height: 400px;
width: 20%;
flex-direction: column;
background-color: #d3d3d3;
margin-left: 25%;
margin-top: 2%;
`;

export const DivDetails = styled.div`
text-align: start;
margin-left: 2rem;
margin-top: 2rem;
h3 {
  font-size: 1.563rem;
  padding-bottom: 9%;
  margin-bottom: 9%;
  width: 87%;
  border-block-end: 1px solid #f1f1f1;
}
p {
  width: 86%;
  margin-top: 10%;
  margin-bottom: 12%;
  padding: 10% 0;
  border-block-end: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
}
b {
  font-size: 1.5rem;
}
`;

export const B = styled.b`
margin-right: 1%;
`;

export const Button = styled.button`
margin: 1% 0%;
`;

export const Space = styled.b`
margin-left: 50%;
`;

export const CheckOut = styled.div`
margin-top: 20%;
button {
  font-size: 1rem;
  font-weight: 900;
  padding: 13px 140px;
  border: none;
  background-color: orange;
  color: #000;
  &:hover {
    transition: 0.5s;
    background-color: rgba(255, 165, 0, 0.7);
    cursor: pointer;
  }
}
`;