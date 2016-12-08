'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it('sets the default temperature at 20 degrees', function(){
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });
