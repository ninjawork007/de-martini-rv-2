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
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phoneNumber: number;
  make: string;
  model: string;
  vehicleSerialNumber: string;
  vinNumber: string;
  manufacturerPartNumber?: string;
  partDescription?: string;
  applianceModel?: string;
  applianceSerialNumber?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  phoneNumber: yup
    .number()
    .typeError("Must be a number")
    .required("Phone Number is required"),
  make: yup.string().required("Make is required"),
  model: yup.string().required("Model is required"),
  vehicleSerialNumber: yup
    .string()
    .required("Vehicle Serial Number is required"),
  vinNumber: yup.string().required("VIN Number is required"),
  manufacturerPartNumber: yup.string(),
  partDescription: yup.string(),
  applianceModel: yup.string(),
  applianceSerialNumber: yup.string(),
});

const SpecialParts = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);

  const methods = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    const formValues = {
      title: "Special Parts Request Form",
      submission: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(formValues));

    if (file1) formData.append(`files.files`, file1, file1.name);
    if (file2) formData.append(`files.files`, file2, file2.name);
    if (file3) formData.append(`files.files`, file3, file3.name);

    try {
      await service.post(urls.formSubmission, formData);
      setIsSubmitted(true);
    } catch (error) {}
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title heading="DeMartini RV Sales - Special Parts Request Form" />
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
                <h3 className="text-2xl mb-7 font-medium">
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
                  Vehicle Information:
                </h3>

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
                  label="Vehicle Serial Number"
                  name="vehicleSerialNumber"
                  placeholder="Enter Vehicle Serial Number"
                  error={errors.vehicleSerialNumber?.message}
                />
                <FormField
                  label="VIN Number"
                  name="vinNumber"
                  placeholder="Enter VIN Number"
                  error={errors?.vinNumber?.message}
                />

                <h3 className="text-2xl mb-7 font-semibold">
                  Part Description:
                </h3>

                <FormField
                  label="Manufacturer Part # (if known)"
                  name="manufacturerPartNumber"
                  placeholder="Enter Manufacturer Part #"
                  error={errors.manufacturerPartNumber?.message}
                />
                <FormField
                  label="Describe the part you are looking for:"
                  name="partDescription"
                  placeholder="Describe the part"
                  error={errors.partDescription?.message}
                />
                <input
                  name="file1"
                  type="file"
                  onChange={(e) => handleFileChange(e, setFile1)}
                />
                <input
                  name="file2"
                  type="file"
                  onChange={(e) => handleFileChange(e, setFile2)}
                />
                <input
                  name="file3"
                  type="file"
                  onChange={(e) => handleFileChange(e, setFile3)}
                />
                <p className="mt-4">
                  If the part goes with an appliance (ie. refrigerator, furnace
                  etc.) provide the following:
                  <FormField
                    label="Appliance Model"
                    name="applianceModel"
                    placeholder="Enter Appliance Model"
                    error={errors?.applianceModel?.message}
                  />
                  <FormField
                    label="Appliance Serial Number"
                    name="applianceSerialNumber"
                    placeholder="Enter Appliance Serial Number"
                    error={errors?.applianceSerialNumber?.message}
                  />
                </p>
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

export default SpecialParts;
