export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  isFree: boolean;
  imageUrl?: string | null;
}
