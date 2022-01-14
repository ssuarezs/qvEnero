import { prefix } from '../../../utils/prefix.js';
import { useMainState } from '../../../libs/stateHooks'
import { useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components';
import QV from '../../../UIcomponents/qv';
import ZoneHeader from '../../../UIcomponents/zoneHeader'
import GroupSel from '../../../UIcomponents/groupSel'
import Carousel from '../../../UIcomponents/webinarCarousel'

import { getWebinarData } from '../../../public/data'

const Header = styled.div`
	display: flex;
	margin: 2em auto 0 auto;
	padding: 0;
	justify-content: space-between;
	align-items: center;
	color: #172BEF;
	width: 90%;
	border-bottom: solid 3px #DFE2E4;
`
const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`
const Title = styled.h3`
	font-weight: bold;
	font-size: 20px;
	margin: 0;
`
const Desc = styled.p`
	color: black;
	font-weight: normal;
	font-size: 15px;
	margin: 0px;
	margin-bottom: 2px;
`
const Inscrip = styled.div`
	display: flex;
	box-sizing: border-box;
	border: 1.5px solid #172BEF;
	border-radius: 5px;
	min-height: 30px;
	justify-content: center;
	align-items: center;
	background-color: #F4F7FD;
	color: #172BEF;
	font-weight: bold;
	font-size: 14px;
	padding: 0px 10px;
	transition: .3s ease;

	:hover {
		transform: scale(1.03);
		background-color: #172BEF;
		color: white;
		cursor: pointer;
	}
`
const R = styled.span`
	color: #172BEF;
	font-weight: bold;
`
const Img = styled.img`
	max-width: 400px;
	margin: 20px 10px;
	transition: .3s ease;
	:hover {
		transform: scale(1.03) rotate(-.5deg);
		cursor: pointer;
	}
`


const Webi = () => {
  const [mState, setMainState] = useMainState()
	const group = mState.group ? mState.group : 'dos'
	const data = getWebinarData()
	const titleA = data.titles[0]
	const titleB = data.titles[1]
	return <QV pg="Zonas Comunes">
		<ZoneHeader	zone={1}/>
		<GroupSel/>
		<Header>
			<Text>
				<Title>{titleA[0]}</Title>
				<Desc>{titleA[1]}<R>{titleA[2]}</R></Desc>
			</Text>
			<Inscrip>
				Inscribite Aquí
			</Inscrip>
		</Header>
		<Carousel data={data['2021s2']} grp={group}/>
		<Header>
			<Text>
				<Title>{titleB[0]}</Title>
				<Desc>{titleB[1]}<R>{titleB[2]}</R></Desc>
			</Text>
		</Header>
		<Carousel data={data['2021s1']} grp={group}/>
		<Header>
			<Desc>Mira los <R>Webinars</R> de versiones anteriores</Desc>
		</Header>
		<Link href="https://www.youtube.com/watch?v=rBoyRR4KGaE&list=PLvLMsmXmVy6LHh1oouUSUtIebNmtJdleH&ab_channel=Facultaddeingenier%C3%ADa-UniversidadNacionaldeColombia">
			<Img src={`${prefix}/imgs/webinars/antes.png`}/>
		</Link>
	</QV>
}

export default Webi;
