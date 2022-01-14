import { prefix } from '../utils/prefix.js';
import styled from 'styled-components';
import Link from 'next/link'
import { useState } from 'react';

const Container = styled.div`
	display: flex;
	min-height: auto;
	flex-direction: column;
	justify-content: flex-start;
`
const Selector = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  padding: 16px;
`
const Dot = styled.div`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
	background-color: ${p => p.active ? 'blue' : '#bbb'};
  border-radius: 50%;
  display: inline-block;
  transition: 0.6s ease;
	:hover {
		transform: scale(1.2) translatey(-3px);
	}
`
const Button = styled.div`
  cursor: pointer;
  width: auto;
  margin: 0 20px;
  color: blue;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
	:hover {
		transform: scale(1.2);
	}
`
const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	grid-gap: 15px;
	justify-content: center;
	align-items: center;
	margin-bottom: 1em;
`
const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 200px;
	width: min(380px, 90%);
	background-color: #1920EF;
	transition: .3s ease;
	box-shadow: -3px 0px 20px rgba(0, 0, 0, 0.15);
	:hover {
		transform: scale(1.01);
		box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.3);
	}
`
const WebImg = styled.img`
	width: 100%;
`
const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 1.8em;
	font-weight: bold;
	margin: 0;
`
const Date = styled.h4`
	font-size: .75em;
	font-weight: normal;
	margin: 0;
`
const Title = styled.p`
	text-align: center;
	font-weight: bold;
	font-size: 14px;
	width: 90%;
	margin: 10px 0 0 0;
`
const Expo = styled.p`
	text-align: center;
	font-weight: bold;
	font-size: 12px;
	color: blue;
	width: 90%;
	margin: 0;
`
const CardCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`
const A = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
`

const WebCard = ({item, grp, active}) => {
	const group = grp ? grp : 'dos'
	return <Cards>
		{item.map((c,i) =>
		<CardCont key={`crd${i}`}>
			<A href={c.link[group]}>
				<Card prox={c.state === 'prox'}>
					{c.state === 'prox'
						? <Text>
								<div>PROXIMAMENTE</div>
								<Date>{c.date}</Date>
							</Text>
						: <WebImg src={`${prefix}/imgs/webinars/${c.n}.jpg`}/>
					}
				</Card>
			</A>
			<Title>{c.name}</Title>
			<Expo>{c.expo}</Expo>
		</CardCont>
		)}
	</Cards>
}

const Carousel = ({ data, group }) => {
	const [sel, setSel] = useState(0)
	const setSlide = (num) => {
		const newSel = sel - num
		if(newSel < 0){
			return setSel(data.length-1)
		}
		if(newSel === data.length){
			return setSel(0)
		}
		setSel(newSel)
	}
	return(
		<Container>
			<Selector>
				<Button onClick={() => setSlide(-1)}>
					&#10094;
				</Button>
				{data.map((sld, i) => 
					<Dot 
						onClick={() => setSel(i)}
						active={sel === i}
						key={`sld${i}`} 
					/>
				)}
				<Button onClick={() => setSlide(1)}>
					&#10095;
				</Button>
			</Selector>
			{data.map((sld, index) => 
				sel === index ?
				<WebCard
					item={sld}
					grp={group}
					active={sel === index}
					key={`sld${index}`} 
				/>
				: null )}
		</Container>
	)
}
export default Carousel;
