describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  describe('knows the temperature', function() {
    it('starts at 20 degrees celsius', function() {
      expect(thermostat.displayTemperature()).toEqual(20);
    });
  });

  describe('up function', function() {
    it('increases the display temperature by 1 degree celsius', function(){
      thermostat.up();
      expect(thermostat.displayTemperature()).toEqual(21);
    });
  });

  describe('down function', function() {
    it('decreases the display temperature by 1 degree celsius', function(){
      thermostat.down();
      expect(thermostat.displayTemperature()).toEqual(19);
    });
  });

  describe('the minimum temperature', function() {
    it('is set to 10 degrees', function() {
      for (var i = 0; i < 10; i++) { thermostat.down(); }
      expect(function() {thermostat.down();}).toThrow('Thermostat cannot go below 10 degrees');
    });
  });

  describe('power saving mode', function(){
    it('has a maximum temperature of 25 degrees', function(){
      thermostat.enablePowerSaving();
      expect(thermostat.maxTemperature).toEqual(25);
    });
    it('does not allow temperature to exceed 25 degrees', function(){
      thermostat.enablePowerSaving();
      for (var i = 0; i < 5; i++) { thermostat.up(); }
      expect(function() {thermostat.up();}).toThrow('Thermostat cannot go above 25 degrees in power saving mode');
    });
  });

});
