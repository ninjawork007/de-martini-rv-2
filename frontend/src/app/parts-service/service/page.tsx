import Title from "@/components/Title";
import React from "react";

const Service = () => {
  return (
    <div>
      <Title heading="RV Service Center" />

      <div className="px-12 md:px-44 2xl:px-64">
        {/* <!-- Service Center Section --> */}
        <section className="mb-8">
          <p>
            Our state-of-the-art Service Center has nine service bays to
            accommodate all of your service and specialty RV repair needs.
          </p>

          <p className="mt-4">
            Fill out one of the forms below to schedule a service appointment or
            get in touch with one of our experts for a specialty RV repair or
            modification.
          </p>
        </section>

        {/* <!-- RV Service Appointment Request Form Section --> */}
        <section className="mb-8">
          <h3 className="text-xl font-bold">RV Service Appointment Request</h3>
          <p>
            Fill out this form to request and schedule a service appointment.
          </p>

          <p className="mt-4">
            Call us for a quote on the following services!{" "}
            <span className="font-bold">(530) 272-0671</span>
          </p>

          <ul className="list-disc pl-8 mt-2">
            <li>
              <span className="font-bold">Expert Collision Repair:</span> We
              will work with your insurance company to get your coach looking
              like new again! Upload pictures and we can get started.
            </li>
            <li>
              <span className="font-bold">RV Windshield Repair:</span>{" "}
              Specializing in one-piece windshield replacement. We will work
              with your insurance company.
            </li>
            <li>
              <span className="font-bold">TV Modification:</span> Upgrade your
              old tube TV to a new HD LCD TV! We do cabinet modifications to fit
              the new TV as well as HD Satellite/Receiver installation. Upload
              your pictures and we can email you a price quote!
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Service;
