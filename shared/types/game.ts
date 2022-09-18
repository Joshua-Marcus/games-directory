export interface Game {
  id: string;
  name: string;
  image_url?: string;
  description: string;
  rating: number;
  release_date: Date;
}
