import { FC } from 'react';
import MainNav from '@/components/Main/MainNav';

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <main className="border-x border-gray-border grow w-full max-w-[600px] relative">
      {/* For You/ Following */}
      <MainNav />
      {/* Post Area */}
      <div className=" h-[1000px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio animi
        quam quae explicabo incidunt velit ipsa, voluptates illum nam est
        aliquam, at repellendus, minima corrupti nesciunt perspiciatis magni
        facere aperiam! Sit, labore sint? Illum necessitatibus nisi dolorum
        earum, tenetur ratione quis dolores similique suscipit obcaecati facere
        molestiae. Voluptatum, rem. Reprehenderit voluptatem et consequuntur
        animi nostrum odit, architecto dolorum quo deleniti? Veritatis optio
        perferendis nostrum nobis hic adipisci quidem soluta vero a sunt.
        Minima, quasi impedit! Et eius minima fugit? Repellendus ea, nisi earum
        dolorum obcaecati vel quia ullam iure at. is accusamus repudiandae, nam,
        inventore excepturi mollitia placeat, molestiae provident perspiciatis
        exercitationem officia tempore ab fuga. Tempora eum ullam voluptatem
        recusandae temporibus dolorem magni.
      </div>
      {/* Timeline */}
      <div>timeline</div>
    </main>
  );
};

export default page;
