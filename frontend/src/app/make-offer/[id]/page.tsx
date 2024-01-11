"use client";

import Title from "@/components/Title";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useVehicle from "../../../hooks/useVehicle";
import { stateOptions } from "../../../constants";

interface FormData {
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
  phoneNumber: string;
  contactMe: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bidAmount: yup.number().required("Bid Amount is required"),
  cashOffer: yup.boolean().required("Cash Offer is required"),
  needFinancing: yup.boolean().required("Need Financing is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  downPayment: yup
    .number()
    .nullable()
    .min(0, "Must be a positive number")
    .required("Down Payment is required"),
  address: yup.string().required("Address is required"),
  questionsOrComments: yup
    .string()
    .required("Questions or comments are required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  contactMe: yup.boolean().required(""),
});

const MakeOffer = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { vehicle } = useVehicle(id);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  const Field = ({
    name,
    error,
    placeholder,
    label,
    type,
    options,
    ...rest
  }: {
    label: React.ReactNode;
    name: keyof FormData;
    type?: string;
    error?: string;
    placeholder?: string;
    options?: {
      label: string;
      value: string;
    }[];
  }) => {
    return (
      <div className="my-3">
        {type === "checkbox" ? (
          <div className="flex gap-1">
            <input
              placeholder={placeholder}
              type={type}
              {...register(name)}
              {...rest}
            />
            <label className="text-black">{label}</label>
          </div>
        ) : type === "select" ? (
          <div className="flex flex-col gap-1">
            <label className="text-607D8B text-sm">{label}</label>
            <select
              className="input-box px-4 py-3"
              {...register(name)}
              {...rest}
            >
              {options?.map(({ value, label }) => (
                <option key={label} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <label className="text-607D8B text-sm">{label}</label>
            <input
              className="input-box px-4 py-3"
              placeholder={placeholder}
              type={type}
              {...register(name)}
              {...rest}
            />
          </div>
        )}

        <p className="text-FF4000">{error}</p>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title heading="DeMartini RV Sales - Bid Form" />

      <div>
        <div className="grid grid-cols-2 px-64 gap-6">
          {/* left part */}

          <div className="flex flex-col">
            <h3 className="text-2xl mb-7 font-medium">Customer Information:</h3>

            <Field label="Name" name="name" placeholder="Enter Name" />
            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter Email Address"
              error={errors.email?.message}
            />
            <Field
              label="Address"
              name="address"
              placeholder="Enter Address"
              error={errors.address?.message}
            />
            <Field
              label="City"
              name="city"
              placeholder="Enter City"
              error={errors.city?.message}
            />
            <Field
              label="State"
              name="state"
              placeholder="Select State"
              error={errors.state?.message}
              type="select"
              options={stateOptions}
            />
            <Field
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

            <Field
              label="Bid Amount"
              name="bidAmount"
              type="number"
              placeholder="Enter Bid Amount"
            />

            <div className="flex gap-3">
              <Field label="Cash Offer" name="cashOffer" type="checkbox" />
              <Field
                label="Need Financing"
                name="needFinancing"
                type="checkbox"
              />
            </div>

            <Field
              label="Down Payment"
              name="downPayment"
              type="number"
              placeholder="What amount would you like to put down?"
              error={errors.downPayment?.message}
            />
            <Field
              label="Questions or Comments"
              name="questionsOrComments"
              type="textarea"
              placeholder="Questions or Comments"
              error={errors.questionsOrComments?.message}
            />
          </div>
        </div>

        <div className="flex justify-center my-9">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <Field
                label={
                  <span className="text-0053A6">
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
    </form>
  );
};

export default MakeOffer;
