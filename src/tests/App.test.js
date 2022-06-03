// src/tests/components/App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
    it("renders the App correctly", () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
});
