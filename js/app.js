'use strict';

// const mainPage = {
//   headerName: 'Salmon Cookies',
//   image: './image/salmon.png',
//   sales: './sales.html',

//   render: function() {
//     const parentElement = document.getElementById('fish');
//     console.log('Saja');
//     const h2Element=document.createElement('h2');
//     parentElement.appendChild(h2Element);
//     h2Element.textContent= this.headerName;

//     const imageElement= document.createElement('img');
//     parentElement.appendChild(imageElement);
//     imageElement.setAttribute('src',this.image);

//     const linkSales=document.createElement('a');
//     parentElement.appendChild(linkSales);
//     linkSales.textContent = 'Sales Page';
//     linkSales.href= this.sales;
//   }
// };

// mainPage.render();


let timeOFsales = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let total = 0;

let Seattle = {
  locationOfshop: 'Seattle',
  minOfCustomer: 23,
  maxOfCustomer: 65,
  avgOFcookies: 6.3,
  numberOfcustomer: [],

  numberOfcustomerperhoure : function() {
    for(let i=0; i<timeOFsales.length; i++){
      this.numberOfcustomer.push(Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer)* this.avgOFcookies));
      total=total+this.numberOfcustomer[i];
    //   console.log(this.numberOfcustomer);
    }

  },

  result: function() {
    const parent2Element = document.getElementById('Home');

    const h2Element = document.createElement('h2');
    // console.log(ulElement);
    parent2Element.appendChild(h2Element);
    h2Element.textContent='Seattle';
    // console.log(parent2Element);
    const ulElement = document.createElement('ul');
    // console.log(ulElement);
    parent2Element.appendChild(ulElement);



    let liElement;
    for(let j = 0; j < timeOFsales.length; j++) {
      liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeOFsales[j]} : ${this.numberOfcustomer[j]} cookies.`;

    }
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`Total : ${total} cookies .`;
  }

};

Seattle.numberOfcustomerperhoure();
Seattle.result();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}


let Tokyo = {
  location: 'Tokyo',
  minOfCustomer: 3,
  maxOfCustomer: 24,
  avgOFcookies: 1.2,
  numOfcookiesperhoure: [],

  numOfcookies: function () {
    for (let i = 0; i < timeOFsales.length; i++) {

      this.numOfcookiesperhoure.push(Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer)));
      console.log(this.numOfcookiesperhoure);
      total = total + this.numOfcookiesperhoure[i];
    }
  },

  render: function () {
    const parent2Element = document.getElementById('Home');
    const h2Element = document.createElement('h2');
    parent2Element.appendChild(h2Element);
    h2Element.textContent = 'Tokyo';

    const ulElement = document.createElement('ul');
    parent2Element.appendChild(ulElement);

    let liElement;
    for (let j = 0; j < timeOFsales.length; j++) {

      liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeOFsales[j]} : ${this.numOfcookiesperhoure[j]} cookies.`;
      console.log(liElement);
    }
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${total} cookies.`;
  }

};
Tokyo.numOfcookies();
Tokyo.render();


let Dubai = {
  location: 'Dubai',
  minOfCustomer: 11,
  maxOfCustomer: 38,
  avgOFcookies: 3.7,
  numOfcookiesperhoure: [],

  numOfcookies: function () {
    for (let i = 0; i < timeOFsales.length; i++) {

      this.numOfcookiesperhoure.push(Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer)));
      console.log(this.numOfcookiesperhoure);
      total = total + this.numOfcookiesperhoure[i];
    }
  },

  render: function () {
    const parent2Element = document.getElementById('Home');
    const h2Element = document.createElement('h2');
    parent2Element.appendChild(h2Element);
    h2Element.textContent = 'Dubai';

    const ulElement = document.createElement('ul');
    parent2Element.appendChild(ulElement);

    let liElement;
    for (let j = 0; j < timeOFsales.length; j++) {

      liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeOFsales[j]} : ${this.numOfcookiesperhoure[j]} cookies.`;
      console.log(liElement);
    }
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${total} cookies.`;
  }

};
Dubai.numOfcookies();
Dubai.render();


let Paris = {
  location: 'Paris',
  minOfCustomer: 20,
  maxOfCustomer: 38,
  avgOFcookies: 2.3,
  numOfcookiesperhoure: [],

  numOfcookies: function () {
    for (let i = 0; i < timeOFsales.length; i++) {

      this.numOfcookiesperhoure.push(Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer)));
      console.log(this.numOfcookiesperhoure);
      total = total + this.numOfcookiesperhoure[i];
    }
  },

  render: function () {
    const parent2Element = document.getElementById('Home');
    const h2Element = document.createElement('h2');
    parent2Element.appendChild(h2Element);
    h2Element.textContent = 'Paris';

    const ulElement = document.createElement('ul');
    parent2Element.appendChild(ulElement);

    let liElement;
    for (let j = 0; j < timeOFsales.length; j++) {

      liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeOFsales[j]} : ${this.numOfcookiesperhoure[j]} cookies.`;
      console.log(liElement);
    }
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${total} cookies.`;
  }

};
Paris.numOfcookies();
Paris.render();

let Lima = {
  location: 'Lima',
  minOfCustomer: 2,
  maxOfCustomer: 16,
  avgOFcookies: 4.6,
  numOfcookiesperhoure: [],

  numOfcookies: function () {
    for (let i = 0; i < timeOFsales.length; i++) {

      this.numOfcookiesperhoure.push(Math.ceil(getRandomNumber(this.minOfCustomer, this.maxOfCustomer)));
      console.log(this.numOfcookiesperhoure);
      total = total + this.numOfcookiesperhoure[i];
    }
  },

  render: function () {
    const parent2Element = document.getElementById('Home');
    const h2Element = document.createElement('h2');
    parent2Element.appendChild(h2Element);
    h2Element.textContent = 'Lima';

    const ulElement = document.createElement('ul');
    parent2Element.appendChild(ulElement);

    let liElement;
    for (let j = 0; j < timeOFsales.length; j++) {

      liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${timeOFsales[j]} : ${this.numOfcookiesperhoure[j]} cookies.`;
      console.log(liElement);
    }
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${total} cookies.`;
  }

};
Lima.numOfcookies();
Lima.render();
