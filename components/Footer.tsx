import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-36 pb-36 text-base'>
        <div className='flex space-x-5 font-medium'>
            <div>
                <Link href="/" className='hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>Twitter</Link>
            </div>
            <div>
                <Link href="/" className='hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>Github</Link>
            </div>
            <div>
                <Link href="/" className='hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>Blogs</Link>
            </div>
            <div>
                <Link href="/" className='hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>LinkdIn</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
