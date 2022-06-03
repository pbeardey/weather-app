// src/tests/components/ForecastSummary.test.js

import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
  };
  function onSelect() {}

  describe("ForecastSummary-snapshot", () => {
    it("renders the 4 props correctly", () => {
      const { asFragment } = render(
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={onSelect}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("ForecastSummary-values", () => {
    it("renders correct values for the 4 props", () => {
      const { getByText, getByTestId } = render(
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={onSelect}
        />
      );

      expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
        "class",
        "forecast-summary__date"
      );

      expect(getByText("Stub description")).toHaveAttribute(
        "class",
        "forecast-summary__description"
      );

      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-summary__icon"
      );

      expect(getByText("22°C")).toHaveAttribute(
        "Class",
        "forecast-summary__temperature"
      );
    });
  });
});
