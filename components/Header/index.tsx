import React from 'react';
import {View, Text} from 'react-native';

import {headerStyle} from './styles';

function Header(props: any) {
  return (
    <View style={headerStyle.container}>
      <Text className="text-3xl font-extrabold text-black ">
        {props.children}
      </Text>
    </View>
  );
}

export default Header;
