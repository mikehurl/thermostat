$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemperature);
  $('#temperature-increase').on('click', function(){
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  })
  $('#temperature-decrease').click(function(){
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.currentTemperature);
  })
})
