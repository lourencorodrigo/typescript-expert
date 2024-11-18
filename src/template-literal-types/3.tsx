import React from 'react';

type CSSUnit = `${number}px` | `${number}rem` | `${number}%` | `auto`;

type CardProps = {
  width?: CSSUnit;
};

const Card = ({width}: CardProps) => {
  return <div style={{ width }}>Card Example</div>;
}

export const TemplateLiteralTypes3 = () => {
  return (
    <div>
      <Card width="100px" />
      <Card width="100rem" />
      <Card width="100%" />
      <Card width="auto" />
      <Card width="2vh" />
    </div>
  );
}
