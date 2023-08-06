function calculate() {
  // получаем значения полей формы
  const alcoholConcentration = document.getElementById("alcohol-concentration").value;
  const alcoholVolume = document.getElementById("alcohol-volume").value;
  const finalConcentration = document.getElementById("final-concentration").value;

  // производим расчет
  const waterVolume = (alcoholVolume * alcoholConcentration / finalConcentration) - alcoholVolume;
  
  // выводим результат
  alert(`Добавьте ${waterVolume.toFixed(2)} мл воды для разбавления.`);
}
