import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const planets = [
  {
    name: "Sun",
    size: "120px",
    color: "#FFD700",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, and is by far the most important source of energy for life on Earth.",
  },
  {
    name: "Mercury",
    size: "30px",
    color: "#b9b9b9",
    description:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun.",
  },
  {
    name: "Venus",
    size: "40px",
    color: "#f0c27b",
    description:
      'Venus is the second planet from the Sun. It is sometimes called Earth’s "sister planet".',
  },
  {
    name: "Earth",
    size: "45px",
    color: "#3b99fc",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life.",
  },
  {
    name: "Mars",
    size: "35px",
    color: "#e07b39",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
  },
  {
    name: "Jupiter",
    size: "90px",
    color: "#d6a46e",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
  },
  {
    name: "Saturn",
    size: "80px",
    color: "#f5d49a",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
  },
  {
    name: "Uranus",
    size: "70px",
    color: "#7fc3ff",
    description:
      "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius.",
  },
  {
    name: "Neptune",
    size: "70px",
    color: "#5470d6",
    description:
      "Neptune is the eighth and farthest-known Solar planet from the Sun.",
  },
];

const PlanetContext = createContext([]);

export const PlanetProvider = ({ children }) => {
  return (
    <PlanetContext.Provider value={planets}>{children}</PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePlanets = () => useContext(PlanetContext);
