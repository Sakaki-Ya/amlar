/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import colors from "./Colors";

const PrivacyPolicy: React.FC = () => (
  <React.Fragment>
    <h2 css={policy__h2}>Privacy Policy</h2>
    <svg width="333.334" viewBox="0 0 333.334 302" css={policy__icon}>
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#CA8130"
          d="M44.74 49.6c-.586-2.021 1.069-3.517 2.1-4.154 5.901-3.65 9.486-9.531 14.086-14.365 4.682-4.921 10.449-6.936 16.495-8.806 2.126-.657 3.699-1.301 4.666-3.827 2.995-7.819 10.514-8.855 17.345-9.949 12.768-2.045 25.658-3.136 38.587-1.192 2.675.403 4.612-1.272 6.741-2.267 8.443-3.945 16.773-1.729 24.682 1.108 4.78 1.715 9.974 1.992 14.482 4.66 2.622 1.551 5.359 2.84 7.767 4.789 4.728 3.827 10.203 5.9 16.227 6.912 3.542.595 6.517 2.849 8.493 5.842 3.178 4.815 5.244 10.272 4.51 16.032-.927 7.274.348 13.952 3.938 20.119 1.675 2.875-.332 6.559 2.529 8.931-.193.393-.452.817-.872.883-10.129 1.582-18.048 8.488-27.601 11.457-.817.254-1.491.845-2.222 1.295-11.89 7.402-23.923 14.74-33.853 24.671-6.375 6.377-10.763 14.359-12.752 23.43-1.435 6.542-4.239 12.762-4.616 19.566-.047.85-.703 1.551-1.469 2.031-3.709.586-7.417-.389-11.103-.123-11.162.803-22.27-.143-33.396-.701-11.626-.588-21.83-4.258-29.676-13.251-1.476-1.691-3.168-2.689-5.542-2.803-8.234-.393-15.506-2.754-21.631-8.893-4.111-4.121-8.855-7.686-13.148-11.692l-.271-2.508c3.326-3.396 7.908-4.809 11.805-7.309 1.804-1.157 3.973.087 5.309 2.28 2.843 4.666 4.566 4.716 7.817.552 1.262-.58 2.58-.299 3.772.045 6.734 1.949 12.469-4.153 14.458-9.282 1.063-2.738-1.182-4.169-2.107-6.132-1.361-3.08-2.894-6.026-3.32-9.52-.38-3.11-2.002-5.646-4.824-7.716-2.919-2.141-2.706-6.009-2.87-9.405-.013-.262.264-.534.27-.806.05-2.265 1.948-4.79.938-6.498-1.14-1.927-3.95.093-6.024-.362-1.126-.247-2.62-.198-3-1.331-1.467-4.373-5.283-7.356-6.72-11.711z"
        />
        <path
          fill="#5E3725"
          d="M196.257 86.652c.785-2.854 3.676-2.412 5.545-3.112 6.431-2.411 11.974-6.601 18.486-8.802 2.337-.789 4.728-.922 7.1-1.306 7.765-1.487 15.66-.856 23.482-1.427 4.313-.314 7.885 2.329 12.025 3.039 9.314 1.596 17.859 5.446 25.658 10.9 1.936 1.354 3.91 2.615 5.527 4.354 1.352 1.009.527 2.017-.031 2.989-1.734 3.009-4.027 5.586-6.609 7.852-10.965 9.625-21.555 19.659-32.186 29.644-5.512 5.178-10.234 11.19-16.874 15.145-2.487 1.481-3.019 3.201-.615 5.825 12.159 13.273 23.999 26.877 34.547 41.449 5.395 7.455 11.203 14.43 17.414 21.145.758.822 1.729 1.58 1.426 2.936-6.711 4.229-13.674 7.967-20.674 11.693-4.984 2.654-10.365 3.705-15.355 6.041-3.83 1.791-8.752 1.322-13.203 1.703-11.78 1.014-23.506.346-35.06-2.041-4.589-.949-8.955-2.973-13.423-4.508-4.454-.51-8.29-2.816-12.105-4.777-4.502-2.313-8.688-5.334-12.828-8.303-1.906-1.369-3.871-2.951-4.434-5.52.017-1.414.985-2.318 1.77-3.332 9.751-12.594 20.965-23.77 32.975-34.189 9.715-8.43 19.523-16.751 28.693-25.799 2.496-2.463 2.855-4.169.253-6.68-3.129-3.02-5.434-6.787-6.703-10.886-2.087-6.738-6.82-11.847-10.223-17.759-4.63-8.046-9.56-15.925-14.387-23.859-.457-.754-.727-1.563-.191-2.415z"
        />
        <path
          fill="#E7BC6A"
          d="M193.683 244.124c-1.139 4.248-3.538 7.531-7.586 9.365-2.722 1.232-4.338 2.582-3.917 6.148.4 3.387-.994 6.482-4.049 8.82-6.063 4.641-12.197 9.027-19.855 10.602-1.381.283-2.147.938-2.85 2.191-5.8 10.359-18.856 16.529-30.471 14.301-2.136-.41-4.474.004-6.327-.766-6.877-2.852-12.694.23-18.539 2.896-6.303 2.877-12.534.574-18.687-.092-4.412-.479-8.899-1.883-12.603-4.871-1.787-1.441-3.777-2.621-4.572-4.938-1.004-2.924-3.675-3.785-6.091-3.734-4.828.098-9.209-2.041-14.016-2.061-5.935-.025-9.587-4.219-12.309-8.775-1.581-2.646-4.164-5.059-3.889-8.689.064-.852-.338-1.969-1.639-2.215-7.415-1.396-12.1-6.148-15.303-12.639-1.823-3.693-1.732-7.594-.954-11.518.582-2.932.88-4.977-2.287-7.555-4.227-3.443-4.968-9.363-4.347-14.846.877-7.744 2.782-15.801 9.011-20.49 4.1-3.088 4.159-5.744 3.727-9.623-.927-8.34 3.118-14.705 8.293-20.604.184-.209.286-.627.483-.668 6.788-1.365 8.596-7.351 11.483-12.335 4.222 1.451 5.331 5.439 6.419 8.917 1.056 3.373 2.536 5.84 5.52 7.756 3.627 2.33 3.929 4.008 2.229 8.012-.671 1.58-1.321 3.174-2.235 4.646-3.336 5.377-6.344 6.639-12.583 5.244-1.488-.332-3.329-1.332-4.196.592-.899 1.994.453 3.602 2.062 4.695 1.655 1.127 3.424 2.131 5.272 2.896 6.204 2.574 5.63 8.193 3.616 12.184-1.42 2.811-3.154 5.465-4.196 8.463-1.061 3.053-3.727 3.943-6.426 4.287-2.627.334-4.963 1.352-7.397 2.17-1.521.508-3.091 1.045-2.941 3.125.133 1.846.91 3.314 2.693 4.068 1.741.734 3.582 1.031 5.46 1.047 2.44.02 4.872.232 7.306.281 2.335.045 3.886 1.109 4.574 3.207 1.209 3.686 2.88 7.17 4.308 10.76 1.521 3.822.797 5.361-2.814 7.34-1.887 1.033-3.863 1.895-5.775 2.879-2.111 1.088-2.258 2.33-.326 3.875 5.157 4.123 10.184 4.73 15.869 1.195 4.717-2.932 9.756-3.26 14.928-2.637 6.277.756 9.04 5.736 7.673 13.186-.339 1.848-1.115 3.555-1.702 5.32-.751 2.262-.097 4.053 2.078 4.971 2.183.922 3.59-.514 4.537-2.203 1.264-2.258 1.912-4.768 2.619-7.26 2.553-9.012 6.897-11.084 15.784-8.334 8.22 2.543 9.734 1.18 9.737 14.436 0 1.518.292 2.85 1.374 3.928 1.288 1.281 2.826 2.193 4.631 1.402 1.873-.82 2.167-2.551 1.737-4.385-.46-1.965-.832-3.93-.66-5.959.738-8.701 8.94-11.352 16.325-10.41 3.092.395 6.068 1.68 8.625 3.682 1.58 1.236 3.272 2.348 4.983 3.373 1.972 1.182 4.413 2.291 6.358.426 2.072-1.986.682-4.207-.589-6.221-1.606-2.547-3.363-5.008-4.817-7.637-2.532-4.572-1.476-7.449 3.239-9.695 2.758-1.313 5.465-2.18 8.673-1.586 7.293 1.35 8.161.648 9.561-6.469 1.361-6.916 1.248-6.467 8.486-4.639 6.418 1.619 11.514 4.867 16.015 9.436.509.519.933 1.087 1.26 1.732z"
        />
        <path
          fill="#DFAD44"
          d="M291.153 217.282c-11.465-10.408-19.258-23.824-29.115-35.551-6.664-7.93-12.801-16.313-20.158-23.646-2.31-2.305-3.848-5.243-6.448-7.333-2.635-2.118-.301-3.723 1.166-4.707 4.512-3.028 8.524-6.503 12.311-10.436 6.166-6.405 12.814-12.348 19.32-18.422 5.973-5.576 12.107-10.981 18.006-16.633 3.117-2.986 6.879-5.586 7.842-10.26 5.555 3.083 9.996 7.616 14.902 11.523 11.055 8.804 14.646 22.116 20.021 34.294 2.133 4.831.66 10.132.334 15.049-.371 5.57-.568 11.218-1.893 16.867-2.545 10.848-5.9 21.17-12.494 30.191-5.303 7.254-12.289 12.678-20.072 17.09-1.22.693-2.479 1.318-3.722 1.974z"
        />
        <path
          fill="#DC9539"
          d="M193.683 244.124c-3.989-1.395-6.189-5.16-9.799-7.277-3.928-2.301-8.609-1.85-12.256-4.572-.835-.623-3.265-.014-2.564 1.623 1.398 3.266-.933 5.711-1.238 8.553-.447 4.152-4.306 3.902-7.121 3.283-3.75-.826-6.987-.932-10.589.895-3.925 1.988-5.119 4.32-2.745 8.271 1.605 2.674 3.334 5.281 5.173 7.799 2.031 2.779 2.792 5.824-.139 7.98-2.318 1.707-5.344.67-7.689-.943-3.391-2.33-6.618-4.777-10.536-6.365-5.441-2.203-10.661-.689-14.491 2.211-3.76 2.85-4.215 8.168-2.077 12.912 1.034 2.295-.565 3.588-1.744 4.855-1.541 1.656-3.697.803-5.178-.008-2.134-1.17-4.367-3.305-3.435-5.834 1.052-2.852-.59-5.295-.11-7.998.285-1.605-1.226-3.887-2.639-4.023-4.266-.406-7.957-2.748-12.298-2.938-5.627-.244-6.075 4.359-7.765 7.643-1.268 2.467-1.66 5.367-2.617 8.012-.943 2.607-3.023 4.496-5.698 4.148-3.21-.42-4.862-4.172-3.498-7.32 1.387-3.205 1.587-6.385 1.754-9.857.254-5.279-3.224-6.48-6.591-7.02-5.226-.836-10.47-.395-15.214 2.896-5.299 3.678-13.859 2.26-17.959-2.664-1.75-2.1-.752-3.662 1.432-4.709 2.292-1.1 4.509-2.438 6.908-3.203 2.802-.895 3.168-2.393 2.221-4.883-1.513-3.979-3.687-7.686-4.715-11.873-.395-1.607-1.483-2.096-3.456-2.268-4.249-.369-8.554.324-12.788-.945-3.165-.949-3.564-3.256-4.05-5.822-.546-2.885 1.617-3.162 3.462-3.736 3.674-1.146 7.358-2.258 11.044-3.365.541-.162 1.558-.127 1.604-.346 1.313-6.117 7.357-10.49 6.376-17.512-.179-1.281-.647-1.707-1.533-2.184-2.607-1.402-5.252-2.74-7.798-4.248-2.68-1.588-4.359-4.209-3.176-7.074 1.153-2.793 3.865-1.377 6.001-.65 3.721 1.268 7.591-.264 10.146-3.293 1.738-2.061 2.226-4.623 3.648-6.742 1.597-2.377.672-4.285-1.391-5.414-3.848-2.107-6.175-4.76-6.908-9.418-.505-3.21-2.949-6.099-5.259-8.669 1.913-2.709 4.252-4.91 7.364-6.194 1.405-.479 2.212.561 2.882 1.383 5.688 6.983 13.597 9.234 21.999 10.367 3.456.465 6.66 1.721 9.938 2.738 2.053.637 3.627 1.85 3.013 4.424-1.334 2.27-3.814 3.18-5.937 4.008-9.048 3.535-15.887 10.154-23.06 16.215-3.852 3.254-6.269 7.967-6.532 13.152-.354 6.969-.745 13.912.515 20.941 1.49 8.318 5.087 14.928 11.702 20.217 3.094 2.475 5.486 5.785 9.059 7.805 13.541 7.652 28.032 8.227 42.906 5.836 2.131-.342 4.232-.6 6.386-.674 8.263-.279 15.252-3.154 20.487-9.871 2.188-2.805 4.792-5.318 7.319-7.805 6.576-6.469 9.842-14.246 10.528-23.295.152-2.002.48-3.984 1.574-5.746 3.974.244 6.494 2.471 8.093 5.949 5.673 6.803 13.269 10.893 21.072 14.555 2.675 1.254 5.137 2.82 7.746 4.137.097 2.51 2.084 4.486 1.745 7.234-.283 2.318.008 4.693-1.504 6.716z"
        />
        <path
          fill="#A76533"
          d="M81.056 164.964c.364-2.719-1.617-3.178-3.548-3.961-4.738-1.921-9.831-2.878-14.72-3.457-8.458-.998-13.665-6.248-19.035-11.708-3.722-6.901-6.301-14.431-11.62-20.457-1.451-1.645-2.515-3.724-2.628-6.08 5.363 1.348 7.687 6.647 12.101 9.299 3.916 2.351 6.207 6.938 11.274 7.895 4.07.769 7.787 3.178 12.259 2.12 1.711-.405 3.505.725 4.477 2.085 4.412 6.182 10.639 9.638 17.603 11.907 2.976.97 5.987 2.206 9.224 2.012 6.833-.411 13.521 1.243 20.307 1.334 7.097.096 14.169-.814 21.303-.332 1.994.135 3.868.969 5.869.721 2.205 5.263 3.096 10.687 2.025 16.361-4.754 3.607-10.233 2.709-15.198 1.432-4.758-1.223-9.529-1.439-14.291-1.984-9.201-1.051-18.387-2.254-27.608-3.148-3.091-.301-5.668-1.779-7.794-4.039z"
        />
        <path
          fill="#CD8735"
          d="M54.342 112.624c.097 2.172-.891 3.815-3.023 3.979-2.84.218-5.271-1.429-6.037-3.946-.995-3.268-3.116-3.383-4.918-1.921-3.387 2.748-7.226 4.402-11.13 6.058-2.107-11.03-2.884-22.048.642-32.952.544-1.684 1.27-3.513 2.457-4.75 3.989-4.158 6.293-8.828 7.312-14.634.892-5.086 4.043-9.664 5.096-14.857 2.757 3.335 5.927 6.263 7.284 10.712.787 2.58 3.743 1.149 5.717 1.118 1.46-.023 2.932-1.418 4.307.262 1.441 1.761-.9 3.033-.743 3.977.456 2.737-1.886 4.963-.732 7.797 1.078 2.644.812 5.649 4.333 7.115 3.252 1.355 2.66 5.424 3.787 8.195.681 1.674-.203 3.932 2.023 5.3 1.045.643-.126 1.852 0 2.807-1.227 1.225-2.755 1.144-3.804.141-2.226-2.126-5.033-2.297-7.754-2.859-1.332-.808-2.43-2.637-4.309-.687-.719.746-1.813.53-2.817.142-6.924-2.671-6.929-2.658-13.769-1.079 3.325 1.587 6.582 1.683 10.024.79 3.256-.844 3.99.015 3.718 3.777-2.819 2.12-5.065 4.499-3.834 8.454-.465 3.366 1.54 4.376 4.384 4.59.979.545 1.729 1.259 1.786 2.471z"
        />
        <path
          fill="#DEAB41"
          d="M145.501 172.79c.058-5.539-.881-10.98-1.58-16.447.738-7.917 3.732-15.324 5.23-23.076 1.116-5.774 4.58-10.544 7.5-15.48 4.17-7.047 10.574-11.954 17.102-16.626 6.509-4.658 13.151-9.13 19.703-13.73.887-.623 1.773-.86 2.801-.779 5.6 8.447 10.508 17.322 15.88 25.912 3.89 6.221 8.51 12.195 10.7 19.421 1.189 3.925 3.686 7.068 6.693 9.673 2.458 2.131 2.498 4.026.274 6.039-10.619 9.611-21.117 19.367-31.987 28.685-12.312 10.557-23.259 22.332-33.192 35.1-2.533-2.021-5.067-4.045-7.602-6.066-3.411-.021-4.898-2.611-5.546-5.145-2.318-9.083-5.487-17.999-5.976-27.481z"
        />
        <path
          fill="#612F24"
          d="M58.716 93.697c3.12-.161 6.424-1.241 8.473 2.573.598 1.113 2.26.83 3.526.613 2.633 1.894 4.286 3.566 2.338 7.449-4.347 8.664-10.437 10.813-18.71 8.29l-1.862-1.904c-2.47-.909-3.703-3.038-5.018-5.085-1.656-4.684-.239-7.598 4.301-8.85 1.697-2.424 4.292-2.827 6.952-3.086z"
        />
        <path
          fill="#633024"
          d="M164.372 19.189c6.084-.02 8.937 3.919 7.377 9.339-1.619 5.622-4.237 7.45-9.94 6.186-2.815-.624-5.835-.387-8.46-2.444-1.713-1.341-3.625-1.913-3.351-4.655.301-3.004 1.856-5.251 4.409-6.243 3.341-1.297 6.697-3.222 9.965-2.183z"
        />
        <path
          fill="#5F2E23"
          d="M102.959 41.579c-3.708-.329-7.388.432-10.798-1.392-3.381-1.808-3.412-3.153-1.14-6.066 5.187-6.653 12.303-5.939 19.326-5.49 2.879.184 3.483 2.627 3.238 5.075-.615 6.119-2.86 7.714-10.626 7.873z"
        />
        <path
          fill="#E6BA68"
          d="M76.593 70.239c-6.879-.095-10.718-4.465-8.533-9.582 1.087-2.546 3.509-3.435 5.539-4.251 3.318-1.334 7.128-1.833 10.594-.545 4.822 1.792 2.228 5.766 1.894 8.832-.396 3.632-3.274 4.96-6.504 5.52-.97.168-1.992.026-2.99.026z"
        />
        <path
          fill="#602E23"
          d="M119.352 149.465c-2.681.66-5.263-.849-7.985-1.331-2.328-.414-2.298-2.697-2.392-4.697-.146-3.144 2.242-4.374 4.309-5.626 3.663-2.22 7.625-2.211 11.768-1.209 3.038.734 4.408 2.159 3.719 5.279-.986 4.468-2.833 8.491-9.419 7.584z"
        />
        <path
          fill="#E5B865"
          d="M192.141 77.061c-1.687.314-3.24-.558-5.049-.26-2.416.396-4.974-.987-4.991-3.501-.016-2.413 1.137-5.333 4.76-4.428 1.639.409 1.851-.917 2.704-1.503 1.311-.901 2.877-3.086 4.252-1.589 2.083 2.269 6.333 3.38 5.658 7.314-.377 2.199-2.813 3.486-5.194 3.95-.689.134-1.426.02-2.14.017z"
        />
        <path
          fill="#602E23"
          d="M148.074 105.493c-3.657-.523-6.517-1.827-7.324-5.939-.672-3.422 1.304-5.673 4.682-4.804 1.662.427 3.188.739 4.971.526 2.52-.301 6.04-.38 6.538 2.488.504 2.899-1.889 5.482-4.75 6.813-1.255.583-2.758.631-4.117.916z"
        />
        <path
          fill="#E6BA67"
          d="M103.567 121.226c-3.097-1.024-6.522 2.196-9.457-.572-.815-.77-2.029-1.425-1.541-2.76.454-1.241.655-2.606 2.532-3.032 3.149-.716 6.354-1.093 9.473-2.201 2.442-.869 4.264 1.312 4.805 3.711.666 2.958-1.567 4.223-3.815 5.18-.524.223-1.324-.2-1.997-.326z"
        />
        <path
          fill="#E5B966"
          d="M131.165 71.327c-1.758.898-3.628.132-5.242-.514-1.243-.498-2.994-1.605-2.356-3.526.505-1.521.929-3.244 3.552-2.627 1.811.425 3.876-.315 5.833-.399 2.076-.087 4.76-1.991 5.021 2.547.24 4.165-2.033 4.729-5.05 4.996-.527.048-1.088-.284-1.758-.477z"
        />
        <path
          fill="#CD8735"
          d="M38.588 116.888c.104-2.302 1.039-3.478 2.563-4.102.568-.234 1.105.375 1.014 1-.262 1.785-1.483 2.589-3.577 3.102zM36.969 117.891c.723.066.951.582.896 1.167-.086.915-.57 1.657-1.546 1.701-.745.034-1.443-.383-1.17-1.286.254-.837.949-1.357 1.82-1.582z"
        />
        <path
          fill="#BC7634"
          d="M306.081 127.894c-3.352.504-5.855-1.091-5.795-4.105.043-2.194 1.551-4.968 4.641-5.262 2.354-.224 6 3.067 5.748 5.318-.289 2.584-1.356 4.753-4.594 4.049z"
        />
        <path
          fill="#BC7633"
          d="M269.528 140.466c-1.35-.549-4.459.232-4.658-2.835-.207-3.155 2.902-3.545 5.053-3.799 1.553-.184 4.207-.487 4.064 2.793-.111 2.61-1.172 3.945-4.459 3.841z"
        />
        <path
          fill="#BB7532"
          d="M306.612 182.179c-2.543.057-4.797-.256-4.756-2.84.031-2.053.824-4.314 3.828-4.037 2.162.201 4.355.186 4.449 3.285.087 2.842-1.265 3.889-3.521 3.592z"
        />
        <path
          fill="#BF7A36"
          d="M295.872 151.202c2.033.574 3.16 1.855 3.023 4.032-.104 1.664-.824 3.758-2.578 2.994-1.889-.82-5.584.492-5.502-3.207.067-2.937 2.911-3.071 5.057-3.819z"
        />
        <path
          fill="#BE7935"
          d="M275.265 176.251c1.443 1.281 4.086.949 3.594 3.746-.496 2.801-2.582 3.881-4.98 4.139-1.648.178-3.406-1.033-3.023-2.74.506-2.276 2.502-3.764 4.409-5.145z"
        />
        <path
          fill="#633025"
          d="M145.501 172.79c1.787 2.127 1.22 4.84 1.81 7.264 1.393 5.727 3.049 11.396 4.218 17.166.733 3.621 2.425 6.293 5.496 8.195-1.037 6.844-1.24 13.898-4.605 20.186-1.362 2.543-2.842 5.105-4.712 7.279-3.623 4.209-7.428 8.285-11.402 12.164-4.346 4.242-9.448 7.811-15.601 8.092-8.985.412-17.793 2.936-26.834 2.178-11.952-1-23.679-2.785-32.803-11.709-4.871-4.764-10.591-8.764-13.147-15.57-2.461-6.553-3.828-13.27-3.276-20.217.256-3.229-.52-6.393.136-9.639 1.357-6.717 4.033-12.42 9.978-16.383 3.196-2.131 6.038-4.855 8.97-7.303 5.258-4.393 11.541-6.404 17.329-9.529 3.082-.285 4.708 3.154 7.733 3.018 3.54-.16 6.963.949 10.419 1.145 9.061.514 18.001 2.107 27.072 2.666 4.393.27 8.8 1.861 13.452 2.072 2.248.103 3.601-2.53 5.767-1.075z"
        />
        <path
          fill="#CA8130"
          d="M58.716 93.697c-1.83 2.126-4.808 1.67-6.954 3.087-.079-1.623-.316-3.917-2.443-2.724-2.821 1.583-5.556.514-8.294.855-2.729.34-3.302-2.555-5.21-3.814 3.664 1.277 6.752-1.406 10.333-.972 2.053.248 3.793.005 5.192 1.972.845 1.188 2.404 1.856 3.637.268 2.691-3.462 3.118-.865 3.739 1.328zM41.43 82.942c-.645-2.003 1.006-2.58.835-3.779-.35-2.448 1.003-2.173 2.802-2.087 4.263.204 8.306.682 11.293 4.204.731.862 1.924 1.75 1.067 2.911-.949 1.287-2.045.348-2.882-.451-1.751-1.669-4.03-2.566-5.99-3.919-2.88-1.987-4.993.852-7.125 3.121zM47.461 105.633c2.483.895 3.435 3.302 5.019 5.085-4.026.627-6.602-.177-5.019-5.085zM47.351 71.959c-.01 1.418-.552 2.178-1.651 2.386-1.039.196-1.577-.404-1.602-1.403-.03-1.206.261-2.331 1.72-2.383 1.008-.037 1.278.884 1.533 1.4zM48.021 64.296c-1.665-2.166-1.825-3.538-.718-4.891.161-.197 1-.193 1.107-.022.937 1.504-.343 2.759-.389 4.913z"
        />
        <path
          fill="#BF7A36"
          d="M185.28 110.642c.272-3.144 3.828-6.949 6.267-6.47 2.119.416 4.101 1.581 3.985 4.268-.093 2.178-4.458 5.865-6.676 5.686-2.22-.18-3.899-.993-3.576-3.484z"
        />
        <path
          fill="#BD7834"
          d="M170.611 167.37c.101 3.316-2.463 5.521-6.502 5.783-2.23.145-3.017-.771-3.006-2.945.017-3.625 2.076-5.938 5.668-6.109 2.322-.112 3.973.519 3.84 3.271z"
        />
        <path
          fill="#C27F38"
          d="M176.565 130.598c-.947-.119-1.98-.093-2.901-.402-1.165-.391-2.78-.695-2.704-2.287.073-1.519 1.428-2.478 2.692-3.057 1.729-.793 5.755 2.356 5.75 4.313-.005 2.388-1.874.875-2.837 1.433z"
        />
        <path
          fill="#BD7733"
          d="M194.271 159.48c-1.399-.35-2.729-1.316-2.845-2.91-.184-2.525 2.423-2.574 3.88-3.042 1.374-.441 3.283.548 3.363 2.424.114 2.671-2.339 2.76-4.398 3.528z"
        />
        <path
          fill="#BF7B36"
          d="M208.635 134.816c1.738.001 3.358-.07 3.313 2.268-.036 1.884-.914 2.769-2.82 2.907-2.68.195-2.317-1.971-2.704-3.418-.606-2.262 1.297-1.523 2.211-1.757z"
        />
        <path
          fill="#8F6A63"
          d="M53.656 202.989c-1.28-11.926 6.506-16.777 15.652-21.119 8.055-3.826 16.199-7.225 25.051-8.248 3.887-.449 7.607-1.818 11.551-1.764 1.439.02 2.759.158 4.113.887 1.914 1.031 4.269 1.955 4.186 4.279-.082 2.295-2.863 2.172-4.44 2.545-7.117 1.688-12.007 6.232-16.193 11.809-2.18 2.904-2.838 6.5-3.709 9.848-1.058 4.07-3.221 7.627-4.465 11.617-1.509 4.836-8.072 7.736-13.288 6.629-1.8-.383-3.389.203-5.033.301-7.496.443-12.175-5.152-12.685-10.9-.175-1.968-.489-3.923-.74-5.884z"
        />
        <path
          fill="#8D6961"
          d="M83.16 228.769c4.467-1.314 6.653 2.932 9.391 5.066 2.86 2.23-.242 8.033-4.671 8.889-3.942.762-7.921-.115-11.473-1.732-2.468-1.125-3.146-4.02-2.761-6.615.505-3.404 3.25-4.801 6.267-5.57.941-.24 1.994-.038 3.247-.038z"
        />
      </g>
    </svg>
    <h3 css={policy__h3}>About access analysis</h3>
    <hr />
    <p css={policy__text}>
      This site uses cookies to collect traffic data using the access analysis
      tool "Google Analytics".
    </p>
    <p css={policy__text}>
      Traffic data is collected anonymously and is not personally identifiable.
    </p>
  </React.Fragment>
);

const policy__h2 = css`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${colors.lightOrange};
  font-weight: bold;
`;

const policy__h3 = css`
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: left;
`;

const policy__icon = css`
  max-width: 120px;
  margin-bottom: 1rem;
  filter: drop-shadow(0px 2px 2px rgba(255, 255, 255, 0.4));
`;

const policy__text = css`
  text-align: left;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
`;

export default PrivacyPolicy;
