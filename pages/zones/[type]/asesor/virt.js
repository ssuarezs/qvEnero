import { useState } from 'react'
import { prefix } from '../../../../utils/prefix.js';
import { getAsesorVir } from '../../../../public/data'
import { Modal, useModal } from '../../../../UIcomponents/modal'
import AsesorContact from '../../../../UIcomponents/asesorContact'

import styled from 'styled-components';

const Cont = styled.div`
	padding: 0px 20px;
	display: ${p => p.active ? 'flex' : 'none'};
	transition: .3s ease;
	flex-direction: column;
`
const AsesorCard = styled.div`
	background-color: #ffffff;
	box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	padding: 15px;
	margin: 1em 5%;
	display: grid;
	grid-template-columns: repeat(1, 1fr 2fr 2fr);
	grid-gap: 10px;

	@media screen and (max-width: 620px) {
		grid-template-columns: 1fr;
	}
`
const Img = styled.img`
	border-radius: 2em;
	margin: auto;
	width: 110px;
	height: 110px;
`
const Name = styled.h4`
	margin: 0;
`
const Rol = styled.h5`
	margin: 0;
`
const Desc = styled.p`
	font-weight: 300;
	font-size: 12px;
	line-height: 14px;
`
const CoinsCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	@media screen and (max-width: 620px) {
		align-items: flex-start;
	}
`
const AsesorField = styled.span`
	text-align: center;
	color: #BC8600;
	background-color: #ffc1244f;
	border-radius: 4px;
	margin: 0;
	padding: 4px 10px;
	font-weight: bold;
`
const CostLabel = styled.p`
	font-weight: bold;
	font-size: 10px;
	color: #444;
	margin: 20px 0 0 0;
`
const Coins = styled.div`
	text-align: end;
	font-weight: bolder;
	font-size: 26px;
	color: #0000BB;
`
const CoinsImg = styled.img`
	padding: 0 10px;
`
const Button = styled.button`
	padding: 8px 16px;
	border-radius: 5px;
	border: none;
	background-color: #172bef;
	font-weight: bold;
	font-size: 1em;
	color: white;
	transition: 0.3s;
	:hover {
		transform: scale(1.02);
		cursor: pointer;
	}
`


const Virt = ({active}) => {
	const data = getAsesorVir()
	const [isOpen, openModal, closeModal] = useModal(false)
	const [sel, setSel] = useState({})

	const chooseAse = (i) => {
		setSel(i)
		openModal()
	}
	return <Cont active={active}>
		{data.map(i => 
			<AsesorCard key={i.nombre}>
				<Img src={`${prefix}/imgs/asesorVirtual/${i.img}`}/>
				<div>
					<Name>{i.nombre}</Name>
					<Rol>{i.rol}</Rol>
					<Desc>{i.desc.substr(0, 295) + "..."}</Desc>
				</div>
				<CoinsCont>
					<AsesorField>{i.campo}</AsesorField>
					<Coins>
						<CostLabel>Costo Asesoria</CostLabel>
						<CoinsImg src={`${prefix}/imgs/innocoin1.png`}/>
						{i.costo}
					</Coins>
					<Button onClick={() => chooseAse(i)}>Mas Información</Button>
				</CoinsCont>
			</AsesorCard>
		)}
			<Modal 
				isOpen={isOpen}
				closeM={closeModal}
				title="Contacta a tu Asesor"
				width="400px"
			>
				<AsesorContact asesor={sel}/>
			</Modal>
	</Cont>
}

export default Virt;
