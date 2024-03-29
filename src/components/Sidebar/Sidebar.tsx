import Link from 'next/link';
import { FC } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { Button } from '../UI/Button';
import NavLinks from './NavLinks';
import UserProfile from './UserProfile';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <header className="flex xs:justify-end shrink-0 w-0 xs:w-[66px] sm:w-[88px] xl:w-[255px] xl:-ml-8">
      <div className="fixed bottom-0 z-10 border-t border-gray-border w-full flex flex-col justify-between xs:border-0 xs:h-full xs:w-auto xs:py-1 xs:px-2 xl:px-0 xl:w-[255px]">
        
        <section className="flex flex-col justify-between xs:items-end xl:items-start">
          {/* Logo */}
          <h1 className="hidden xs:flex">
            <Link
              href="/home"
              className="p-3 rounded-full hover:bg-primary-light/10 transition-all duration-200"
            >
              <BsTwitterX className="w-7 h-7" />
            </Link>
          </h1>

          <NavLinks />

          {/* Post Button */}
          {/* Todo - show logo for smaller screen size */}
          <Button className='hidden xl:block mt-2 w-[92%] font-semibold text-base' size='lg'>Post</Button>
        </section>

        {/* User Profile */}
        <UserProfile /> 
      </div>
    </header>
  );
};

export default Sidebar;
