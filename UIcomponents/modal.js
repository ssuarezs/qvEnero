import styled from 'styled-components';
import { prefix } from '../utils/prefix.js';
import { useState } from 'react'

const Container = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.4);
	height: 100%;
	width: 100%;
	transition: all .6s ease;
	top: 0;
	left: 0;
	opacity: ${p => p.isOpen ? '1' : '0'};
	z-index: ${p => p.isOpen ? '5' : '-5'};
`
const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
  background-color: rgba(227, 227, 227, 0.8);;
	border-radius: 20px;
	height: 90%;
	width: 90%;
	max-height: 600px;
	max-width: 1200px;
	z-index: 6;
  transition-delay: .6s;
	transition: all .4s ease;
	top: ${p => p.isOpen ? '0' : '-1000px'};
`
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 18px 18px 0 0;
	padding: 1em;
	background-color:#1920EF;
	color: white;
`
const Title = styled.h2`
	margin: 0;
`
const CloseImg = styled.img`
	height: 100%;
	transition: .3 ease;
	:hover {
		transform: scale(1.05);
	}
`

export const useModal = (initial) => {
	const [isOpen, setIsOpen] = useState(initial)
	const openModal = () => { setIsOpen(true) }
	const closeModal = () => { setIsOpen(false) }
	return [isOpen, openModal, closeModal]
} 

export const Modal = ({ isOpen, closeM, title, width, children }) => {
	return (
		<Container isOpen={isOpen}>
			<Content 
				isOpen={isOpen}
				style={{maxWidth: width}}
			>
				<Header>
					<Title>{title}</Title>
					<CloseImg onClick={closeM} src={`${prefix}/imgs/exit.png`}/>
				</Header>
				{children}
			</Content>
		</Container>
	)
}
