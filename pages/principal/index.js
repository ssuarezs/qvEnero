import { useState } from 'react'
import { useMainState } from '../../libs/stateHooks'

import styled from 'styled-components'
import Link from 'next/link'
import { prefix } from '../../utils/prefix.js';
import { statePisoA, getDataProg } from '../../public/data'

import QV from '../../UIcomponents/qv';
import Pdf from '../../UIcomponents/pdf';

import Header from '../../UIcomponents/header'

import { getNoti } from '../../public/data'

const imgPrin = `${prefix}/imgs/header/principal.png`

const Image = styled.img`
	margin-right: 1em;
`
const Button = styled.button`
	width: 150px;
	color: #172BEF;
	font-weight: bold;
	padding: .5em 1em;
	margin: 1em auto;
	border: 2px solid #172BEF;
	border-radius: .5em;
	transition: .3s ease;
	:hover{
		transform: scale(1.05);
		background: #172BEF;
		cursor: pointer;
		color: white;
	}
`
const Title = styled.h3`
	padding-left: 5%;
`
const ContProg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1em 0 2em 0;
`
const BarProg = styled.div`
	border: solid #1920EF;
	border-radius: .5em;
	height: 2.4em;
	width: 80%;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`
const Prog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1920EF;
	border-radius: .2em 0 0 .2em;
	font-weight: bold;
	font-size: 1.2em;
	color: white;
	height: 100%;
	width: ${p => p.width};
`
const SubTitle = styled.h2`
	margin: 0;
	margin-top: 1em;
`
const Desc = styled.h3`
	margin: 0;
	font-weight: normal;
`

const Grid = styled.div`
	display: grid;
	margin: 0 3em;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr
	}
`
const GridB = styled.div`
	display: grid;
	margin: 0 3em;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1em;
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr
	}
`
const Entrega = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 60px;
	padding: .5em;
	grid-column: span 2;

	font-weight: bold;
	background: #FFFFFF;
	color: #172BEF;
	border: 1.5px solid #172BEF;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		border: 2px solid #172BEF;
		transform: scale(1.03);
		cursor: pointer;
	}
	div {
		margin: .2em 1em;
	}
	p {
		margin: 0;
		color: black;
	}
	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`
const EntDiv = styled.div`
	width: 3px;
	height: 80%;
	background: #172BEF;
	@media screen and (max-width: 800px) {
		width: 60%;
		height: 3px;
	}
`
const Noti = styled.img`
	grid-row: span 2;
	border-radius: 1em;
	transition: .3s ease;
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`
const HallFame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 40px;

	font-weight: bold;
	background: #FFC024;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`

const TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 4em 0 0;
`
const TextBox = styled.div`
	color: black;
	font-weight: normal;
	text-align: center;
`
const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1em;
`
const Box = styled.div`
	justify-content: center;
	align-items: center;
	min-height: 60px;
	padding: 1em;

	color: #172BEF;
	font-weight: bold;
	background: #FFFFFF;
	border: 2px solid #D8DEF3;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		border: 2px solid #172BEF;
		cursor: pointer;
	}
`

const Principal = () => {
  const [mState, setMainState] = useMainState()
	const prog = getDataProg()
	const pisoAct = statePisoA()
	const noti = getNoti() 
	const video = noti[0] 
		? noti[0] : null

	const openModal = (type) => {
    setMainState({
      ...mState,
      modal: {
        visibility: true,
        type: type
      }
    })
	}

  return <QV pg="Principal">
		<Header
			title="Quanticon Valley"
			desc="Bienvenidos/as"
			imgH={imgPrin}
			primary
		/>

		<TitleBox>
			<Title>_Tu proxima entrega</Title>
		</TitleBox>
		<Grid>
		<Link href='etesc'>
			<Entrega>
				<div>
					Piso {pisoAct}
					<p>{prog?.title}</p>
				</div>
				<EntDiv/>
				<div>
					{prog?.entrega}
				</div>
			</Entrega>
		</Link>
		</Grid>

		<TitleBox>
			<Title>_Lo mas relevante</Title>
		</TitleBox>
		<Grid>
			<Noti 
				src={`${prefix}/imgs/principal/lastNoti.png`}
				onClick={()=>openModal('Noticiero')}
			/>
			<HallFame onClick={()=>openModal('Salon de la Fama')}>
				<Image src={`${prefix}/imgs/principal/hallfame.png`}/>
				Salon de la Fama
			</HallFame>
			<Box 
				style={{display: 'flex'}}
				onClick={()=>openModal('Ultimas actualizaciones')}
			>
				<Image src={`${prefix}/imgs/principal/updates.png`}/>
				<div>
					<TextBox style={{textAlign: 'left'}}>Conoce las</TextBox>
					Ultimas Actualizaciones
				</div>
			</Box>
		</Grid>


		<TitleBox>
			<Title>_Conoce Quanticon Valley</Title>
		</TitleBox>
		<GridB>
			<Link href='zones/lobby'>
				<Box>
					<Flex>
						<Image src={`${prefix}/imgs/principal/lobby.png`}/>
						Lobby
					</Flex>
					<TextBox>Descubre las guías, instrucciones y rúbricas para desarrollar tu proyecto</TextBox>
				</Box>
			</Link>
			<Link href='zones/src/asesor'>
				<Box>
					<Flex>
						<Image src={`${prefix}/imgs/principal/asesores.png`}/>
						Asesores
					</Flex>
					<TextBox>Encuentra contenido adicional para apoyar tu proyecto y contacta asesores.</TextBox>
				</Box>
			</Link>
			<Link href='zones/webinar'>
				<Box>
					<Flex>
						<Image src={`${prefix}/imgs/principal/webinars.png`}/>
						Webinars
					</Flex>
					<TextBox>Descubre temas innovadores para aplicar en tu proyecto, y aprende mucho más</TextBox>
				</Box>
			</Link>
		</GridB>

		<Link href='info/conoceQV'>
			<Button>Conoce mas de Quanticon Valley</Button>
		</Link>

		<TitleBox>
			<Title>Avance del Juego</Title>
		</TitleBox>
		<ContProg>
			<BarProg>
				<Prog width={prog.num}>
					{prog.piso}
				</Prog>
			</BarProg>
			<SubTitle>{prog.title}</SubTitle>
			<Desc>{prog.desc}</Desc>
		</ContProg>
	</QV>
}
export default Principal
