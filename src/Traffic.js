<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    $traffic_color: #6f2569;

#traffic {
    width: 100%;
    height: 100%;
    background: $traffic_color; /* Old browsers */
   
    .box{
         height:100vh;
         padding-top: 0px;
         width: 350px;
         margin-left:auto;
         margin-right:auto;
     }
  
    .circle {
      margin-top: 25%;
      border: 5px solid #000;
      width: 100px;
      height: 100px;
      float: left;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
      border-radius: 100px;
      margin-left: 5px;
    }
}
</style>
<body>
    
    <script>
        
var trafficStyle = {
  	red: {
      backgroundColor: "red"
    },
  	yellow: {
      backgroundColor: "yellow"
    },
  	green: {
      backgroundColor: "green"
    },
  	black: {
      backgroundColor: "black"
    }
};

var Traffic = React.createClass({
  		getInitialState: function() {
        return {
          	red: trafficStyle.red, 
          	yellow: trafficStyle.black, 
          	green: trafficStyle.black,
          	next: "yellow"
        };
      },
  		setInterval: function ()  {
     		this._timeout = setTimeout(function () {
            this.changeHandle();
        }.bind(this), 500); 
  		}, 
  		componentDidMount: function () {
        this.setInterval(this.tick, 500);
      },
  		componentWillUnmount: function ()  {
     		clearInterval(this._timeout);
  		},
  		changeHandle: function() {
        	switch (this.state.next) {
            case "red":
           		this.setState({
                red:trafficStyle.red, 
                yellow: trafficStyle.black, 
                green: trafficStyle.black,
                next: "yellow"
              });
              $('#traffic').animate({backgroundColor: '#5075c5'}, 'slow');
              break;
            case "yellow":
              this.setState({
                red:trafficStyle.black, 
                yellow: trafficStyle.yellow, 
                green: trafficStyle.black,
                next: "green"
              });
              console.log($('#traffic'));
               $('#traffic').animate({backgroundColor: '#dbba94'}, 'slow');
              break;
            case "green":
              this.setState({
                red:trafficStyle.black, 
                yellow: trafficStyle.black, 
                green: trafficStyle.green,
                next: "red"
              });
               $('#traffic').animate({backgroundColor: '#6f2565'}, 'slow');
              break;
          }
        	
    			this._timeout = setTimeout(function () {
            	this.changeHandle();
        	}.bind(this), 5000);
      },
    	render: function() {
      	return (
          <div className="box">
          		<div className="circle" style={this.state.red}></div>
          		<div className="circle" style={this.state.yellow}></div>
          		<div className="circle" style={this.state.green}></div>
          </div>
        );
    }
});

React.render(
      <Traffic />, document.getElementById('traffic')
);
    </script>
</body>
</html>