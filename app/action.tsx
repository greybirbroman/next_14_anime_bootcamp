'use server';

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${process.env.BASE_API_URL!}?page=${page}&limit=8&order=popularity`,
  );

  const data = await response.json();


  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
};
