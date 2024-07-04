import React from 'react';
import Link from 'next/link';
import { FishSymbolIcon } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className='fixed justify-between flex w-full  p-4 dark:bg-slate-950 border-b '>
            <Link href='/' className='hover:text-orange-500 ease-in-out duration-300' >
                <div className="logo flex gap-2 align-middle">

                    <FishSymbolIcon />
                </div>
            </Link>
            <nav>
                <ul className='flex gap-4'>
                    <li className='hover:text-orange-500 ease-in-out duration-300 '>
                        <a href="/">projects</a>
                    </li>
                    <li className='hover:text-orange-500 ease-in-out duration-300'>
                        <a href="/about">about</a>
                    </li>
                    <li className='hover:text-orange-500 ease-in-out duration-300'>
                        <a href="/contact">contact</a>
                    </li>
                </ul>

            </nav>

        </header>
    );
};

export default Header;