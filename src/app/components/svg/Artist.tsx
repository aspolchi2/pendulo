import React from "react";

const Artist = ({ fill = "white" }) => {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 38 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g clipPath="url(#clip0_1_267)">
        <path
          d="M36.6075 27.512H35.9909V5.79066H36.6075C37.3753 5.79066 37.9988 5.19692 38 4.46301C38.0012 3.72911 37.3788 3.13316 36.6109 3.13206C36.6098 3.13206 36.6086 3.13206 36.6075 3.13206H31.9299V1.22611C31.9299 0.549599 31.3561 0 30.6471 0C29.9381 0 29.3643 0.548496 29.3643 1.22611V3.13316H8.63458V1.22611C8.63458 0.548496 8.05956 0 7.35175 0C6.64394 0 6.06892 0.548496 6.06892 1.22611V3.13316H1.39253C0.624673 3.13095 0 3.7258 0 4.4597C0 5.19361 0.621209 5.78956 1.38906 5.79066C1.39022 5.79066 1.39137 5.79066 1.39253 5.79066H2.00912V27.512H1.39253C0.624673 27.512 0.00230933 28.1068 0.00230933 28.8407C0.00230933 29.5746 0.624673 30.1695 1.39253 30.1695H4.15795L3.54713 32.8711C3.33236 33.8191 3.96281 34.755 4.95582 34.9603C5.08399 34.9868 5.21331 35 5.34379 35C5.96615 35 6.54695 34.6987 6.88642 34.1988L9.62066 30.1695H28.3805L31.1147 34.1988C31.6678 35.0132 32.8052 35.245 33.6573 34.7164C34.2981 34.3191 34.6157 33.5841 34.454 32.8711L33.8432 30.1695H36.6086C37.3765 30.1695 37.9988 29.5746 37.9988 28.8407C37.9988 28.1068 37.3765 27.512 36.6086 27.512H36.6075ZM4.57247 27.512V5.79066H33.4264V27.512H4.57363H4.57247Z"
          fill="white"
        />
        <path
          d="M11.5016 16.9107C14.1009 16.9107 16.208 14.8967 16.208 12.4124C16.208 9.92803 14.1009 7.91406 11.5016 7.91406C8.90236 7.91406 6.79523 9.92803 6.79523 12.4124C6.79523 14.8967 8.90236 16.9107 11.5016 16.9107Z"
          fill={fill}
        />
        <path
          d="M31.236 17.0411V25.4187H6.76288V19.7704C9.48096 20.5562 14.2855 21.3121 19 18.9581C22.7654 17.1018 27.0469 16.432 31.2348 17.0422L31.236 17.0411Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_267">
          <rect width="38" height="35" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Artist;
