'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)


    const changeBackground = () => {
        if (window.scrollY >= 0) {
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

        <div className='text-rose-100/100 lg:text-lg  md:text-lg text-sm gap-5 lg:font-bold md:font-bold font-semibold my-5 nav-bar active flex items-center w-full max-w-[320px] md:max-w-2xl lg:max-w-3xl rounded-xl justify-between px-4 py-3'>
            <div>
                <Link href="/">
                    <Image
                        src={"/images/logo.png"}
                        width={40}
                        height={40}
                        alt='profile image'
                    />
                </Link>
            </div>

            <div className='flex gap-3 lg:gap-7 md:gap-6'>
                <div className=''>
                    <Link href="/" className='opacity-90 hover:text-rose-100/90 hover:opacity-70'>
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/projects" className='opacity-90  hover:text-rose-100/90 hover:opacity-70'>
                        Projects
                    </Link>
                </div>
                <div>
                    <Link href="/blogs" className='opacity-90  hover:text-rose-100/90 hover:opacity-70'>
                        Blogs
                    </Link>
                </div>
                <div>
                    <Link href="https://twitter.com/heypawanz" target='_blank' className='opacity-90  hover:text-rose-100/90 hover:opacity-70'>
                        Twitter
                    </Link>
                </div>
            </div>

        </div>


    )
}

export default Navbar