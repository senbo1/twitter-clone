import { FC } from 'react';
import { MdOutlineSettings } from 'react-icons/md';
import { Button } from '../UI/Button';

interface MainNavProps {}

const MainNav: FC<MainNavProps> = () => {
  return (
    <section className="sticky top-0 flex items-center border-b border-gray-border backdrop-blur-md">
      <Button
        variant="switch"
        size="lg"
        className="grow text-base font-semibold"
      >
        <div className='relative flex flex-col justify-center h-full'>
          <p className="my-auto">For you</p>
          <span className="absolute bg-twitter-blue-500 h-1.5 w-[56px] rounded-full bottom-0"></span>
        </div>
      </Button>
      <Button
        variant="switch"
        size="lg"
        className="grow text-primary-gray text-base"
      >
        Following
      </Button>

      <MdOutlineSettings className="h-10 w-10 hover:bg-white/10 p-2 mx-4 transition-all rounded-full" />
    </section>
  );
};

export default MainNav;
