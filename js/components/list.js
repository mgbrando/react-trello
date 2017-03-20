import React from 'react';
import Card from './card';

export default function List(props){
	return (
			<div className="list">
				<h2>{props.title}</h2>
				<div className="cards">
				{props.cards}
				</div>
				<form onSubmit={(event) => {event.preventDefault(); props.onAddSubmit();}}>
					<input type="text" onChange={props.onAddInputChanged} />
					<button type="submit">Submit</button>
				</form>
			</div>
	);
}