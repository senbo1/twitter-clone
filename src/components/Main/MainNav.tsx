import { FC } from 'react';
import { MdOutlineSettings } from 'react-icons/md';
import { Button } from '../UI/Button';

interface MainNavProps {}

const MainNav: FC<MainNavProps> = () => {
  return (
    <header className="sticky top-0 flex items-center border-b border-gray-border backdrop-blur-md pb-[1px] z-10">
      <Button
        variant="switch"
        size="lg"
        className="grow"
      >
        <div className='relative flex flex-col justify-center h-full'>
          <p className="text-md font-semibold">For you</p>
          <span className="absolute bg-twitter-blue-500 h-1 w-[56px] rounded-full bottom-0"></span>
        </div>
      </Button>
      <Button
        variant="switch"
        size="lg"
        className="grow text-primary-gray text-md"
      >
        Following
      </Button>

      <MdOutlineSettings className="h-9 w-9 hover:bg-white/10 p-2 mx-4 transition-all rounded-full cursor-pointer" />
    </header>
  );
};

export default MainNav;
