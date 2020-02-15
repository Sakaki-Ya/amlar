import React, { useState, useGlobal } from "reactn";
import { useHistory } from "react-router-dom";
import ContactComponent from "../components/Contact";

const useContact = () => {
  document.title = "Contact - Amlar";

  const [input, setInput] = useState(["", "", ""]);
  const [user, mail, message] = [input[0], input[1], input[2]];
  const checkForm = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    if (name === "name") return setInput([value, mail, message]);
    if (name === "mail" && value.match(/.+@.+\..+/))
      return setInput([user, value, message]);
    if (name === "message") return setInput([user, mail, value]);
  };

  const encode = (data: { [key: string]: string }) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    return formData;
  };

  const setPage = useGlobal("page")[1];
  const history = useHistory();
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const name = user;
    const data = { "form-name": "contact", name, mail, message };
    fetch("/", {
      method: "POST",
      body: encode(data)
    })
      .then(() => {
        alert("Thank you for sending the message.");
        history.push("/");
        setPage("top");
        document.title = "Amlar";
      })
      .catch(error => {
        alert("Failed to send message. sorry.");
        console.log(error);
      });
  };
  return { input, checkForm, submit };
};

const ContactContainer = () => {
  const { input, checkForm, submit } = useContact();
  return (
    <ContactComponent input={input} checkForm={checkForm} submit={submit} />
  );
};

export default ContactContainer;
