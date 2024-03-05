import React from "react";
import CustomButton from "../components/CustomButton";

interface TabButtonsProps {
  access: number;
  toggleTab: (tab: number) => void;
}

const TabButtons = ({access, toggleTab} : TabButtonsProps ) => {
  return (
    <div className="flex w-[70vw] px-5 mt-10 mb-3 justify-between">
      <CustomButton
        disabled={false}
        title="Information"
        btnType="button"
        customColor="bg-blue-500"
        handleClick={() => toggleTab(1)}
      />
      <CustomButton
        disabled={access < 2 ? true : false}
        title="Activity"
        btnType="button"
        customColor="bg-blue-500"
        handleClick={() => toggleTab(2)}
      />
      <CustomButton
        disabled={access < 3 ? true : false}
        title="Diet"
        btnType="button"
        customColor="bg-blue-500"
        handleClick={() => toggleTab(3)}
      />

    </div>
  );
};

export default TabButtons;
