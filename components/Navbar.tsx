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

        <div className={navbar ? 'text-rose-100/100 lg:text-lg  md:text-lg text-sm gap-5 font-bold my-5 nav-bar active flex items-center w-full max-w-[320px] md:max-w-2xl lg:max-w-3xl rounded-xl justify-between px-4 py-5' : 'w-fulltext-md mb-14 lg:text-lg md:text-lg font-semibold'}>
            {
                navbar ? <div>
                <Link href="/" className='hover:text-rose-100/90 opacity-70 hover:underline'>
                    Logo
                </Link>
            </div> : ''
            }
            
            <div className='flex gap-3 lg:gap-7 md:gap-6'>
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