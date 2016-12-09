$(document).ready(function(){

  var thermostat = new Thermostat();
  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemperature);
  };

  function checkPowerSavingMode(){
    if(thermostat.isPowerSavingModeOn()){  //add() after isPowerSavingModeOn
      $('#power-saving-status').text('on');
    } else {
      $('#power-saving-status').text('off');
    }
  };

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

})
