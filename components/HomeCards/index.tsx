import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ICard} from '../../interfaces/homeInterfaces';
import {HomeCardStyle} from './style';

function HomeCard(props: ICard) {
  function TernaryItens(): any {
    if (props.itens) {
      return (
        <Text className="text-stone-500 text-base">{`${props.itens} itens`}</Text>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <TouchableOpacity
        className="flex bg-slate-50 flex-col"
        testID="wrapper"
        style={HomeCardStyle.wrapper}
        onPress={() => props.openSelectedItem(props.id)}>
        <Text
          style={HomeCardStyle.title}
          className="text-3xl font-semibold color">
          {props.title}
        </Text>
        <View className="flex flex-row justify-between">
          <Text className="text-stone-500 text-base">{props.local}</Text>
          <Text>{props.date}</Text>
        </View>
        <TernaryItens />
      </TouchableOpacity>
    </>
  );
}

export default HomeCard;
