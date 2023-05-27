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
@media only screen and (min-width: 320px) and (max-width: 480px) {
  margin-top: 8%;
    p {
      margin: 6% 0;
    }
  }
`;

export const Back = styled(Link)`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: underline;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 9%;
    margin-bottom: 15%;
  }
`;

export const Ul = styled.ul`
display: flex; 
justify-content: wrap; 
flex-wrap: wrap;
margin: 0 20% 3%;
h1 {
  font-size: 2rem;
  font-weight: 500;
}
p {
  margin: 3% 0;
  font-size: 1rem;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  display: flex;
  justify-content: space-between;
  flex-wrap: none;
  margin-left: 11%;
  margin-right: 8%;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  display: flex;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 4%;
}
`;

export const Li = styled.li`
margin: 6%;

@media only screen and (min-width: 320px) and (max-width: 480px) {
  margin: 0;  
  margin-bottom: 6%;
}
`;

export const Total = styled.b`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 4%;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
  display: flex;
  margin-left: 11%;
  margin-bottom: 15%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
  display: flex;
  margin-left: 19%;
  margin-bottom: 8%;
}
`;