import styled from "styled-components";

export const CaixaSobre = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #241F38;
width: 100%;
height: 100vh;
text-align: center;
img{
align-items: center;
 padding: 0 25px 0  ;

}
h2{
color: #8b8b8b;
padding: 50px;
}
h3{
color: white;
}
@media (max-width: 950px){
    height: 50%;
    h2{
font-size: 20px;
padding: 20px;
    }
    img{

height: 7vh;
padding: 0 10px;
    }
}
`
export const CaixaIcones = styled.div`
display: flex;
align-items: center;
@media (max-width: 950px){
height: 16vh;
}
`