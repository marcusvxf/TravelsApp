export interface ICard {
  title: string;
  id: number;
  local: string;
  date: string;
  itens?: number;
  imageUrl?: string;
  openSelectedItem: (id: number) => void;
}
