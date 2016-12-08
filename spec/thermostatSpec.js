describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  describe('knows the temperature', function () {
    it('starts at 20 degrees celsius', function () {
      expect(thermostat.displayTemperature()).toEqual(20);
    });
  });

  describe('up function', function () {
    it('increases the display temperature by 1 degree celsius', function(){
      thermostat.up();
      expect(thermostat.displayTemperature()).toEqual(21);
    });
  });

  describe('down function', function () {
    it('decreases the display temperature by 1 degree celsius', function(){
      thermostat.down();
      expect(thermostat.displayTemperature()).toEqual(19);
    });
  });

});
