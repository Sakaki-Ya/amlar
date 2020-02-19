import React, { useState, useGlobal } from "reactn";
import { useHistory } from "react-router-dom";
import ContactComponent from "../components/Contact";

const useContact = () => {
  document.title = "Contact - Amlar";

  const [input, setInput] = useState(["", "", ""]);
  const [inputName, inputMail, inputMessage] = [input[0], input[1], input[2]];
  const [check, setCheck] = useState([false, false, false]);
  const [checkName, checkMail, checkMessage] = [check[0], check[1], check[2]];

  const checkForm = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    if (name === "name") {
      if (value === "") return setCheck([false, checkMail, checkMessage]);
      setInput([value, inputMail, inputMessage]);
      setCheck([true, checkMail, checkMessage]);
      return;
    }
    if (name === "mail") {
      if (!value.match(/.+@.+\..+/))
        return setCheck([checkName, false, checkMessage]);
      setInput([inputName, value, inputMessage]);
      setCheck([checkName, true, checkMessage]);
      return;
    }
    if (name === "message") {
      if (value === "") return setCheck([checkName, checkMail, false]);
      setInput([inputName, inputMail, value]);
      setCheck([checkName, checkMail, true]);
    }
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
    const name = inputMail;
    const mail = inputMail;
    const message = inputMessage;
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
  return { check, checkForm, submit };
};

const ContactContainer = () => {
  const { check, checkForm, submit } = useContact();
  return (
    <ContactComponent check={check} checkForm={checkForm} submit={submit} />
  );
};

export default ContactContainer;
