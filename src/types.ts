import React from "react";

// Enums
export enum StudioLocation {
  Crestview = "Crestview",
  Bouldin = "Bouldin",
  Downtown = "Downtown",
  Riata = "Riata",
  Mueller = "Mueller",
}

export enum FitnessRank {
  New = "New",
  Novice = "Novice",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Expert = "Expert",
  Master = "Master",
  Supreme = "Supreme",
}

// Types
export type Studio = {
  id: string;
  name: string;
};

export type Restriction = {
  id: string;
  name: string;
};

// Interfaces - Profile
export interface ProfileData {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  email: string;
  preferredLocation: StudioLocation;
  classesTaken: number;
  fitnessRank: FitnessRank;
}

// Interfaces - Studio
export interface StudioBioProps {
  id: string;
  name: string;
  neighborhoodBio: string;
  studioImageURL: string;
  studioBio: string;
  neighborhoodImageURL: string;
}

export interface StudioBioComponentProps {
  studioBio: StudioBioProps;
}

export interface AboutStudioPropTypes {
  currentStudioName: string;
}

export interface CurrentStudioAndSelectionProps {
  allStudios: Studio[];
  setCurrentStudioName: Function;
}

// Interfaces - Pricing
export interface PricingPlanPropTypes {
  pricingPlan: {
    name: string;
    price: string;
    valueStatement: string;
  };
}

export interface Deal {
  id: string;
  name: string;
  expirationDate?: Date;
  restrictions?: Restriction[];
}

// Interfaces - Context
export interface PlatformContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  currentDate: string;
  setCurrentDate: (value: string) => void;
}

export interface LoginProps {
  isLoggedIn: boolean;
}

// Interfaces - Forms
export interface UserInfoFormProps {
  formTitle: string;
  handleUsernameChange: React.ChangeEventHandler<HTMLInputElement>;
  handlePasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  formCta: string;
}

// Interfaces - Calendar
export interface SubcalendarProps {
  setCurrentDate?: (value: string) => void;
  currentDate?: string;
  title?: string;
}

export interface MasterCalendarProps {
  dailyTitle: string;
  monthlyTitle: string;
}
