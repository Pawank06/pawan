'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    return (

        <div className={navbar ? 'text-rose-100/100 lg:text-lg  md:text-lg text-sm font-bold my-5 nav-bar active flex items-center rounded-xl justify-between px-4 py-5 max-w-3xl w-full md:max-w-2xl lg:max-w-3xl lg:w-full md:w-full ' : 'text-sm mb-14 lg:text-lg md:text-lg gap-10 font-semibold'}>
            {
                navbar ? <div>
                <Link href="/" className='hover:text-rose-100/90 opacity-70 hover:underline'>
                    Logo
                </Link>
            </div> : ''
            }
            
            <div className={navbar ?'grid grid-flow-col gap-4 ': 'flex gap-16'}>
                <div className=''>
                    <Link href="/" className='hover:text-rose-100/90 opacity-70 hover:underline'>
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/" className='hover:text-rose-100/90 opacity-70 hover:underline'>
                        projects
                    </Link>
                </div>
                <div>
                    <Link href="/" className='hover:text-rose-100/90 opacity-70 hover:underline'>
                        Blogs
                    </Link>
                </div>
                <div>
                    <Link href="/" className='hover:text-rose-100/90 opacity-70 hover:underline'>
                        Twitter
                    </Link>
                </div>
            </div>

        </div>


    )
}

export default Navbar