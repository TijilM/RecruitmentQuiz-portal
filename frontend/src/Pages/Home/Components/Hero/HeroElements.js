import styled from 'styled-components'
import bg from '../../Assets/Landing.png'
export const HeroContainer=styled.div`
background: transparent;
display:flex;
justify-content:center;
align-items: center;
padding:0 30px;
height:90vh;
position: relative;
z-index:1;
`

export const HeroBg=styled.div`
background-image: url(${bg});
position: absolute;
background-repeat:no-repeat;
background-size:contain;
background-position:center;
width:100%;
height:100%;
overflow:hidden;
`

