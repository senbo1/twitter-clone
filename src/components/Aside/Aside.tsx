import { FC } from 'react';

interface AsideProps {}

const Aside: FC<AsideProps> = () => {
  return <aside className='hidden lg:block lg:w-[290px] xl:w-[350px]'>Aside</aside>;
};

export default Aside;
