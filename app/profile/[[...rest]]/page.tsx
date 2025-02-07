import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import { Button } from '@/components/ui/button'
import { UserProfile } from '@clerk/nextjs'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    <Header />
    <div className='w-full  min-h-screen flex items-center justify-center flex-col md:mb-10' >
        <div className='mt-10 mb-3'> 
        <Link href='/'>
        <Button>
           <MoveLeft />   Back
        </Button>
        </Link>
        </div>
        <UserProfile />
    </div>
    <Footer />
    </>
  )
}

export default Page