'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.maximumTemperature = 25;
  this.PowerSavingMode = true;
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getTemperature = function(){
  return this.currentTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if (this.currentTemperature >= this.maximumTemperature){
    throw new Error("Error: it is too hot!")
  };
  this.currentTemperature += 1;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.currentTemperature <= this.MINIMUM_TEMPERATURE){
    throw new Error("Error: it is too cold!")
  };
  this.currentTemperature -= 1;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.PowerSavingMode;
};

Thermostat.prototype.changePowerSavingMode = function(){
  if(this.isPowerSavingModeOn()){  //add() after isPowerSavingModeOn
    this.PowerSavingMode = false
    this.maximumTemperature = 32;
  } else {                        //add else
    this.PowerSavingMode = true
    this.maximumTemperature = 25; //add this line
  };
};

Thermostat.prototype.resetTemperature = function(){
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getUsage = function(){
  if(this.currentTemperature >= 25){
    return "High usage"
  };
  if(this.currentTemperature < 18){
    return "Low usage"
  };
    return "Medium usage"
};
