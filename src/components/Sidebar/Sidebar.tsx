'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { BsThreeDots, BsTwitterX } from 'react-icons/bs';
import { CiCircleMore, CiViewList } from 'react-icons/ci';
import { GoBell, GoHome, GoHomeFill, GoPerson, GoSearch } from 'react-icons/go';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { IoPeopleOutline } from 'react-icons/io5';
import Button from '../UI/Button';
import Image from 'next/image';

interface SidebarProps {}

type Link = {
  name: string;
  path: string;
  Icon: IconType;
  ActiveIcon?: IconType;
  disabled?: boolean;
  hidden?: boolean;
};

const links: Link[] = [
  {
    name: 'Home',
    path: '/home',
    Icon: GoHome,
    ActiveIcon: GoHomeFill,
  },
  {
    name: 'Explore',
    path: '/explore',
    Icon: GoSearch,
    disabled: true,
  },
  {
    name: 'Notifications',
    path: '/notifications',
    Icon: GoBell,
    disabled: true,
  },
  {
    name: 'Messages',
    path: '/messages',
    Icon: HiOutlineEnvelope,
    disabled: true,
  },
  {
    name: 'Lists',
    path: '/lists',
    Icon: CiViewList,
    disabled: true,
    hidden: true,
  },
  {
    name: 'Communities',
    path: '/communities',
    Icon: IoPeopleOutline,
    disabled: true,
    hidden: true,
  },
  {
    name: 'Premium',
    path: '/premium',
    Icon: BsTwitterX,
    disabled: true,
    hidden: true,
  },
  {
    name: 'Profile',
    path: '/user/harsh',
    Icon: GoPerson,
    hidden: true,
  },
  {
    name: 'More',
    path: '/more',
    Icon: CiCircleMore,
    hidden: true,
  },
];

const Sidebar: FC<SidebarProps> = () => {
  const pathname = usePathname();
  return (
    <header className="flex xs:justify-end shrink-0 w-0 xs:w-[66px] sm:w-[88px] xl:w-[255px] xl:-ml-8">
      <div className="fixed bottom-0 z-10 border-t border-gray-border w-full flex flex-col justify-between xs:border-0 xs:h-full xs:w-auto xs:py-1 xs:px-2 xl:px-0 xl:w-[255px]">
        <section className="flex flex-col justify-between xs:items-end xl:items-start">
          <h1 className="hidden xs:flex">
            <Link
              href="/home"
              className="p-3 rounded-full hover:bg-primary-light/10 transition-all duration-200"
            >
              <BsTwitterX className="w-7 h-7" />
            </Link>
          </h1>
          <nav className="flex justify-around xs:flex-col xs:items-start">
            {links.map(({ name, path, Icon, ActiveIcon, disabled, hidden }) => {
              const isActive = pathname === path;

              return (
                <Link
                  href={path}
                  key={path}
                  onClick={disabled ? (e) => e.preventDefault() : undefined}
                  className={cn(
                    'flex gap-2 items-center',
                    'p-[11px] xl:pr-8 rounded-full',
                    'hover:bg-primary-light/10 transition-all duration-200',
                    {
                      'hidden xs:flex': hidden,
                      'font-semibold': isActive,
                      'cursor-not-allowed': disabled,
                    }
                  )}
                >
                  <div className="flex gap-5 items-center">
                    {isActive && ActiveIcon ? (
                      <ActiveIcon className="w-7 h-7" />
                    ) : (
                      <Icon className="w-7 h-7" />
                    )}
                    <p className="hidden xl:block text-xl">{name}</p>
                  </div>
                </Link>
              );
            })}
          </nav>
          <Button className="hidden xl:block mt-2 w-[92%]">Post</Button>
        </section>
        <div className="hidden xl:flex items-center gap-4 mb-1 p-3 rounded-full hover:bg-primary-light/10 transition-all duration-200">
          <Image
            src="/profilepic.jpg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-sm truncate">harsh</p>
            <p className="text-gray-500 text-sm truncate">@harsh</p>
          </div>
          <BsThreeDots className="w-5 h-5 ml-auto" />
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
