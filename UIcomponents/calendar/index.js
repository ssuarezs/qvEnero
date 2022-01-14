import Calendar from './cal'

import React, { useState } from 'react';
import { prefix } from '../../utils/prefix.js';

import styled from 'styled-components'
import events from '../../public/data/calendarEvents'


const Container = styled.div`
  position: relative;
  height: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
`
const Event = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 2em;
  background-color: #1920EF;
  color: white;
  width: 100%;
  height: ${p => p.active ? '100%' : '0'};
  z-index: 3;
  transition: .3s ease;
`
const Close = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  transition: .3s ease;

  :hover{
    transform: scale(1.2);
  }
`
const Title = styled.h2`
  margin: 0;
`
const DateT = styled.h3`
  margin: 0;
`

const Cal = () => {
  const [value, setValue] = useState(null);
  const onChange = (nextValue) => {
    setValue(nextValue)
  }
  const erase = () => {
    setValue(null)
  }
  const selected = events.find(e => {
    const date = new Date(e.y, e.m-1, e.d)
    return date.getTime() === value?.getTime()
  })

  return (
    <Container>
      <Event active={selected}>
        {selected
          ? <>
            <DateT>
              {selected.d}-
              {selected.m}-
              {selected.y}
            </DateT>
            <Title>{selected.event}</Title>
            <Close onClick={erase} src={`${prefix}/imgs/exit.png`}/>
            </>
          : null
        }
      </Event>
      <Calendar
        handleDay={onChange}
        events={events}
      />
    </Container>
  );
}

export default Cal
