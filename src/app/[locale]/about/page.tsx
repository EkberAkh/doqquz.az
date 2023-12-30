import React from 'react'
import { useTranslations } from 'next-intl'


const About = () => {
    const t = useTranslations()
  return (
    <>
    <div>About</div>
    <h1>{t('About.mission.title')}</h1>
    
    </>

  )
}

export default About