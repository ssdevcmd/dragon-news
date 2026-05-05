'use client';
import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/assets/user.png';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    
const { data: session, isPending } = authClient.useSession();
const user = session?.user;
console.log("User info", user, isPending);
    return (
        <div className='flex justify-between gap-4 mt-6 container mx-auto'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-3'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about-us'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            {isPending ? ( 
                <span className="loading loading-spinner text-secondary"></span>
            ) : user ? (
            
            <div className='flex items-center gap-2'>
                <h2>Hello, {user.name}</h2>
                <Image src={user?.image ||userAvatar} alt='user avatar' width={60} height={60} className='rounded-full'></Image>
                <button className='btn bg-purple-500 text-white' onClick={ async() => await authClient.signOut()}>Logout</button>
            </div>
            ) : (
            <button className='btn bg-purple-500 text-white'>
                 <Link href={'/login'}>Login</Link>
                 </button>
            )}
        </div>
    );
};

export default Navbar;