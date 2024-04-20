import styled from "styled-components";

export const ContainerInicio = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 100px;
background-color: #212121;
width: 100%;
height: 100vh;
img{
    border-radius: 50%;
    width: 30vw;
    height: 50vh;
}
@media (max-width: 950px){
flex-direction: column;

img{
    width: 50vw;
    height: 30vh;
}
}
`
export const StyledName = styled.div`
color: #FD5C02;
`
export const ContainerText = styled.div`
display: flex;
flex-direction: column;
font-size: 40px;
gap: 5px;
color: white;
@media (max-width: 950px){
padding: 10px;
}
`
export const CaixaIcones = styled.div`
img{
width: 50px;
height: 50px;
}
img:hover{
   background-color: #00C097;
}

`