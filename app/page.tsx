"use client";
import {
  TabButtons,
  Information,
  CustomButton,
  Activity,
  Diet,
} from "@/components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { HealthAnalysisData } from "@/types";

export default function Home() {
  const {
    register,
    formState: { errors },
    trigger,
    reset,
  } = useForm<HealthAnalysisData>();

  const [formData, setFormData] = useState<HealthAnalysisData>({
    name: "",
    phone: "",
    age: "",
    weight: "",
    height: "",

    exerciseFrequency: "",
    exerciseType: "",
    exerciseDuration: "",

    waterIntake: "",
    dietaryRestrictions: "",
    dailyDiet: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; 

    if(value.trim() !== "" || value.length === 0) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
  };

  console.log('errors', errors)

  const [activeTab, setActiveTab] = useState<number>(1);

  const toggleTab = (tab: number) => setActiveTab(tab);

  const [access, setAccess] = useState<number>(1);

  const handleNext = () => {
    switch (activeTab) {
      case 1:
        trigger(["name", "phone", "age", "weight", "height"]).then(
          (isValid) => {
            if (isValid) {
              setAccess(2);
              toggleTab(2);
            }
          }
        );
        break;
      case 2:
        trigger(["exerciseDuration", "exerciseFrequency", "exerciseType"]).then(
          (isValid) => {
            if (isValid) {
              setAccess(3);
              toggleTab(3);
            }
          }
        );
        break;
    }
  };

  const handleClear = (field: string) => {
    setFormData({ ...formData, [field]: "" });
  };

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.dailyDiet === "" ||
      formData.dietaryRestrictions === "" ||
      formData.waterIntake === ""
    ) {
      trigger(["dailyDiet", "dietaryRestrictions", "waterIntake"]);
    }

    if (
      formData.exerciseDuration !== "" &&
      formData.exerciseFrequency !== "" &&
      formData.exerciseType !== ""
    ) {
      console.log("Form Submitted");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#88ebfc]">
      <div className="h-fit">
        <h2 className="text-[2.5rem] bg-[#040666] text-white p-3 rounded-xl my-5 flex justify-center">
          ClubATL Health Analysis{" "}
        </h2>
        <TabButtons access={access} toggleTab={toggleTab} />
        <Form onSubmit={formSubmit}>
          <Information
            tabDisplay={activeTab === 1 ? "block" : "hidden"}
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            register={register}
            errors={errors}
            handleClear={handleClear}
          />
          <Activity
            tabDisplay={activeTab === 2 ? "block" : "hidden"}
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            register={register}
            errors={errors}
            handleClear={handleClear}
          />
          <Diet
            tabDisplay={activeTab === 3 ? "block" : "hidden"}
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            register={register}
            errors={errors}
            handleClear={handleClear}
          />
        </Form>

        <div className="flex w-[70vw] px-5 mt-10 mb-3 justify-between">
          <CustomButton
            disabled={activeTab <= 1 ? true : false}
            title="PREVIOUS"
            btnType="button"
            customColor="bg-[#027549]"
            handleClick={() => toggleTab(activeTab - 1)}
          />
          {activeTab === 3 ? (
            <CustomButton
              disabled={false}
              title="SUBMIT"
              btnType="submit"
              customColor="bg-blue-500"
              handleClick={(event) => formSubmit(event as any)}
            />
          ) : (
            <CustomButton
              disabled={false}
              title="NEXT"
              btnType="button"
              customColor="bg-[#027549]"
              handleClick={handleNext}
            />
          )}
        </div>
      </div>
    </main>
  );
}
