export default function main(input, warehouses) {
    let output = [];
    for (var item in input) {
        let warehouse = warehouses.find(warehouse => warehouse.inventory[item]);
        while (input[item]) {
            if (!warehouse) {
                return []
            }
            let count = input[item];
            let difference = (warehouse.inventory[item] < count) ? warehouse.inventory[item] : count;

            let outputIndex = output.findIndex(order => order[warehouse.name]);
            if (outputIndex < 0) {
                output.push({ [warehouse.name]: { [item]: 0 } });
                outputIndex = output.length - 1;
            }
            output[outputIndex][warehouse.name][item] = difference;

            input[item] = count - difference;
            delete warehouse.inventory[item];

            if (input[item] == 0) { //finished
                delete input[item];
            }
            else {
                warehouse = warehouses.find(warehouse => warehouse.inventory[item]);
            }
        }
    }

    return output;
}
