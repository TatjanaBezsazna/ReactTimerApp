var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass ({
	
	getInitialState: function () {
		return {
			count: 0,
			timerStatus: 'stopped'
		};	
	}, 
	
	handleStatusChange: function(newStatus) {
		
		this.setState({timerStatus: newStatus});

	},
	
	componentDidUpdate: function(prevProps, prevState) {
		
		var {timerStatus} = this.state;
			
		if(this.state.timerStatus !== prevState.timerStatus) {
			
			switch (timerStatus) {
					
				case 'started':
				this.startTimer();
				break;
				
				case 'stopped':
				this.setState({count: 0});
					
				case 'paused':
				clearInterval(this.timer);
				break;
					
			};
			
		};
		
	},
	
	componentWillUnmount: function() {
		
		clearInterval(this.timer);
	},
	
	startTimer: function() {

		this.timer = setInterval(() => {
			
			var {count} = this.state;
			
			var newCount = count + 1;
			
			this.setState({count: newCount});
			
		}, 1000);

	},
	
	render: function() {
		
		var {count, timerStatus} = this.state
		
		
		return (
			
			<div>
				<h1 className='page-title'>Timer</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} clockType='timer'/>
			</div>
			
		)
	}
})


module.exports = Timer;