import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import Image from 'next/image'

const ReacOut = () => {
  return (
    <div className='fixed right-0 -bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-[13rem] h-auto flex items-center justify-center relative'>
        <CircularText  className={"fill-dark dark:fill-light animate-spin-slow"}/>
        {/* <Image src='/images/rotating_text.png' width={200} height={200} alt='Reach Out' /> */}
        <Link href='mailto:guptanawneet9955@gmail.com' className='flex items-center bg-dark dark:bg-light dark:text-dark text-light shadow-md  border border-solid border-dark dark:border-light w-[5rem] h-[5rem] rounded-full justify-center text-center font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-dark dark:hover:text-light dark:hover:bg-dark hover:bg-light'>
        Reach Out
        </Link>
      </div>
    </div>
  )
}

export default ReacOut
