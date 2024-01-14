import Link from "next/link";
import React from "react";

const FormSubmissionMessage = () => {
  return (
    <div className="mx-auto px-12 md:px-44 2xl:px-64 py-4 md:py-12 2xl:py-20 gap-6">
      <p>Thank you for submitting our form. We have received your response.</p>
      <br />
      <p>
        Please let us know if you have any questions. You&apos;re welcome to
        contact us any time (800) 576-1921 or sales@demartini.com
        <div className="my-5">
          <Link href="/" className="text-0053A6 font-bold ">
            Click here{" "}
          </Link>
          to return to our homepage.
        </div>
      </p>
    </div>
  );
};

export default FormSubmissionMessage;
