import React from 'react';

const SvgBsd = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-16.873L19.927 4l-1.963 6.436L4 15.127h24zM4.11 16.655l7.854 11.236 1.963-6.655 13.964-4.581H4.109z"
      fill="#FFF"
    />
  </svg>
);

export default SvgBsd;
