import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import ProfilePage from '@/components/pages/ProfilePage'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col min-h-screen justify-between'>
        <ProfilePage/>
        <Footer/>
    </main>
  )
}

export default page