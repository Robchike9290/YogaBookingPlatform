// TODO: Move this file to a master location and put all types in it.
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
