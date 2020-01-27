/** @jsx jsx */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const Contact: React.FC = () => {
  const [forms, setForms] = useState([false, false, false]);
  const [name, mail, message] = [forms[0], forms[1], forms[2]];
  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setForms([false, mail, message]);
      return;
    }
    setForms([true, mail, message]);
  };
  const checkMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || !e.target.value.match(/.+@.+\..+/)) {
      setForms([name, false, message]);
      return;
    }
    setForms([name, true, message]);
  };
  const checkMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === "") {
      setForms([name, mail, false]);
      return;
    }
    setForms([name, mail, true]);
  };

  const history = useHistory();
  const send = () => {
    alert("Sent successfully. Thank you.");
    history.push("/");
  };

  return (
    <React.Fragment>
      <div css={contact__titleSection}>
        <svg width="286.001" viewBox="0 0 286.001 302" css={contact__icon}>
          <g fillRule="evenodd" clipRule="evenodd">
            <path
              fill="#C3C6CD"
              d="M207.594 55.431c6.976 4.413 15.153 3.755 22.773 4.782 10.651 1.436 21.189 3.576 31.863 4.802 2.979.343 5.995.432 8.9 1.375 2.352.764 3.588 2.289 3.068 4.659-1.967 8.959-2.175 18.133-3.519 27.151-.607 4.085-1.882 8.051-1.364 12.253-.121 3.202-1.084 6.362-.451 9.597.047 1.346-1.149 2.474-.697 3.967 1.563.274 2.542-1.582 4.123-1.138 4.232 3.196 2.094 7.367 1.731 11.268-2.075.432-3.807 1.422-5.493 2.758-10.126 8.011-20.748 15.358-31.122 23.036-9.26 6.854-18.459 13.814-27.883 20.42-12.622 8.846-24.625 18.535-37.415 27.134-6.668 4.483-6.69 5.655.014 9.685 5.83 3.504 11.344 7.505 16.964 11.334 8.477 5.777 17.195 11.207 25.501 17.218 14.852 10.748 30.733 19.977 45.349 31.056 3.329 2.523 7.17 4.215 10.552 6.654 1.217.875 2.809 1.292 3.364 2.93-1.474 4.353-4.559 5.802-10.876 5.128-16.85-11.989-34.257-23.169-51.298-34.877-9.489-6.52-19.075-12.909-28.499-19.536-9.757-6.859-19.747-13.411-29.732-19.949-7.242-4.741-16.104-3.707-24.13 1.989-9.838 6.984-19.794 13.788-30.049 20.183-7.284 4.545-14.165 9.771-21.26 14.645-16.471 11.319-33.134 22.355-49.647 33.607-1.737 1.184-3.136 2.72-4.855 3.896-4.188.091-8.644.91-11.005-4.009.508-2.618 2.664-3.71 4.619-5.027 16.815-11.306 33.561-22.724 50.404-33.983 14.313-9.565 28.246-19.693 42.797-28.902 2.587-1.639 4.854-3.735 7.546-5.205 2.681-1.461 2.059-2.522-.083-4.077-7.752-5.629-15.629-11.095-23.264-16.873-10.069-7.622-20.527-14.699-30.653-22.222-8.568-6.365-17.153-12.725-25.674-19.162-7.509-5.672-15.192-11.12-22.675-16.833-1.224-.934-3.166-.189-4.008-1.865-.463-4.006-1.86-8.287 3.136-10.682 2.655.28 4.011 2.82 6.687 3.801.666-3.645 1.463-7.191 1.221-10.889.816-4.117 1.857-8.196 2.178-12.403 2.075-5.291 2.095-10.971 2.986-16.473 1.499-9.254 2.78-18.557 3.704-27.885.774-7.809 2.275-15.489 3.374-23.237.557-3.921 3.571-4.28 8.897-3.022 4.524 1.068 9.078 1.443 13.592 2.016 7.393.938 14.646 2.793 22.049 3.391 5.402.435 10.61 2.75 16.151 1.657 4.011-.448 7.942.688 11.938.594 1.61.825 3.282 1.42 5.1 1.657 10.692 1.389 21.396 2.822 32.024 4.514 13.237 2.109 26.589 3.468 39.744 6.056 2.889.568 5.797.34 8.654.831 4.843.972 9.537 2.97 14.649 2.205z"
            />
            <path
              fill="#98A0A9"
              d="M262.404 290.724c4.142-.541 9.184.941 10.975-4.882-1.51-1.757-1.263-3.903-1.272-5.967-.045-9.165.333-18.339.165-27.495-.432-23.465.017-46.927-.123-70.39-.082-13.89-.194-27.783-.032-41.674.025-2.166-.462-4.499 1.327-6.321-.483-3.63 2.014-7.745-1.765-10.839-1.613-.188-2.858-.847-3.275-2.564-1.538-3.544-1.239-6.924.913-10.136 4.195 2.295 7.167 6.062 10.705 9.131 1.42 1.233 1.836 3.545 1.836 5.76-.002 10.799.353 21.616.204 32.394-.354 25.453-.154 50.903-.241 76.353-.051 14.94-.244 29.883.109 44.83.102 4.341.836 8.972-1.98 13.279-3.279 5.016-7.803 6.93-13.299 6.937-38.151.056-76.304.042-114.455-.035-19.73-.042-39.459.367-59.191-.387-8.599-.328-17.233.424-25.852.462-16.701.074-33.406.14-50.104-.112-5.348-.081-13.265-4.937-12.947-13.565.472-12.797-.613-25.582.244-38.389.457-6.833-.322-13.743-.362-20.618-.07-12.321.007-24.646.002-36.967-.01-21.303-.011-42.605-.082-63.909-.009-2.85.899-5.132 3.026-6.982 5.938-5.165 11.868-10.34 17.802-15.511 2.106 3.581-.719 6.843-.708 10.297.002.753-.609 1.51-.939 2.264-1.459 3.585-4.538 5.496-7.637 7.385-2.774.498-3.146 2.668-3.251 4.882-.097 2.024.036 4.058.068 6.087 1.633 2.208 1.018 4.812 1.164 7.239.762 12.609-.107 25.227.074 37.839.128 8.996.726 18.019.3 26.979-.351 7.354.59 14.644-.058 22.013-.764 8.674.067 17.438.111 26.163.05 9.824-.495 19.641-.204 29.466.029.993-.292 1.916-.565 2.846.511 3.683 3.573 3.064 6.002 3.706 1.646.434 3.233.623 4.896.449 4.061-1.96 8.498-1.391 12.675-1.283 12.903.33 25.795-.318 38.693-.042 19.415.419 38.844.352 58.253.116 19.277-.233 38.56-.159 57.83-.185 22.051-.028 44.115.021 66.173.314 1.658.022 3.356-.012 4.795 1.062z"
            />
            <path
              fill="#98A0A8"
              d="M107.379 40.573c-4.124 1.573-8.003.221-11.893-1.001 6.912-4.615 12.296-10.979 18.624-16.273 6.869-5.747 13.241-12.113 20.317-17.579 5.901-4.558 13.642-3.849 19.983 2.061 9.177 8.553 18.509 16.917 28.188 24.913 5.515 4.555 10.344 9.941 15.863 14.49 3.184 2.624 6.165 5.413 9.131 8.249-2.904 1.401-5.931 1.9-8.764.127-1.764-1.104-4.229.498-5.54-1.716-2.225.081-3.315-1.752-4.68-2.957-13.821-12.2-27.658-24.381-41.482-36.578-3.028-2.671-5.513-2.686-8.441.049-8.311 7.76-17.173 14.902-25.416 22.741-1.634 1.555-3.237 3.497-5.89 3.474z"
            />
            <path
              fill="#FEFEFE"
              d="M31.375 124.789c.972-7.527 1.925-15.056 2.921-22.58 1.797-13.576 3.596-27.153 5.44-40.724.779-5.741 1.791-11.453 2.464-17.204.283-2.418 1.441-3.171 3.575-2.838 8.998 1.403 17.979 2.914 26.984 4.272 10.896 1.643 21.808 3.172 32.713 4.748 8.204 1.185 16.404 2.388 24.612 3.542 9.699 1.364 19.473 2.317 29.09 4.117 11.418 2.137 22.962 3.29 34.41 5.154 10.484 1.709 21.057 2.92 31.493 4.867 8.099 1.511 16.366 1.771 24.393 3.845 4.104 1.062 8.457 1.199 12.712 1.615 2.336.229 3.039 1.288 2.718 3.567-2.235 15.857-4.396 31.725-6.582 47.589-.891 1.936-2.19 3.504-3.978 4.703-7.141 4.789-14.208 9.701-21.114 14.803-15.516 11.463-31.322 22.518-46.953 33.817-10.003 7.232-19.612 15.019-30.018 21.706-8.951 5.751-18.877 4.907-27.42-1.211-9.705-6.951-18.984-14.452-28.733-21.34-10.09-7.127-19.882-14.677-29.744-22.115-11.961-9.022-24.188-17.69-35.973-26.947-1.222-.959-2.266-2.027-3.01-3.386zM262.404 290.724c-20.682-.331-41.364.253-62.051-.254-12.346-.302-24.718.505-37.065.221-17.761-.405-35.518.068-53.28-.198-11.79-.179-23.631.119-35.448.235-12.572.124-25.149-.116-37.726-.154-4.283-.011-8.566.108-12.85.166-.153-1.524.962-2.241 1.979-2.933 11.741-7.974 23.485-15.945 35.258-23.874 10.83-7.292 21.711-14.507 32.544-21.797 12.789-8.608 25.436-17.438 38.368-25.825 7.7-4.994 15.547-4.338 23.19.846 9.244 6.269 18.898 11.956 27.936 18.503 10.966 7.942 22.314 15.308 33.438 23.01 10.731 7.433 21.797 14.386 32.521 21.829 4.555 3.162 9.759 5.577 13.186 10.225zM13.087 286.584c-1.19-7.468-.417-14.968-.373-22.457.086-14.76-.032-29.522-.059-44.279-.018-10.45.33-20.918-.351-31.419-.766-11.785.281-23.683.371-35.533.048-6.284-.264-12.571-.412-18.857 1.243-.931 2.316-1.058 3.721.01 11.25 8.542 22.535 17.038 33.869 25.466 10.625 7.9 21.289 15.749 31.998 23.534 12.69 9.228 25.403 18.424 38.212 27.484 2.504 1.771 1.395 2.718-.236 3.831-5.012 3.425-10.073 6.776-15.09 10.193-9.701 6.61-19.35 13.296-29.084 19.857-11.063 7.454-22.208 14.788-33.295 22.211-7.3 4.887-14.566 9.822-21.834 14.76-2.502 1.7-4.96 3.467-7.437 5.199zM273.443 133.995c-.005 25.501.042 51.003-.033 76.503-.036 12.453-.332 24.927-.186 37.355.148 12.664-.126 25.327.154 37.988-5.818-2.521-10.912-6.207-16.09-9.796-10.08-6.986-20.094-14.058-30.593-20.436-5.654-3.437-10.786-7.724-16.269-11.457-10.129-6.895-20.347-13.657-30.518-20.488-4.23-2.839-8.497-5.631-12.626-8.61-1.978-1.427-3.662-2.459-.096-4.982 13.518-9.566 26.73-19.555 40.186-29.22 16.813-12.079 33.413-24.464 50.13-36.683 4.067-2.973 8.512-5.592 11.959-9.459.833-.932 2.37-2.115 3.982-.715z"
            />
            <path
              fill="#E1E3E5"
              d="M31.375 124.789c8.49 6.395 16.95 12.831 25.481 19.173 7.522 5.59 15.143 11.051 22.688 16.612 12.344 9.097 24.95 17.873 36.856 27.514 5.172 4.187 10.91 7.506 15.965 11.877 4.918 4.251 15.996 4.125 21.965-.099 13.749-9.729 27.181-19.904 40.85-29.748 9.618-6.924 19.735-13.193 29.034-20.511 7.714-6.07 16.301-10.857 23.787-17.226 3.24-2.756 7.274-4.534 10.319-7.621.172 5.677-1.469 9.934-6.745 13.374-10.145 6.615-19.511 14.423-29.438 21.354-12.345 8.618-24.152 17.958-36.593 26.444-9.242 6.304-18.084 13.201-26.993 19.981-1.528 1.161-2.641 1.449-4.464.814-7.346-2.561-14.761-3.324-22.101.085-1.453.674-2.48.399-3.77-.559-10.76-7.986-21.628-15.827-32.389-23.814-11.972-8.886-24.135-17.507-36.035-26.498-7.992-6.039-16.246-11.786-24.487-17.506-3.949-2.741-6.025-5.517-4.132-10.34.386-.975.151-2.197.202-3.306z"
            />
            <path
              fill="#E9EAEF"
              d="M107.379 40.573c10.152-8.974 20.312-17.943 30.457-26.927 3.597-3.186 6.709-3.133 10.228 0 14.034 12.503 28.109 24.963 42.168 37.44 1.026.911 2.039 1.839 3.058 2.758-4.773 1.366-9.381-.399-13.973-1.042-8.879-1.243-17.911-1.92-26.607-3.747-9.869-2.072-19.933-2.296-29.733-4.501-3.704-.833-7.562-.966-11.316-1.609-1.621-.278-3.752.012-4.282-2.372z"
            />
            <path
              fill="#E8E9ED"
              d="M15.447 123.07c2.099-2.924 5.056-4.959 7.637-7.385 1.613 3.938-.683 7.666-.647 11.53.012 1.364-1.308.918-1.784.43-1.625-1.662-4.137-2.305-5.206-4.575z"
            />
            <path
              fill="#E3E5EA"
              d="M268.403 120.591l3.276 2.564c-.178.199-.319.515-.536.579-1.514.453-2.597 3.298-3.854 2.121-1.572-1.477-.487-3.731 1.114-5.264z"
            />
            <path
              fill="#0276BE"
              d="M205.113 119.655c-1.056 15.312-6.516 28.14-16.113 39.191-3.217 3.704-7.717 5.983-12.175 7.428-5.2 1.684-10.525 3.41-16.478 1.481-4.644-1.505-7.924-4.232-10.224-7.957-1.805-2.922-3.104-2.523-5.528-1.212-6.67 3.604-13.817 3.778-20.868 1.596-10.389-3.212-16.786-11.003-18.872-21.087-3.662-17.693.722-33.38 16.115-44.25 11.163-7.882 26.839-7.803 37.267 3.662 2.119 2.33 3.298 3.09 3.966-.721.738-4.206 3.192-4.947 6.879-3.589 2.066.761 4.273 1.148 6.326 1.941 5.208 2.012 5.859 2.951 3.686 7.907-5.042 11.494-8.235 23.613-12.429 35.39-.922 2.586-1.714 5.277-2.098 7.984-.729 5.14 2.373 7.715 7.368 6.498 7.681-1.873 12.661-6.7 16.202-13.654 3.538-6.949 6.331-14.107 6.478-21.884.291-15.534-5.685-27.971-18.812-36.925-10.73-7.318-22.517-8.863-34.914-7.381-14.55 1.739-26.94 7.716-35.828 19.808-7.104 9.665-11.481 20.395-11.794 32.491-.486 18.792 6.874 33.371 23.122 43.453 10.688 6.632 22.203 9.363 34.585 9.276 3.78-.026 7.554-.487 10.874-2.262 3.645-1.949 5.632.459 6.602 2.807 1.237 2.998-1.965 3.989-4.02 4.566-11.146 3.133-22.494 4.686-33.853 1.456-13.903-3.951-26.974-9.751-36.265-21.389-5.313-6.656-9.227-14.105-11.138-22.736-4.232-19.118.981-36.425 9.93-52.729 4.911-8.947 13.432-14.874 22.89-18.952 9.06-3.904 18.616-5.974 28.441-6.192 10.236-.227 20.104 1.807 29.456 6.209 7.437 3.5 14.374 7.651 19.609 14.124 8.558 10.576 11.104 23.093 11.613 35.652z"
            />
            <path
              fill="#FEFEFE"
              d="M141.085 100.481c6.871-.254 12.201 2.952 16.846 7.597.905.905 1.006 1.939.497 3.382-3.644 10.349-7.185 20.735-10.571 31.172-1.786 5.502-7.197 5.583-10.911 5.938-3.086.296-6.985.701-10.553-1.002-4.136-1.973-6.892-4.767-7.629-9.014-2.072-11.949.33-22.843 8.637-32.065 3.157-3.505 8.588-5.879 13.684-6.008z"
            />
          </g>
        </svg>
        <h2 css={contact__h2}>Contact</h2>
      </div>
      <p css={contact__text}>Please report any feature requests or glitch.</p>
      <form
        css={contact__form}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-filed"
      >
        <section css={contact__section}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              css={contact__input}
              onChange={checkName}
            />
          </label>
        </section>
        <section css={contact__section}>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              css={contact__input}
              onChange={checkMail}
            />
          </label>
        </section>
        <section css={contact__section}>
          <label>
            <p>Message</p>
            <textarea
              name="message"
              css={contact__input}
              onChange={checkMessage}
            />
          </label>
        </section>
        <section css={contact__sendSection}>
          <button
            type="submit"
            css={contact__send}
            onClick={send}
            disabled={forms.some(boolean => !boolean)}
          >
            Send
          </button>
        </section>
      </form>
    </React.Fragment>
  );
};

