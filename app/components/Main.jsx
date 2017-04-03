var React = require('react');
var Nav = require('Nav'); //Component form the main.jsx

var Main = (props) => {
	
	return (
			<div>
				<Nav/>
				<div className='row'>
					<div className='column small-centered medium-6 large-4'>
						{props.children} 
					</div>
				</div>	
			</div>	
	)
}

//{this.props.children} Describes where children components should be placed

module.exports = Main;