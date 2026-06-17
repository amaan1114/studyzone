export interface Center {
  slug: string;
  city: string;
  name: string;
  tagline: string;
  address: string;
  accentColor: string;
  status: string;
  statusType: "open" | "coming-soon";
  mapEmbedUrl: string;
  hours: { label: string; value: string }[];
  gettingHere: { icon: string; text: string }[];
  stats: { label: string; value: string }[];
  facilities: string[];
  highlights: { label: string; value: string }[];
  email: string;
  phone: string;
}
