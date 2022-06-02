// src/tests/components/ForecastSummaries.test.js

import React from "react";
import { render } from "@testing-library/react";
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
    date: 1111111+25200000,
    description: "Stub2 description",
    icon: "802",
    temperature: {
      min: 15,
      max: 25,
    },
  },
  ];
  function onForecastSelect() {
    return 1;
  }
  
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
  });
});