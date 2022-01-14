import styled from 'styled-components';
import { prefix } from '../utils/prefix.js';
import { useState } from 'react'

const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.6);
	height: 100%;
	width: 100%;
	transition: all .6s ease;
	top: 0;
	left: 0;
	opacity: ${p => p.isOpen ? '1' : '0'};
	z-index: ${p => p.isOpen ? '5' : '-5'};
`
const CloseImg = styled.img`
	height: 40px;
	transition: .3 ease;
	:hover {
		transform: scale(1.05);
	}
`

export const useEgg = (initial) => {
	const [isOpen, setIsOpen] = useState(initial)
	const openEgg = () => { setIsOpen(true) }
	const closeEgg = () => { setIsOpen(false) }
	return [isOpen, openEgg, closeEgg]
} 

export const Egg = ({ isOpen, closeE }) => {
	return (
		<Container isOpen={isOpen}>
			<CloseImg onClick={closeE} src={`${prefix}/imgs/exit.png`}/>
			<img width="300px" src={`${prefix}/imgs/egg.png`}/>
		</Container>
	)
}
