import Image from "next/image";
import React from "react";

const ShopByCategory = () => {
  return (
    <div className="py-20">
      <h3 className="pl-32 font-bold text-2xl py-8">Shop By Category</h3>

      <div className="flex justify-center gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div key={index}>
            <Image
              className="mx-auto"
              src="/images/rv.png"
              alt=""
              width={100}
              height={50}
            />

            <span className="flex gap-1">
              Class A Diesel
              <Image
                src="/icons/RightArrow.svg"
                height={10}
                width={10}
                alt=""
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
