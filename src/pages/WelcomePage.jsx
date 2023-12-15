import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { WelcomeCard } from '../components/WelcomeCard'

export const WelcomePage = () => {
  return (
        <div className='w-full h-screen flex items-center justify-center relative'>
            <Header />
            <WelcomeCard />
            <Footer/>   
        </div>
    )
}
