import styled from 'styled-components'

export const Button = styled.button`
background-color:black;
color:salmon;
padding: 0.3rem;
font-size:1.5rem;
font-weight:bold;
border: salmon solid 0.1rem;
border-radius:0.4rem;
transition: 0.5s ease;
&:hover{
    background:salmon;
    color:black;
    border:black solid 0.1rem;
}

&:focus{
    outline:none;
}

`;