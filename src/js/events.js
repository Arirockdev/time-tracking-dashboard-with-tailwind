import { Action } from "../data/data.js";

const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');



export class Events {

  
  constructor(){
    this.newEvent = new Action();
  }

  printDay(){
    day.addEventListener('click', this.newEvent.printDay)
  }

  printWeek(){
    week.addEventListener('click', this.newEvent.printWeek)
  }

  printMont(){
    month.addEventListener('click', this.newEvent.printMonth)
  }
}
