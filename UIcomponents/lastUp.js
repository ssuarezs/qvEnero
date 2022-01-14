import styled from 'styled-components';
import { stateUpdates } from '../public/data'

const Container = styled.div`
  background: #fff8;
  border-radius: 1em;
  min-width: 400px;
  max-width: 600px;
  margin: 1em auto;
  padding: 1em .5em;
  overflow-y: scroll;
  font-size: .9em;

	::-webkit-scrollbar-track {
		border: none;
		padding: 10px 0;
		margin: 10px 0;
		background-color: none;
	}
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #aaa;
		border: 1px solid rgba(0,0,0,0);
	}
`
const Title = styled.h3`
  margin: .8em .5em;
`
const Text = styled.p`
  letter-spacing: 0.05em;
  margin: .5em;
  span {
    color: #172BFE;
    font-weight: bold;
    margin-right: 1em;
  }
`

const LastUp = () => {
  const data = stateUpdates()
  const { 
    general = [],
    etesc = [],
    lobby = [],
    asesor = [],
    news = [],
    webinars = []
  } = data
  console.log(data)
  return (
    <Container>
      <Text>
        En la ultima actualizacion se han agregado los siguientes recursos:
      </Text>
      {general[0] && (
        <>
          <Title>General</Title>
          {general.map(i => <Text key={i}><span>./</span>{i}</Text>)}
        </>
      )}
      {etesc[0] && (
        <>
          <Title>ETESC</Title>
          {etesc.map(i => <Text key={i}><span>./</span>{i}</Text>)}
        </>
      )}
      {lobby[0] && (
        <>
          <Title>Lobby</Title>
          {lobby.map(i => <Text key={i}><span>./</span>{i}</Text>)}
        </>
      )}
      {asesor[0] && (
        <>
          <Title>Asesores</Title>
          {asesor.map(i => <Text key={i}><span>./</span>{i}</Text>)}
        </>
      )}
      {news[0] && (
        <>
          <Title>Noticiero</Title>
          {news.map(i => <Text key={i}><span>./</span>{i}</Text>)}
        </>
      )}
      {webinars[0] && (
        <>
          <Title>Webinars</Title>
          {webinars.map(i => <Text key={i}><span>./</span>{i}</Text>)}
        </>
      )}
    </Container>
  )
}
export default LastUp
