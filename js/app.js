'use strict';

let timeOFsales = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Cookies(location, minOfCustomer, maxOfCustomer, avgOFcookies) {
  this.location = location;
  this.minOfCustomer = minOfCustomer;
  this.maxOfCustomer = maxOfCustomer;
  this.avgOFcookies = avgOFcookies;
  this.numberOfcustomer = [];
  this.hourlyTotal = 0;

}


Cookies.prototype.numberOfcustomerperhoure = function () {
  for (let i = 0; i < timeOFsales.length; i++) {
    let houreSales = (Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer) * this.avgOFcookies));
    this.numberOfcustomer.push(houreSales);
    this.hourlyTotal += houreSales;

  }
};
let parentElement = document.getElementById('Home');
let tableElement = document.createElement('table');
parentElement.appendChild(tableElement);

function headerName() {
  let tr1Element;
  let th1Element;
  tr1Element = document.createElement('tr');
  tableElement.appendChild(tr1Element);
  th1Element = document.createElement('th');
  tr1Element.appendChild(th1Element);
  th1Element.textContent = 'Location';

  for (let i = 0; i < timeOFsales.length; i++) {
    const th2Element = document.createElement('th');
    tr1Element.appendChild(th2Element);
    th2Element.textContent = timeOFsales[i];
  }
  const th3Element = document.createElement('th');
  tr1Element.appendChild(th3Element);
  th3Element.textContent = ' Daily Location Total';
}
headerName();

Cookies.prototype.render = function () {
  const tr2Element = document.createElement('tr');
  tableElement.appendChild(tr2Element);

  let td2Element = document.createElement('td');
  tr2Element.appendChild(td2Element);
  td2Element.textContent = this.location;

  for (let i = 0; i < timeOFsales.length; i++) {
    td2Element = document.createElement('td');
    tr2Element.appendChild(td2Element);
    td2Element.textContent = this.numberOfcustomer[i];

  }
  const td3Element = document.createElement('td');
  tr2Element.appendChild(td3Element);
  td3Element.textContent = this.hourlyTotal;
};


function footerTotal() {
  let tr6Element = document.createElement('tr');
  tableElement.appendChild(tr6Element);
  let th6Element = document.createElement('th');
  tr6Element.appendChild(th6Element);
  th6Element.textContent = 'Totals';

  for (let i = 0; i < timeOFsales.length; i++) {
    let th7Element = document.createElement('th');
    tr6Element.appendChild(th7Element);
    th7Element.textContent = Seattle.numberOfcustomer[i] + Tokyo.numberOfcustomer[i] + Dubai.numberOfcustomer[i] + Paris.numberOfcustomer[i] + Lima.numberOfcustomer[i];

  }
  let th8Element = document.createElement('th');
  tr6Element.appendChild(th8Element);
  th8Element.textContent = Seattle.hourlyTotal + Tokyo.hourlyTotal + Dubai.hourlyTotal + Paris.hourlyTotal + Lima.hourlyTotal;

}

const formElement=document.getElementById('addnewitem');

formElement.addEventListener('submit',function(event){
  event.preventDefault();

  tableElement.removeChild(tableElement.lastChild);

  const location= event.target.Location.value;
  console.log(location);

  const minCustomer= parseInt(event.target.mincustomer.value);
  console.log(minCustomer);
  const maxCustomer=parseInt(event.target.maxcustomer.value);
  console.log(maxCustomer);
  const avgCookies=parseInt(event.target.avgcookies.value);
  console.log(avgCookies);

  formElement.reset;
  const newItem= new Cookies(location,minCustomer,maxCustomer,avgCookies);
  console.log(newItem);
  newItem.numberOfcustomerperhoure();
  newItem.render();

  let tr6Element = document.createElement('tr');
  tableElement.appendChild(tr6Element);
  let th6Element = document.createElement('th');
  tr6Element.appendChild(th6Element);
  th6Element.textContent = 'Totals';

  for (let i = 0; i < timeOFsales.length; i++) {
    let th7Element = document.createElement('th');
    tr6Element.appendChild(th7Element);
    th7Element.textContent = Seattle.numberOfcustomer[i] + Tokyo.numberOfcustomer[i] + Dubai.numberOfcustomer[i] + Paris.numberOfcustomer[i] + Lima.numberOfcustomer[i]+newItem.numberOfcustomer[i];

  }
  let th8Element = document.createElement('th');
  tr6Element.appendChild(th8Element);
  th8Element.textContent = Seattle.hourlyTotal + Tokyo.hourlyTotal + Dubai.hourlyTotal + Paris.hourlyTotal + Lima.hourlyTotal + newItem.hourlyTotal;



});

const Seattle = new Cookies('Seattle', 23, 65, 6.3);
Seattle.numberOfcustomerperhoure();
Seattle.render();
const Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
Tokyo.numberOfcustomerperhoure();
Tokyo.render();
const Dubai = new Cookies('Dubai', 11, 38, 3.7);
Dubai.numberOfcustomerperhoure();
Dubai.render();
const Paris = new Cookies('Paris', 20, 38, 2.3);
Paris.numberOfcustomerperhoure();
Paris.render();
const Lima = new Cookies('Lima', 2, 16, 4.6);
Lima.numberOfcustomerperhoure();
Lima.render();
footerTotal();


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const formElement=document.getElementById('addnewitem');

// formElement.addEventListener('submit',function(event){
//   event.preventDefault();

//   const location= event.target.Location.value;
//   console.log(location);

//   const minCustomer= parseInt(event.target.mincustomer.value);
//   console.log(minCustomer);
//   const maxCustomer=parseInt(event.target.maxcustomer.value);
//   console.log(maxCustomer);
//   const avgCookies=parseInt(event.target.avgcookies.value);
//   console.log(avgCookies);

//   formElement.reset;
//   const newItem= new Cookies(location,minCustomer,maxCustomer,avgCookies);
//   newItem.render();


// });