import React from 'react'
import MenuBar from '../component/reactFile/MenuBar'
import Body1 from '../component/reactFile/Body1'
import Career from '../component/reactFile/Career'
import Skill from '../component/reactFile/Skill'
import Contact from '../component/reactFile/Contact'
import Copyright from '../component/reactFile/Copyright'
const HomePage = () => {
  return (
    <div className='homePage'>
        <Body1/>
        <Career/>
        <Skill/>
        <Contact/>
        <Copyright/>
    </div>
  )
}

export default HomePage