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
  if(this.isPowerSavingModeOn){
    this.PowerSavingMode = false
    this.maximumTemperature = 32;
  };
  this.PowerSavingMode = true
};

Thermostat.prototype.resetTemperature = function(){
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};