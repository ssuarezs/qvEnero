import { useState } from 'react';

const monthName = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
  ]

const WeekDay = ({d}) => {
  return (
    <li className='weekDay'>{d}</li>
  )
}

const EventDot = () => 
  <div className='evenDot'/>

const Day = ({d, y, m, haClick, event, today}) => {
  const isToday = today.d === d && today.m === m && today.y === y 
  const liStyle = {
    background: isToday ? 'blue' : null,
    color: isToday ? 'white' : null,
    fontWeight: isToday ? 'Bold' : null
  }
  if(new Date(y, m+1, 0).getDate() < d)
    return null
  if(d === 1){
    const weekD = new Date(y, m, d).getDay() 
    return (
      <li 
        onClick={haClick} 
        style={{
          gridColumnStart: weekD,
          ...liStyle
        }}> {d} {event ? <EventDot/>: null}
      </li>
    )
  }
  return <li onClick={haClick} style={liStyle}>
            {d} {event ? <EventDot/>: null}
          </li>
}

const Calendar = ({ styles, handleDay, events }) => {

  const today = {d: new Date().getDate(), m:  new Date().getMonth(), y: new Date().getFullYear()}
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  
  const days = [
     1, 2, 3, 4, 5, 6, 7, 8, 9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31
  ]
  const weekDays = [
    'L', 'M', 'X', 'J', 'V', 'S', 'D'
  ]

  const changeMonth = (i) => {
    const newMonth = month + i
    if(newMonth > 11) {
      setMonth(0)
      setYear(prev => prev+1)
      return null
    }
    if(newMonth < 0) {
      setMonth(11)
      setYear(prev => prev-1)
      return null
    }
    setMonth(prev => newMonth)
  }
  return (
    <div style={{
      maxWidth: '300px',
      ...styles?.box
    }}>
      <div className='header'>
        <h3 style={{margin: 0}}>{monthName[month]} {year}</h3>
        <div className='btns'>
        <button 
          onClick={() => changeMonth(-1)}
          style={{...styles?.button}}
        >&#10094;</button>
        <button 
          onClick={() => changeMonth(1)}
          style={{...styles?.button}}
        >&#10095;</button>
        </div>
      </div>

      <ol>
        {weekDays.map(d => 
          <WeekDay key={d} d={d}/>
        )}
        {days.map(d => 
          <Day 
            key={d} 
            today={today}
            d={d} 
            y={year} 
            m={month} 
            haClick={() => handleDay(new Date(year, month, d))}
            event={events.some(e => 
              e.d === d && e.m === month+1 && e.y === year
            )}
          />
        )}
      </ol>
    </div>
  );
}

export default Calendar
