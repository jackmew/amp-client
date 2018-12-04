import React from 'react';

const SvgGto = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="gto_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="gto_svg__b" cx={16} cy={15} r={15} />
      <filter id="gto_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="gto_svg__e"
        d="M15.376 13H8.02v7.222c-.008.739.288 1.45.82 1.972a2.83 2.83 0 0 0 2.01.806h4.527V13zm.17-3.779h.792c.784-1.35 1.502-2.268 2.177-2.764.832-.613 1.684-.618 2.352.038.624.612.741 1.38.33 2.12-.116.206-.27.408-.463.606h2.908c.679 0 1.358.558 1.358 1.333 0 .667-.569 1.334-1.358 1.334h-7.134V10.11h-1.132v1.778H8.358C7.68 11.888 7 11.33 7 10.554c0-.666.569-1.333 1.358-1.333h2.94a3.294 3.294 0 0 1-.488-.572c-.487-.744-.428-1.53.207-2.154.668-.656 1.52-.65 2.353-.038.674.496 1.392 1.415 2.177 2.764zm-1.315 0c-.58-.923-1.098-1.55-1.54-1.875-.409-.3-.633-.302-.874-.066-.247.243-.262.451-.055.767.236.361.733.768 1.449 1.174h1.02zm3.422 0h1.22c.683-.392 1.134-.788 1.33-1.14.17-.304.134-.535-.136-.8-.241-.237-.465-.236-.873.065-.443.325-.962.952-1.54 1.875zm-1.145 3.778h7.357v7.223a2.725 2.725 0 0 1-.82 1.972 2.83 2.83 0 0 1-2.01.806h-4.527V13z"
      />
      <filter id="gto_svg__d" width="119.4%" height="120.6%" x="-9.7%" y="-7.4%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#gto_svg__a)" xlinkHref="#gto_svg__b" />
      <use fill="#7F27FF" fillRule="evenodd" xlinkHref="#gto_svg__b" />
      <use
        fill="url(#gto_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#gto_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#gto_svg__d)" xlinkHref="#gto_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#gto_svg__e" />
    </g>
  </svg>
);

export default SvgGto;
