var Thermostat = function() {
  this.temperature = 20;
  this.mode = 'power saving mode';
};

  Thermostat.prototype.displayTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if (this.temperature === this.maxTemperature) {
      throw 'Thermostat cannot go above ' + this.maxTemperature + ' degrees in ' + this.mode;
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
    this.mode = 'power saving mode';
    this.maxTemperature = 25;
  };

  Thermostat.prototype.disablePowerSaving = function(){
    this.mode = 'power hungry mode';
    this.maxTemperature = 32;
  };

  Thermostat.prototype.reset = function(){
    this.temperature = 20;
  };
