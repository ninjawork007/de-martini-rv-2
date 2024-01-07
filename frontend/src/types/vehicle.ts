interface Category {
  data: {
    id: number;
    attributes: {
      name: string;
      order: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      original_created_at: string | null;
      category_id: number | null;
    };
  };
}

interface Status {
  data: {
    id: number;
    attributes: {
      name: string;
      public: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface Engine {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface CockpitOption {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface BedroomLayout {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string | null;
      publishedAt: string;
      original_created_at: string | null;
    };
  };
}

interface Furniture {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface Flooring {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface Slide {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface Image {
  data: {
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
    category: Category;
    status: Status;
    engine: Engine;
    cockpit_option: CockpitOption;
    bedroom_layout: BedroomLayout;
    furniture: Furniture;
    flooring: Flooring;
    slide: Slide;
    image: Image;
  };
}
