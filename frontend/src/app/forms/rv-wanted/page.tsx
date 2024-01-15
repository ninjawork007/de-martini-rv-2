"use client";

import FormField from "@/components/FormField";
import FormSubmissionMessage from "@/components/FormSubmissionMessage";
import Title from "@/components/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import * as yup from "yup";

import service from "../../../services";
import { urls } from "../../../services/urls";
import { stateOptions } from "../../../constants";

interface FormDataProps {
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    phoneNumber: number;
  };
  rvInformation?: {
    used?: boolean;
    new?: boolean;
    bankRepossession?: boolean;
    chassis?: string;
    desiredBrands?: string;
    other?: string;
  };
  vehicleType?: {
    motorhome?: boolean;
    classA?: boolean;
    classC?: boolean;
    dieselPusher?: boolean;
    trailer?: boolean;
    fifthWheel?: boolean;
    camper?: boolean;
    boat?: boolean;
    pickUp?: boolean;
    other?: boolean;
  };
  preferredLength?: string;
  otherSize?: string;
  desiredPriceRange?: string;
  engineType?: {
    gasEngine?: boolean;
    gasEngineSize?: string;
    dieselEngine?: boolean;
    dieselEngineMake?: string;
    dieselEngineHorsepower?: string;
    exhaustBrake?: boolean;
  };
  equipmentCondition?: {
    condition?: boolean;
    aluminumWheels?: boolean;
    hydraulicLevelingJacks?: boolean;
    rearViewCamera?: boolean;
    satelliteDish?: boolean;
    aquaHot?: boolean;
    lcdTVs?: boolean;
    fullBodyPaint?: boolean;
    completelyLoaded?: boolean;
    inverter?: boolean;
    watts?: string;
    isGeneratorFuelType?: boolean;
    generatorFuelType?: string;
    numberOfSlideOuts?: string;
    otherInformation?: string;
    questionsOrComments?: string;
  };
  tradeInDescription?: string;
  doNotHaveTradeIn?: boolean;
  contactMe?: boolean;
}

const vehicleTypes = [
  { label: "Motorhome", name: "vehicleType.motorhome" },
  { label: "Class A", name: "vehicleType.classA" },
  { label: "Class C", name: "vehicleType.classC" },
  { label: "Diesel Pusher", name: "vehicleType.dieselPusher" },
  { label: "Trailer", name: "vehicleType.trailer" },
  { label: "Fifth Wheel", name: "vehicleType.fifthWheel" },
  { label: "Camper", name: "vehicleType.camper" },
  { label: "Boat", name: "vehicleType.boat" },
  { label: "Pick-up", name: "vehicleType.pickUp" },
  { label: "Other", name: "vehicleType.other" },
];

const vehicleEquipmentCondition = [
  { label: "Aluminum Wheels", name: "equipmentCondition.aluminumWheels" },
  {
    label: "Hydraulic Leveling Jacks",
    name: "equipmentCondition.hydraulicLevelingJacks",
  },
  { label: "Rear View Camera", name: "equipmentCondition.rearViewCamera" },
  { label: "Satellite Dish", name: "equipmentCondition.satelliteDish" },
  { label: "Aqua Hot", name: "equipmentCondition.aquaHot" },
  { label: "LCD TV's", name: "equipmentCondition.lcdTVs" },
  { label: "Full Body Paint", name: "equipmentCondition.fullBodyPaint" },
  { label: "Completely Loaded", name: "equipmentCondition.completelyLoaded" },
  { label: "Inverter", name: "equipmentCondition.inverter" },
];

const schema = yup.object().shape({
  customer: yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    phoneNumber: yup
      .number()
      .typeError("Must be a number")
      .required("Phone Number is required"),
  }),
});

