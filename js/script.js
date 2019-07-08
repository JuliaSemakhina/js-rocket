var doCoolStuff = function () {
	var currentClassName = document.getElementById("cool").className;

	if (currentClassName == "cool") {
		document.getElementById("cool").className = "cool red";
	}
	else {
		document.getElementById("cool").className = "cool";
	};
	};


var car = {
			make: "WV",
			type: "Polo",
			color: "blue",
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ["seaat1", 
			"seat 2",
			"seat 3"],
			turnedOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log("turn car " + isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				}
				else {
					this.isTurnedOn = false;
				}
			}
		};
		console.log('hello there friends!');