import React, { memo } from 'react';

interface ITitleProps {
  title: string;
  subtitle?: string;
}

const Title: React.FC<ITitleProps> = ({ title, subtitle }) => (
  <>
    <h1>{title}</h1>
    {!!subtitle && <p>{subtitle}</p>}
  </>
);

export default memo(Title);
