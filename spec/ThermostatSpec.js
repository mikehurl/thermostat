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
    for (var i = 0; i < 10; i++){
      thermostat.decreaseTemperature()};
    expect(function(){thermostat.decreaseTemperature()}).toThrowError("Error: it is too cold!");
  });

});
