import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { advanceTo, clear } from "jest-date-mock";

import "../setupTests";
import Clock from "../containers/Clock";
import SetTime from "../containers/SetTime";

describe("SetTime contaners", () => {
  afterEach(cleanup);

  it("render Alarming", () => {
    advanceTo(new Date(2020, 1, 1, 0, 0, 0));

    const { getByLabelText, getByTestId } = render(<Clock />);
    fireEvent.change(getByLabelText("input time"), {
      target: { value: "00:00" }
    });
    fireEvent.click(getByLabelText("set time"));
    const waitTimer = () =>
      expect(getByTestId("alarming")).toHaveTextContent("Good Morning !");
    setTimeout(waitTimer, 1000);

    clear();
  });

  it("cancel set time", () => {
    const { getByLabelText } = render(
      <SetTime alarming={false} setAlarmTime={() => {}} />
    );
    fireEvent.change(getByLabelText("input time"), {
      target: { value: "10:00" }
    });
    fireEvent.click(getByLabelText("set time"));
    fireEvent.click(getByLabelText("set time"));
    expect(getByLabelText("input time").value).toBe("");
  });
});
