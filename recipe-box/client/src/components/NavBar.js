import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categories';
import '../index.css'


class NavBar extends Component { 
 constructor(props) {
        super(props)
    }
	
	render() {
	
		const { categories } = this.props;
		
		return (
			<div className="navbar">
				<a className="home margin_left" href="http://localhost:3000/recipebox">Recipe Box</a>
			<ul>
				{categories.map(category => (
					<li key={category.id}>
						<Link to={`/category/${category.id}`}>{category.name}</Link>
					</li>
				))}
				<li>
					<Link to={`/recipes`}>Index</Link>
				</li>
			</ul>
			</div>
		)
	}
	
	componentDidMount() {
		this.props.fetchTheCategories()
		console.log('component did mount')
	}

};

const mapStateToProps = state => 
	({
		categories: state.categories.allIds.map(id => state.categories.byId[id])
	})
	
const mapDispatchToProps = dispatch => ({
	fetchTheCategories: () => {
		dispatch(fetchCategories())	
		}
	})
	
	
export default NavBar =  connect(mapStateToProps, mapDispatchToProps)(NavBar);