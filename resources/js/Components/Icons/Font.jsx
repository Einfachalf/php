import React from "react";
import PropType from "prop-types";
const Font = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.69375 1.46563C8.57812 1.18438 8.30625 1 8 1C7.69375 1 7.42188 1.18438 7.30625 1.46563L2.39375 13.5H1.75C1.33437 13.5 1 13.8344 1 14.25C1 14.6656 1.33437 15 1.75 15H5.25C5.66563 15 6 14.6656 6 14.25C6 13.8344 5.66563 13.5 5.25 13.5H4.01562L5.0375 11H10.9656L11.9875 13.5H10.75C10.3344 13.5 10 13.8344 10 14.25C10 14.6656 10.3344 15 10.75 15H14.25C14.6656 15 15 14.6656 15 14.25C15 13.8344 14.6656 13.5 14.25 13.5H13.6062L8.69375 1.46563ZM10.3531 9.5H5.64687L8 3.73438L10.3531 9.5Z"
                fill="#374151"
            />
        </svg>
    );
};
Font.propTypes = {
    className: PropType.string,
};
export default Font;
