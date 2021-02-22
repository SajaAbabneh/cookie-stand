'use strict';

let timeOFsales = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let total = 0;
let all = [];
function Cookies(location, minOfCustomer, maxOfCustomer, avgOFcookies) {
  this.location = location;
  this.minOfCustomer = minOfCustomer;
  this.maxOfCustomer = maxOfCustomer;
  this.avgOFcookies = avgOFcookies;
  this.numberOfcustomer = [];
  all.push(this);


}

Cookies.prototype.numberOfcustomerperhoure = function () {
  for (let i = 0; i < timeOFsales.length; i++) {
    this.numberOfcustomer.push(Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer) * this.avgOFcookies));
    console.log(this.numberOfcustomer);
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
    th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    th1Element.textContent = timeOFsales[i];
  }
  th1Element = document.createElement('th');
  tr1Element.appendChild(th1Element);
  th1Element.textContent = ' Daily Location Total';
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
    total = total + this.numberOfcustomer[i];

  }
  td2Element = document.createElement('td');
  tr2Element.appendChild(td2Element);
  td2Element.textContent = total;

};

function footerTotal() {
  let tr6Element = document.createElement('tr');
  tableElement.appendChild(tr6Element);
  let td6Element = document.createElement('td');
  tr6Element.appendChild(td6Element);
  td6Element.textContent = 'Totals';

  let totalArr=[];
  for (let i = 0; i < all[0].numberOfcustomer.length; i++) {
    let total = 0;
    for (let j = 0; j < all.length; j++) {
      total +=all[j].numberOfcustomer[i];
    }
    totalArr.push(total);
  }
  
  for(let s=0; s < totalArr.length; s++){
    td6Element = document.createElement('td');
    tr6Element.appendChild(td6Element);
    td6Element.textContent =totalArr[s];
  }
  //console.log('ff',totalArr);
}

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
console.log(all);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
