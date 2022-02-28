import React from 'react';
import { Flex, Text, Heading } from 'native-base';
const HeaderText = ({ title, subTitle = '', containerStyles = {}, styles = { display: 'flex' } }) => {
  return (
    <Flex {...containerStyles} w="90%" direction="column" align="center" mx="auto">
      <Heading style={{ ...styles }} size="lg" fontSize={30} py="2" color='black'>
        {title}
      </Heading>
      {!!subTitle ? (
        <Text textAlign="center" fontSize={18} py="2" color='black'>
          {subTitle}
        </Text>
      ) : null}
    </Flex>
  );
};

export default HeaderText;
