const dataJson = './data.json';

let title = document.querySelectorAll('h2');
let card = document.querySelectorAll('.timer');



export class Action {

  
  printTitle (){
  
    fetch(dataJson)
      .then(resp => resp.json())
      .then(data => {
        data.forEach((item, index) => {
        title[index].textContent = `${item.title}`;
      });
    });
    
  };
 
  
  printDay (){

    fetch(dataJson)
      .then(resp => resp.json())
      .then(data => {
      data.forEach((item, index) => {
        card[index].firstElementChild.firstElementChild.textContent = `${item.timeframes.daily.current}`;
        card[index].lastElementChild.lastElementChild.textContent = `${item.timeframes.daily.previous}`;

      });
    });
  };
  printWeek (){
    fetch(dataJson)
      .then(resp => resp.json())
      .then(data => {
      data.forEach((item, index) => {
        card[index].firstElementChild.firstElementChild.textContent = `${item.timeframes.weekly.current}`;
        card[index].lastElementChild.lastElementChild.textContent = `${item.timeframes.weekly.previous}`;

      });
    });
  };
  printMonth (){
    fetch(dataJson)
      .then(resp => resp.json())
      .then(data => {
      data.forEach((item, index) => {
        card[index].firstElementChild.firstElementChild.textContent = `${item.timeframes.monthly.current}`;
        card[index].lastElementChild.lastElementChild.textContent = `${item.timeframes.monthly.previous}`;

      });
    });
  }; 


};

new Action();
