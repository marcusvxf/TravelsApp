import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import HomeCard from '.';

describe('Home card Test', () => {
  test('Title Correct', () => {
    const {getByText} = render(
      <HomeCard
        id={3}
        openSelectedItem={() => console.log('algo')}
        title="Titulo do card"
        local="São paulo - Brazil"
        itens={6}
      />,
    );
    expect(getByText('Titulo do card')).toBeTruthy();
  });

  test('Local Correct', () => {
    const {getByText} = render(
      <HomeCard
        id={3}
        openSelectedItem={() => console.log('algo')}
        title="Titulo do card"
        local="São paulo - Brazil"
        itens={6}
      />,
    );
    expect(getByText('São paulo - Brazil')).toBeTruthy();
  });

  test('Number Itens', () => {
    const {getByText} = render(
      <HomeCard
        id={3}
        openSelectedItem={() => console.log('algo')}
        title="Titulo do card"
        local="São paulo - Brazil"
        itens={6}
      />,
    );
    expect(getByText('6 itens')).toBeTruthy();
  });

  test('No number Icons', () => {
    const {getByText} = render(
      <HomeCard
        id={3}
        openSelectedItem={() => console.log('algo')}
        title="Titulo do card"
        local="São paulo - Brazil"
      />,
    );
    expect(() => getByText('itens')).toThrow();
  });

  test('Call function on press', () => {
    const onCardMock = jest.fn();
    const {getByTestId} = render(
      <HomeCard
        id={3}
        openSelectedItem={onCardMock}
        title="Titulo do card"
        local="São paulo - Brazil"
        itens={6}
      />,
    );

    fireEvent.press(getByTestId('wrapper'));
    expect(onCardMock).toBeCalledWith(3);
  });
});
