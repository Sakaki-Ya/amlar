import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Form() {
    const [input, setInput] = useState(["", "", ""]);
    const [user, mail, message] = [input[0], input[1], input[2]];
    const checkForm = e => {
        const { name, value } = e.target;
        if (name === 'name') return setInput([value, mail, message]);
        if (name === 'mail' && value.match(/.+@.+\..+/)) return setInput([user, value, message]);
        if (name === 'message') return setInput([user, mail, value]);
    };

    const encode = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((k) => {
            formData.append(k, data[k])
        });
        return formData
    };

    const history = useHistory();
    const submit = e => {
        e.preventDefault();
        const name = user;
        const data = { "form-name": "contact", name, mail, message };
        fetch("/", {
            method: "POST",
            body: encode(data)
        }).then(() => {
            alert("success!");
            history.push("/");
        }).catch(error => console.log(error));
    };

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" onChange={checkForm} />
                </div>
                <div>
                    <p>E-mail</p>
                    <input type="mail" name="mail" onChange={checkForm} />
                </div>
                <div>
                    <p>Message</p>
                    <textarea name="message" onChange={checkForm} />
                </div>
                <div>
                    <button type="submit" disabled={input.some(check => !check)}>Send</button>
                </div>
            </form>
        </>
    );
}

export default Form;
