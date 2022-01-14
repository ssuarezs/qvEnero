import styled from 'styled-components';

const Container = styled.div`
  padding: .5em 1em;
  
  h3 {
    color: blue;
  }
  h3, h4, p {
    margin: .3em 0;
  }

	@media screen and (max-width: 600px) {
    padding: 0em .5em;
    transform: scale(0.95);
	}
`
const Ul = styled.ul`
  padding: 0 1em;
`
const Li = styled.div`
  font-size: .9em;
  margin: .5em 0;
`
const List = () => {
  return (
    <Ul>
      <Li>Preparar un correo con el Asunto: <strong>TPI-SolicitudAsesoria-GXX</strong> donde XX es el numero de tu grupo</Li>
      <Li>En el cuerpo del correo escribe tu <strong>Horario</strong> (2-4pm o 4-6pm), el <strong>Numero y Nombre de tu grupo</strong> y <strong>el Nombre del Asesor</strong> con el que deseas solicitar una reunion.</Li>
      <Li>Adicionalmente puedes definir un <strong>Dia y Hora</strong> en la que tu grupo podria estar disponible. (la fecha y hora final dependera de la disponibilidad del asesor)</Li>
      <Li>Enviar el mensaje al <strong>Monitor Correspondiente</strong> que aparece abajo, ellos se comunicaran contigo y organizaran una fecha para reunirse con el asesor.</Li>
    </Ul>
  )
}

const AseContact = ({ asesor }) => {
  return (
    <Container>
      <h3>Instrucciones para solicitar una Asesoria</h3>
      <p>Si deseas recibir una asesoria para apoyar el desarrollo de tu proyecto debes:</p>
      <List/>
      <h4>Monitor :</h4>
      <p>{asesor.nombreMon} - <strong>{asesor.correoMon}</strong></p>
    </Container>
  )
}
export default AseContact
