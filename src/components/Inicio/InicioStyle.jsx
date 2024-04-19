import styled from "styled-components";

export const ContainerInicio = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 36px;
background-color: #241F38;
width: 100%;

img{
    border-radius: 50%;
    width: 20vw;
    height: 30vh;
}
@media (max-width: 950px){
height: 90vh;
img{
    width: 200vw;
    height: 20vh;
}
}
`
export const ContainerText = styled.div`
display: flex;
flex-direction: column;
padding:  0 0 0 100px  ;
gap: 16px;
h1{
    width: 61%;
    color: white;
}
p{
color: #8b8b8b;
}
@media (max-width: 950px){
flex-direction: initial;
display: block;
padding: 20px;
gap: 0px;
h1{
width: 50vw;
font-size: 20px;
}
}

`