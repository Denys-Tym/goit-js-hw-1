function getShippingMessage(cuntry, price, deliveryFee) {
  return `Shipping to ${cuntry} will cost ${price + deliveryFee} credits`;
  getShippingMessage("Australia", 120, 50);
  getShippingMessage("Germany", 80, 20);
  getShippingMessage("Sweden", 100, 20);
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"