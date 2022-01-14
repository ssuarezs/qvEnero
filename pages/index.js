import Link from 'next/link'
import styled from 'styled-components'
import { prefix } from '../utils/prefix.js';

const Container = styled.div`
	background-image: url('${prefix}/imgs/Rectangle 1.png');
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  height: 100vh;
`

const Goto = styled.div`
	border: 2px solid #fff;
	border-radius: 20px;
	padding: 25px 50px;
	margin: 20px;
	transition: 0.5s;

  :hover {
		transform: scale(1.06) rotate(0.5deg);
		background-color: rgba(255,255,255,0.1);
    cursor: pointer;
  }
	:active {
		background-color: rgba(255,255,255,0.3);
	}
`
const Img = styled.img`
	margin: 30px;
`
const Intro = styled.p`
	font-size: 1em;
	font-weight: bold;
	color: #fff;
	margin: 0px;
`
const Title = styled.h1`
	font-size: 1.8em;
	color: #fff;
	margin: 0px;
`

const Login = () => {
  return (
    <Container>
      <Img src={`${prefix}/imgs/main/QV_Blanco_horizontal.png`}/>
      <Intro>
        Listo para hacer parte de esta nueva aventura?
      </Intro>
      <Link href="/principal"><Goto>
        <Title>¡AQUI VAMOS!</Title>
      </Goto></Link>
    </Container>
  )
}
export default Login
