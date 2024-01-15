import Title from "@/components/Title";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Title heading="Contact DeMartini RV Sales" />

      <div className="px-12 md:px-44 2xl:px-64">
        {/* <!-- Main Sales Office Section --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Main Sales Office</h2>
          <p>
            625 Idaho-Maryland Rd.
            <br /> Grass Valley, CA 95945
          </p>

          <h3 className="text-xl font-bold mt-4">Contact Information</h3>
          <p>
            Phone: (800) 576-1921 / (530) 272-1921
            <br /> Fax: (530) 272-9413
          </p>

          <p className="mt-2">
            Email: <a href="mailto:sales@demartini.com">sales@demartini.com</a>
          </p>

          <h3 className="text-xl font-bold mt-4">Hours</h3>
          <p>
            Mon.-Fri. 8:30-5:30
            <br /> Sat. 9:00-5:00
            <br /> Sun. 10:00-4:00 (Only Motorized Sales Open Sunday)
          </p>
        </section>

        {/* <!-- Parts & Service Center Section --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Parts & Service Center</h2>
          <p>
            625 Idaho-Maryland Rd.
            <br /> Grass Valley, CA 95945
          </p>

          <h3 className="text-xl font-bold mt-4">Contact Information</h3>
          <p>
            Service: (530) 272-0671
            <br /> Parts: (530) 272-0670
            <br /> Fax: (530) 272-9413
          </p>

          <p className="mt-2">
            Email:{" "}
            <a href="mailto:service@demartini.com">service@demartini.com</a>
          </p>

          <h3 className="text-xl font-bold mt-4">Hours</h3>
          <p>
            Mon.-Fri. 8:30-5:00
            <br /> Sat. Closed
            <br /> Sun. Closed
          </p>
        </section>

        {/* <!-- Sacramento Office Section --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Sacramento Office</h2>
          <p>
            Consolidated to Our Larger Grass Valley Superstore!
            <br /> 625 Idaho-Maryland Rd.
            <br /> Grass Valley, CA 95945
          </p>

          <p className="mt-2">
            Email: <a href="mailto:sales@demartini.com">sales@demartini.com</a>
          </p>
        </section>

        {/* <!-- Old Grass Valley Office Section --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Old Grass Valley Office</h2>
          <p>
            Trailers, & Auto Sales
            <br /> 1305 E. Main St.
            <br /> Grass Valley, CA 95945
          </p>
        </section>

        {/* <!-- DeMartini Park Homes Section --> */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold">DeMartini Park Homes</h2>
          <p>
            384 Railroad Ave.
            <br /> Grass Valley, CA 95945
          </p>

          <h3 className="text-xl font-bold mt-4">Contact Information</h3>
          <p>
            Phone: (800) 576-1921 / (530) 272-6400
            <br /> Email:{" "}
            <a href="mailto:sales@demartini.com">sales@demartini.com</a>
          </p>

          <h3 className="text-xl font-bold mt-4">Hours</h3>
          <p>
            Mon.-Fri. 9:00-5:00
            <br /> Sat. 9:00-5:00
            <br /> Sun. Closed
          </p>
        </section>

        {/* <!-- Maps Section --> */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold">Maps</h2>
          <p>Click on a Link Below For Maps To:</p>

          <div className="mt-2">
            <a href="http://maps.google.com/maps?f=q&hl=en&geocode=&time=&date=&ttype=&q=625+Idaho+Maryland+Rd,+Grass+Valley,+CA+95945&sll=39.22351,-121.044123&sspn=0.00886,0.022681&ie=UTF8&om=0&ll=39.223593,-121.0479&spn=0.00886,0.022681&t=h&z=16&iwloc=addr">
              Main Office - Grass Valley, CA
            </a>
          </div>

          <p className="mt-2">
            Click Here for{" "}
            <a href="http://www.rvdeals.tv/directions.htm">
              Driving Directions From Sacramento International Airport
            </a>
            to the Main Office in Grass Valley, CA.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
