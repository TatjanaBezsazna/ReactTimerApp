var React = require('react');
var Nav = require('Nav'); //Component form the main.jsx

var Main = (props) => {
	
	return (
			<div>
				<div>
					<div>
						<Nav/>
						{props.children} 
					</div>
				</div>	
			</div>	
	)
}

//{this.props.children} Describes where children components should be placed

module.exports = Main;