import React from 'react';
import List from './list';
import Card from './card';

export default class ListContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			text: "",
			cards: []
		};
		for(let i = 0; i < props.cards.length; i++){
			this.state.cards.push(<Card text={props.cards[i]} />);
		}
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}
	onAddInputChanged(event){
		this.setState({text: event.target.value});
		console.log(this.state.text);
	}
	onAddSubmit(){
		const cards = [...this.state.cards];
		cards.push(<Card text={this.state.text} />);
		this.setState({cards: cards});
	}

	render(){
		return (
			<List 
				title={this.props.title}
				cards={this.state.cards} 
				onAddInputChanged={this.onAddInputChanged}
				onAddSubmit={this.onAddSubmit}
			/>
		);
	}
}