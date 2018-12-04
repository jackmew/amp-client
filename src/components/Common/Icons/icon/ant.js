import React from 'react';

const SvgAnt = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="ant_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ant_svg__b" cx={16} cy={15} r={15} />
      <filter id="ant_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="ant_svg__e"
        d="M7.965 16.598a5.289 5.289 0 0 1-.01-.317c0-3.517 2.742-6.376 6.172-6.498.082 0 .17 0 .252.007l-.818-.813s3.293-.55 7.521 1.992c0 0 .062.129 0 .508 0 0 1.992.854 2.162 2.514.17 1.66-.886 2.609-1.739 2.744 0 0 .443-.684-.238-1.05a.91.91 0 0 0-.485-.108c-1.302 0-1.452 1.477-1.452 1.477-.014.074-.014.149-.014.223 0 0-.19 1.879 2.922 2.1a18.46 18.46 0 0 0 1.861-2.934 21.79 21.79 0 0 0 1.853-5.146C24.139 9.811 22 8.537 19.702 7.47c-.862-.4-1.697-.747-2.488-1.045a27.381 27.381 0 0 0-1.22-.43c-.322.104-.73.246-1.22.43-.79.297-1.626.645-2.487 1.045C9.99 8.536 7.85 9.81 6.038 11.298c.098.472.247 1.061.461 1.745a21.528 21.528 0 0 0 1.466 3.555zM27 10.902l-.05.28c-.026.217-.203.995-.421 1.74a22.672 22.672 0 0 1-1.569 3.95c-.906 1.766-2.006 3.306-3.268 4.574-1.557 1.561-3.359 2.714-5.367 3.432l-.112.04L16 25l-.211-.074-.118-.041a14.314 14.314 0 0 1-5.366-3.433c-1.268-1.28-2.367-2.817-3.268-4.574a22.706 22.706 0 0 1-1.89-5.203c-.05-.224-.105-.504-.095-.464L5 10.923l.12-.1.088-.075c1.844-1.552 4.025-2.883 6.38-4.002a34.164 34.164 0 0 1 4.087-1.647L15.993 5l.217.065.108.035c1.08.347 2.515.9 4.084 1.646 2.352 1.117 4.53 2.446 6.372 3.995l.226.16zm-7.602.724c.055-.027.232-.115.437-.325.409.054.811.183.811.183-.743-.447-1.76-.712-2.885-.705 0 0 .43.61 1.623.86l.014-.013z"
      />
      <filter id="ant_svg__d" width="115.9%" height="117.5%" x="-8%" y="-6.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ant_svg__a)" xlinkHref="#ant_svg__b" />
      <use fill="#2CD3E1" xlinkHref="#ant_svg__b" />
      <use
        fill="url(#ant_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#ant_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ant_svg__d)" xlinkHref="#ant_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ant_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgAnt;
