import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { ITEMS_PER_PAGE } from "../constants";
import styles from "./styles.module.css";

interface PaginateProps {
  totalPages: number;
  itemOffset: number;
  setItemOffset: (page: number) => void;
}

const Pagination: React.FC<PaginateProps> = ({
  totalPages,
  itemOffset = 0,
  setItemOffset,
}) => {
  const router = useRouter();

  const pageCount = Math.ceil(totalPages / ITEMS_PER_PAGE);

  useEffect(() => {
    itemOffset && router.push("#title");
  }, [router, itemOffset]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % totalPages;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <div className="flex gap-1">
          Next
          <Image
            src="/icons/CaretDoubleRight.svg"
            height={15}
            width={15}
            alt=""
          />
        </div>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={
        <div className="flex gap-1">
          <Image
            src="/icons/CaretDoubleRight.svg"
            height={15}
            width={15}
            alt=""
            className="rotate-180"
          />
          Prev
        </div>
      }
      renderOnZeroPageCount={null}
      className="flex justify-center items-center my-5"
      activeClassName={styles.active}
      pageClassName={classNames("px-2 sm:px-5 py-1 sm:py-3", styles.page)}
      nextClassName="ml-3 text-sm"
      previousClassName="mr-3 text-sm"
    />
  );
};

export default Pagination;
