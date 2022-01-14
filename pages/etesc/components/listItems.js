import styled from 'styled-components'
import { prefix } from '../../../utils/prefix.js'
import { statePiso } from '../../../public/data'

const upFile = `${prefix}/imgs/etesc/up-file.png`
const reto = `${prefix}/imgs/etesc/reto.png`

const Container = styled.div`
	padding: 10px 20px;
`
const SrcList = styled.div`
	display: flex;
	flex-direction: column;
	color: blue;
	margin-bottom: 30px;
`
const ItemCat = styled.div`
	font-weight: 600;
	font-size: 25px;
	line-height: 52px;
	letter-spacing: -0.03em;
	color: #272835;
	margin: 0px;
`
const Item = styled.a`
		display: flex;
		color: #000;
		align-items: center;
		margin-bottom: 10px;
		margin-top: 10px;
		margin-left: 20px;
		transition: 0.3s;
		
		:hover {
			transform: scale(1.02);
			color: #1920EF;
		}
`
const ItemImg = styled.img`
`
const ItemTitle = styled.span`
	font-weight: 600;
	font-size: 18px;
	padding-left: 15px;
	width: 80%;
`

const ItemList = ({ title, data, imgSrc }) => {
	return (
		<SrcList>
			<ItemCat>{title}</ItemCat>
			{(data instanceof Array)  ? data.map(item => 
			<Item href={item[1]} target="_blank" key={item[0]} >
					<ItemImg src={imgSrc}/>
					<ItemTitle>{item[0]}</ItemTitle>
			</Item>
			): null}
		</SrcList>
	)
}
const PisoNo = () => 
			<h3>El piso seleccionado estara disponible una vez se complete la fase del piso anterior</h3>

const Resources = ({group, piso, data}) => {
	const pisoA = statePiso()

	return (
		<Container>
		{piso <= pisoA 
			? <div>
					{data.entrega[0] ? 
					<ItemList
						title="ENTREGABLES"
						data={data.entrega}
						imgSrc={upFile}
					/> : null}
					{data.reto[0] ? 
					<ItemList
						title="RETOS DE PISO"
						data={data.reto}
						imgSrc={reto}
					/> : null}
				</div>
			: <PisoNo/>
			}
		</Container>
	);
}

export default Resources
