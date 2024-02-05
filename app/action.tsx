'use server';

import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/types";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${process.env.BASE_API_URL!}?page=${page}&limit=8&order=popularity`,
  );

  const data = await response.json();


  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ))
};
