import React from 'react'

function SvgChevronDown(props) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M112 184L256 328L400 184"
        stroke="black"
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgChevronDown
