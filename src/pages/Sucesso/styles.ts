import styled from "styled-components";
import Link from '../../components/Link';
import { colors } from "../../styles/themes";

export const DivSucesso = styled.div`
text-align: center;
margin: 3%;
h2 {
  font-size: 2rem;
  font-weight: 500;
}
p {
  margin: 1%;
}
`;

export const Back = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: underline;
`;

export const Ul = styled.ul`
h1 {
  font-size: 2rem;
  font-weight: 500;
}
p {
  margin: 3% 0;
  font-size: 1rem;
}
`;

export const Total = styled.b`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 4%;
`;