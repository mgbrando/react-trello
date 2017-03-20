import React from 'react';
import ListContainer from './list-container';

export default function Board(props){
	const list1Cards = ["Eeny", "meany", "miny", "mo"];
	const list2Cards = ["Catch", "a", "tiger", "by", "the", "toe"];
	const list3Cards =[ "If", "he", "hollers"];
	const cards = [list1Cards, list2Cards, list3Cards];
	const listContainers = [];
	for(let i = 0; i < props.lists.length; i++){
		listContainers.push(<ListContainer 
				title={props.lists[i]}
				cards={cards[i]}
				/>);
	}

	return (
			<div className="board">
				<h2>{props.title}</h2>
				{listContainers}
			</div>
	);
}