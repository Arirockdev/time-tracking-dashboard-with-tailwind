import { Action } from './src/data/data.js';

import { Events } from './src/js/events.js';

function main (){

  
  const printTitleInDom  = new Action();
  printTitleInDom.printTitle();
  
  const newEventInDom = new Events();
  
  newEventInDom.printDay();
  newEventInDom.printWeek();
  newEventInDom.printMont();
  
 
}
main()  
