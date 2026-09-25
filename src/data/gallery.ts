export type GalleryCategory = 'PUNK' | 'LETTERING' | 'SIGNALS';

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  page: string;
  image: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  { id: 1, title: "GARDEN REBEL", category: 'PUNK', page: "01", image: "/gallery_garden.png" },
  { id: 2, title: "CINEMA CHAOS", category: 'LETTERING', page: "05", image: "/gallery_theater.jpg" },
  { id: 3, title: "PHONE BOOTH", category: 'SIGNALS', page: "08", image: "/gallery_phone.jpg" },
  { id: 4, title: "ALLEY ATTACK", category: 'PUNK', page: "12", image: "/gallery_alley.jpg" },
  { id: 5, title: "TAXI TURMOIL", category: 'SIGNALS', page: "15", image: "/gallery_taxi.jpg" },
  { id: 6, title: "MOHAWK SPIKE", category: 'PUNK', page: "19", image: "/hero.jpg" },
  { id: 7, title: "TEDDY STOMP", category: 'PUNK', page: "22", image: "/gallery_7.png" },
  { id: 8, title: "BALCONY RAGE", category: 'SIGNALS', page: "25", image: "/gallery_8.jpg" },
];

export const GALLERY_FILTERS = ['ALL', 'PUNK', 'LETTERING', 'SIGNALS'] as const;
export type GalleryFilter = typeof GALLERY_FILTERS[number];
