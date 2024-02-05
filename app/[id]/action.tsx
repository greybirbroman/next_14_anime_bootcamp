'use server';

import AnimeCard from '@/components/AnimeCard';
import { RelatedAnimeProp } from '@/types';

export const fetchAnimeById = async (id: string) => {
  const response = await fetch(`${process.env.BASE_API_URL}/${id}`);

  const data = await response.json();

  return data;
};



export const fetchRelatedAnimeById = async (id: string) => {
  const response = await fetch(`${process.env.BASE_API_URL!}/${id}/related`);

  const data = await response.json();

  return data.map((item: RelatedAnimeProp, index: number) => (
    <AnimeCard
      key={index}
      anime={item.anime === null ? item.manga : item.anime}
      index={index}
    />
  ));
};
