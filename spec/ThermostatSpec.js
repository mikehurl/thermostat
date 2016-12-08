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

});
