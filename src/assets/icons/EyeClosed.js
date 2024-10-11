import * as React from 'react'

function SvgEyeClosed(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 70 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M34.999 30.666a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334z"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.668 24l5 6.667a36.667 36.667 0 0056.667 0l5-6.667"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.668 24.001l5-6.666a36.666 36.666 0 0156.667 0l5 6.666"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 45.84L56.841 1.999"
      />
    </svg>
  )
}

export default SvgEyeClosed
