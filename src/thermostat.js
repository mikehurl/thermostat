var Thermostat = function() {
  this.temperature = 20;
};

  Thermostat.prototype.displayTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    return (this.temperature += 1);
  };

  Thermostat.prototype.down = function() {
    if (this.temperature === 10) {
      throw 'Thermostat cannot go below 10 degrees';
    } else {
      return (this.temperature -= 1);
    };
  };
