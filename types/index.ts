export interface AnimeProp {
    id: string;
    name: string;
    russian: string;
    image: {
      original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
  }
  
  export interface AnimeCardProp {
    anime: AnimeProp;
    index: number;
  }

  export interface RelatedAnimeProp {
    relation: string;
    relation_russian: string;
    anime: AnimeProp;
    manga: any;
  }