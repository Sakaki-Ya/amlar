import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../containers/RouterTestUtil";

import Contact from "../containers/Contact";

describe("Contact contaners", () => {
  afterEach(cleanup);
  const setup = () => {
    const container = renderWithRouter(<Contact />);
    const inputName = container.getByLabelText("name");
    const inputMail = container.getByLabelText("mail");
    const inputMessage = container.getByLabelText("message");
    const submit = container.getByLabelText("submit");
    return {
      inputName,
      inputMail,
      inputMessage,
      submit,
      ...container
    };
  };

  it("send button disabled", () => {
    const { inputName, inputMail, inputMessage, submit } = setup();
    fireEvent.change(inputName, { target: { value: "foo" } });
    fireEvent.change(inputMail, { target: { value: "bar@gamil." } });
    fireEvent.change(inputMessage, { target: { value: "baz" } });
    expect(submit.disabled).toEqual(true);
  });

  it("send button not disabled", () => {
    const { inputName, inputMail, inputMessage, submit } = setup();
    fireEvent.change(inputName, { target: { value: "foo" } });
    fireEvent.change(inputMail, { target: { value: "bar@gamil.com" } });
    fireEvent.change(inputMessage, { target: { value: "baz" } });
    expect(submit.disabled).toEqual(false);
  });
});