const RVWanted = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log(errors);

  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    const payload = {
      data: {
        title: "RV Wanted Form",
        submission: data,
      },
    };

    try {
      await service.post(urls.formSubmission, payload);
      setIsSubmitted(true);
    } catch (error) {}
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title heading="DeMartini RV Sales - RV Wanted Request Form" />

        {!isSubmitted && (
          <div>
            <div className="grid sm:grid-cols-2 px-12 md:px-44 2xl:px-64 gap-6">
              {/* left part */}

              <div className="flex flex-col">
                <h3 className="text-2xl mb-7 font-medium">
                  Customer Information:
                </h3>

                <FormField
                  label="Name"
                  name="customer.name"
                  placeholder="Enter Name"
                  error={errors?.customer?.name?.message}
                />
                <FormField
                  label="Email Address"
                  name="customer.email"
                  type="email"
                  placeholder="Enter Email Address"
                  error={errors?.customer?.email?.message}
                />
                <FormField
                  label="Address"
                  name="customer.address"
                  placeholder="Enter Address"
                  error={errors?.customer?.address?.message}
                />
                <FormField
                  label="City"
                  name="customer.city"
                  placeholder="Enter City"
                  error={errors?.customer?.city?.message}
                />
                <FormField
                  label="State"
                  name="customer.state"
                  placeholder="Select State"
                  error={errors?.customer?.state?.message}
                  type="select"
                  options={stateOptions}
                />
                <FormField
                  label="Phone Number"
                  name="customer.phoneNumber"
                  type="tel"
                  placeholder="Enter Phone Number"
                  error={errors?.customer?.phoneNumber?.message}
                />
              </div>

              {/* right part */}

              <div className="flex flex-col">
                <h3 className="text-2xl mb-7 font-semibold">Information:</h3>
                <b className="mt-2">What type of RV are you looking for?</b>
                <div className="flex flex-col gap-0">
                  <FormField
                    label="New"
                    name="rvInformation.new"
                    type="checkbox"
                  />
                  <FormField
                    label="Used"
                    name="rvInformation.used"
                    type="checkbox"
                  />
                  <FormField
                    label="Bank Repossession"
                    name="rvInformation.bankRepossession"
                    type="checkbox"
                  />
                </div>
                <FormField
                  label="Preferred Chassis Type"
                  name="rvInformation.chassis"
                  type="select"
                  options={[
                    { label: "Ford", value: "ford" },
                    { label: "Chevrolet", value: "chevrolet" },
                    { label: "Diesel Pusher", value: "dieselPusher" },
                    { label: "Other", value: "other" },
                  ]}
                />
                <FormField
                  label="Desired Brand(s)"
                  name="rvInformation.desiredBrands"
                  placeholder="Enter Desired Brand(s)"
                  error={errors?.rvInformation?.desiredBrands?.message}
                />
                <FormField
                  label="Other"
                  name="rvInformation.other"
                  placeholder="Enter Other"
                  error={errors?.rvInformation?.other?.message}
                />
                <b className="mt-2">Vehicle Type:</b>
                <div className="flex flex-col gap-0">
                  {vehicleTypes.map((vehicleType) => (
                    <FormField
                      key={vehicleType.label}
                      label={vehicleType.label}
                      name={vehicleType.name}
                      type="checkbox"
                    />
                  ))}
                </div>
                <FormField
                  label="Preferred Length"
                  name="preferredLength"
                  type="select"
                  options={[
                    {
                      label: "20 to 24 foot",
                      value: "20 to 24 foot",
                    },
                  ]}
                />
                <FormField
                  label="Other Size"
                  name="otherSize"
                  placeholder="Enter Other Size"
                  error={errors?.otherSize?.message}
                />
                <FormField
                  label="Your desired price range?"
                  name="desiredPriceRange"
                  type="select"
                  options={[
                    {
                      label: "Under $50,000",
                      value: "Under $50,000",
                    },
                  ]}
                />

                <b className="mt-2">Engine Type:</b>
                <FormField
                  label="Gas Engine"
                  name="engineType.gasEngine"
                  type="checkbox"
                />
                <FormField
                  label="Gas Engine Size"
                  name="engineType.gasEngineSize"
                  placeholder="Enter Gas Engine Size"
                  error={errors?.engineType?.gasEngineSize?.message}
                />
                <FormField
                  label="Diesel Engine"
                  name="engineType.dieselEngine"
                  type="checkbox"
                />
                <FormField
                  label="Diesel Engine Make"
                  name="engineType.dieselEngineMake"
                  placeholder="Enter Diesel Engine Make"
                  error={errors?.engineType?.dieselEngineMake?.message}
                />
                <FormField
                  label="Diesel Engine Horsepower"
                  name="engineType.dieselEngineHorsepower"
                  placeholder="Enter Diesel Engine Horsepower"
                  error={errors?.engineType?.dieselEngineHorsepower?.message}
                />
                <FormField
                  label="Exhaust Brake?"
                  name="engineType.exhaustBrake"
                  type="checkbox"
                />

                <b className="mt-2">Equipment/Condition:</b>
                <FormField
                  label="How would you rate the overall condition of your coach on a scale of 1-10? (1 being poor and 10 being excellent)"
                  name="condition"
                  placeholder="Condition"
                  error={errors?.equipmentCondition?.condition?.message}
                />
                {vehicleEquipmentCondition.map((condition) => (
                  <FormField
                    key={condition.label}
                    label={condition.label}
                    name={condition.name}
                    type="checkbox"
                  />
                ))}
                <FormField
                  label="Watts"
                  name="equipmentCondition.watts"
                  placeholder="Enter Watts"
                  error={errors?.equipmentCondition?.watts?.message}
                />
                <FormField
                  label="Generator Fuel Type"
                  name="equipmentCondition.isGeneratorFuelType"
                  type="checkbox"
                />
                <FormField
                  label=""
                  name="equipmentCondition.generatorFuelType"
                  type="select"
                  options={[
                    { label: "Gas", value: "gas" },
                    { label: "Diesel", value: "diesel" },
                    { label: "LP", value: "lp" },
                  ]}
                />
                <FormField
                  label="Number of Slide-Outs"
                  name="equipmentCondition.numberOfSlideOuts"
                  placeholder="Number of Slide-Outs"
                />
                <FormField
                  label="Other Information/Equipment"
                  name="equipmentCondition.otherInformation"
                  placeholder="Other Information/Equipment"
                />
                <FormField
                  label="Questions or Comments?"
                  name="equipmentCondition.questionsOrComments"
                  placeholder="Questions or Comments?"
                />

                <b className="mt-2">Possible Trade-In?</b>
                <FormField
                  label="Yes, I have a trade. Please give us a brief description."
                  name="tradeInDescription"
                />
                <FormField
                  label="No, I don't have a trade-in."
                  name="doNotHaveTradeIn"
                  type="checkbox"
                />
              </div>
            </div>

            <div className="flex justify-center my-9">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-1">
                  <FormField
                    label={
                      <span className="text-0053A6">
                        Please Contact Me as Soon as Possible
                      </span>
                    }
                    name="contactMe"
                    type="checkbox"
                  />
                </div>

                <div className="2xl:min-w-[600px] text-center">
                  <button className="primary-button" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isSubmitted && <FormSubmissionMessage />}
      </form>
    </FormProvider>
  );
};

export default RVWanted;
