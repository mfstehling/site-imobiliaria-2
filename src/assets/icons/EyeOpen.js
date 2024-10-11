import * as React from 'react'

function SvgEyeOpen(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 9a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7l1.5 2a11 11 0 0017 0L21 7M1 7l1.5-2a11 11 0 0117 0L21 7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgEyeOpen
