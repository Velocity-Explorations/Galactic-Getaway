// /Users/parissyoungblood/Documents/Velocity/Hackathon/AWS/client/src/context/AppContext.tsx
import { createContext, useContext, useState } from "react";

export type Planet = {
  name: string;
  size: string;
  color: string;
  description: string;
  image: string;
};

type AppContextType = {
  planets: Planet[];
  age: number;
  setAge: (age: number) => void;
};

const planets: Planet[] = [
  {
    name: "Sun",
    size: "120px",
    color: "#FFD700",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, and is by far the most important source of energy for life on Earth.",
    image: "/src/assets/Sun.png",
  },
  {
    name: "Mercury",
    size: "30px",
    color: "#b9b9b9",
    description:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun.",
    image: "/src/assets/Mercury.png",
  },
  {
    name: "Venus",
    size: "40px",
    color: "#f0c27b",
    description:
      'Venus is the second planet from the Sun. It is sometimes called Earth’s "sister planet".',
    image: "/src/assets/Venus.png",
  },
  {
    name: "Earth",
    size: "45px",
    color: "#3b99fc",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life.",
    image: "/src/assets/Earth.png",
  },
  {
    name: "Mars",
    size: "35px",
    color: "#e07b39",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
    image: "/src/assets/Mars.png",
  },
  {
    name: "Jupiter",
    size: "90px",
    color: "#d6a46e",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
    image: "/src/assets/Jupiter.png",
  },
  {
    name: "Saturn",
    size: "80px",
    color: "#f5d49a",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
    image: "/src/assets/Saturn.png",
  },
  {
    name: "Uranus",
    size: "70px",
    color: "#7fc3ff",
    description:
      "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius.",
    image: "/src/assets/uranus.png",
  },
  {
    name: "Neptune",
    size: "70px",
    color: "#5470d6",
    description:
      "Neptune is the eighth and farthest-known Solar planet from the Sun.",
    image: "/src/assets/neptune.png",
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = (props: { children: React.ReactNode }) => {
  const [age, _setAge] = useState(0);

  const setAge = (age: number) => {
    _setAge(age);
  };

  const values: AppContextType = {
    planets,
    age,
    setAge,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return ctx;
};
