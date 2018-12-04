import React from 'react';

const SvgVia = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      d="M11.133 14.296l.751 1.96-3.874-.025L8 17.95l4.544.029L16 27l3.44-8.978 4.55.029.01-1.719-3.904-.024.77-2.012h3.129v-1.719h-2.47l1.896-4.95L21.856 7l-3.56 9.296-4.602-.029L10.144 7l-1.565.627 1.896 4.95h-2.47v1.72zm3.22 3.694l3.285.02L16 22.289zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgVia;
