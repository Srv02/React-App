export const getDataFromLocalStorage = () => {
  let data = [];
  try {
    console.log(localStorage.getItem('everdoseData'));
    data = JSON.parse(localStorage.getItem('everdoseData'));
    console.log(data);
    if (data.length === 0) {
      return null;
    }
  } catch (e) {

  }
  return data;
}

export const setDataToLocalStorage = (data) => {
  localStorage.setItem('everdoseData', JSON.stringify(data));
}