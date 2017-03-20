import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders a card with given text',  function() {
        const text = "Hello there!";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('card');
        result.props.children.should.equal(text);
    });
});