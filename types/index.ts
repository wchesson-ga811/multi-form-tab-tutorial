import { MouseEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface CustomButtonProps {
  disabled: boolean;
  title: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  customStyles?: string;
  customColor?: string;
}

export interface HealthAnalysisData {
  //information
  name: string;
  phone: string;
  age: number | string;
  weight: number | string;
  height: string;
  
  //activity
  exerciseFrequency: string;
  exerciseType: string;
  exerciseDuration: string;

  //diet
  waterIntake: string;
  dietaryRestrictions: string;
  dailyDiet: string;
}

export interface ComponentProps {
  tabDisplay: string;
  formData: HealthAnalysisData;
  setFormData: React.Dispatch<React.SetStateAction<HealthAnalysisData>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FieldValues;
  register: UseFormRegister<HealthAnalysisData>;
  handleClear: (field: string) => void;
}