describe('Thermostat', function() {

  var thermostat;

  describe('knows the temperature', function () {
    it('starts at 20 degrees celsius', function () {
      thermostat = new Thermostat();
      expect(thermostat.displayTemperature()).toEqual(20);
    });
  });

});
