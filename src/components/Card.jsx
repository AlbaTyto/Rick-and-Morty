import styled from 'styled-components';
import imgPortal from '../img/portal2.jpg';
const Carddiv = styled.div`
   position: relative;
   display: flex;
   width: fit-content;
   height: 28em;
   flex-direction: column-reverse;
   align-items: center;
   justify-content: space-between;
   margin: 5%;
   padding: 4rem;
   color:rgb(32, 32, 75);
   border: 4px solid rgb(55, 31, 78);
   border-radius: 50%;
   outline: groove rgb(104, 60, 144);
   background-image:  url($imgPortal);
   background-size: cover;
   background-color: chartreuse 
`;
const Cardbut = styled.button`
   font-size: 13px;
   color: white;
   margin: 0.6em 0.6em 2em 2em;
   order: 2;
   align-self: flex-end;
   width: fit-content;
   border: 1px solid black;
   border-radius: 45%;
   background-color: rgb(225, 49, 49);
`;
const Cardnombre = styled.h2`
   position: absolute;
   margin: 1em 0em 0em 0em;
   bottom: 5em;
   height: fit-content;
   width: fit-content;
   padding: 0.2em;
   align-self: flex-start;
   border: 2px dotted rgba(48, 48, 48, 0.7);
   background-color: rgba(144, 129, 102, 0.9);
   border-radius: 22px;
   z-index: 1;
`;
const Cardspysx = styled.div`
   width: 10rem;
   font-size: x-small;
   margin: 1em 1em 0em 1em;    
   display: flex;
   flex-direction: row; 
   justify-content: space-around;
   background-color: rgba(128, 128, 128, 0.7);
   border-radius: 2%;
`;
const Cardimg = styled.img`
   order: 1;
   border-radius: 45%;
   opacity: 0.9;
   z-index: 0;
`
export default function Card(props) {
   return (      
         <Carddiv>
            <Cardbut onClick={props.onClose}>X</Cardbut>
            <Cardnombre>{props.name} </Cardnombre>
            <Cardspysx>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </Cardspysx>
            <Cardimg  src={props.image} alt="Character" />
         </Carddiv>
   );
}
