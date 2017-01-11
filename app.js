'use strict';

var storeHours = [' ', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total: '];
var stores = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

//Object Constructor
function Store (minCust, maxCust, avgCookSales){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookSales = avgCookSales;
  this.results = [];
}
//Customer number method
Store.prototype.custNum = function(){
  return Math.round(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};
//Method for each store
Store.prototype.storeInfo = function(){
  for(var index = 1; index <= storeHours.length - 1; index++) {
    //number of cookies
    var numCookies = Math.round(this.custNum() * this.avgCookSales);
    console.log(numCookies);
    this.results.push(numCookies);
  }
  //cookies Sum
  Store.prototype.totalCook = function(){
    var sum = 0;
    for(var index = 0; index < this.results.length; index++){
      sum = sum += this.results[index];
    }
    this.results.push(sum);
    console.log(sum);
  };
};

// create Table
Store.prototype.table = function() {
  this.storeInfo();
  this.totalCook();
  var tableEl = document.getElementById('stores');
  console.log(tableEl + 'tableEl');
  for(var i = 0; i < stores.length; i++){
    var rowData = stores[i];
  //loop through inside of stores data
    var rowEl = document.createElement('tr');
    console.log('results', this.results);

    var tH = document.createElement('th');
    tH.textContent = rowData;

    rowEl.appendChild(tH);
    //nested loop to access each piece of results and loop through content of array
    for(var j = 0; j < this.results.length; j++){
      var content = this.results[j];

      var dataEl = document.createElement('td');
      dataEl.textContent = content;
  //content is coming from array and added td tag
      rowEl.appendChild(dataEl);
    }
  }
  tableEl.appendChild(rowEl);
};

//Instance of 1st and Pike Store
var firstPike = new Store(23, 65, 6.3);
//Calling obeject methods and DOM code
firstPike.table();

// //Instance of SeaTac Airport Store
// var seaTacAir = new Store(3, 24, 1.2);
// //Calling obeject methods and DOM code
// seaTacAir.storeInfo();
// seaTacAir.table();
// //Instance of Seattle Center Store
// var seaCenter = new Store(11, 38, 3.7);
// //Calling obeject methods and DOM code
// seaCenter.storeInfo();
// seaCenter.table();
// //Instance of Capitol Hill Store
// var capHill = new Store(20, 38, 2.3);
// //Calling obeject methods and DOM code
// capHill.storeInfo();
// capHill.table();
// //Instance of Alki Store
// var alki = new Store(2, 16, 4.6);
// //Calling obeject methods and DOM code
// alki.storeInfo();
// alki.table();
