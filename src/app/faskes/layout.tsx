import Footer from '@/components/footer/Footer'
import React from 'react'

const FaskesLayout = ({
    children,
}:{
    children: React.ReactNode
}) => {
  return (
    <main>
        {children}
        <Footer/>
    </main>
  )
}

export default FaskesLayout