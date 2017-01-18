'use strict';

var storeHours = ['Location','6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'Total'];
var stores = [];
var grandTotal = 0;
var results = [];

//Object Constructor
function Store (storeName, minCust, maxCust, avgCookSales){
  this.storeName = storeName;
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
  for(var index = 1; index <= (storeHours.length - 2); index++) {
    //average number of cookies * random customer
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
  for(var i = 0; i < 1; i++){
    var rowData = this.storeName;
  //loop through inside of stores data
    var rowEl = document.createElement('tr');
    console.log('results stores for loop', this.results);
//write stores as row 1
    rowEl.textContent = rowData;

    tableEl.appendChild(rowEl);
    //nested loop to access each piece of results and loop through content of array
    for(var j = 0; j < this.results.length; j++){
      // console.log('results content', this.results);
      var content = this.results[j];

      var dataEl = document.createElement('td');
      dataEl.textContent = content;
  //content is coming from array and added td tag
      rowEl.appendChild(dataEl);
    }
  }
  tableEl.appendChild(rowEl);
};

//create table header
var header = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var hours = storeHours[i];
    var headEl = document.getElementById('times');
    var data = document.createElement('th');
    data.textContent = hours;
    headEl.appendChild(data);
  }
};

header();

//create event listener for form submission
var formEl = document.getElementById('sales-form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(typeof parseInt(event.target.maxCust.value));
//push data from new store input provided by event listener, runs through table method, and appends to table
  stores.push(new Store(event.target.storeName.value, parseInt(event.target.minCust.value), parseInt(event.target.maxCust.value), parseInt(event.target.avgCookSales.value)).table());
}, false);

//Total row
// function makeTotalRow(){
//   var rowElement = document.createElement('tr');
//   var dataElement = document.createElement('td');
//   dataElement.textContent = 'totals';
//   dataElement.setAttribute = ('class', 'locNameTable');
//   rowElement.appendChild(dataElement);
//   for(var i = 0; i < storeHours.length; i++){
//     for(var j = 0; j < stores.length; j++) {
//       avgCookSales[i] += stores[j].results[j];
//       // console.log('results in for loop part 2 ', avgCookSales[i]);
//     }
//     dataElement = document.createElement('td');
//     dataElement.textContent = results[i];
//     rowElement.appendChild(dataElement);
//   }
//   for(var i = 0; i < stores.length; i++){
//     grandTotal += stores[i].results;
//   }
//   dataElement = document.createElement('td');
//   dataElement.textContent = grandTotal;
//   dataElement.setAttribute('class', 'locNameTable');
//   rowElement.appendChild(dataElement);
//   table.appendChild(rowElement);
// };
// makeTotalRow();
// console.log('total row', makeTotalRow);

//Instance of 1st and Pike Store
var firstPike = new Store('First and Pike', 23, 65, 6.3);
//Calling obeject methods and DOM code
firstPike.table();
//Instance of SeaTac Airport Store
var seaTacAir = new Store('SeaTac Airport', 3, 24, 1.2);
//Calling obeject methods and DOM code
seaTacAir.table();
//Instance of Seattle Center Store
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
//Calling obeject methods and DOM code
seaCenter.table();
//Instance of Capitol Hill Store
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
//Calling obeject methods and DOM code
capHill.table();
//Instance of Alki Store
var alki = new Store('Alki', 2, 16, 4.6);
//Calling obeject methods and DOM code
alki.table();

//fill stores array with store objects
stores.push(firstPike, seaTacAir, seaCenter, capHill, alki);
