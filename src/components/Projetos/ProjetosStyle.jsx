import styled from "styled-components";

export const ContainerProjeto = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #241F38;
width: 100%;
img{

  
width: 20vw;
height: 20vh;
}
@media (max-width: 950px){
flex-direction: column;
height: 100vh;
}
`
export const CaixaProjeto = styled.div`
text-align: center;
padding: 20px;
button {
  display: inline-block;
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  text-transform: uppercase;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  }
button:hover {
background-color:#5f44c7 ;
}
@media (max-width: 950px){
  img{
width: 70%;
  }
}




`