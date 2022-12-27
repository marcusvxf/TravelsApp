import {render} from '@testing-library/react-native';
import Header from '.';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Header', () => {
  test('Header Rendered', () => {
    const header = renderer.create(<Header>Proxima pagina</Header>).toJSON();
    expect(header).toMatchSnapshot();
  });
  test('Header Show Correct text', () => {
    const {getByText} = render(<Header>Proximas viagens</Header>);
    const element = getByText('Proximas viagens');
    expect(element).toBeTruthy();
  });
});
