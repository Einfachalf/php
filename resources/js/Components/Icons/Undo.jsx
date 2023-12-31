import React from "react";
import PropType from "prop-types";
const Undo = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.72414 7C1.32284 7 1 6.66563 1 6.25V1.75C1 1.33437 1.32284 1 1.72414 1C2.12543 1 2.44828 1.33437 2.44828 1.75V4.25313L3.05172 3.51875C4.28879 1.98125 6.15647 1 8.24138 1C11.9737 1 15 4.13438 15 8C15 11.8656 11.9737 15 8.24138 15C6.72069 15 5.31466 14.4781 4.18621 13.6C3.86638 13.35 3.80302 12.8813 4.04138 12.55C4.27974 12.2188 4.73534 12.1531 5.05517 12.4C5.94224 13.0906 7.04353 13.5 8.24138 13.5C11.1741 13.5 13.5517 11.0375 13.5517 8C13.5517 4.9625 11.1741 2.5 8.24138 2.5C6.60302 2.5 5.13664 3.26875 4.16207 4.48125L4.15905 4.4875L3.32629 5.5H6.06897C6.47026 5.5 6.7931 5.83437 6.7931 6.25C6.7931 6.66563 6.47026 7 6.06897 7H1.72414Z"
                fill="#374151"
            />
        </svg>
    );
};
Undo.propTypes = {
    className: PropType.string,
};
export default Undo;
