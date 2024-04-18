import React from "react";

export const TrianguloRosa = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="236"
      height="219"
      viewBox="0 0 236 219"
      fill="none"
      className="w-full h-full"
    >
      <g clipPath="url(#clip0_3_130)">
        <path
          d="M230.127 138.189L230.118 138.1C230.092 138.039 230.059 137.982 230.021 137.929L94.1611 12.2976L93.9913 12.2089L93.8796 12.2199C93.8045 12.2127 93.7284 12.2201 93.6562 12.2419C93.5616 12.2705 93.4732 12.3149 93.3952 12.3729C93.3425 12.4306 93.3 12.4958 93.2692 12.5659L19.3645 217.681C19.3496 217.782 19.3596 217.884 19.3938 217.979C19.4059 218.002 19.4085 218.029 19.4011 218.054C19.4361 218.142 19.4877 218.224 19.5536 218.295L19.6334 218.287L19.8032 218.376C19.8944 218.382 19.9863 218.373 20.0745 218.349L20.266 218.33L229.717 138.937L229.829 138.926L229.94 138.915C230.018 138.859 230.073 138.779 230.095 138.689C230.155 138.528 230.166 138.355 230.127 138.189ZM122.052 112.487L21.6574 215.273L93.534 14.9333L122.052 112.487ZM123.023 113.355L227.307 138.511L22.5259 216.242L123.023 113.355ZM123.369 112.117L94.9456 14.8698L227.191 137.168L123.369 112.117Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_130">
          <rect
            width="217.59"
            height="198.268"
            fill="white"
            transform="translate(0 21.2798) rotate(-5.61238)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
