'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('sets the default temperature at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('increase the temperature by 1', function(){
    thermostat.increaseTemperature();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('decreases the temperature by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toBe(10);
  });

  it('gives an error message if temperature is decreased beyond minimum', function(){
    for (var i = 1; i < 11; i++){
      thermostat.decreaseTemperature()};
    expect(function(){thermostat.decreaseTemperature()}).toThrowError("Error: it is too cold!");
  });

  it('sets the power saving maximum temperature at 25 degrees', function(){
    expect(thermostat.maximumTemperature).toBe(25);
  });

  it('expect Power Saving Mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  });

  it('sets non-Power saving maximum temperature at 32 degree', function(){
    thermostat.changePowerSavingMode();
    expect(thermostat.maximumTemperature).toBe(32);
  });

  it('can reset the temperature to 20 degrees', function(){
    thermostat.resetTemperature();
    expect(thermostat.currentTemperature).toBe(20);
  });

  it('can check the thermostats energy usage', function(){
    expect(thermostat.getUsage()).toEqual("Medium usage");
    
    for (var i = 1; i < 6; i++){
      thermostat.increaseTemperature()};
    expect(thermostat.getUsage()).toEqual("High usage");

    for (var i = 1; i < 9; i++){
      thermostat.decreaseTemperature()};
    expect(thermostat.getUsage()).toEqual("Low usage");
  });

});
