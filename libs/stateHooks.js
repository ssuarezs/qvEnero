import { atom, useRecoilState } from 'recoil'
const mainState = atom({
  key: 'main-state', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
})

export const useMainState = () => {
  const [mState, setMainState] = useRecoilState(mainState)
  return [mState, setMainState]
}


