import Footer from '@/components/footer/Footer'
import React from 'react'

const PetaLayout = ({
    children,
}:{
    children: React.ReactNode
}) => {
  return (
    <main className='flex flex-col justify-between min-h-screen'>
        {children}
        <Footer/>
    </main>
  )
}

export default PetaLayout