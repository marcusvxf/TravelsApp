import React from 'react';
import Header from '../../components/Header';
import HomeCard from '../../components/HomeCards';
import {HomeStyles} from './styles';
import {ScrollView, SafeAreaView} from 'react-native';

const Home = () => {
  return (
    <>
      <Header>Proximas Viagens</Header>
      <SafeAreaView>
        <ScrollView
          style={HomeStyles.wrapper}
          contentContainerStyle={{paddingBottom: '10%', alignItems: 'center'}}>
          <HomeCard
            title="Algum texto"
            id={3}
            date="11/02/2010"
            itens={6}
            local="Recife - PE"
            openSelectedItem={(id: number) => console.log(id)}
          />
          <HomeCard
            title="Algum texto"
            id={3}
            date="11/02/2010"
            itens={6}
            local="Recife - PE"
            openSelectedItem={(id: number) => console.log(id)}
          />
          <HomeCard
            title="Algum texto"
            id={3}
            date="11/02/2010"
            itens={6}
            local="Recife - PE"
            openSelectedItem={(id: number) => console.log(id)}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
