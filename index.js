class Light {
    constructor(lightOn = false) { // default parameter used to avoid code failure
        this.lightOn = lightOn;
    };

    getLightStatus() {
        return this.lightOn;
    };

    showLightStatus(){
        console.log('Light on?', this.lightOn); 
    }

    switchLight() {
        this.lightOn = !this.lightOn // negates whatever value lightOn has
        console.log('Switch has been toggled');
    };

};


class RoomLight extends Light {
    automaticLightSwitch() {
        let hour = new Date().getHours(); //get the realtime in hours

        let light = super.getLightStatus();

        if (hour >= 18 && light === true) {
            console.log('Nighttime: light is on');

        } else if (hour >= 18 && light === false) {
            super.switchLight()
            console.log('It\'s night, light turned on.');

        } else if (hour < 18 && light === true) {
            super.switchLight();
            console.log('Daytime: light turned off.');

        } else if (hour < 18 && light === false) {
            console.log('Daytime, light is off..');

        } else {
            console.error('error');
        }

    }
}

let room1 = new RoomLight(true)
room1.automaticLightSwitch() // Turns the light on at night and off during the day

console.log('\n\n') // Spacing for readablity 

let room2 = new RoomLight()
room2.showLightStatus()
room2.switchLight() // if you want to mannaully toggle the light
room2.showLightStatus()
