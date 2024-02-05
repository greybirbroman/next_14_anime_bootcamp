import { fetchAnime } from './action';
import { PageTitle, LoadMore, PageWrapper } from '@/components';

async function Home() {
  const data = await fetchAnime(1);

  return (
    <>
      <PageTitle title='Explore Anime' />
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </>
  );
}

export default PageWrapper(Home);
