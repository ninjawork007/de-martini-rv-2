export interface ImageMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any; // You might want to replace 'any' with a more specific type
    folderPath: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface VehicleImage {
  id: number;
  attributes: {
    title: string;
    is_front: number;
    position: string;
    description: string;
    public: number;
    image: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    group: {
      data: {
        id: number;
        attributes: {
          name: string;
          description: string;
          createdAt: string | null;
          updatedAt: string | null;
          publishedAt: string;
        };
      };
    };
  };
}
