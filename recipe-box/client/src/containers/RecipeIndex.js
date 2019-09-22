import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import CategoryCard from '../components/CategoryCard'

const RecipeIndex = ({categories}) => (

	<div>
	<p className="description margin_left">Here's a list of all of your recipes organized by category. Simply click on the link to see the full recipe page!</p>
		{categories.map ( id => (
			<CategoryCard id={id} key={id}/>
		))}
	</div>
	
);
	
const mapStateToProps = (state) => 
		({
			categories: state.categories.allIds
		})
			

export default connect(mapStateToProps, null)(RecipeIndex);
