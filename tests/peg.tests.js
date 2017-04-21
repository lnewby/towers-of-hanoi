import test from 'tape';
import Peg from '../app/Peg.js';
import Torus from '../app/Torus.js';

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

test('Peg :: Set color of Peg object',
  ({ equal, deepEqual, end }) => {
    const pegProps = {
      color: 'black',
      torusStack: ['torus 1', 'torus 2']
    };
    const pegA = new Peg(pegProps);
    pegA.color = 'blue';

    const actualColor = pegA.color;
    const expectedColor = 'blue';

    equal(actualColor, expectedColor);

    end();
  }
);

test('Peg :: Get color of Peg object',
  ({ equal, deepEqual, end }) => {
    const pegProps = {
      color: 'black',
      torusStack: ['torus 1', 'torus 2']
    };
    const pegA = new Peg(pegProps);

    const actualColor = pegA.color;
    const expectedColor = 'black';

    equal(actualColor, expectedColor);

    end();
  }
);

test('Peg :: Push a valid size torus onto the Peg object',
  ({ equal, deepEqual, end }) => {
    const pegProps = {
      color: 'black',
      torusStack: [new Torus({color: 'brown', size: 4}), new Torus({color: 'brown', size: 5})]
    };
    const pegA = new Peg(pegProps);
    const actualResponse = pegA.pushTorus(new Torus({color: 'brown', size: 3}));
    const expectedResponse = {
      status: 'SUCCESS',
      message: 'Torus added to the peg'
    };
    const actualNumberOfTorus = pegA.torusStack.length;
    const expectedNumberOfTorus = 3;

    equal(actualNumberOfTorus, expectedNumberOfTorus);
    deepEqual(actualResponse, expectedResponse);

    end();
  }
);

test('Peg :: Pushing an invalid torus to the Peg object does not work',
  ({ equal, deepEqual, end }) => {
    const pegProps = {
      color: 'black',
      torusStack: [
        new Torus({color: 'brown', size: 4}),
        new Torus({color: 'brown', size: 5})
      ]
    };
    const pegA = new Peg(pegProps);
    const actualResponse = pegA.pushTorus(new Torus({color: 'brown', size: 6}));
    const expectedResponse = {
      status: 'ERROR',
      message: 'Pushed torus\' size must be less than torus on the peg'
    };
    const actualNumberOfTorus = pegA.torusStack.length;
    const expectedNumberOfTorus = 2;

    equal(actualNumberOfTorus, expectedNumberOfTorus);
    deepEqual(actualResponse, expectedResponse);

    end();
  }
);

test('Peg :: Pop a torus from off the Peg object',
  ({ deepEqual, end }) => {
    const torusProps = {color: 'brown'};
    const pegProps = {
      color: 'black',
      torusStack: [
        new Torus({...torusProps, size: 3}),
        new Torus({...torusProps, size: 4})
      ]
    }
    const nextPegProps = {
      color: 'black',
      torusStack: [new Torus({...torusProps, size: 4})]
    }
    const pegA = new Peg(pegProps);
    const actualTorus = pegA.popTorus();
    const expectedTorus = pegProps.torusStack[0];
    const actualTorusStack = pegA.torusStack;
    const expectedTorusStack = nextPegProps.torusStack;

    deepEqual(actualTorus, expectedTorus);
    deepEqual(actualTorusStack, expectedTorusStack);

    end();
  }
);
