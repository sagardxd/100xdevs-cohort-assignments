import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { allNotificationSelector, jobsCountAtom, messageCountAtom, networkCountAtom, notificationCountAtom } from './atom'

const App = () => {
  return (
    <RecoilRoot>
      <Mainapp/>
    </RecoilRoot>
  )
}

const Mainapp = () => {

const networkCount = useRecoilValue(networkCountAtom)
const jobsCount = useRecoilValue(jobsCountAtom)
const messageCount = useRecoilValue(messageCountAtom)
const notificationCount = useRecoilValue(notificationCountAtom)
const allNotificationCount = useRecoilValue(allNotificationSelector)


  return <>
    <button>Home</button>
    <button>My network ({networkCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Messaging ({messageCount})</button>
    <button>Notification ({notificationCount >= 100 ? "99+" : notificationCount})</button>
    <button>Me ({allNotificationCount})</button>

  </>
}


export default App