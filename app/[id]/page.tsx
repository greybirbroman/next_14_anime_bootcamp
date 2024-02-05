import Image from 'next/image';
import { PageTitle, PageWrapper } from '@/components';
import { fetchAnimeById, fetchRelatedAnimeById } from './action';
import { MAIN_IMAGE_URL } from '@/utils';

type SinglePageProps = {
  params: {
    id: string;
  };
};

async function SinglePage({ params: { id } }: SinglePageProps) {
  const anime = await fetchAnimeById(id);

  const related = await fetchRelatedAnimeById(id);

  return (
    <>
      <PageTitle title={`${anime.name} (${anime.russian})`} />
      <section className="flex flex-col md:flex-row items-start md:gap-10 gap-5 min-h-[100%]">
        <div className="relative md:w-full w-1/2 sm:h-[650px] h-[250px] flex flex-[0.5] md:gap-10 gap-5">
          <Image
            src={`${MAIN_IMAGE_URL}${anime.image.original}`}
            alt={anime.name}
            width={240}
            height={360}
            quality={100}
            className="rounded-xl object-cover object-center w-full h-[33vh] md:h-[50vh]"
          />
          <aside className="md:hidden">stats</aside>
        </div>
        <p className="flex flex-[0.5] text-sm">{anime.description}</p>
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {related}
      </section>
    </>
  );
}

export default PageWrapper(SinglePage);
