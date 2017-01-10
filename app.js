'use strict';

var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total: '];

// Object 1st and Pike
var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookSales: 6.3,
  results: [],
  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length - 1; index++) {
      var randCustperHour = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      console.log(randCustperHour);
      var numCookies = Math.round(randCustperHour * this.avgCookSales);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
// Calculate total cookies for the day
  cookiesSum: function(){
    var sum = 0;
    for(var index = 0; index < this.results.length; index++){
      sum = sum += this.results[index];
    }
    this.results.push(sum);
    console.log(sum);
  },
};

//Calling obeject.functions and DOM code
firstPike.cookiesPurHour();
firstPike.cookiesSum();

// document methods
var myList = document.getElementById('first-and-pike');
console.log(myList + 'myList');
for (var i = 0; i < firstPike.results.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = storeHours[i] + ' ' + firstPike.results[i];
  myList.appendChild(listEl);
}
// SeaTac Airport
var seaTacAir = {
  minCust: 3,
  maxCust: 24,
  avgCookSales: 1.2,
  results: [],
  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length - 1; index++) {
      var randCustperHour = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      console.log(randCustperHour);
      var numCookies = Math.round(randCustperHour * this.avgCookSales);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
// Calculate total cookies for the day
  cookiesSum: function(){
    var sum = 0;
    for(var index = 0; index < this.results.length; index++){
      sum = sum += this.results[index];
    }
    this.results.push(sum);
    console.log(sum);
  },
};
//Calling obeject.functions and DOM code
seaTacAir.cookiesPurHour();
seaTacAir.cookiesSum();

// document methods
var myList = document.getElementById('first-and-pike');
console.log(myList + 'myList');
for (var i = 0; i < seaTacAir.results.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = storeHours[i] + ' ' + seaTacAir.results[i];
  myList.appendChild(listEl);
}
// Seattle Center
var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookSales: 3.7,
  results: [],
  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length - 1; index++) {
      var randCustperHour = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      console.log(randCustperHour);
      var numCookies = Math.round(randCustperHour * this.avgCookSales);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
// Calculate total cookies for the day
  cookiesSum: function(){
    var sum = 0;
    for(var index = 0; index < this.results.length; index++){
      sum = sum += this.results[index];
    }
    this.results.push(sum);
    console.log(sum);
  },
};

//Calling obeject.functions and DOM code
seaCenter.cookiesPurHour();
seaCenter.cookiesSum();

// document methods
var myList = document.getElementById('sea-center');
console.log(myList + 'myList');
for (var i = 0; i < seaCenter.results.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = storeHours[i] + ' ' + seaCenter.results[i];
  myList.appendChild(listEl);
}
//Capitol Hill
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookSales: 2.3,
  results: [],
  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length - 1; index++) {
      var randCustperHour = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      console.log(randCustperHour);
      var numCookies = Math.round(randCustperHour * this.avgCookSales);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
// Calculate total cookies for the day
  cookiesSum: function(){
    var sum = 0;
    for(var index = 0; index < this.results.length; index++){
      sum = sum += this.results[index];
    }
    this.results.push(sum);
    console.log(sum);
  },
};

//Calling obeject.functions and DOM code
capHill.cookiesPurHour();
capHill.cookiesSum();

// document methods
var myList = document.getElementById('capitol-hill');
console.log(myList + 'myList');
for (var i = 0; i < capHill.results.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = storeHours[i] + ' ' + capHill.results[i];
  myList.appendChild(listEl);
}
//Alki
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookSales: 4.6,
  results: [],
  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length - 1; index++) {
      var randCustperHour = Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      console.log(randCustperHour);
      var numCookies = Math.round(randCustperHour * this.avgCookSales);
      console.log(numCookies);
      this.results.push(numCookies);
    }
  },
// Calculate total cookies for the day
  cookiesSum: function(){
    var sum = 0;
    for(var index = 0; index < this.results.length; index++){
      sum = sum += this.results[index];
    }
    this.results.push(sum);
    console.log(sum);
  },
};

//Calling obeject.functions and DOM code
alki.cookiesPurHour();
alki.cookiesSum();

// document methods
var myList = document.getElementById('alki');
console.log(myList + 'myList');
for (var i = 0; i < alki.results.length; i++) {
  var listEl = document.createElement('li');
  listEl.textContent = storeHours[i] + ' ' + alki.results[i];
  myList.appendChild(listEl);
}
