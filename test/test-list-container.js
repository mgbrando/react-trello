import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';
import Card from '../js/components/card';

describe('ListContainer component', function() {
    it('Renders a listcontainer containing a list with correct properties',  function() {
        const title = "Container of Lists";
        const cards = ["train",
                        "of",
                        "thought"
                        ];
        const cardArray = [<Card text={cards[0]} />, <Card text={cards[1]} />, <Card text={cards[2]} />];
        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title} cards={cards} />);
        const result = renderer.getRenderOutput();
        result.props.title.should.equal(title);
        result.props.cards.should.deep.equal(cardArray);
        result.props.onAddInputChanged.should.not.equal(null);
        result.props.onAddSubmit.should.not.equal(null);
    });
});