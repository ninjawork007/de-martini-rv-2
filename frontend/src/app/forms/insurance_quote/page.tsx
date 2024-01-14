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
  primaryDriver: {
    name: string;
    emailAddress: string;
    address: string;
    city: string;
    state: string;
    phoneNumber: string;
    dateOfBirth: string;
    licenseNumber: string;
    ticketsAccidents?: {
      yes?: boolean;
      no?: boolean;
    };
    maritalStatus?: {
      married?: boolean;
      single?: boolean;
    };
    homeowner?: {
      yes?: boolean;
      no?: boolean;
    };
    fullTimeRVer?: {
      yes?: boolean;
      no?: boolean;
    };
  };
  secondaryDriver?: {
    name?: string;
    licenseNumber?: string;
    dateOfBirth?: string;
    address?: string;
    city?: string;
    state?: string;
    phoneNumber?: string;
    ticketsAccidents?: {
      yes?: boolean;
      no?: boolean;
    };
    maritalStatus?: {
      married?: boolean;
      single?: boolean;
    };
    homeowner?: {
      yes?: boolean;
      no?: boolean;
    };
    fullTimeRVer?: {
      yes?: boolean;
      no?: boolean;
    };
  };
  rvInformation: {
    year: number;
    make: string;
    model: string;
    length: number;
    mileage: number;
    vinNumber: string;
  };
}

