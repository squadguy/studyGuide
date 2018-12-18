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
//Come back to this later
function networkCardBehavior()
{
	this.buildHTML = function(appendArea)
	{
		const anchor = document.getElementById(appendArea);
		var node = document.createElement("p");
		var textnode = document.createTextNode("HELLOWORLD");
                node.style.background.color="gray";
                node.appendChild(textnode);
             //   var x = document.getElementById("machineName");
                anchor.appendChild(node);  

	}
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
	this.buildHTML = function()
	{
		const somePort = document.getElementById('somePort');
		somePort.innerHTML = this.port

		const transportLayer = document.getElementById('transportLayerProtocol');
		transportLayer.innerHTML = this.transportLayerProtocol;

		//Dynamically Build HTML
		/*
		const anchor = document.getElementById(appendArea);
		var divCard = document.createElement("div");
		divCard.setAttribute("id", "divCard");

		var divCardHead = document.createElement("div");
		divCardHead.setAttribute("id", "cardHead");
		var divCardData = document.createElement("div");
		divCardData.setAttribute("id", "cardData");
		var h4Port = document.createElement("h4");
		h4Port.setAttribute("id", "port");
		var spanSomePort=document.createElement("span");
		spanSomePort.setAttribute("id","somePort");
		var textnode = document.createTextNode("HELLOWORLD");
                spanSomePort.style.background.color="gray";
                spanSomePort.appendChild(textnode);
             //   var x = document.getElementById("machineName");
                anchor.appendChild(spanSomePort);  
		*/

	}
	
	
}


//Make this into a compositie behavior for some object
function giveHintBehavior(card)
{
	let descriptionText = card.description;
	let appendDescription = document.getElementById('descriptionText');
	appendDescription.innerHTML = descriptionText;



}

//Make this into a compositie behavior for some object
function checkAnswerBehavior(card)
{
	let answer = document.getElementById('answer').value;

		if (answer.toLowerCase() === card.service)
		{
			console.log("correct");
		}
		else
		{
			console.log("Wrong");
		}
}
