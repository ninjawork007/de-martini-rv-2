import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-FFFFFFCC rounded-xl p-9 max-w-[450px]">
      <h4 className="pb-3 font-bold text-2xl">{title}</h4>
      <div className="text-lg text-455A64">{description}</div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="bg-why-choose-us-bg bg-cover bg-center bg-no-repeat py-10 lg:py-16 container-padding-x">
      <h3 className="text-center leading-[48px] font-bold text-2xl 2xl:text-3xl pb-8">
        Why Choose Demartini Sales
      </h3>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 gap-4 text-center">
          <Card
            title="Lowest Prices"
            description="DeMartini RV Sales has the lowest prices on in-stock and specially
              ordered coaches. We deal in high volume so we can get you the best
              prices."
          />
          <Card
            title="Excellent Service"
            description="We treat every customer with integrity, honesty, plus old-fashioned
            service and expertise. Our staff and management are knowledgeable
            and experienced, and we have a friendly, respectful sales staff -
            with no high pressure."
          />
          <Card
            title="A Family Run Business"
            description="The owner, Tim DeMartini, has been in business since 1974. Many
            members of the family work at the dealership along with a great crew
            of employees. Together, we strive for excellence, honesty, and
            superb service."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
