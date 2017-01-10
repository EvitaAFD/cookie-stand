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
  for(index = 0; index < storeHours; index++){
  console.log(storeHours[index]);
  var listElement = document.createElement('li');

    }
   }
  }
};
firstPike.cookiesPurHour();
firstPike.totalCookies();
firstPike.listCookieSales();

var SeaTacAir = {
  minCust: 3,
  maxCust: 24,
  avgCookSales: 1.2,
  hourlyCook: [],
};

var SeaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookSales: 3.7,
  hourlyCook: [],
};

var CapHill = {
  minCust: 20,
  maxCust: 38,
  avgCookSales: 2.3,
  hourlyCook: [],
};

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgCookSales: 4.6,
  hourlyCook: [],
};
