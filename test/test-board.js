import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
    it('Renders a board with a title and a given amount of ListContainers',  function() {
        const title = "The Board";
        const listTitles = ["Hot List", "Warm List", "Cold List"];

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} lists={listTitles} />);
        const result = renderer.getRenderOutput();
        result.type.should.equal('div');
        result.props.className.should.equal('board');
        result.props.children.length.should.equal(2);
        result.props.children[0].props.children.should.equal(title);
    });
});