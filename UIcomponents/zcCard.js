import styled from 'styled-components'
import Link from 'next/link'
import { prefix } from '../utils/prefix.js';

const ZElement = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: ${p => (p.type === 'twohor') ? 'span 2' : null};
	grid-row: ${p => (p.type === 'twover') ? 'span 2' : null};
	align-items: ${p => (p.type === 'twover') ? 'center' : 'flex-start'};
	justify-content: ${p => (p.type === 'twover') ? 'center' : 'flex-end'};
	text-align: ${p => (p.type === 'twover') ? 'center' : null};
	background: #FFFFFF;
	padding: 10px 20px 15px 20px;
	border-radius: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	transition: 0.3s;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
	}
	:active {
		background-color: #ddd;
	}

	@media screen and (max-width: 1060px) {
		grid-column: span 1;
		grid-row: span 1;
		align-items: flex-start;
		justify-content: flex-end;
		text-align: left;
	}
`
const Img = styled.img`
	height: ${p => p.name === 'ASESORES' ? '35%' : '45%'};
	margin: 0px 0px 10px 10px;
`
const Text = styled.div`
	display: flex; 
	flex-direction: column;
	font-weight: bold;
`
const Title = styled.span`
	font-size: 1.5rem;
	color: #172BEF;
`
const Desc = styled.span`
	font-size: 0.8rem;
`

// item => name, desc, img, link, type(twover or twohor)
const Element = ({ item }) => {
	if(item.target === "_blank") {
		return(
		<a href={item.link} target={item.target}>
			<ZElement type={item.type}>
				<Img src={`${prefix}${item.img}`} name={item.name}/>
				<Text>
					<Title>{item.name}</Title>
					<Desc>{item.desc}</Desc>
				</Text>
			</ZElement>
		</a>
		)
	}
	return (
		<Link href={item.link}>
			<ZElement type={item.type}>
				<Img src={`${prefix}${item.img}`} name={item.name}/>
				<Text>
					<Title>{item.name}</Title>
					<Desc>{item.desc}</Desc>
				</Text>
			</ZElement>
		</Link>
	)
}

export default Element;
