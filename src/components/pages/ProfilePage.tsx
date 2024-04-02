'use client'
import '@/css/scroll.css'
import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from '../ui/card'
import { MdArrowRight } from 'react-icons/md'
import { profileMenuList } from '@/data-content/profile'

const profile = [
  'Visi dan Misi',
  'Sejarah',
  'Landasan Hukum',
  'Tugas dan Fungsi',
]



const ProfilePage = () => {

  const [profileMenu, setProfileMenu] = useState<number>(0)
  const handleProfileClick = (item: number) => {
    setProfileMenu(item)
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 mx-3 my-3'>
      <section className='border md:border-none rounded-full md:rounded-none px-2 overflow-x-auto md:overflow-visible scroll-bar '>
        <div className='flex md:flex-col justify-center gap-1 w-max mx-2 md:h-max md:py-2 md:px-2'>
          {profile.map((item, i) => (
            <Card
              onClick={() => handleProfileClick(i)}
              key={item + `-${i}`}
              className={`flex justify-between cursor-pointer my-2 md:my-0 rounded-full shadow-gray-500 shadow-md ${profileMenu === i ? 'ring-1 ring-preset-violet rounded-full' : ''}`}
            >
              <section
                className='flex justify-center items-center w-max py-1 md:py-2 px-2 md:px-4'
              >
                <h1>
                  {item}
                </h1>
              </section>
              <section className='flex justify-center items-center mx-3'>
                <MdArrowRight className='text-xl' />
              </section>
            </Card>
          ))}
        </div>
      </section>
      <section className='grid grid-flow-row'>
        {profileMenu !== null && (
          <div>
            <h1 className='font-bold'>
              {profileMenuList[profileMenu].title}
            </h1>
            <ul>
              {profileMenuList[profileMenu].content.map((listContent, i) => (
                <li key={`LIST-[${i}]`}>
                  {listContent.split('\n').map((line, j)=>(
                    <React.Fragment key={j}>
                      {j>0 && <br/>}
                      {line}
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section >
    </div >
  )
}

export default ProfilePage