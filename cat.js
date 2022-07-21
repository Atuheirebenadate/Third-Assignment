class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
}
    this.removeFarm = (farmId) => {
    let specific = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(specific);
    this.farms.splice(farmIndex, 1);
}
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmersName,newPhone,newAddress){
    let specificFarm = this.farms.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmersName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
}
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
}
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
}
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
}
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
}
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
}
    this.printProducts = ()=>{
    console.log(this.product)
}
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for Kshs ${quantity*specificProduct.price}`);
 }
}
 }
let farm1 = new Mkulima();
    farm1.addFarm("5A 0.52ha","Cudra","Mohamed","+254 767 783 890", "089-987");
    farm1.addFarm("9C 0.93ha","Rudra","Morehermade","+254 767 890 890", "098-345");
    farm1.addFarm("8B 0.25ha","Gudra","Moreher","+254 890 765 789", "234-567")
    console.log(farm1.farms);
    farm1.removeFarm("8B 0.25ha");
    console.log(farm1)