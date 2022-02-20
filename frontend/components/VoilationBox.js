import React from 'react';
import { Text, Box, Checkbox, Flex } from 'native-base';


const VoilationBox = ({ text, value }) => {
  return (
    <Flex
      w="100%"
      bg="rgba(0, 56, 255, 0.05)"
      shadow="2"
      borderRadius="5px"
      cursor="pointer"
      textAlign="left"
      align="center"
      px="6"
      py="5"
      direction="row"
      >
      <Text lineHeight="23px" w="85%" color="#0038FF">
        {text}
      </Text>
      <Checkbox value={value} ml="3" />
    </Flex>
  );
};

export default VoilationBox;
