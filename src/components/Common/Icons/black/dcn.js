import React from 'react';

const SvgDcn = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fillRule="evenodd"
      d="M4.774 27.4A15.951 15.951 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16c0 4.61-1.95 8.763-5.068 11.683a311.58 311.58 0 0 1-1.72-2.762c-2.888-4.724-5.068-9.764-6.617-15.077-.85-2.917-1.644-5.85-2.464-8.776a1.076 1.076 0 0 0-.23-.455c-.128.404-.267.804-.383 1.21-1.307 4.561-2.678 9.103-4.391 13.528-1.584 4.092-4.008 8.328-6.353 12.05zM21.147 32h-7.63l-3.146-.812a21751.8 21751.8 0 0 1 5.37-15.123l.154.003A4716.12 4716.12 0 0 1 21.147 32z"
    />
  </svg>
);

export default SvgDcn;
