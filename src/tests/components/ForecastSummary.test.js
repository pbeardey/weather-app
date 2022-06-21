import React from "react";
import { render, screen } from "@testing-library/react";
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
    onSelect: () => {},
  };

  describe("ForecastSummary-snapshot", () => {
    it("renders the 4 props correctly", () => {
      const { asFragment } = render(
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={validProps.onSelect}
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("ForecastSummary-values", () => {
    it("renders correct values for the 4 props", () => {
      const { asFragment, getByTestId } = render(
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={validProps.onSelect}
        />
      );

      expect(asFragment()).toHaveTextContent("Thu Jan 01 1970");
      expect(asFragment()).toHaveTextContent("Stub description");
      expect(getByTestId("forecast-icon")).toHaveAttribute(
        "class",
        "forecast-summary__icon"
      );
      expect(asFragment()).toHaveTextContent("22°C");
    });
  });

  describe("ForecastSummary-values", () => {
    it("renders the more details button", () => {
      render(
        <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
          onSelect={validProps.onSelect}
        />
      );
      const detailsButton = screen.getByRole("button", {
        name: /more details/i,
      });

      expect(detailsButton).toBeInTheDocument();
    });
  });
});
