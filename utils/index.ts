import { HealthAnalysisData } from "@/types";


export const infoFields: Array<{
    name: keyof HealthAnalysisData;
    label: string;
    asterisk: boolean;
    placeholder?: string;
    pattern?: {
        value: RegExp;
        message: string;
    }
    maxLength?: number;
}> = [
    {
        name: "name",
        label: "Name",
        asterisk: true,
        placeholder: "Your name",
        maxLength: 100
    },
    {
        name: "phone",
        label: "Phone Number",
        asterisk: true,
        placeholder: "Your phone number",
        pattern: {
            value: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/,
            message: "Please enter a valid phone number"
        },
    },
    {
        name: "age",
        label: "Age",
        asterisk: true,
        placeholder: "Your age",
        pattern: {
            value: /^\d+$/,
            message: "Please enter a valid age"
        },
        maxLength: 3,
    },
    {
        name: "weight",
        label: "Weight",
        asterisk: true,
        placeholder: "Your weight",
        pattern: {
            value: /^\d+$/,
            message: "Please enter a valid weight"
        },
        maxLength: 5
    },
    {
        name: "height",
        label: "Height",
        asterisk: true,
        placeholder: "Your height",
        maxLength: 5
    }
]

// exerciseFrequency: string;
// exerciseType: string;
// exerciseDuration: string;

// waterIntake: string;
// dietaryRestrictions: string;
// dailyDiet: string;

export const activityFields: Array<{
    name: keyof HealthAnalysisData;
    label: string;
    asterisk: boolean;
    placeholder?: string;
    pattern?: {
        value: RegExp;
        message: string;
    }
    maxLength?: number;
}> = [
    {
        name: "exerciseFrequency",
        label: "Exercise Frequency",
        asterisk: true,
        placeholder: "Your exercise frequency",
        maxLength: 100
    },
    {
        name: "exerciseType",
        label: "Exercise Type",
        asterisk: true,
        placeholder: "Your exercise type",
        maxLength: 100
    },
    {
        name: "exerciseDuration",
        label: "Exercise Duration",
        asterisk: true,
        placeholder: "Your exercise duration",
        maxLength: 100
    }
]

export const dietFields: Array<{
    name: keyof HealthAnalysisData;
    label: string;
    asterisk: boolean;
    placeholder?: string;
    pattern?: {
        value: RegExp;
        message: string;
    }
    maxLength?: number;
}> = [
    {
        name: "waterIntake",
        label: "Water Intake",
        asterisk: true,
        placeholder: "Your water intake",
        maxLength: 100
    },
    {
        name: "dietaryRestrictions",
        label: "Dietary Restrictions",
        asterisk: true,
        placeholder: "Your dietary restrictions",
        maxLength: 100
    },
    {
        name: "dailyDiet",
        label: "Daily Diet",
        asterisk: true,
        placeholder: "Your daily diet",
        maxLength: 100
    }
]