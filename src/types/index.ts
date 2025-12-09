export interface GameDetails{
    id:number,
    background_image: string;
    background_image_additional: string;
    name: string;
    rating: number;
    description_raw: string,
}

interface RawTag{
    id: number,
    name: string;
}

export interface Game{
    id: number;
    background_image: string;
    name: string;
    rating: number;
    tags: RawTag[];
}