'use strict';

function Cashier(name, productsDatabase) {
  
    this.name = name;
    this.productsDatabase = productsDatabase;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.greet = function (){
      console.log(`Здравствуйте, вас обслуживает ${this.name}`)
    };
    
    this.onSuccess = function () {
      if (this.changeAmount > 0) {
          console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
      } else {  
          console.log(`Спасибо за покупку`); 
      }
    };
   
    this.onError = function () {
      if (this.customerMoney - this.totalPrice < 0) {
        console.log('Очень жаль, вам не хватает денег на покупки');
      }
    };
    
    this.countTotalPrice = function (order) {
      const values = Object.values(order);
        for (let i = 0; i < values.length; i++) {
           this.totalPrice += values[i];       
        };
        return this.totalPrice;
    };
    
    this.getCustomerMoney = function (value) {
      this.customerMoney = value;
      return this.customerMoney;
    }
    
    this.countChange = function () {    
      if(this.customerMoney - this.totalPrice > 0) {
         this.changeAmount = this.customerMoney - this.totalPrice;
         return this.changeAmount;
       } else {
           return null;
         };
    };
    
    this.reset = function() {
      this.totalPrice = 0;
      this.customerMoney = 0;
      this.changeAmount = 0.
    };
  };
  
  const products = {
  
      hotdogs: 10,
      potato: 15,
      apple: 25,
      orange: 20,
      banana: 15,
  };
  
  const mango = new Cashier('Mango', products);
  
  
  console.log(mango.name); ``
  console.log(mango.productsDatabase); 
  console.log(mango.totalPrice); 
  console.log(mango.customerMoney); 
  console.log(mango.changeAmount);
  
  mango.greet(); 
  
  mango.countTotalPrice(products);
  
  console.log(mango.totalPrice);
  
  mango.getCustomerMoney(550);
  
  console.log(mango.customerMoney);
  
  const result = mango.countChange();
  
  console.log(result); 
  
  if(result !== null) {
     
    mango.onSuccess(); 
  } else {
    
    mango.onError();
  }
  
  mango.reset();
  
  console.log(mango.totalPrice);
  console.log(mango.customerMoney); 
  console.log(mango.changeAmount);