import React from "react";
import { ComponentProps } from "../types";
import { InputGroup, Form } from "react-bootstrap";
import { MdClear } from "react-icons/md";
import { dietFields } from "@/utils";

const Diet = ({
  tabDisplay,
  formData,
  errors,
  register,
  handleClear,
  handleInputChange,
}: ComponentProps) => {
  return (
    <div
      className={`border-black border-2 h-[60vh] w-[70vw] bg-white flex flex-col justify-center items-center rounded-md mb-[4rem] ${tabDisplay} `}
    >
      {dietFields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="flex ml-1 sm:w-[65vw] lg:w-[60vw] mb-[-0.5rem]">
            <h6 className="font-semibold">{field.label}</h6>
            <h6 className="text-red-500 font-bold text-lg">&nbsp;*</h6>
            {errors[field.name] && (
              <h6 className="text-red-500 ml-3">{`${
                errors[field.name]?.message
              }`}</h6>
            )}
          </label>
          <div className="lg:w-[60vw] sm:w-[65vw] flex flex-col">
            <InputGroup className="flex border-2 border-black rounded-md h-full hover:ring-2 ring-blue-400">
              <Form.Control
                className="border-0 rounded-md p-1.5 "
                placeholder={field.placeholder}
                type="text"
                {...register(`${field.name}`, {
                  required: `${
                    field.asterisk && formData[field.name] === ""
                      ? "Required"
                      : ""
                  }`,
                  maxLength: {
                    value: field.maxLength || 255,
                    message: `Please enter a value with less than ${field.maxLength} characters`,
                  },
                  validate: (value) => {
                    if (field.pattern) {
                      return (
                        field.pattern.value.test(value as any) ||
                        field.pattern.message
                      );
                    }
                  },
                })}
                value={`${formData[field.name]}`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e)
                }
              />
              {formData[field.name] && (
                <InputGroup.Text className="h-[2.3rem] p-1 bg-white border-0 border-white">
                  <button
                    tabIndex={-1}
                    onClick={() => handleClear(field.name)}
                    type="button"
                  >
                    <MdClear size={20} />
                  </button>
                </InputGroup.Text>
              )}
            </InputGroup>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diet;
