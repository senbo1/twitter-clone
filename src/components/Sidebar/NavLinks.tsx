'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { IconType } from 'react-icons';
import { BsTwitterX } from 'react-icons/bs';
import { CiCircleMore, CiViewList } from 'react-icons/ci';
import { GoBell, GoHome, GoHomeFill, GoPerson, GoSearch } from 'react-icons/go';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { IoPeopleOutline } from 'react-icons/io5';

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

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default Nav;