const contact__titleSection = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const contact__icon = css`
  max-width: 30px;
  margin-right: 0.5rem;
  filter: drop-shadow(0px 2px 2px rgba(255, 255, 255, 0.4));
`;

const contact__h2 = css`
  font-size: 1.25rem;
  color: ${colors.mostLightOrange};
  font-weight: bold;
`;

const contact__text = css`
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const contact__form = css`
  max-width: 480px;
  width: 100%;
  margin: auto;
  p {
    margin-bottom: 0.5rem;
  }
  textarea {
    height: 150px;
  }
`;

const contact__section = css`
  margin-bottom: 1rem;
  text-align: left;
`;

const contact__input = css`
  width: 100%;
  height: 1.2rem;
  border: none;
  border-radius: 3px;
  background-color: ${colors.white};
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  box-shadow: 0 2px 4px ${colors.white};
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const contact__sendSection = css`
  text-align: left;
`;

const contact__send = css`
  height: 100%;
  padding: 0.5rem 0.75rem;
  background-color: ${colors.orange};
  border: none;
  border-radius: 3px;
  white-space: nowrap;
  color: ${colors.white};
  font-weight: bold;
  box-shadow: 0 2px 4px ${colors.white};
  transition: 0.2s;
  &:hover {
    background: ${colors.lightOrange};
    box-shadow: 0 2px 6px ${colors.white};
  }
  &:active {
    transform: translateY(2px);
    background: ${colors.darkOrange};
    color: ${colors.white};
    box-shadow: none;
  }
  &:disabled {
    cursor: default;
    opacity: .5;
  }
`;

export default Contact;
