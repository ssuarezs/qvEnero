import styled from 'styled-components'
import { prefix } from '../utils/prefix.js';

import { getNoti } from '../public/data'

const Container = styled.div`
	position: relative;
	width: 100%;
`
const Img = styled.img`
	width: 100%;
	border-radius: 1em;
	box-shadow: -3px 0px 40px rgba(0, 0, 0, 0.15);
	transition: .3s ease;

	:hover {
		transform: scaley(1.03);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}
`
const Iframe = styled.iframe`
	position: absolute; 
	top: 30px; 
	left: 0;
	width: 100%;
	height: 80%;
	borderRadius: 0 0 1em 1em;
`

const NotiWidget = ({open}) => {
	const noti = getNoti() 
	const video = noti[0] 
		? noti[0].video : null
	return (
		<Container onClick={open}>
			<Img src={`${prefix}/imgs/noti/news.png`}/>
			{video ?
			<iframe 
				src={`https://www.youtube.com/embed/${video}`}	
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
				title="Noticias" 
				style={{
					position: 'absolute', 
					bottom: 0, 
					left: 0,
					width: '100%',
					height: '80%',
					borderRadius: '0 0 1em 1em'
				}}
			/> : null }
		</Container>
	);
}

export default NotiWidget
