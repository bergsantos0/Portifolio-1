import styled from "styled-components";


export const MenuContainer = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
height: 100vh;

@media (max-width: 950px){
width: 100%;
height: auto;
padding: 12px;
}

background-color:#201a3a;
width: 300px;
text-align: center

`


export const Caixa = styled.div`


@media (max-width: 950px){
display: flex;
justify-content: space-evenly;

}

`

export const ContainerImg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

@media (max-width: 950px){
display: none;




}

p{

color: white;
padding: 0 0 20px 0;
}
img{
border-radius: 50%;
width: 80px;
height: 80px;
}
`
export const ContainerUl = styled.li`

@media (max-width: 950px){
display: flex;


}



a {
  transition-duration: 0.4s;
}

a:hover {
  background-color: #5f44c7;
}
a{
color:white ;
display: flex;
justify-content: center;
padding: 20px;
}
`;
export const CaixaIcones = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 950px){

display:none;


}

img{
width: 50px;
}
img:hover{
    width: 55px;
}

`