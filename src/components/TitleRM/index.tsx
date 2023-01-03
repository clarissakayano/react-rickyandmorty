import React, { memo } from 'react';

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => <h1>{title}</h1>;

export default memo(Title);
