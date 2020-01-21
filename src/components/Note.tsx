/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const Note: React.FC = () => (
  <React.Fragment>
    <h2 css={note__h2}>Note</h2>
    <svg width="286.001" viewBox="0 0 286.001 187.858" css={note__icon}>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#ACB6BE"
          d="M181.593 38.359c2.343-.52 4.712-.359 7.067-.191 2.467.176 4.958.312 7.378.778 2.656.511 5.185 1.542 7.607 2.769 3.886 1.967 7.201 4.742 9.368 8.454 1.892 3.243 4.999 4.193 7.983 5.556 5.461 2.494 11.058 4.675 16.566 7.062 4.332 1.876 8.677 3.792 13.161 5.352 3.57 1.241 6.887 3.13 10.41 4.537 5.476 2.185 10.948 4.413 16.268 6.947 6.081 2.898 8.053 9.222 3.532 14.906-.608.765-1.733 1.083-2.111 2.122-3.537 2.441-7.656 3.748-11.372 5.83-3.781 2.117-7.737 3.882-11.59 5.854-4.431 2.269-8.826 4.626-13.399 6.619-2.645 1.151-5.02 2.815-7.672 4.001-5.645 2.522-11.077 5.497-16.625 8.23-5.111 2.52-10.157 5.186-15.262 7.704-3.056 1.508-6.064 3.175-9.237 4.462-1.88.762-3.484 2.196-5.656 2.249-2.551.062-5.002-.247-7.328-1.42-4.944-2.492-9.701-5.347-14.769-7.597-.829-.368-1.552-.921-2.356-1.339-1.092-.567-1.585-.362-1.79.939-.588 3.738-1.193 7.469-1.198 11.268 0 .308-.083.594-.301.827-.59 2.732-.233 5.445.526 8.047 1.241 4.252 2.268 8.493 2.575 12.951.216 3.138.359 6.036-1.66 8.732-1.416 1.892-3.431 2.604-5.439 2.508-4.609-.225-9.222-.287-13.831-.467-1.281-.049-2.557-.379-3.615-.793-3.168-1.242-6.56-1.697-9.704-3.088-1.247-.551-2.985-.743-4.599-.812-2.441-.103-4.89-.582-7.351-.783-5.53-.45-10.899-2.362-16.525-1.901-3.077.253-6.132.828-9.21.966-3.313.149-6.465-.519-9.262-2.574-2.547-1.874-3.316-4.115-3.191-7.324.157-4.039 2.304-7.229 3.389-10.847.553-1.843 1.492-3.589 1.531-5.576.113-1.885.87-3.622 1.371-5.402 1.722-6.125 3.006-12.354 4.633-18.499.77-2.905 1.681-5.78 3.1-8.456 2.087-4.275 4.454-8.358 7.725-11.88 3.02-3.251 6.162-6.396 8.911-9.894.334-.425.752-.813.963-1.302 1.566-3.64 4.114-6.78 5.323-10.61.683-2.164 1.727-4.206 2.576-6.31 1.316-3.264 1.639-6.616 1.896-10.02.183-2.407.673-4.753 1.153-7.107.766-3.083 1.671-6.119 3.093-8.972 1.629-3.27 4.572-4.995 7.756-6.327 3.53-1.476 7.372-1.538 11.085-2.187 3.239-.008 6.435.705 9.686.571.998-.04 1.991.279 2.506 1.176.672 1.171 2.428 1.47 2.448 3.125-2.921-.121-5.836.145-8.769-.022-5.22-.298-10.471-.587-15.477 1.524-2.916 1.229-5.176 2.909-6.344 6.126-1.688 4.65-2.434 9.447-2.868 14.298-.327 3.651-1.149 7.131-2.497 10.499-1.698 4.247-3.473 8.47-5.667 12.486-2.277 4.169-5.047 7.919-8.393 11.394-4.905 5.093-9.538 10.458-12.061 17.365-2.493 6.825-3.995 13.866-5.59 20.905-.36 1.588-.908 3.12-1.36 4.679-1.576 5.431-3.349 10.8-5.536 16.023-.614 1.468-.806 3.045-.716 4.605.115 2.01 2.078 3.751 4.595 4.213 2.996.551 6.002.419 8.987-.08 2.684-.448 5.379-.696 8.073-.315 4.347.616 8.723 1.021 13.049 1.786.9.16 1.799.008 2.703.1 4.955.511 9.775 1.541 14.516 3.124 4.864 1.625 9.85 2.768 15.073 2.291 2.222-.202 4.44.388 6.674.25 1.844-.112 2.401-.633 2.752-2.462.625-3.261.429-6.485-.566-9.627-2.32-7.322-3.359-14.809-2.326-22.423.659-4.861 1.621-9.697 3.283-14.379 1.19-3.347 2.779-6.521 3.953-9.857 1.177-3.347 1.965-6.804 2.041-10.392.091-4.417.761-8.732 2.198-12.939.885-2.591 2.621-4.012 5.237-4.322 2.267-.269 4.54-.669 6.813-.708 5.375-.091 9.52-2.519 13.565-5.883 5.039-4.189 10.629-7.373 17.747-6.582 3.7.412 7.453-.202 10.996-1.586.34-.133.651-.305.956-.502 2.867-1.867 2.815-2.787-.193-4.41-3.627-1.956-6.446-4.791-8.834-8.119-2.275-3.172-4.363-6.477-7.167-9.263-4-3.972-8.927-5.777-14.346-6.536-2.606-.365-5.21-1.045-7.869-.354-1.622-.778-2.572-2.124-3.165-3.771z"
        />
        <path
          fill="#6B4C35"
          d="M160.269 144.277c-.635-1.764-.02-3.539.077-5.282.144-2.612.703-5.203 1.13-7.795.132-.804.228-1.484 1.47-.785 4.698 2.645 9.606 4.893 14.328 7.509 2.783 1.542 5.647 3.202 8.964 3.321 1.434.052 3 .065 4.284-.736 2.954-1.844 6.109-3.43 9.248-4.748 3.066-1.288 5.993-2.906 8.963-4.313 3.29-1.558 6.574-3.245 9.847-4.9 3.242-1.639 6.473-3.3 9.705-4.958 4.541-2.329 9.164-4.483 13.674-6.882 3.973-2.112 8.026-4.1 12.065-6.085 5.76-2.83 11.414-5.885 17.255-8.528 2.515-1.138 4.788-2.838 7.545-3.442.249 3.19.363 6.383.262 9.583-.041 1.389.687 2.807-.568 4.132-.598.632-1.221 1.216-1.859 1.797-2.568 1.74-5.506 2.789-8.184 4.338-.839.485-1.666 1.191-2.74 1.229-2.645.755-5.007 2.121-7.453 3.33-3.397 1.68-6.696 3.565-10.234 4.964-.844.333-1.589.909-2.408 1.314-4.58 2.269-9.111 4.631-13.724 6.836-2.069.989-4.082 2.224-6.146 3.172-2.731 1.254-5.329 2.747-8.039 4.028-4.143 1.958-8.218 4.06-12.357 6.028-4.264 2.028-8.344 4.421-12.692 6.283-.788.336-1.426 1.021-2.133 1.545-.662.407-1.382.705-2.047 1.103-2.426 1.447-4.728.754-6.948-.47-.918-.504-1.787-.923-2.85-.636-.326-2.659-2.798-2.737-4.506-3.681-3.728-2.062-7.535-3.98-11.254-6.056-.873-.486-2.02-.309-2.675-1.215z"
        />
        <path
          fill="#E6535C"
          d="M121.832 53.973c-.357 2.729-.695 5.459-1.079 8.185-.299 2.126-.234 4.266-.964 6.382-1.047 3.032-2.252 5.99-3.417 8.971-1.543 3.951-3.559 7.672-5.877 11.167-1.843 2.776-4.237 5.189-6.641 7.579-1.933 1.921-3.72 4.095-5.43 6.281-2.058 2.633-3.248 5.769-5.138 8.49-1.396.396-2.598-.439-3.897-.652-2.697-.441-5.38-.849-8.125-.659-1.01.069-2.052.156-2.784-.795l-.057-2.146c-.533-.509-.662-1.201-.508-1.831.477-1.951.287-3.942.474-5.906.039-.187.11-.364.208-.528 4.481-2.244 7.145-5.933 8.459-10.689.276-1.048.56-2.095.931-3.113.666-.874 1.654-1.385 2.486-2.049 4.147-3.312 4.655-12.371-1.857-15.844-.706-.377-1.422-.655-2.24-.439-.25-.039-.518-.14-.576-.376-.712-2.936-2.43-5.488-3.189-8.405.887-1.894 1.677-3.806 3.246-5.334 2.109-2.054 3.829-4.476 5.84-6.631.497-.533.966-1.088 1.763-1.16 4.895-.637 9.744-.047 14.563.683 2.188.332 4.353.938 6.49 1.564.691.202 1.394.438 1.752 1.162.297.951-.18 1.74-.546 2.552-.344.765-.851 1.441-1.219 2.189-.304.617-.941 1.327-.39 1.968.521.605 1.205-.14 1.823-.187 1.964-.152 3.858-1.352 5.899-.429z"
        />
        <path
          fill="#FECBA0"
          d="M78.479 108.921c.955.444 1.972.406 2.979.342 4.07-.256 8.01.338 11.828 1.765-1.201 3.215-2.54 6.39-3.267 9.756-.73 3.375-1.337 6.815-2.309 10.088-1.233 4.15-1.74 8.548-3.808 12.444-1.784 1.157-3.693 2.167-5.526 3.168-1.749.954-3.327 2.458-5.574 2.672-3.047.29-4.722 2.76-6.608 4.825-.826.903-1.492 2.004-2.749 2.45-.472.168-.855.879-1.413.387-.433-.383-.274-1.019-.222-1.553.04-.409.148-.81.255-1.366-.901.029-1.533.431-2.012 1.012-.333.405-.72.596-1.184.755-.456.157-1.035.522-1.345.158-.362-.426-.28-1.048.057-1.634.344-.598.492-1.309.832-2.269-1.412.787-2.534 1.518-3.746 2.046-.648.282-1.546.894-2.144.14-.437-.553.213-1.307.432-1.917.226-.627.822-1.119 1.454-1.92-1.853-.04-3.067.894-4.439 1.23-1.286.314-1.806-.298-1.458-1.392.306-.964.804-2.199 1.587-2.613 1.879-.993 3.205-2.603 5.009-3.763-1.006-.895-2.27-.889-3.333-1.359-.609-.269-1.336-.527-1.384-1.271-.056-.869.676-1.151 1.394-1.403 2.654-.933 5.46-.96 8.196-1.399 2.229-.358 4.391-1.013 6.623-1.382.936-.155 1.672-1.448 2.522-2.196 2.371-2.086 4.751-4.165 7.136-6.234.611-.53 1.148-1.109 1.086-1.969-.155-2.198.27-4.368.199-6.578-.077-2.43.365-4.876.584-7.315.112-1.235.232-2.47.348-3.705z"
        />
        <path
          fill="#ACB6BE"
          d="M6.795 50.332c-.084-.888-.602-1.423-1.246-2.045-4.74-4.57-3.589-10.595 2.099-13.37 2.592-1.264 5.501-1.721 8.026-3.046 2.9-1.522 6.115-2.125 9.047-3.547 2.088-1.012 4.405-1.561 6.63-2.285 1.881-.612 3.211-1.607 4.177-3.531 1.269-2.526 3.688-4.278 6.229-5.353 3.235-1.368 6.747-2.075 10.096-3.163 4.411-1.434 8.794-2.996 13.074-4.828 2.441-1.044 4.994-1.904 7.577-2.502 1.43-.33 3.152-.306 4.521.182 3.391 1.208 6.093-.378 8.971-1.599 3.739-1.586 7.586-2.699 11.687-1.538 1.075.304 2.011 1.048 3.181 1.116.789 1.308-.103 2.444-.371 3.644-.743.339-1.439.066-2.076-.256-2.631-1.33-5.323-1.364-8.045-.402-1.363.481-2.791.775-4.021 1.43 2.271 2.324 4.083 4.94 5.303 8.074 1.987 5.105.004 9.157-2.994 12.98-4.199 5.354-10.061 8.089-16.402 9.891-4.799 1.364-9.728 2.202-14.646 3.013-3.567.589-7.22.911-10.792.62-3.868-.314-7.136-2.373-9.886-5.135-2.074-2.083-3.057-4.721-3.628-7.513-.23-1.124-.64-1.375-1.709-1.069-2.545.73-5.008 1.668-7.398 2.787-1.26.589-2.613.9-3.909 1.337-3.245 1.096-6.308 2.675-9.66 3.491-1.88.458-3.559 1.506-3.902 3.585-.346 2.098.648 3.82 2.47 4.845 2.984 1.68 5.985 3.343 9.132 4.714 2.595 1.13 4.967 2.689 7.502 3.935 1.887.929 3.674 2.047 5.579 2.943.779.367 1.488.803 1.761 1.697.083.63-.106 1.111-.736 1.35-.592.147-1.195.266-1.723.602-1.438.452-2.595-.32-3.708-.98-2.785-1.655-5.746-2.969-8.585-4.521-1.943-1.062-3.804-2.34-5.895-3.085-1.97-.702-3.734-1.849-5.73-2.468z"
        />
        <path
          fill="#E7545D"
          d="M181.593 38.359c1.291.989 1.872 2.581 3.087 3.634 1.411.503 2.19 1.507 2.372 2.987-1.595 1.347-3.483 2.289-4.988 3.792-1.058 1.059-2.33 1.916-3.203 3.161-.501.714-1.133 1.049-1.984 1.02-1.851.036-3.043-1.356-4.452-2.187-3.37-1.988-6.918-3.684-10.14-5.906-1.545-1.064-3.281-1.974-4.33-3.654-.791-1.329-2.24-2.051-3.079-3.368-.25-.392-1.029-.633-1.652-.52-2.965.54-5.859-.681-8.818-.345-.311.035-.656-.221-.986-.341.969-2.738 2.25-5.301 4.182-7.502 1.198-.853 1.739-2.43 3.239-2.955 2.813-2.492 6.016-4.014 9.834-3.256 3.357.667 6.568 1.338 9.468 3.8 4.197 3.563 7.579 7.822 11.45 11.64z"
        />
        <path
          fill="#FECBA0"
          d="M100.456 8.401c-.567-1.273.628-2.345.409-3.579.179.004.45-.066.522.022 1.324 1.637 2.594 1.928 3.851-.072.067-.107.328-.094.572-.155.097.49.086 1.008.304 1.399.337.607.546 2.428 1.549.358.289-.595.902-.695 1.384-.616.574.095.501.736.527 1.211.074 1.372.012 2.826 2.004 1.217.449-.363 1.676-.731 1.327.864-.093.423.16.923.254 1.387.277 1.169.133 2.356.147 3.535 0 .421.066.861-.037 1.262-.687 2.661-.02 4.989 1.222 7.417 2.178 4.261 3.041 8.977 4.004 13.635.83 4.018-.512 7.693-1.727 11.393-.095.289-.296.524-.667.471-.286-.761-1.022-.772-1.634-.937-5.259-1.417-10.571-2.361-16.058-2.442-1.721-.025-3.416.437-5.127.126-.213-.736.334-1.119.766-1.498 1.576-1.386 3.018-2.917 4.73-4.154 1.261-.911 2.116-2.141 2.155-3.784.049-2.151.153-4.292-.278-6.438-.455-2.257-.214-4.567-.114-6.844.104-2.392-.325-4.46-2.022-6.3-1.081-1.171-1.585-2.797-2.599-4.083-.509-.646-.814-1.64-.102-2.334.761-.742 1.933-.707 2.713-.206 1.289.827 1.571.065 1.925-.855z"
        />
        <path
          fill="#180F10"
          d="M27.08 128.078c-1.746.148-3.441.019-5.093-.661-1.546-.636-3.261-.681-4.818-1.369-1.727-.763-2.147-1.69-.648-2.929 1.508-1.247 1.747-3.252 3.254-4.417.566-.438.487-.949-.348-1.274-.871-.339-1.657-.896-2.48-1.358-.949-.503-.555-1.085-.011-1.533 3.408-2.804 5.919-6.424 8.892-9.6 2.94-3.141 5.246-6.648 7.796-10.023.529-.7 1.076-1.438 1.952-1.788 1.018.118 1.053.723.866 1.561-.676 3.039-.327 3.454 2.749 3.967 2.237.375 4.494.667 6.696 1.245.867.633.355 1.306-.021 1.879-3.523 5.364-6.188 11.232-9.698 16.592-1.703 2.602-3.809 4.937-6.033 7.136-.949.939-1.544 2.301-3.055 2.572z"
        />
        <path
          fill="#2F1F23"
          d="M27.08 128.078c2.926-2.814 5.633-5.845 8.091-9.056 1.656-2.162 2.953-4.617 4.265-7.021 1.901-3.48 3.765-6.978 5.936-10.302.286-.437 1.029-.79.434-1.499.328-.933 1.112-.548 1.682-.494 2.338.217 4.678.335 7.027.334 1.434.283 2.835-.217 4.257-.167 1.772.063 2.206.757 1.616 2.533-1.142.258-1.526 1.321-2.025 2.135-1.293 2.104-2.608 4.186-4.039 6.203-1.421 2.005-2.13 4.41-3.517 6.448-2.119 3.117-3.343 6.797-6.036 9.559-.677.694.695.16.45.656-.679.969-1.927.686-2.715.745-.915.067-1.915.148-2.877.172-3.296.083-6.583.026-9.868-.318-.881-.094-1.787.041-2.681.072z"
        />
        <path
          fill="#4D3623"
          d="M178.702 155.228c.36-.541.421-1.224 1.517-.612.943.527 1.925 1.099 2.961 1.538 2.112.895 3.927.568 5.748-.55.506-.312.961-.759 1.62-.374.042 2.063.099 4.125.126 6.188.066 5.148.209 10.296.142 15.443-.038 2.886-.108 6.025-3.533 7.212-1.82.629-3.89.859-5.699-.02-2.011-.979-3.137-2.589-3.041-5.08.16-4.098.117-8.213.007-12.316-.102-3.815.113-7.619.152-11.429z"
        />
        <path
          fill="#4A3421"
          d="M265.733 117.731c3.439-2.25 7.011-4.245 10.924-5.567.227 2.304.701 4.551.154 6.938-.341 1.486.331 3.175.217 4.749-.309 4.248-.04 8.49-.068 12.733-.01 1.535.056 3.091-.184 4.594-.163 1.025-.821 1.981-1.834 2.489-2.313 1.158-4.854 1.098-7.048.16-1.536-.657-2.109-2.393-2.169-4.452-.166-5.696.221-11.394-.146-17.09-.097-1.477.213-3.029.154-4.554z"
        />
        <path
          fill="#6A4B34"
          d="M6.795 50.332c.345-.468.782-.534 1.26-.243 3.092 1.883 6.525 3.077 9.654 4.921 3.625 2.137 7.471 3.899 11.222 5.823.544.279 1.107.464 1.731.336-.091 1.075-1.18 1.35-1.703 2.107-1.924 2.781-3.125 5.824-3.748 9.123-.164.505-.211 1.066-.674 1.43-1.828-.807-3.452-2.046-5.424-2.541-3.039-1.273-5.783-3.132-8.815-4.415-.474-.2-.587-.756-1.04-.959-1.814-.839-2.561-2.363-2.551-4.195.018-3.223.548-6.465-.225-9.675-.141-.586.054-1.169.313-1.712z"
        />
        <path
          fill="#170F10"
          d="M45.221 127.406l-1.376-.139c1.06-1.433 1.991-2.829 3.01-4.066 1.353-1.642 2.066-3.622 3.054-5.377 2.431-4.313 4.928-8.572 7.546-12.772.627-1.006 1.443-1.854 2.034-2.885.35-.614.431.136.579.362.365.396.323.872.266 1.351-.545 4.519 1.594 7.046 6.225 7.315.654.038 1.309.03 1.956.172.647.156 1.129.381.854 1.228-.889 2.728-1.56 5.524-2.555 8.218-.314.851-.683 1.668-1.353 2.31-2.379 1.374-4.949 2.139-7.643 2.673-3.319.658-6.674 1.006-10.009 1.519-.871.133-1.721.202-2.588.091z"
        />
        <path
          fill="#4A3421"
          d="M9.257 65.914c3.119 1.124 5.81 3.112 8.858 4.386.4.167.667.651.997.988.01 4.813.018 9.628.031 14.442.005 2.074.098 4.151.005 6.221-.082 1.808-.575 3.448-2.46 4.325-1.826.85-3.785.591-5.209-.31-1.27-.803-2.183-2.236-2.147-4.327.05-2.895.124-5.832-.093-8.765-.168-2.271.02-4.65.086-6.979.094-3.323-.035-6.653-.068-9.981z"
        />
        <path
          fill="#2D1E22"
          d="M35.458 93.348c-2.442 2.816-3.913 6.437-6.521 8.991-3.835 3.757-6.586 8.447-10.732 11.891-.562.466-2.064.402-1.256 1.839-1.907-.043-3.51-.934-5.565-1.815 2.312-1.029 4.172-2.121 6.181-2.693 3.673-1.046 4.973-3.824 5.501-7.092.763-4.725.801-9.501.412-14.275-.021-.255.207-.53.317-.796 1.282-.489 2.126-1.567 3.071-2.453 1.34-1.257 2.828-1.988 4.623-2.177 2.383.229 2.977 1.001 2.499 3.242-.063.294-.101.594-.178.886-.621 2.342-.622 2.342 1.341 3.845.2.153.328.342.307.607z"
        />
        <path
          fill="#ACB5BE"
          d="M112.835 14.073c.104-1.211-.384-2.477.325-3.635 2.639.828 5.117 2.042 7.654 3.125 4.913 2.099 9.931 3.956 14.817 6.112 2.641 1.165 5.308 2.335 7.922 3.548 2.099.973 4.386 1.974 6.734 2.548.206.051.37.266.554.404-.924 1.065-1.671 2.294-2.883 3.091-5.789-2.634-11.789-4.783-17.556-7.449-4.962-2.293-10.13-4.064-15.069-6.387-.856-.402-1.843-.578-2.498-1.357z"
        />
        <path
          fill="#2F1F23"
          d="M65.459 123.122c1.1-2.221 1.487-4.691 2.51-6.965.559-1.24.325-2.86 1.187-4.114l-.826-.214c.081-1.029 1.017-.926 1.603-1.043 3.35-.672 4.447-3.974 3.774-6.904-.054-.234-.155-.457-.222-.688-.763-2.634-.635-2.988 1.952-3.709 1.072-.299 2.072-1.294 3.333-.588-.012 1.939.348 3.913-.36 5.792-.28.739.255 1.395.013 2.086-1.531 1.502-1.654 3.686-2.648 5.465-2.526 4.525-5.284 8.761-10.316 10.882z"
        />
        <path
          fill="#191011"
          d="M31.413 85.139c-2.66.35-4.417 2.089-6.054 3.982-.488.565-.963.633-1.564.276-.864-1.96-.33-4.038-.28-6.015.081-3.188.095-6.434 1.023-9.554.137-.476-.192-1.068.361-1.438.83-.797 1.475-1.805 2.584-2.289 3.172 1.26 3.42 1.778 2.097 4.743-.507 1.135-.359 2.023.793 2.539 1.578.707 1.526 1.796.879 3.094-.267.535-.509 1.076-.727 1.639-.492 1.274-.401 2.305.888 3.023z"
        />
        <path
          fill="#FEFEFE"
          d="M157.956 41.207c5.114 3.836 10.625 7.02 16.274 9.987.87.457 1.448 1.441 2.579 1.444 2.165.606 3.748 1.862 4.442 4.063.316 1.003.951 1.498 1.997 1.443 3.485-.178 6.956.096 10.429.3 1.826.106 3.555-.537 5.343-.732.371-.041.684-.27.834-.622.838-1.957 2.367-3.251 4.104-4.361.4-.256.879-.56.702-1.13-.147-.478-.675-.404-1.073-.501-3.73-.912-7.539-1.417-11.302-2.157-2.495-.49-4.267-1.773-5.347-4.052-.551-1.121-1.453-1.97-2.258-2.895.368-.927 1.158-.674 1.856-.654 3.796.109 7.598.625 11.194 1.642 3.956 1.116 7.44 3.356 10.347 6.486 3.342 3.599 5.588 8.003 8.907 11.594 1.957 2.118 4.116 3.988 6.798 5.145 1.035.446 2.035 1.093 2.109 2.191.07 1.04-.834 1.68-1.77 2.281-3.044 1.957-6.375 2.535-9.902 2.579-3.248.04-6.558-.125-9.718.46-2.035.377-3.987 1.632-5.904 2.703-3.354 1.875-5.929 4.74-9.182 6.724-2.551 1.556-5.248 2.439-8.22 2.642-2.743.186-5.489.414-8.214.77-2.31.302-3.778 1.558-4.661 3.883-1.946 5.128-1.963 10.504-2.505 15.82-.405 3.964-1.596 7.663-3.341 11.259-1.206 2.482-1.953 5.19-2.875 7.808-1.209 3.431-1.57 7.055-2.375 10.574-1.027 4.492-.6 9.005-.552 13.491.029 2.642 1.182 5.235 1.807 7.849.602 2.519 1.548 4.983 1.453 7.709-.059 1.694.119 3.376-.195 5.094-.389 2.125-1.059 2.871-3.232 2.951-2.501.091-4.979-.299-7.492-.269-2.629.032-5.321.265-7.928-.569-2.645-.846-5.336-1.592-8.007-2.294-2.631-.689-5.164-1.97-8.085-1.74-1.319.104-2.666-.76-4.174-.746-2.198.02-4.405-.357-6.598-.642-3.354-.433-6.693-.984-10.05-1.389-3.557-.43-7.049.372-10.572.659-3.436.28-6.93.506-9.86-2.01-1.146-.983-1.507-2.206-1.429-3.589.181-3.239 1.719-6.062 2.783-9.045 1.518-4.252 2.751-8.607 4.09-12.923 1.709-5.513 2.714-11.202 4.17-16.782 1.824-6.987 4.635-13.416 9.376-18.794 1.991-2.259 3.88-4.653 6.163-6.732 2.231-2.032 4.221-4.512 5.526-7.436.561-1.257 1.544-2.378 2.161-3.68 2.604-5.506 5.424-10.938 6.831-16.91.769-3.263.823-6.656 1.239-9.976.444-3.538 1.552-6.997 2.857-10.379 1.619-4.197 5.33-5.352 8.971-6.356 4.501-1.241 9.167-1.021 13.808-.553 1.745.177 3.549.128 5.284-.117.95-.135 1.62.19 2.387.484zM215.55 76.761c1.737-.582 3.583-.33 5.379-.933 2.519-.846 4.813-1.806 6.76-3.695 2.059-2 2.124-5.4.062-6.992-1.508-1.164-2.846-2.615-4.738-3.212-.507-.16-.838-.453-1.014-.937-.079-.217-.248-.494-.177-.655.145-.325.5-.267.783-.158 1.389.534 2.786 1.054 4.157 1.632 4.422 1.867 8.887 3.646 13.235 5.671 3.837 1.788 7.824 3.206 11.639 5.07 2.631 1.287 5.513 2.157 8.231 3.346 3.287 1.437 6.538 2.986 9.91 4.193 2.03.727 3.89 1.833 5.936 2.458 3.642 1.11 5.149 5.961 3.398 8.918-.891 1.504-2.484 2.246-3.984 2.942-3.666 1.7-7.158 3.755-10.827 5.406-3.635 1.635-7.166 3.483-10.699 5.284-3.677 1.876-7.425 3.624-11.071 5.574-5.127 2.743-10.411 5.191-15.608 7.802-5.633 2.831-11.232 5.729-16.87 8.551-4.109 2.057-8.249 4.052-12.388 6.047-2.522 1.216-4.982 2.546-7.548 3.69-2.835 1.264-5.443 1.097-8.033-.299-3.712-2.001-7.441-3.979-11.168-5.94-2.455-1.292-4.93-2.584-7.421-3.828-.304-.152-.847-.136-.58-.641.874-1.648.932-3.607 2.008-5.169.748-.68 1.479-.292 2.16.088 4.617 2.579 9.353 4.934 14.07 7.319 2.99 1.511 6.159 1.802 9.408.561 2.813-1.074 5.308-2.771 8.107-3.883 3.742-1.488 7.128-3.733 10.769-5.439 2.554-1.195 5.108-2.395 7.678-3.556 3.949-1.784 7.701-3.966 11.663-5.706 4.616-2.027 9.078-4.377 13.615-6.556 3.99-1.916 7.919-3.994 11.947-5.849 5.898-2.717 11.581-5.874 17.551-8.442 1.487-.64 2.821-1.6 4.36-2.168.672-.248 1.325-.784.96-1.671-.322-.781-1.036-.937-1.821-.817-.357.055-.716.132-1.033.31-6.661 3.732-13.655 6.792-20.497 10.162-8.409 4.141-16.863 8.197-25.284 12.316-3.891 1.903-7.749 3.88-11.628 5.807-4.469 2.22-9.125 4.065-13.523 6.427-3.122 1.677-6.389 3.045-9.517 4.713-1.5.8-3.121 1.519-4.775 2.087-3.005 1.033-5.737.217-8.307-1.236-4.143-2.343-8.502-4.247-12.701-6.473-1.032-.547-1.649-1.161-1.447-2.371l1.566-4.023c1.411-.789 3.004-.79 4.538-1 5.952-.817 11.865-1.844 17.607-3.63 3.47-1.08 6.55-2.938 9.273-5.369 2.633-2.351 5.304-4.659 8.064-6.859 1.083-1.198 2.348-2.208 3.37-3.479.889-1.105 2.028-1.743 3.609-1.602 2.337.208 4.625-.71 6.984-.502.236.021.517-.138.712-.051 2.678 1.193 4.354-1.012 6.395-1.906.911-.4.743-1.338-.374-1.86-1.475-.69-3.07-1.063-4.674-1.305-1.146-.172-2.093-.651-3.125-1.172-2.915-1.47-6.11-1.61-9.315-1.118-.614.094-.958.688-1.416 1.071-1.752 1.46-3.73 2.054-5.991 1.425-.387-.735-.018-1.289.497-1.729 2.434-2.086 4.581-4.524 7.75-5.667 1.13-.404 2.28-.618 3.403-.972z"
        />
        <path
          fill="#E7545D"
          d="M208.005 95.929c-2.665 2.326-5.273 4.72-8.008 6.96-3.419 2.8-7.187 4.922-11.54 6.056-6.055 1.577-12.179 2.664-18.394 3.284-.614.062-1.121.867-1.82.259.773-3.198 1.159-6.434 1.375-9.728.258-3.939.634-7.896 2.105-11.659.448-1.147 1.568-1.604 2.167-1.496 2.506.458 4.898-.45 7.389-.358 1.917.071 4.112.399 6.024-.62 4.306-1.501 8.782-2.259 13.253-3.046 1.011.133 1.554.891 2.046 1.64 1.586 2.411 3.421 4.646 4.969 7.083.315.496.811.945.434 1.625z"
        />
        <path
          fill="#FEFEFE"
          d="M112.835 14.073c2.439.455 4.479 1.917 6.814 2.666 3.2 1.024 6.292 2.421 9.339 3.784 3.303 1.479 6.616 2.934 9.955 4.336 2.58 1.083 5.148 2.191 7.712 3.309.53.231 1.177.37 1.302 1.101-2.056 2.118-2.702 5.105-4.535 7.365-1.607 1.033-3.494.748-5.23.943-3.906.438-7.342 1.921-10.489 4.113-.962.669-1.855 1.732-2.282 2.812-.833 2.11-2.371 3.939-2.386 6.417-.007 1.021-.778 2.037-1.203 3.055-2.208.149-4.406.313-6.489 1.198-.578.246-1.359.369-1.857-.157-.474-.499-.126-1.112.116-1.669.767-1.764 2.149-3.232 2.5-5.196 1.206-2.407 1.533-5.099 2.25-7.643.473-1.681-.057-3.786-.583-5.569-.619-2.095-.935-4.25-1.581-6.343-.849-2.749-1.842-5.395-3.183-7.938-.691-1.313-.925-2.741-.312-4.26.274-.683.108-1.544.142-2.324z"
        />
        <path
          fill="#DADEE3"
          d="M166.678 116.511c.699 2.51 3.295 2.454 4.987 3.584 2.964 1.979 6.399 3.111 9.491 4.938 3.271 1.934 6.746 2.197 10.292.02 2.638-1.621 5.592-2.727 8.399-4.073 3.051-1.463 6.083-2.964 9.147-4.4 3.364-1.578 6.843-2.932 10.113-4.684 4.843-2.596 9.762-5.033 14.72-7.389 2.417-1.149 4.885-2.254 7.252-3.451 2.591-1.31 5.281-2.465 7.815-3.924 2.262-1.303 4.723-2.262 7.085-3.391 2.032-.97 4.044-1.986 6.081-2.947 3.094-1.458 5.997-3.308 9.292-4.362.863-.276 1.588-1.006 2.365-1.543.919-.637 1.994-.963 2.991-.573.629.245 1.5.875 1.311 1.756-.189.894-.955 1.491-1.828 1.843-4.934 1.994-9.57 4.615-14.402 6.825-3.098 1.416-6.175 2.883-9.201 4.441-3.04 1.565-6.15 2.984-9.169 4.604-2.794 1.5-5.857 2.644-8.699 4.118-3.953 2.051-8.049 3.794-11.99 5.877-2.876 1.521-5.875 2.856-8.892 4.137-3.965 1.683-7.743 3.828-11.531 5.902-2.254 1.234-4.785 1.858-6.957 3.154-1.278.762-2.605 1.33-3.919 1.97-3.957 1.93-7.698 1.205-11.48-.66-2.369-1.169-4.617-2.556-7.089-3.586-1.904-.793-3.777-1.968-5.585-3.104-.741-.465-1.463-.823-2.355-.708.427-1.521 1.028-2.973 1.756-4.374z"
        />
        <path
          fill="#D8DDE1"
          d="M200.717 85.838c-2.167.471-4.338.925-6.501 1.416-2.097.476-4.187.984-6.277 1.49-.245.059-.456.104-.635-.115.25-.858.997-1.138 1.712-1.406 2.105-.786 3.708-2.304 5.443-3.638 5.222-4.011 10.564-7.695 17.696-6.766 1.11.144 2.261-.031 3.394-.058-2.432 1.232-5.257 1.793-7.23 3.793-1.467 1.487-3.601 2.347-4.36 4.513.42.914-.275.981-.844 1.038-.809.082-1.619 0-2.398-.267z"
        />
        <path
          fill="#FECA9E"
          d="M31.413 85.139c-1.826-.452-2.292-1.964-1.16-3.941l.483-.686c.829-1.326 1.009-2.417-.845-2.951-1.638-.472-1.3-1.686-.897-2.739 1.018-2.66 1.063-2.639-1.271-4.142-.134-.086-.186-.301-.275-.456-.59-.672-.282-1.406.006-2.018 1.307-2.785 2.521-5.639 4.896-7.752.619-.107.473-.623.544-1.021.905-1.396 2.19-2.428 3.381-3.552 1.026-1.104 2.188-2.045 3.43-2.894 1.469-1.045 2.846-2.279 4.789-2.365.135.118.334.28.306.42-.449 2.207 1.208 2.218 2.605 2.584 3.914 1.024 4.188 1.362 4.675 5.32.244.648.693 1.157 1.257 1.503 1.565.96 1.826 2.424 1.673 4.067-.069.74-.195 1.578.779 1.729.929.145 1.162-.668 1.367-1.379.134-.465.259-.95.178-1.426-.193-1.145.38-1.822 1.298-2.327.583-.35.572-1.034.868-1.544.303-.524.564-1.215 1.113-1.382 1.611-.491 2.88-1.67 4.418-2.179 1.059-.35 1.948-.849 2.862-1.415.861-.533 1.156-1.173.72-2.116-.18-.388-.399-.911-.113-1.207 1.053-1.089.536-2.348.517-3.559.593-.434 1.273-.452 1.885-.177 4.167 1.876 8.095 4.083 10.66 8.08.27.421.493.83.193 1.326-1.324 1.154-3.033 1.709-4.377 2.847-2.31 1.954-2.514 4.722-2.764 7.384-.516 5.497.602 10.754 2.844 15.774 1.395 3.121 4.026 4.262 7.262 4.439.933.051 1.956-.148 2.757.588-1.174 4.284-3.474 7.776-7.257 10.193-.373.238-.912.214-1.374.313-1.219-.836-2.384-1.648-3.916-2.034-.865-.218-1.284-1.624-2.157-2.382-1.686-1.467-3.716-1.547-5.652-2.073-.229-.063-.512-.016-.688.144-1.076.974-2.655 1.26-3.637 2.058-1.784 1.448-3.618 1.255-5.689 1.289.823 1.93-.943 3.058-1.378 4.618-.17.614-1.043.321-1.622.199-2.775.621-5.531-.375-8.301-.1-2.889-.541-5.812-.872-8.667-1.65-1.663-.454-1.721-1.287-1.518-2.728.105-.745 1.363-1.784-.164-2.474-.268-.098-.542-.18-.803-.296-2.379-1.068-2.458-1.188-1.468-3.669.326-.816.66-1.743.738-2.487.167-1.57-1.397-1.52-2.511-1.754z"
        />
        <path
          fill="#FEFEFE"
          d="M44.45 50.708l-4.667 2.565c-.875.48-1.462-.209-2.143-.526-6.323-2.954-12.442-6.318-18.75-9.296-2.125-1.003-4.195-2.076-6.217-3.257-.851-.498-1.718-.925-2.719-.501-.417.177-.661.581-.579 1.031.201 1.114 1.113 1.442 2.032 1.817 4.521 1.846 8.585 4.598 13.019 6.62 3.387 1.545 6.699 3.246 9.99 4.98.811.428 2.261.382 2.073 1.949-1.18 1.133-2.09 2.558-3.595 3.341-1.028-1.645-2.99-1.912-4.49-2.735-2.453-1.347-4.928-2.71-7.456-3.948-3.839-1.88-7.608-3.902-11.435-5.806-2.983-1.483-4.223-4.712-2.64-7.276.82-1.327 2.203-2.125 3.617-2.43 3.476-.745 6.554-2.514 9.909-3.559 3.69-1.149 7.217-2.773 10.877-4.037 1.913-.66 2.137-.307 2.533 1.634.818 4.004 2.728 7.399 6.633 9.546 2.377 1.307 4.628 2.686 7.386 2.6 6.636-.205 13.149-1.157 19.649-2.648 4.453-1.021 8.755-2.235 12.814-4.267 4.276-2.141 7.855-5.228 10.049-9.45 1.369-2.633 2.368-5.476 1.137-8.849-1.032-2.83-2.669-5.147-4.238-7.573-.387-.598-1.222-.906-1.812-1.319 4.632-2.297 8.106-3.398 11.903-2.083 1.054.364 1.972 1.086 3.126 1.168.051.77.141 1.543-.181 2.394-1.023-.186-1.438-1.54-2.616-1.354-.573.09-1.274-.238-1.688.33-.468.644-.084 1.455.287 1.843 1.57 1.641 2.145 3.957 3.776 5.499 1.122 1.063 1.062 2.448 1.051 3.646-.029 3.238-.264 6.425.302 9.693.346 1.995.413 4.24-.183 6.329-.355 1.246-1.242 2.118-2.214 2.904-2.008 1.625-3.988 3.277-5.71 5.211-2.226 1.753-3.721 4.189-5.731 6.141-1.979 1.921-3.339 4.273-4.764 6.587-.82.294-1.023-.175-1.058-.854-1.556-1.776-2.553-3.961-4.713-5.316-1.975-1.24-4.007-2.357-6.05-3.456-.526-.283-1.277-.147-1.923-.203-1.012.596-1.989.06-2.949-.145-5.225-1.116-10.313-.6-15.41.892-2.124.625-3.953 2.046-6.232 2.168z"
        />
        <path
          fill="#B92647"
          d="M81.728 56.771c.444.171.481.848 1.058.854 1.532 2.731 2.569 5.671 3.627 8.602.845.06 1.016.681 1.171 1.355 1.146 4.973 1.541 10.009 1.333 15.104-.031.759-.282 1.391-.69 1.993.115 1.183-.583 2.18-.75 3.299-2.743-.137-5.508.046-7.972-1.678-2.02-1.412-2.6-3.589-3.438-5.627-1.9-4.62-2.379-9.487-1.927-14.406.217-2.364.649-4.814 2.589-6.56 1.462-1.316 3.198-2.188 4.999-2.936z"
        />
        <path
          fill="#FEA98D"
          d="M54.107 100.299c.714-.106 1.645.144 1.471-1.189-.046-.352.498-.774.752-1.176.223-.352.683-.814.592-1.068-1.553-4.326 2.482-.462 2.876-1.94.007-.028.833.289.969.148 1.097-1.137 3.161-1.248 3.807-2.098 1.753-2.305 3.619-1.226 5.412-.837 1.113.241 2.515.418 3.111 1.811.172.402.62.48 1.098.322.516-.17.671.211.552.6-.404 1.315.119 1.578 1.353 1.446 1.533-.165 2.108 1.085 2.748 2.163l-.078.416c-1.002.278-2.013.532-3.007.838-2.428.748-2.561 1.003-1.82 3.408 1.368 4.441-.542 7.703-5.193 8.401-.15.022-.28.187-.419.285-1.018-.452-2.219-.418-3.183-.38-2.068.083-3.266-1.151-4.336-2.354-1.043-1.172-1.473-2.846-1.043-4.501.179-.69.447-1.339.301-2.066.613-2.003.563-1.855-1.349-2.055-1.549-.161-3.113.567-4.614-.174z"
        />
        <path
          fill="#FEA35C"
          d="M88.228 84.678c.387-5.193.409-10.371-.927-15.454-.263-1.002.146-2.222-.887-2.997.068-.372.128-.714.67-.549 3.019.92 5.275 2.931 6.311 5.752.986 2.69.866 5.574-.312 8.419-.991 2.39-2.686 3.776-4.855 4.829z"
        />
        <path
          fill="#BC3D43"
          d="M100.952 54.543c2.131-.266 4.349-.775 6.628-.613.849.06 1.735-.032 2.17.903.26.561.336 1.221-.145 1.685-.637.617-1.388.698-2.315.503-2.241-.471-4.418.348-6.628.57l-.32.149c-1.176.197-2.266-.065-2.625-1.271-.347-1.164.788-1.442 1.576-1.788.472-.206.981-.52 1.659-.138z"
        />
        <path
          fill="#FEAA76"
          d="M65.699 150.646c-1.582-.063-2.853-.985-4.147-1.656-1.181-.613-2.458-1.088-3.558-1.928-.783-.599-.974-1.257-.625-1.935.325-.636.853-1.181 1.879-1.009 1.6.267 2.682 1.439 4.038 2.103 1.032.504 2.113 1.067 3.143 1.646.727.409 1.265.849 1.056 1.619-.215.792-.915 1.211-1.786 1.16z"
        />
        <path
          fill="#FEFEFE"
          d="M41.533 37.327c-3.702-2.442-5.138-6.127-4.409-10.214.465-2.605 2.338-4.802 5.006-6.171 3.688-1.891 7.763-2.44 11.587-3.812 4.406-1.58 8.777-3.262 13.123-5 2.447-.979 4.991-2.228 7.521-2.051 3.519.245 7.256.364 10.273 2.83.833.681.978 1.75 1.738 2.421.358 1.282-.746 1.109-1.267 1.038-2.448-.339-3.872 1.007-4.949 2.877-1.986 3.449-4.948 5.603-8.61 7.033-5.054 1.973-10.113 3.814-15.559 4.45-2.904.339-5.626.221-8.187-1.326-.717-.434-1.453-.877-2.257-1.126-1.529-.474-2.971-.355-4.194.824-1.199 1.154-1.276 2.496-.761 3.987.299.865.808 1.609 1.205 2.413.297.598 1.033 1.399-.26 1.827z"
        />
        <path
          fill="#EFF0F1"
          d="M41.533 37.327c.803-.945-.057-1.527-.508-2.154-1.497-2.088-1.69-4.329-.466-5.988 1.174-1.594 3.92-2.4 5.456-1.259 4.566 3.392 9.474 2.616 14.479 1.561 4.606-.971 8.882-2.871 13.182-4.673 2.415-1.012 4.222-2.874 5.62-5.108.539-.861 1.091-1.728 1.748-2.498.857-1.007 1.935-1.497 3.349-1.306.645.087 1.611.572 1.983-.573.823 1.437 1.707 2.846 2.073 4.494.725 3.264-1.011 5.793-2.771 8.123-2.454 3.248-5.781 5.362-9.636 6.878-5.872 2.308-12.013 3.208-18.148 4.283-4.024.706-8.031 1.019-12.108.587-1.816-.192-2.933-1.408-4.253-2.367z"
        />
        <path
          fill="#332325"
          d="M32.35 60.454c-1.315 2.125-2.716 4.204-3.906 6.396-.548 1.009-.914 2.176-.995 3.374-.652.955-1.367 1.836-2.551 2.166.284-1.776.528-3.485 1.473-5.162.671-1.19 1.09-2.575 1.903-3.759.649-.944 1.363-1.771 2.388-2.301.297-.865.97-.841 1.688-.714z"
        />
        <path
          fill="#FECA9E"
          d="M186.939 44.889c.905.26 1.172 1.172 1.724 1.771 1.833 1.991 4.381 1.854 6.678 2.366 3.117.695 6.305 1.07 9.426 1.75 1.096.238.918 1.283.189 1.762-1.427.934-2.702 2.005-3.842 3.257-.114.125-.413.15-.443.27-1.022 3.963-4.537 2.517-6.854 2.727-3.5.318-7.096-.343-10.665-.127-.877.054-1.944-.094-2.081-1.028-.386-2.624-2.449-3.673-4.262-4.997.535-.171 1.042-.147 1.52-.721 2.405-2.891 5.084-5.492 8.61-7.03z"
        />
        <path
          fill="#FEAD7A"
          d="M107.728 13.791c-1.478-.525-3.311-.696-5.173-.795-.703-.037-1.268-.811-1.146-1.566.124-.769.605-1.577 1.516-1.56 1.828.035 3.685.063 5.465.421.83.167 2.117.619 1.822 2.033-.234 1.128-1.096 1.496-2.484 1.467z"
        />
        <path
          fill="#D9DEE2"
          d="M184.961 76.979c-4.028.611-8.601.031-13.032 1.178-2.787.722-4.954 2.354-6.915 4.406-3.291 3.444-5.693 7.479-7.955 11.61-.939 1.715-1.13 3.7-1.704 5.547-.524 1.686-.755 3.43-1.195 5.1-.766 2.905-1.263 5.87-2.183 8.753-1.247 3.908-3.149 7.458-5.39 10.784-1.577 2.344-3.535 4.487-5.813 6.31-.93.744-1.589.533-2.201.078-.823-.614-.478-1.528-.064-2.294.607-1.125 1.762-1.747 2.602-2.679 2.893-3.208 4.805-6.991 6.747-10.753.726-1.407 1.041-3.047 1.409-4.612.957-4.06 1.562-8.225 2.813-12.188 2.129-6.747 5.154-13.01 10.554-17.957 2.08-1.906 4.161-3.651 6.621-5.008 1.48-.816 3.058-.809 4.644-.991 3.121-.358 6.25-.384 9.38-.404 1.336-.009 2.72-.124 3.873-.61 1.245-.525 1.595.309 1.986.875.433.627.435 1.451-.347 2.052-1.015.78-2.134 1.039-3.83.803z"
        />
        <path
          fill="#DADEE2"
          d="M131.473 97.416c-.095-2.704-.224-5.385-.449-8.027-.293-3.429.159-6.779.369-10.137.119-1.914.811-3.86 1.014-5.831.238-2.322.901-4.543 1.767-6.675.792-1.95 1.715-3.89 3.263-5.4.766-.746 1.664-1.229 2.755-.563 1.069.652 1.174 1.453.311 2.345-2.677 2.766-3.545 6.306-4.466 9.887-.439 1.706-.19 3.54-1.118 5.148-.516.896-.036 1.956-.211 2.992-.476 2.815-.401 5.743-.341 8.622.056 2.692-.245 5.405.661 8.077.333.978-.477 2.045-1.733 1.993-1.508-.063-1.866-1.148-1.822-2.431zM107.208 152.335c-.858-.036-2.134-.026-3.382.653-1.059.576-2.108.108-2.487-.985-.403-1.168.091-2.246 1.391-2.481 2.45-.445 4.855-.913 7.443-.473 3.976.675 7.356 2.498 10.795 4.411 3.35 1.865 6.723 3.837 10.686 4.161 1.447.118 2.864-.074 4.173-.85.834-.494 1.84-.942 2.55.146.675 1.038.593 2.18-.589 2.771-3.081 1.542-6.198 1.77-9.602.689-4.677-1.487-8.908-3.88-13.231-6.051-2.376-1.192-4.648-2.06-7.747-1.991z"
        />
        <path
          fill="#FECA9E"
          d="M200.717 85.838c1.011-.552 2.437.642 3.244-.77 2.337-.196 4.727-.197 6.31-2.433.372-.525 1.108-.559 1.783-.637 2.682-.31 5.47-.302 7.776.943 2.822 1.523 5.962 1.634 8.829 2.783.933.374 1.288 1.063 1.328 1.929.043.923-.692.961-1.387 1.006-1.128.074-1.592 1.199-2.517 1.649-.613.297-1.194.697-1.84.501-2.768-.839-5.525.386-8.215.065-3.668-.438-5.021 2.407-7.116 4.258-.301.266-.41.746-.905.799-2.287-3.47-4.43-7.04-7.29-10.093z"
        />
        <path
          fill="#FEB394"
          d="M44.45 50.708c.996-.951 2.36-1.305 3.544-1.79 4.713-1.935 9.746-2.532 14.796-2.456 2.09.032 4.168.865 6.252 1.333.732 1.107 1.327 2.206-.022 3.311-.51.417-.218.825.043 1.262.641 1.072.486 1.932-.734 2.484-1.13.512-2.053 1.292-3.345 1.692-1.348.416-2.637 1.417-4.111 1.955-1.208.44-.916 2.249-1.945 3.046-.266-.922-.5-1.845-1.846-1.384-.352.12-.661-.238-.906-.5-1.311-1.399-2.761-1.756-4.427-.631-.5-1.203-.187-2.639-1.174-3.729-.51-.563-.96-1.107-1.77-.979-1.32.207-2.39-1.011-3.803-.575-.387.12-1.094-.583-.674-1.318.333-.582.243-1.137.122-1.721z"
        />
        <path
          fill="#DADEE3"
          d="M36.488 56.09c-.317-1.005-1.339-1.122-2.073-1.497-6.528-3.339-13.246-6.303-19.606-9.979-1.322-.765-2.691-1.492-4.208-1.878-1.063-.271-1.567-1.051-1.818-2.123-.225-.956.529-1.245 1-1.483.806-.41 1.764-.147 2.511.285 7.291 4.221 15.032 7.56 22.491 11.453 1.626.848 3.229 1.819 4.997 2.406l-3.294 2.816z"
        />
        <path
          fill="#020201"
          d="M51.749 59.03c1.48-1.785 2.455-1.809 4.297-.067.559.529.858 1.206 1.942.566.943-.556 1.401.358.94 2.016-.946.29-1.57.704-1.086 1.883.367.894-.144 1.8-.439 2.587-.254.675-1.143 1.082-1.958.885-1.14-.276-1.302-1.675-1.091-2.172.879-2.074-.207-3.142-1.648-4.172-.527-.377-1.176-.68-.957-1.526zM58.206 84.346c-.174-1.417-.081-2.671-.951-3.526-.879-.864-.47-1.673.16-2.103.502-.341 1.478-.926 2.07.323.189.398.842.64.887 1.229.075 1.001.407 1.11 1.217.515.404-.296 1.117-.414 1.489.038.372.451.125 1.314-.225 1.46-2.082.869-1.45 2.898-2.048 4.392-.304.76-.353 1.709-1.591 1.837-.778.081-1.238-.223-1.689-.644-.469-.438-.097-.908.188-1.258.637-.781-.042-1.762.493-2.263z"
        />
        <path
          fill="#885D33"
          d="M41.142 65.406c.611-1.513-.282-3.068.501-4.471.396-.708.729-1.43 1.733-1.147 1.075.302.304 1.03.365 1.584.204 1.849-.554 3.786.577 5.563.371.582.31 1.33-.448 1.645-.663.276-1.3.096-1.631-.631-.39-.866-.752-1.742-1.097-2.543z"
        />
        <path
          fill="#875D33"
          d="M46.838 81.783c-.555 1.945.06 3.581 1.414 4.948.765.772.354 1.533-.06 2.071-.459.598-1.025.049-1.511-.32-.83-.632-1.307-1.392-1.671-2.415-.537-1.508-.321-3.029-.544-4.529-.159-1.071.697-1.142 1.385-1.082.7.059 1.238.46.987 1.327z"
        />
        <path
          fill="#BB2849"
          d="M65.034 70.745c-.77-.476-2.13-.457-2.085-1.621.034-.876 1.222-1.327 1.95-1.246.977.108.881 1.321 1.114 2.074.121.394-.374.836-.979.793z"
        />
      </g>
    </svg>
    <div css={note__block}>
      <h3 css={note__h3}>Before using</h3>
      <hr />
      <p css={note__text}>
        The behavior may change depending on the device and browser you are
        using.
      </p>
      <p css={note__text}>
        We recommend that you test the operation before using it.
      </p>
    </div>
    <div css={note__block}>
      <h3 css={note__h3}>Question & Answer</h3>
      <hr />
      <div css={note__qaBlock}>
        <p css={note__question}>
          Q:Will the alarm work if you close the browser?
        </p>
        <p css={note__text}>A:It will not work when the browser is closed.</p>
      </div>
      <div css={note__qaBlock}>
        <p css={note__question}>
          Q:Will the alarm work when you open another application?
        </p>
        <p css={note__text}>A:The alarm works, depending on the device and browser.
</p>
      </div>
      <div css={note__qaBlock}>
        <p css={note__question}>
          Q:Will the alarm work when you put the device into sleep mode?
        </p>
        <p css={note__text}>
          A:There are some devices alarm even in sleep mode, while others do
          not.
        </p>
      </div>
    </div>
  </React.Fragment>
);

const note__h2 = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${colors.lightOrange};
  font-weight: bold;
`;

const note__icon = css`
  max-width: 120px;
  margin-bottom: 1rem;
  filter: drop-shadow(0px 2px 2px rgba(255, 255, 255, 0.4));
`;

const note__block = css`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const note__h3 = css`
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const note__qaBlock = css`
  margin-bottom: 1.5rem;
`;

const note__text = css`
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
`;

const note__question = css`
  ${note__text};
  color: ${colors.lightOrange};
`;

export default Note;
