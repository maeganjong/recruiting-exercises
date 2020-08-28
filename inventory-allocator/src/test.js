import main from "./app.js";

var input = { apple: 5, banana: 5, orange: 5 };
var warehouses = [{ name: 'owd', inventory: { apple: 5, orange: 10 } }, { name: 'dm', inventory: { banana: 5, orange: 10 } }];
console.log(main(input, warehouses));

[input, warehouses] = [{ apple: 10 }, [{ name: 'owd', inventory: { apple: 5 } }, { name: 'dm', inventory: { apple: 5 } }]];
console.log(main(input, warehouses));

[input, warehouses] = [{ apple: 1 }, [{ name: "owd", inventory: { apple: 0 } }]];
console.log(main(input, warehouses));

[input, warehouses] = [{ apple: 1 }, [{ name: "owd", inventory: { apple: 0 } }]];
console.log(main(input, warehouses));

[input, warehouses] = [{ apple: 1 }, [{ name: "owd", inventory: { apple: 0 } }]];
console.log(main(input, warehouses));

[input, warehouses] = [{ apple: 5, banana: 5, orange: 5 }, [{ name: 'owd', inventory: { apple: 3, banana: 10, orange: 10 } }, { name: 'dm', inventory: { apple: 2, banana: 5, orange: 10 } }]];
console.log(main(input, warehouses));
