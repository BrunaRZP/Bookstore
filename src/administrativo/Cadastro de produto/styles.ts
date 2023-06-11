import styled from "styled-components";

export const DiVCadastroProduto = styled.div`
margin: 2%;
border: 1px solid #000;
border-radius: 35px;
h1 {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 2% 0 2% 5%;
}
`;

export const Form = styled.form`
flex-direction: column;
label {
    margin: 1% 0;
    margin-left: 5%;
}

input {
    margin: 1% 0;
    margin-left: 0.5%;
    width: 30vw;
}

button {
    padding: 6px 15px;
    margin: 2% 0;
    margin-left: 5%;
    color: white;
    background-color: #17a99b;
    border-radius: 30px;
}
`;