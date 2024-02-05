import Image from 'next/image';
import Link from 'next/link';
import { AnimeCardVariants } from '@/utils/motion';
import { MotionDiv } from './MotionDiv';
import { MAIN_IMAGE_URL } from '@/utils';
import { AnimeCardProp } from '@/types';

function AnimeCard({ anime, index }: AnimeCardProp) {

  return (
    <MotionDiv
      variants={AnimeCardVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0.5 }}
      className="max-w-sm rounded relative w-full"
    >
      <Link href={`/${anime.id}`}>
      <div className="relative w-full h-[37vh]">
        <Image
          src={`${MAIN_IMAGE_URL}${anime.image.original}`}
          alt={anime.name}
          title={anime.russian}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-2 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
      </Link>
    </MotionDiv>
  );
}

export default AnimeCard;
