import { v4 } from "uuid";
import {
  Deal,
  FitnessRank,
  ProfileData,
  Studio,
  StudioBioProps,
  StudioLocation,
} from "./types";
import { addWeeks } from "./utils";

export const deals: Deal[] = [
  {
    id: v4(),
    name: "Take one class, get a second class 50% off!",
    expirationDate: addWeeks(new Date(), 2),
  },
  {
    id: v4(),
    name: "Bring a friend to a class for free!",
    expirationDate: addWeeks(new Date(), 4),
    restrictions: [
      {
        id: v4(),
        name: "Only eligible to be used by a student taking their first class at any location.",
      },
    ],
  },
  {
    id: v4(),
    name: "Get 10% off a yearly membership!",
    expirationDate: addWeeks(new Date(), 12),
    restrictions: [
      {
        id: v4(),
        name: "Only for use by students that have not yet had any kind of membership.",
      },
      {
        id: v4(),
        name: "Cannot be applied on top of any existing membership discount.",
      },
    ],
  },
  {
    id: v4(),
    name: "Get 20% off a monthly membership!",
    expirationDate: addWeeks(new Date(), 12),
    restrictions: [
      {
        id: v4(),
        name: "Only for use by students that have not yet had any kind of membership.",
      },
      {
        id: v4(),
        name: "Cannot be applied on top of any existing membership discount.",
      },
    ],
  },
  {
    id: v4(),
    name: "Get 20% off a merchandise purchase of $30 or more!",
  },
];

export const login = {
  username: "meow",
  password: "biscuits@gmail.com",
};

export const pricingPlans = [
  {
    name: "Yearly prepaid membership",
    price: "$999/year",
    valueStatement: "Save 20% off of monthly rate!",
  },
  {
    name: "Monthly prepaid membership",
    price: "$100/month",
    valueStatement: "Save 40% off of weekly rate!",
  },
  {
    name: "Weekly prepraid membership",
    price: "$35/week",
    valueStatement: "Great to try us out for a week or two!",
  },
];

export const profileData: ProfileData[] = [
  {
    id: v4(),
    firstName: "Delcine",
    lastName: "Majeed",
    userName: "meow",
    bio: "Meow moew headpats biscuits meew ow mow",
    email: "churu4life@gmail.com",
    preferredLocation: StudioLocation.Crestview,
    classesTaken: 14,
    // TODO: Create some fancy backend calculation to do this
    fitnessRank: FitnessRank.Intermediate,
  },
  {
    id: v4(),
    firstName: "Patan",
    lastName: "Jali",
    userName: "YoGod",
    bio: "Yoga stura blah blah ashtanga blah blah blah",
    email: "namaste@gmail.com",
    preferredLocation: StudioLocation.Bouldin,
    classesTaken: 8000000,
    fitnessRank: FitnessRank.Supreme,
  },
  {
    id: v4(),
    firstName: "Bud",
    lastName: "Light",
    userName: "Yip",
    bio: "I don't know why I signed up",
    email: "anhueserbusch@gmail.com",
    preferredLocation: StudioLocation.Riata,
    classesTaken: 0,
    fitnessRank: FitnessRank.New,
  },
];

export const studios: Studio[] = [
  {
    id: v4(),
    name: "Crestview",
  },
  {
    id: v4(),
    name: "Bouldin",
  },
  {
    id: v4(),
    name: "Riata",
  },
  {
    id: v4(),
    name: "Downtown",
  },
  {
    id: v4(),
    name: "Mueller",
  },
];

export const studioBios: StudioBioProps[] = [
  {
    id: v4(),
    name: "Crestview",
    neighborhoodBio:
      "A chill studio in north Austin for central Austin neighborhood dwellers.",
    studioImageURL: "/Crestview Studio.jpg",
    studioBio:
      "A bright, light-filled studio with a clean, polished, and serene look.",
    neighborhoodImageURL: "/Crestview.jpg",
  },
  {
    id: v4(),
    name: "Bouldin",
    neighborhoodBio:
      "Old-school Austin nieghborhood vibes with shopping and parks nearby.",
    studioImageURL: "/Bouldin Studio.jpg",
    studioBio:
      "Beautiful views of the skyline from large windows will add energy to your flow.",
    neighborhoodImageURL: "/Bouldin.jpeg",
  },
  {
    id: v4(),
    name: "Riata",
    neighborhoodBio:
      "A chill studio in north Austin that satisfies those of us the like being further from the center of it all.",
    studioImageURL: "/Riata Yoga Studio.jpg",
    studioBio:
      "Quiet, cozy, and full of greenery, this studio will feel like a warm embrace.",
    neighborhoodImageURL: "/Riata.jpg",
  },
  {
    id: v4(),
    name: "Downtown",
    neighborhoodBio:
      "For those of us that love hustle and bustle with the most modern spaces.",
    studioImageURL: "/Downtown Studio.jpg",
    studioBio:
      "Bright sunlight and green plants make this studio feel like an oasis in the midst of so much hustle and bustle.",
    neighborhoodImageURL: "/Downtown.jpg",
  },
  {
    id: v4(),
    name: "Mueller",
    neighborhoodBio:
      "Perfect if you love a little post-yoga farmer's market shopping or brunch on weekends.",
    studioImageURL: "/Mueller Yoga Studio.jpg",
    studioBio:
      "Mellow colors and tony wood floors bring a sense of calm to your flow.",
    // TODO: Fix up image dimensions to grow/shrink with containing element (typ)
    neighborhoodImageURL: "/Mueller.jpg",
  },
];
