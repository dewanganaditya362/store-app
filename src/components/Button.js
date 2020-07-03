import styled from 'styled-components'

export const Button = styled.button`
background-color:black;
color:salmon;
color:${props => props.cart ? "skyblue" :"salmon"};
padding: 0.3rem;
font-size:1.5rem;
font-weight:bold;
border: salmon solid 0.1rem;
border-color:${props =>props.cart ? "skyblue" : "salmon"};
border-radius:0.4rem;
transition: 0.5s ease;
&:hover{
    background:salmon;
    background:${props => props.cart ? "skyblue" :"salmon"};
    color:black;
    border:black solid 0.1rem;
}

&:focus{
    outline:none;
}

`;