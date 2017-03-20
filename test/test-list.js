import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';
import Card from '../js/components/card';

describe('List component', function() {
    it('Renders the list title, the cards inside of the list and a form to add more cards',  function() {
        const title = "The only List there needs to be!";
        const cards = [<Card text="train" />,
                        <Card text="of" />,
                        <Card text="thought" />
                        ];
        const renderer = TestUtils.createRenderer();
        renderer.render(<List title={title} cards={cards} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('list');
        result.props.children[0].type.should.equal('h2');
        result.props.children[0].props.children.should.equal(title);
        result.props.children.length.should.equal(3);
        console.log(result.props.children[1]);
        result.props.children[1].props.className.should.equal('cards');
        const listCards = result.props.children[1].props.children;
        for(let i = 0; i < listCards.length; i++){
            listCards[i].props.text.should.equal(cards[i].props.text);
        }
        result.props.children[2].type.should.equal('form');
        result.props.children[2].props.children[0].type.should.equal('input');
        result.props.children[2].props.children[1].type.should.equal('button');

        /*TestUtils.Simulate.change(result.props.children[2].props.children[0], 'wax'); 
        TestUtils.Simulate.submit(result.props.children[2]);
        listCards[listCards.length-1].props.text.should.equal('wax');*/       
    });
});