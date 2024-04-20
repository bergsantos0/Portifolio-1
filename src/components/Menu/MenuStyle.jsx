import styled from "styled-components";


export const MenuContainer = styled.div`
display: flex;
justify-content:center ;
background-color:#00C097;
`
export const Caixa = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ContainerUl = styled.li`
display: flex;
a {
  transition-duration: 0.4s;
}
a:hover {
  background-color: #002731;
}
a{
color:white ;
display: flex;
justify-content: center;
padding: 20px;
}
`;
export const CaixaIcones = styled.div`
img{
width: 50px;
}
img:hover{
    width: 55px;
}

`