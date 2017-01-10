'use strict';

var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookSales: 6.3,
  hourlyCook: [],

  randCustperHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length; index++) {
      var amountofCookiesPur = Math.floor(this.avgCookSales * this.randCustperHour());
      this.hourlyCook.push(amountofCookiesPur);
    }
    console.log(this.hourlyCook);
    return this.hourlyCook;
  },

  totalCookies: function(){
    var total = 0;
    for(var index = 0; index < this.hourlyCook.length; index++){
      total += this.hourlyCook[index];
    }
    console.log(total);
    return total;
  },

  listCookieSales: function(){
    var cookieSales = document.getElementById('cookie-sales');
    for(var index = 0; index < storeHours.length; index++){
      var listElement = document.createElement('li');
      listElement.textContent = storeHours[index] + ', ' + 'Cookies: ' + this.hourlyCook[index] + '.';
      cookieSales.appendChild(listElement);
    }
  }
};

/* //Calling obeject.functions and DOM code
firstPike.cookiesPurHour();
firstPike.cookiesSum();

Replace listCookieSales with this...
var myList = document.getElementById('firstandpike');  **Eve change name of store for each object

for (var i = 0; i < firstPike.results.length; i++) {
var lisrEl = document.createElement('li';
listEl.textcontent = times[i] + ' ' + firstPike.results[i]);
myList.appendChild(listEl);
}
   */   //  How do you append the total number of sales to the list?

firstPike.cookiesPurHour();
firstPike.totalCookies();
firstPike.listCookieSales();

var SeaTacAir = {
  minCust: 3,
  maxCust: 24,
  avgCookSales: 1.2,
  storeLoc: 'SeaTac Airpot',
  hourlyCook: [],

  randCustperHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length; index++) {
      var amountofCookiesPur = Math.floor(this.avgCookSales * this.randCustperHour());
      this.hourlyCook.push(amountofCookiesPur);
    }
    console.log(this.hourlyCook);
    return this.hourlyCook;
  },

  totalCookies: function(){
    var total = 0;
    for(var index = 0; index < this.hourlyCook.length; index++){
      total += this.hourlyCook[index];
    }
    console.log(total);
    return total;
  },

  listCookieSales: function(){
    var cookieSales = document.getElementById('cookie-sales');
    for(var index = 0; index < storeHours.length; index++){
      var listElement = document.createElement('li');
      listElement.textContent = storeHours[index] + ' at ' + this.storeLoc + ', Cookies: ' + this.hourlyCook[index];
      cookieSales.appendChild(listElement);
    }
  }
};

SeaTacAir.cookiesPurHour();
SeaTacAir.totalCookies();
SeaTacAir.listCookieSales();

var SeaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookSales: 3.7,
  storeLoc: 'Seattle Center',
  hourlyCook: [],

  randCustperHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length; index++) {
      var amountofCookiesPur = Math.floor(this.avgCookSales * this.randCustperHour());
      this.hourlyCook.push(amountofCookiesPur);
    }
    console.log(this.hourlyCook);
    return this.hourlyCook;
  },

  totalCookies: function(){
    var total = 0;
    for(var index = 0; index < this.hourlyCook.length; index++){
      total += this.hourlyCook[index];
    }
    console.log(total);
    return total;
  },

  listCookieSales: function(){
    var cookieSales = document.getElementById('cookie-sales');
    for(var index = 0; index < storeHours.length; index++){
      var listElement = document.createElement('li');
      listElement.textContent = storeHours[index] + ' at ' + this.storeLoc + ', Cookies: ' + this.hourlyCook[index];
      cookieSales.appendChild(listElement);
    }
  }
};

SeaCenter.cookiesPurHour();
SeaCenter.totalCookies();
SeaCenter.listCookieSales();

var CapHill = {
  minCust: 20,
  maxCust: 38,
  avgCookSales: 2.3,
  storeLoc:'Capitol Hill',
  hourlyCook: [],
  randCustperHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length; index++) {
      var amountofCookiesPur = Math.floor(this.avgCookSales * this.randCustperHour());
      this.hourlyCook.push(amountofCookiesPur);
    }
    console.log(this.hourlyCook);
    return this.hourlyCook;
  },

  totalCookies: function(){
    var total = 0;
    for(var index = 0; index < this.hourlyCook.length; index++){
      total += this.hourlyCook[index];
    }
    console.log(total);
    return total;
  },

  listCookieSales: function(){
    var cookieSales = document.getElementById('cookie-sales');
    for(var index = 0; index < storeHours.length; index++){
      var listElement = document.createElement('li');
      listElement.textContent = storeHours[index] + ' at ' + this.storeLoc + ', Cookies: ' + this.hourlyCook[index];
      cookieSales.appendChild(listElement);
    }
  }
};

CapHill.cookiesPurHour();
CapHill.totalCookies();
CapHill.listCookieSales();

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookSales: 4.6,
  storeLoc: 'Alki',
  hourlyCook: [],

  randCustperHour: function (){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPurHour: function(){
    for(var index = 0; index < storeHours.length; index++) {
      var amountofCookiesPur = Math.floor(this.avgCookSales * this.randCustperHour());
      this.hourlyCook.push(amountofCookiesPur);
    }
    console.log(this.hourlyCook);
    return this.hourlyCook;
  },

  totalCookies: function(){
    var total = 0;
    for(var index = 0; index < this.hourlyCook.length; index++){
      total += this.hourlyCook[index];
    }
    console.log(total);
    return total;
  },

  listCookieSales: function(){
    var cookieSales = document.getElementById('cookie-sales');
    for(var index = 0; index < storeHours.length; index++){
      var listElement = document.createElement('li');
      listElement.textContent = storeHours[index] + ' at ' + this.storeLoc + ', Cookies: ' + this.hourlyCook[index];
      cookieSales.appendChild(listElement);
    }
  }
};

Alki.cookiesPurHour();
Alki.totalCookies();
Alki.listCookieSales();
