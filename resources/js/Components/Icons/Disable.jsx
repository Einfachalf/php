import PropType from "prop-types";

const Disable = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className={className}
         fill="currentColor"
      >
         <path
            className="fa-primary"
            d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448z"
         />
         <path
            className="fa-secondary"
            style={{ opacity: 0.4 }}
            d="M144.8 99.5L412.5 367.2C400.1 384.7 384.7 400.1 367.2 412.5L99.5 144.8C111.1 127.3 127.3 111.9 144.8 99.5V99.5z"
         />
      </svg>
   );
};

Disable.propTypes = {
   className: PropType.string,
};

export default Disable;
