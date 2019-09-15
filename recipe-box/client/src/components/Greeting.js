import React from 'react';
import '../index.css';

const Greeting = () => {
	
	const greeting = "What's for Dinner?";

	return (
		<div>
			<h1 className="diner_style margin_left">{greeting}</h1>
			<p className="description narrow_text margin_left">Welcome to my Recipe Box! A place to save favorite recipes from the 
					internet and a place to write down recipes you want to remember!</p>
			<p className="description margin_left">Select a category above to view, add, delete, and edit recipes</p>
		</div>
			)
}

export default Greeting;