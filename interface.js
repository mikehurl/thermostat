$(document).ready(function(){

  var thermostat = new Thermostat();
  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemperature);
    $('#temperature').attr('class', thermostat.getUsage());
  };

  function checkPowerSavingMode(){
    if(thermostat.isPowerSavingModeOn()){
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#outside-temperature').text(data.main.temp);
  })

  $('#temperature').text(thermostat.currentTemperature);
  $('#temperature-increase').on('click', function(){
    thermostat.increaseTemperature();
    updateTemperature();
  })
  $('#temperature-decrease').click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })
  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving').click(function() {
   thermostat.changePowerSavingMode();
   checkPowerSavingMode();
  })

});
