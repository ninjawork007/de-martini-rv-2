"use client";

import Pagination from "@/components/Pagination";
import RenderHTML from "@/components/RenderHTML";
import Title from "@/components/Title";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

import { urls } from "../../services/urls";
import service from "../../services";
import { Testimonial } from "../../types/testimonial";

interface CardProps {
  from: string;
  date: string;
  testimonial: string;
}

const Card: React.FC<CardProps> = ({ date, from, testimonial }) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] bg-F4F5F7 border-CFD8DC">
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            style={{
              backgroundColor:
                "#" +
                ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
            }}
            className="flex items-center justify-center text-3xl rounded-full w-20 h-20 text-white"
          >
            {from.slice(0, 1)}
          </div>
          <div className="flex flex-col">
            <div className="text-263238 text-lg">{from}</div>
            <div className="text-546E7A">
              {dayjs(date).format("DD MMM YYYY")}
            </div>
          </div>
        </div>

        <div className="text-78909C">
          <RenderHTML html={testimonial} />
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [totalTestimonials, setTotalTestimonials] = useState(0);

  // get testimonials
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const res = await service.get(
          `${urls.testimonials}?pagination[start]=${itemOffset}&populate=*`
        );
        setTestimonials(res?.data?.data);
        setTotalTestimonials(res?.data?.meta?.pagination?.total);
      } catch (error) {}
    };

    getTestimonials();
  }, [itemOffset]);

  return (
    <div>
      <Title heading="Testimonials" />
      <div className="grid grid-cols-2 gap-5 container-padding-x">
        {testimonials?.map((testimonial) => (
          <Card
            key={testimonial?.id}
            from={testimonial?.attributes?.citation}
            date={testimonial?.attributes?.display_date}
            testimonial={testimonial?.attributes?.testimonial}
          />
        ))}
      </div>

      <Pagination
        totalPages={totalTestimonials}
        itemOffset={itemOffset}
        setItemOffset={setItemOffset}
      />

      <div className="text-center my-20">
        <button className="uppercase primary-button min-w-[300px] lg:min-w-[420px]">
          Testimonial From Web
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
