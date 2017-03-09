import test from 'tape';
import Peg from '../app/Peg.js'

test('Peg :: Create correct new Peg object',
  ({ equal, deepEqual, end }) => {
    const pegProps = {
      color: 'brown',
      torusStack: ['torus 1', 'torus 2']
    };
    const actualPeg = new Peg(pegProps);
    const expectedPeg = pegProps;

    equal(actualPeg.color, expectedPeg.color);
    deepEqual(actualPeg.torusStack, expectedPeg.torusStack);

    end();
  }
);