const schema = yup.object().shape({
  primaryDriver: yup.object().shape({
    name: yup.string().required("Name is required"),
    emailAddress: yup
      .string()
      .email("Invalid email")
      .required("Email Address is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    dateOfBirth: yup.string().required("Date of Birth is required"),
    licenseNumber: yup.string().required("Driver's License Number is required"),
    ticketsAccidents: yup.object().optional().shape({
      yes: yup.boolean(),
      no: yup.boolean(),
    }),
    maritalStatus: yup.object().optional().shape({
      married: yup.boolean(),
      single: yup.boolean(),
    }),
    homeowner: yup.object().optional().shape({
      yes: yup.boolean(),
      no: yup.boolean(),
    }),
    fullTimeRVer: yup.object().optional().shape({
      yes: yup.boolean(),
      no: yup.boolean(),
    }),
  }),
  secondaryDriver: yup
    .object()
    .optional()
    .shape({
      name: yup.string(),
      address: yup.string(),
      city: yup.string(),
      state: yup.string(),
      phoneNumber: yup.string(),
      dateOfBirth: yup.string(),
      licenseNumber: yup.string(),
      ticketsAccidents: yup.object().optional().shape({
        yes: yup.boolean(),
        no: yup.boolean(),
      }),
      maritalStatus: yup.object().optional().shape({
        married: yup.boolean(),
        single: yup.boolean(),
      }),
      homeowner: yup.object().optional().shape({
        yes: yup.boolean(),
        no: yup.boolean(),
      }),
      fullTimeRVer: yup.object().optional().shape({
        yes: yup.boolean(),
        no: yup.boolean(),
      }),
    }),
  rvInformation: yup.object().shape({
    year: yup
      .number()
      .typeError("Must be a number")
      .required("Year is required"),
    make: yup.string().required("Make is required"),
    model: yup.string().required("Model is required"),
    length: yup
      .number()
      .typeError("Must be a number")
      .required("Length is required"),
    mileage: yup
      .number()
      .typeError("Must be a number")
      .required("Mileage is required"),
    vinNumber: yup.string().required("VIN Number is required"),
  }),
});

const InsuranceQuote = () => {
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
        title: "RV Insurance Quote Form",
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
        <Title heading="RV Insurance Quote Form" />
        {!isSubmitted && (
          <p className="px-12 md:px-44 2xl:px-64 mb-5">
            Please fill out the following information and we will get back to
            you with a quote on RV Insurance.
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

                <div>
                  <h3>Primary Driver:</h3>
                  <FormField
                    label="Name"
                    name="primaryDriver.name"
                    placeholder="Enter Name"
                    error={errors.primaryDriver?.name?.message}
                  />
                  <FormField
                    label="Email Address"
                    name="primaryDriver.emailAddress"
                    type="email"
                    placeholder="Enter Email Address"
                    error={errors.primaryDriver?.emailAddress?.message}
                  />
                  <FormField
                    label="Address"
                    name="primaryDriver.address"
                    placeholder="Enter Address"
                    error={errors.primaryDriver?.address?.message}
                  />
                  <FormField
                    label="City"
                    name="primaryDriver.city"
                    placeholder="Enter City"
                    error={errors.primaryDriver?.city?.message}
                  />
                  <FormField
                    label="State"
                    name="primaryDriver.state"
                    placeholder="Select State"
                    type="select"
                    options={stateOptions}
                    error={errors.primaryDriver?.state?.message}
                  />
                  <FormField
                    label="Phone Number"
                    name="primaryDriver.phoneNumber"
                    type="tel"
                    placeholder="Enter Phone Number"
                    error={errors.primaryDriver?.phoneNumber?.message}
                  />
                  <FormField
                    label="Date of Birth (mm/dd/yyyy)"
                    name="primaryDriver.dateOfBirth"
                    placeholder="Date of Birth"
                    error={errors.primaryDriver?.dateOfBirth?.message}
                  />
                  <FormField
                    label="Driver's License Number"
                    name="primaryDriver.licenseNumber"
                    placeholder="Enter Driver's License Number"
                    error={errors.primaryDriver?.licenseNumber?.message}
                  />

                  <h4>Please check the following that apply:</h4>

                  <div className="flex flex-col gap-0">
                    <h5>
                      Have you had any tickets or accidents in the last three
                      years?
                    </h5>
                    <FormField
                      label="Yes"
                      name="primaryDriver.ticketsAccidents.yes"
                      type="checkbox"
                      error={
                        errors.primaryDriver?.ticketsAccidents?.yes?.message
                      }
                    />
                    <FormField
                      label="No"
                      name="primaryDriver.ticketsAccidents.no"
                      type="checkbox"
                      error={
                        errors.primaryDriver?.ticketsAccidents?.no?.message
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-0">
                    <h5>Marital Status:</h5>
                    <FormField
                      label="Married"
                      name="primaryDriver.maritalStatus.married"
                      type="checkbox"
                      error={
                        errors.primaryDriver?.maritalStatus?.married?.message
                      }
                    />
                    <FormField
                      label="Single"
                      name="primaryDriver.maritalStatus.single"
                      type="checkbox"
                      error={
                        errors.primaryDriver?.maritalStatus?.single?.message
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-0">
                    <h5>Are you a homeowner?</h5>
                    <FormField
                      label="Yes"
                      name="primaryDriver.homeowner.yes"
                      type="checkbox"
                      error={errors.primaryDriver?.homeowner?.yes?.message}
                    />
                    <FormField
                      label="No"
                      name="primaryDriver.homeowner.no"
                      type="checkbox"
                      error={errors.primaryDriver?.homeowner?.no?.message}
                    />
                  </div>

                  <div className="flex flex-col gap-0">
                    <h5>Are you a Full-Time RVer?</h5>
                    <FormField
                      label="Yes"
                      name="primaryDriver.fullTimeRVer.yes"
                      type="checkbox"
                      error={errors.primaryDriver?.fullTimeRVer?.yes?.message}
                    />
                    <FormField
                      label="No"
                      name="primaryDriver.fullTimeRVer.no"
                      type="checkbox"
                      error={errors.primaryDriver?.fullTimeRVer?.no?.message}
                    />
                  </div>
                </div>

                <div>
                  <h3>Secondary Driver: (if applicable)</h3>
                  <FormField
                    label="Name"
                    name="secondaryDriver.name"
                    placeholder="Enter Name"
                    error={errors.secondaryDriver?.name?.message}
                  />
                  <FormField
                    label="Address"
                    name="secondaryDriver.address"
                    placeholder="Enter Address"
                    error={errors.secondaryDriver?.address?.message}
                  />
                  <FormField
                    label="City"
                    name="secondaryDriver.city"
                    placeholder="Enter City"
                    error={errors.secondaryDriver?.city?.message}
                  />
                  <FormField
                    label="State"
                    name="secondaryDriver.state"
                    placeholder="Select State"
                    type="select"
                    error={errors.secondaryDriver?.state?.message}
                    options={stateOptions}
                  />
                  <FormField
                    label="Phone Number"
                    name="secondaryDriver.phoneNumber"
                    type="tel"
                    placeholder="Enter Phone Number"
                    error={errors.secondaryDriver?.phoneNumber?.message}
                  />
                  <FormField
                    label="Date of Birth (mm/dd/yyyy)"
                    name="secondaryDriver.dateOfBirth"
                    placeholder="Date of Birth"
                    error={errors.secondaryDriver?.dateOfBirth?.message}
                  />
                  <FormField
                    label="Driver's License Number"
                    name="secondaryDriver.licenseNumber"
                    placeholder="Enter Driver's License Number"
                    error={errors.secondaryDriver?.licenseNumber?.message}
                  />

                  <h4>Please check the following that apply:</h4>

                  <div className="flex flex-col gap-0">
                    <h5>Marital Status:</h5>
                    <FormField
                      label="Married"
                      name="secondaryDriver.maritalStatus.married"
                      type="checkbox"
                      error={
                        errors.secondaryDriver?.maritalStatus?.married?.message
                      }
                    />
                    <FormField
                      label="Single"
                      name="secondaryDriver.maritalStatus.single"
                      type="checkbox"
                      error={
                        errors.secondaryDriver?.maritalStatus?.single?.message
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-0">
                    <h5>Are you a homeowner?</h5>
                    <FormField
                      label="Yes"
                      name="secondaryDriver.homeowner.yes"
                      type="checkbox"
                      error={errors.secondaryDriver?.homeowner?.yes?.message}
                    />
                    <FormField
                      label="No"
                      name="secondaryDriver.homeowner.no"
                      type="checkbox"
                      error={errors.secondaryDriver?.homeowner?.no?.message}
                    />
                  </div>

                  <div className="flex flex-col gap-0">
                    <h5>Are you a Full-Time RVer?</h5>
                    <FormField
                      label="Yes"
                      name="secondaryDriver.fullTimeRVer.yes"
                      type="checkbox"
                      error={errors.secondaryDriver?.fullTimeRVer?.yes?.message}
                    />
                    <FormField
                      label="No"
                      name="secondaryDriver.fullTimeRVer.no"
                      type="checkbox"
                      error={errors.secondaryDriver?.fullTimeRVer?.no?.message}
                    />
                  </div>
                </div>
              </div>

              {/* right part */}

              <div className="flex flex-col">
                <h3 className="text-2xl mb-7 font-semibold">RV Information:</h3>

                <FormField
                  label="Year"
                  type="number"
                  name="rvInformation.year"
                  placeholder="Enter Year"
                  error={errors?.rvInformation?.year?.message}
                />
                <FormField
                  label="Make"
                  name="rvInformation.make"
                  placeholder="Enter Make"
                  error={errors?.rvInformation?.make?.message}
                />
                <FormField
                  label="Model"
                  name="rvInformation.model"
                  placeholder="Enter Model"
                  error={errors?.rvInformation?.model?.message}
                />
                <FormField
                  label="Mileage"
                  name="rvInformation.mileage"
                  type="number"
                  placeholder="Enter Mileage"
                  error={errors?.rvInformation?.mileage?.message}
                />
                <FormField
                  label="Length"
                  type="number"
                  name="rvInformation.length"
                  placeholder="Enter Length"
                  error={errors?.rvInformation?.length?.message}
                />
                <FormField
                  label="VIN Number"
                  name="rvInformation.vinNumber"
                  placeholder="Enter VIN Number"
                  error={errors?.rvInformation?.vinNumber?.message}
                />
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

export default InsuranceQuote;
