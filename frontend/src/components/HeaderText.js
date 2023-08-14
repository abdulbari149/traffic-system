import React from 'react';
import { Flex, Text, Heading } from 'native-base';
const HeaderText = ({ title, subTitle = '', containerStyles = {} }) => {
  return (
    <Flex {...containerStyles} w="90%" direction="column" align="center" mx="auto">
      <Heading size="lg" fontSize={30} py="2">
        {title}
      </Heading>
      {!!subTitle ? (
        <Text textAlign="center" fontSize={16} py="2">
          {subTitle}
        </Text>
      ) : null}
    </Flex>
  );
};

export default HeaderText;
