var Thermostat = function() {
  this.temperature = 20;
};

  Thermostat.prototype.displayTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.temperature === this.maxTemperature) {
      throw 'Thermostat cannot go above 25 degrees in power saving mode';
    } else {
      return (this.temperature += 1);
    }
  };

  Thermostat.prototype.down = function() {
    if (this.temperature === 10) {
      throw 'Thermostat cannot go below 10 degrees';
    } else {
      return (this.temperature -= 1);
    };
  };

  Thermostat.prototype.enablePowerSaving = function(){
    this.maxTemperature = 25;
  }
