import styled from 'styled-components';

export const CardBody = styled.div`
    background-color: white;
    font-family: 'Courier New', Courier, monospace;
    width: 250px;
    border-radius: 5px;
    display: inline-block;
    margin: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 400px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    }
`;

export const Avatar = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
`;

export const Conteudo = styled.div`
    padding: 2px 16px;
`;

export const Nome = styled.h3`
    color: #4CAF50;
    font-weight: bold;
`;

export const Salario = styled.h4`
   color: pink; 
`;