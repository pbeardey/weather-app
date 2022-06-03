// src/tests/components/SearchForm.test.js

import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", ()=> {
  const validProps = {
    searchText: "Leeds",
    setSearchText: () => {},
    onSubmit: () => {},
  };
  it("renders correctly", () => {
    const { getByText } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders correctly", () => {
    const { getByDisplayValue } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByDisplayValue("Leeds")).toBeInstanceOf(HTMLInputElement);
  });
});