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

interface FormDataProps {
  name: string;
  email: string;
  phoneNumber: number;
  year: number;
  make: string;
  model: string;
  mileage: number;
  alreadyOwn?: boolean;
  purchasing?: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .number()
    .typeError("Must be a number")
    .required("Phone Number is required"),
  year: yup.number().typeError("Must be a number").required("Year is required"),
  make: yup.string().required("Make is required"),
  model: yup.string().required("Model is required"),
  mileage: yup
    .number()
    .typeError("Must be a number")
    .required("Mileage is required"),
  alreadyOwn: yup.boolean(),
  purchasing: yup.boolean(),
});

const ExtendedService = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    const payload = {
      data: {
        title: "Extended Service Form",
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
        <Title heading="Extended Service Contract Quote Form" />
        {!isSubmitted && (
          <p className="px-12 md:px-44 2xl:px-64 mb-5">
            Please fill out the following information and we will get back to
            you with a quote on an Extended Service Contract and Tire & Wheel
            Protection for your RV!
          </p>
        )}

        {!isSubmitted && (
          <div>
            <div className="grid sm:grid-cols-2 px-12 md:px-44 2xl:px-64 gap-6">
              {/* left part */}

              <div className="flex flex-col">
                <h3 className="text-2xl mb-7 font-semibold">
                  Customer Information:
                </h3>

                <FormField
                  label="Name"
                  name="name"
                  placeholder="Enter Name"
                  error={errors.name?.message}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  error={errors.email?.message}
                />
                <FormField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter Phone Number"
                  error={errors.phoneNumber?.message}
                />
              </div>

              {/* right part */}

              <div className="flex flex-col">
                <h3 className="text-2xl mb-7 font-semibold">RV Information:</h3>

                <FormField
                  label="Year"
                  type="number"
                  name="year"
                  placeholder="Enter Year"
                  error={errors.year?.message}
                />
                <FormField
                  label="Make"
                  name="make"
                  placeholder="Enter Make"
                  error={errors.make?.message}
                />
                <FormField
                  label="Model"
                  name="model"
                  placeholder="Enter Model"
                  error={errors.model?.message}
                />
                <FormField
                  label="Mileage"
                  name="mileage"
                  type="number"
                  placeholder="Enter Mileage"
                  error={errors.mileage?.message}
                />

                <div className="flex flex-col gap-0">
                  <FormField
                    label="I Already Own"
                    name="alreadyOwn"
                    type="checkbox"
                  />
                  <FormField
                    label="I Am Purchasing"
                    name="purchasing"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center my-9">
              <div className="2xl:min-w-[600px]">
                <button className="primary-button w-full" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {isSubmitted && <FormSubmissionMessage />}
      </form>
    </FormProvider>
  );
};

export default ExtendedService;
