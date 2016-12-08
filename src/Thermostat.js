'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.getTemperature = function(){
  return this.currentTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  this.currentTemperature += 1;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.currentTemperature <= this.MINIMUM_TEMPERATURE){throw new Error("Error: it is too cold!")};
  this.currentTemperature -= 1;
};
