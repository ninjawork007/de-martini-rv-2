import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-why-choose-us-bg bg-cover bg-center bg-no-repeat p-10 lg:p-16">
      <h3 className="text-center font-bold text-2xl pb-8">
        Why Choose Demartini Sales
      </h3>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 gap-4 text-center">
          <div className="bg-FFFFFFCC rounded-md p-9 max-w-[450px]">
            <h4 className="pb-3 font-bold">Lowest Prices </h4>
            DeMartini RV Sales has the lowest prices on in-stock and specially
            ordered coaches. We deal in high volume so we can get you the best
            prices.
          </div>
          <div className="bg-FFFFFFCC rounded-md p-9 max-w-[450px]">
            <h4 className="pb-3 font-bold">Excellent Service </h4>
            We treat every customer with integrity, honesty, plus old-fashioned
            service and expertise. Our staff and management are knowledgeable
            and experienced, and we have a friendly, respectful sales staff -
            with no high pressure.
          </div>
          <div className="bg-FFFFFFCC rounded-md p-9 max-w-[450px]">
            <h4 className="pb-3 font-bold">A Family Run Business </h4>
            The owner, Tim DeMartini, has been in business since 1974. Many
            members of the family work at the dealership along with a great crew
            of employees. Together, we strive for excellence, honesty, and
            superb service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
