import React from 'react';
import { Flex, Circle } from 'native-base';

const Dots = ({ activeScreen }) => {
  const dotKeys = [1, 2, 3];
  return (
    <Flex position="absolute" bottom="0" mb="3"  direction="row">
      {dotKeys.map((key) => (
        <Circle
          key={key}
          size="15px"
          bgColor={activeScreen === key ? '#0038FF' : '#E5E5E5'}
          shadow={3}
          mx="1"
          cursor="pointer"
        />
      ))}
    </Flex>
  );
};

export default Dots;
