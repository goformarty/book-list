import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		return (
			<div>Book Detail Container</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('hey there', state);
	book: state.activeBook;
}

export default connect(mapStateToProps)(BookDetail)