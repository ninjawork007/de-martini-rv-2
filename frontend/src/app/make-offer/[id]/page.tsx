"use client";

import FormField from "@/components/FormField";
import FormSubmissionMessage from "@/components/FormSubmissionMessage";
import Title from "@/components/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import * as yup from "yup";

import useVehicle from "../../../hooks/useVehicle";
import { stateOptions } from "../../../constants";
import service from "../../../services";
import { urls } from "../../../services/urls";

interface FormDataProps {
  name: string;
  bidAmount: number;
  cashOffer: boolean;
  needFinancing: boolean;
  email: string;
  downPayment: number;
  address: string;
  questionsOrComments: string;
  city: string;
  state: string;
  phoneNumber: number;
  contactMe: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bidAmount: yup
    .number()
    .required("Bid Amount is required")
    .typeError("Must be a positive number")
    .min(0, "Must be a positive number"),
  cashOffer: yup.boolean().required("Cash Offer is required"),
  needFinancing: yup.boolean().required("Need Financing is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  downPayment: yup
    .number()
    .typeError("Must be a positive number")
    .min(0, "Must be a positive number")
    .required("Down Payment is required"),
  address: yup.string().required("Address is required"),
  questionsOrComments: yup
    .string()
    .required("Questions or comments are required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  phoneNumber: yup
    .number()
    .typeError("Must be a number")
    .required("Phone Number is required"),
  contactMe: yup.boolean().required(""),
});

const MakeOffer = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { vehicle } = useVehicle(id);

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
        title: "Bid Form",
        submission: data,
        vehicle: vehicle?.id,
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
        <Title heading="DeMartini RV Sales - Bid Form" />

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
                  label="Address"
                  name="address"
                  placeholder="Enter Address"
                  error={errors.address?.message}
                />
                <FormField
                  label="City"
                  name="city"
                  placeholder="Enter City"
                  error={errors.city?.message}
                />
                <FormField
                  label="State"
                  name="state"
                  placeholder="Select State"
                  error={errors.state?.message}
                  type="select"
                  options={stateOptions}
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
                <h3 className="text-2xl mb-7 font-semibold">
                  Vehicle: Item #D{vehicle?.attributes?.item_number}{" "}
                  {vehicle?.attributes?.year} {vehicle?.attributes?.make}{" "}
                  {vehicle?.attributes?.model}
                </h3>

                <FormField
                  label="Bid Amount"
                  name="bidAmount"
                  type="number"
                  placeholder="Enter Bid Amount"
                  error={errors.bidAmount?.message}
                />

                <div className="flex gap-3">
                  <FormField
                    label="Cash Offer"
                    name="cashOffer"
                    type="checkbox"
                  />
                  <FormField
                    label="Need Financing"
                    name="needFinancing"
                    type="checkbox"
                  />
                </div>

                <FormField
                  label="Down Payment"
                  name="downPayment"
                  type="number"
                  placeholder="What amount would you like to put down?"
                  error={errors.downPayment?.message}
                />
                <FormField
                  label="Questions or Comments"
                  name="questionsOrComments"
                  type="textarea"
                  placeholder="Questions or Comments"
                  error={errors.questionsOrComments?.message}
                />
              </div>
            </div>

            <div className="flex justify-center my-9">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  <FormField
                    label={
                      <span className="text-0053A6 font-medium">
                        Please Contact Me as Soon as Possible
                      </span>
                    }
                    name="contactMe"
                    type="checkbox"
                  />
                </div>

                <div className="2xl:min-w-[600px]">
                  <button className="primary-button w-full" type="submit">
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

export default MakeOffer;
