import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 80,
    wind: {
      direction: "nnw",
      speed: 12,
    },
    onForecastSelect() {
      return 1;
    },
  };

  describe("ForecastDetails-snapshot", () => {
    it("renders the 4 propss correctly", () => {
      const { asFragment } = render(<ForecastDetails forecast={validProps} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("ForecastDetails-values", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toHaveTextContent("Thu Jan 01 1970");
    expect(asFragment()).toHaveTextContent("Max Temperature: 22°C");
    expect(asFragment()).toHaveTextContent("Min Temperature: 12°C");
    expect(asFragment()).toHaveTextContent("Humidity: 80%");
  });
});
