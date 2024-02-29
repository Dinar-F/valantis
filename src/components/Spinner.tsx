const Spinner = () => {
    return (
        <div className="spinner">
            <svg
                className="spinner__icon"
                width="100px"
                viewBox="0 0 16 16"
                fill="none"
            >
                <circle
                    cx="8"
                    cy="8"
                    r="7"
                    strokeOpacity="0.25"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                />
                <path
                    d="M15 8a7.002 7.002 0 00-7-7"
                    strokeWidth="3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
};

export default Spinner;