	function sayHi()
	{
		console.log("hi");
	}

const protocols = 
[
	{
		port: "80",
		service: "http",
		transportLayerProtocol:"TCP",
		description: "This service runs on TCP for web servers"
	},
	{
		port: "20/21",
		service: "FTP",
		transportLayerProtocol:"TCP",
		description: "FTP is one of the most commonly used file transfer protocols on the Internet and within private networks. An FTP server can easily be set up with little networking knowledge and provides the ability to easily relocate files from one system to another. FTP control is handled on TCP port 21 and its data transfer can use TCP port 20 as well as dynamic ports depending on the specific configuration."
	},
	/*
	{
		port: "",
		service: "",
		transportLayerProtocol:"",
		description: ""
	},
	*/


]

function protocolObjectSelector(protocolArr)
{
	this._protocolArr = protocolArr;
	this.randomSelect = function()
	{
	//	console.log(this._protocolArr[Math.floor(Math.random() * this._protocolArr.length)]);
		return this._protocolArr[Math.floor(Math.random() * this._protocolArr.length)];
	}
}


//We're going to pretend this is an behavioral interface implementation
function networkCardBehavior()
{
	this.displayCard = function(card)
	{
		console.log(card.port);
	}
}

function Card(cardJSON, networkCardBehavior)
{
	this.port = cardJSON.port;
	this.service = cardJSON.service;
	this.transportLayerProtocol = cardJSON.transportLayerProtocol;
	this.description=cardJSON.description;
	this.networkCardBehavior = networkCardBehavior;

	this.displayPort = function()
	{
		console.log(this.port);
	}

	this.networkCardBehavior.displayCard(this);
	
	
}
