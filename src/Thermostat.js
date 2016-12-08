'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getTemperature = function(){
  return this.currentTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  this.currentTemperature += 1;
};
