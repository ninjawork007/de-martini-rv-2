"use client";

import Pagination from "@/components/Pagination";
import Title from "@/components/Title";
import React, { useState } from "react";

const Card = () => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] bg-F4F5F7 border-CFD8DC">
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center text-3xl rounded-full w-20 h-20 text-white bg-0A7194">
            G
          </div>
          <div className="flex flex-col">
            <div className="text-263238 text-lg">Steve and Jennifer W.</div>
            <div className="text-546E7A">15 December 2023</div>
          </div>
        </div>

        <div className="text-78909C">
          Brent, Just wanted to thank you for all the help getting us into our
          new RV. We are so lucky to have gone to DeMartini to buy our DX3. We
          are so happy! I believe any place else would have sold it to the
          highest bidder. You went out of your way to hold it for us, that shows
          integrity, going above and beyond. That is an extremely hard thing to
          come by these days. You and everyone we worked with made us feel
          comfortable like we were part of the family and that was really nice.
          Jennifer and I would like you to know we really appreciate all you did
          for us. We wish you and everyone that works at DeMartini all the very
          best!
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [total, setTotal] = useState(20);

  return (
    <div>
      <Title heading="Testimonials" />
      <div className="grid grid-cols-2 gap-5 px-10 lg:px-30 2xl:px-48">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Pagination
        totalPages={total}
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
