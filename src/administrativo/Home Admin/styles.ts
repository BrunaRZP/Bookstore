import styled from "styled-components";

export const List = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start; 

h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 2% 0;
    margin-left: 5%;
}
`;

export const Ul = styled.ul`
margin: 0 1%;

h1 {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 1% 0;
}

li {
    margin-left: 4%;
    margin-bottom: 5%;
}

p {
    width: 35%;
    font-size: 1.1rem;
    margin: 1% 0;
}

button {
    padding: 6px 15px;
    margin: 1% 0;
    color: white;
    background-color: #f3a43e;
    border-radius: 30px;
}
`;

export const Excluir = styled.button`    
  &.btn-excluir {
    background-color: red;
    margin-left: 3%;
  }
`;