import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import Contact from "../containers/Contact";

describe("useContact", () => {
  afterEach(cleanup);

  it("start sound", () => {
    const { getByTestId } = render(<Contact />);
    fireEvent.click(getByTestId("fuga-wrapper"));
    expect(onclick).toHaveBeenCalled();
  });
});
