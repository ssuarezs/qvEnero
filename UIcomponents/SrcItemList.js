import { prefix } from '../utils/prefix.js';
import Link from 'next/link'
import styled from 'styled-components';

const SrcGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 20px 40px;
	transition: 0.3s ease;
`
const SrcList = styled.div`
	display: flex;
	flex-direction: column;
	color: blue;
`
const Src = styled.div`
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
const Img = styled.img`
		width: 1em;
`
const Title = styled.div`
		margin-left: 1em;
		font-size: 1em;
`

const Item = ({data, src}) => {
	return(
		<a href={data[1]} target="_blank" withoutrel="noreferrer">
			<Src>
				<Img src={`${prefix}/imgs/items/${src}.png`}/>
				<Title>{data[0]}</Title>
			</Src>
		</a>
	)
}
const SrcItemList = ({ data }) => {
	const sources = []
	for (let prop in data){
		sources.push({ name: prop, cont: data[prop] })
	}
	return (
		<SrcGrid>
		{sources.map(src => src.cont[0] ?
			<SrcList key={src.name}>
				<h4>_{src.name}</h4>
				{src.cont.map(i => 
					<Item 
						key={i[0]}
						data={i} 
						src={src.name}
					/>)}
			</SrcList>
			: null )}
		</SrcGrid>
	)
}
export default SrcItemList
