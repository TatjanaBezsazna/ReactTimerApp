var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return (
				
				<div className="top-bar">
					<div className="top-bar-left">
						<ul className="menu">
							<li className='menu-text'>React Time App</li>
							<li><Link to='/' activeClassName="active-link">Timer</Link></li>
							<li><Link to='/countdown' activeClassName="active-link">Countdown</Link></li>
						</ul>
					</div>
					<div className="top-bar-right">
						<ul className="menu">
						  <li className='menu-text'>Created by
						  <a href="https://github.com/TatjanaBezsazna" target="_blank"> Tatjana Bezsazna</a>
						  </li>
						</ul>
				  	</div>
				</div>
				
			)
}
	
	
module.exports = Nav;