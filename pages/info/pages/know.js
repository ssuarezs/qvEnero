import { useState } from 'react'
import { prefix } from '../../../utils/prefix.js';

import Link from 'next/link'
import styled from 'styled-components';

import { getInfoKnow } from '../../../public/data'

const Cont = styled.div`
	display: flex;
	transition: .3s ease;
	flex-direction: column;
`
const Title = styled.h3`
	font-size: 20px;
	font-weight: 700;
`
const Selector = styled.div`
	display: grid;
	grid-template-columns: repeat(4,1fr);
	grid-gap: .8em;
	justify-content: center;
	align-items: center;
	margin-bottom: 2em;
	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2,1fr);
	}
`
const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 65px;
	padding: 1em;

	font-weight: bold;
	background: #FFFFFF;
	border: 2px solid ${p=>p.act?'#172BEF':'#D8DEF3'};
	box-sizing: border-box;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
	border-radius: 10px;

	transition: .3s ease;
	:hover {
		border: 2px solid #172BEF;
		cursor: pointer;
	}
`
const SubTitle = styled.h4`
	padding: .5em 0;
	margin: 0 0 .5em 0;
	border-bottom: 2px solid #bbb;
	max-width: 500px;
	:hover {
		color: #172BEF;
		cursor: pointer;
	}
`
const Text = styled.p`
	margin: 0 0 1em .5em;
	max-width: 500px;
	text-align: justify;
	font-size: ${p=>p.act?'.9em':'0'};
	height: ${p=>p.act?'auto':'0'};
	color: #4F4F4F;
	transition: .3s ease;
`
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

const Know = () => {
	const data = getInfoKnow()
	const [sel, setSel] = useState(data[0])
	const [item, setItem] = useState(0)


	return <Cont>
		<Title>_Conoce Quanticon Valley</Title>
		<Selector>
			{data.map(i => (
			<Box 
				key={i.title} 
				act={i.title===sel.title}
				onClick={()=>setSel(i)}
			>
				<Image src={`${prefix}/${i.img}`}/>
				{i.title}
			</Box>
			))}
		</Selector>

		<SubTitle onClick={()=>setItem(0)}
		>1. Objetivo de esta seccion</SubTitle>
		<Text act={item===0}>{sel.obj}</Text>

		<SubTitle onClick={()=>setItem(1)}
		>2. Que encontraras aqui?</SubTitle>
		<Text act={item===1}>{sel.cont}</Text>

		<SubTitle onClick={()=>setItem(2)}
		>3. Lo mas relevante</SubTitle>
		<Text act={item===2}>{sel.imp}</Text>

		<Link href={`/${sel.link}`}>
			<Button>Visita esta sección </Button>
		</Link>

	</Cont>
}

export default Know
