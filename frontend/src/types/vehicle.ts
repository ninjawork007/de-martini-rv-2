import { ImageMedia } from "./image";

export interface Category {
  id: number;
  attributes: {
    name: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    original_created_at: string | null;
    category_id: number | null;
    image?: { data: ImageMedia };
  };
}

export interface Status {
  id: number;
  attributes: {
    name: string;
    public: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Engine {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface CockpitOption {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface BedroomLayout {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string | null;
    publishedAt: string;
    original_created_at: string | null;
  };
}

export interface Furniture {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Flooring {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Slide {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Image {
  id: number;
  attributes: {
    title: string;
    is_front: number;
    position: string;
    description: string | null;
    public: number;
    image: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Vehicle {
  id: number;
  attributes: {
    vehicle_condition: string;
    template_id: number | null;
    asking_price: number;
    sale_price: number;
    web_special: number | null;
    featured_special: number | null;
    clearance: number;
    year: string;
    make: string;
    model: string;
    series: string;
    item_number: string;
    vin: string;
    mileage: string;
    length: number;
    description: string;
    short_description: string;
    fuel_type: string;
    generator_make: string;
    generator_kw: string;
    generator_hours: string;
    generator_type: string;
    hide_generator_hours: number | null;
    chassis: string;
    map_price: number | null;
    model_number: string;
    transmission: string;
    title: string;
    video_embed: string;
    tagline: string;
    warranty_title: string;
    warranty_description: string;
    drivetrain: string;
    style: string;
    interior_color: string;
    exterior_color: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    category: { data: Category };
    status: { data: Status };
    engine: { data: Engine };
    cockpit_option: { data: CockpitOption };
    bedroom_layout: { data: BedroomLayout };
    furniture: { data: Furniture };
    flooring: { data: Flooring };
    slide: { data: Slide };
    image: { data: Image };
  };
}
