// src/tests/components/ForecastSummaries.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description",
      icon: "800",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 26311111,
      description: "Stub2 description",
      icon: "802",
      temperature: {
        min: 15,
        max: 25,
      },
    },
  ];
  function onForecastSelect() {}

  describe("ForecastSummaries-snapshot", () => {
    it("renders correctly", () => {
      const { asFragment } = render(
        <ForecastSummaries
          forecasts={validProps}
          onForecastSelect={onForecastSelect}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("ForecastSummaries-values", () => {
    it("renders 2 forecasts", () => {
      const { getAllByTestId } = render(
        <ForecastSummaries
          forecasts={validProps}
          onForecastSelect={onForecastSelect}
        />
      );
      expect(getAllByTestId("forecast-summary")).toHaveLength(2);
    });

    it("renders 2 buttons", () => {
      render(
        <ForecastSummaries
          forecasts={validProps}
          onForecastSelect={onForecastSelect}
        />
      );
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(2);
    });
  });
});
