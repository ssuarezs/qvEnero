import '../styles/globals.css'
import '../styles/calendar2.css'
import { RecoilRoot } from 'recoil'
import { useMainState } from '../libs/stateHooks'
import { useEffect } from 'react'
import { getstate, statePiso } from '../public/data'

import ModalQV from '../UIcomponents/modalQV'

const InitialState = () => {
  const savedState = getstate()
  const [mState, setMainState] = useMainState()
  useEffect(() => {
    setMainState(savedState)
  }, [])
  return <div/>
}

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <InitialState/>
      <Component {...pageProps} />
      <ModalQV/>
    </RecoilRoot>
  ) 
}

export default MyApp
