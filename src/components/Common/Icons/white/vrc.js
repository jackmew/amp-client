import React from 'react';

const SvgVrc = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.265-24l-4.234 9.113L11.704 8H7l9 18 9-18zM16 12.959c.788 0 1.427-.656 1.427-1.465s-.64-1.466-1.427-1.466c-.788 0-1.427.657-1.427 1.466s.639 1.465 1.427 1.465zm6.465 4.04c-.788 0-1.427.657-1.427 1.466 0 .81.64 1.465 1.427 1.465.788 0 1.426-.656 1.426-1.465S23.253 17 22.465 17z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgVrc;
