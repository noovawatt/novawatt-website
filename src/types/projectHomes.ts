export type ProjectHomes = {
  name: string;
  slug: string;
  location: string;
  rate: string;
  images: ProjectImage[];
  description: string[];
  details: { title: string; text: string }[];
  features: string[];
  mapUrl: string;
  review: string;
  reviewClient: string;
  reviewImage: string;
};

interface ProjectImage {
  src: string;
}
