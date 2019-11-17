import * as React from 'react';
import { createPack } from '../src';
import { WithChildrenComponent } from './utils/test-components';
import * as renderer from 'react-test-renderer';

describe('it', () => {
  it('renders without crashing a pack of one component', () => {
    const Pack = createPack(WithChildrenComponent);

    const tree = renderer.create(<Pack>Test</Pack>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing a pack of three components', () => {
    const Pack = createPack(
      WithChildrenComponent,
      WithChildrenComponent,
      WithChildrenComponent
    );

    const tree = renderer.create(<Pack>Test</Pack>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
