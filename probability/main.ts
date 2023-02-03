export interface Attribute {
    name: string;
    priority: number;
}


export const populateProductVariations = (attributes: Attribute[][]): Attribute[][] => {
    let variations: Attribute[][] = [];
    const generateVariations = (attributeIndex: number, combination: Attribute[]) => {
        if (attributeIndex === attributes.length) {
            variations.push(combination);
            return;
        }

        for (const attribute of attributes[attributeIndex]) {
            generateVariations(attributeIndex + 1, [...combination, attribute]);
        }
    }
    generateVariations(0, []);
    return variations;
};

export const formatVariationsName = (variations: Attribute[][]): Attribute[] => {
    return variations.map(variation => {
        const name = variation.map(attribute => attribute.name).join("-");
        const priority = variation.map(attribute => attribute.priority).reduce((a, b) => a + b, 0);
        return {
            name,
            priority,
        }
    });
}


export const cpu = [
    {name: "i3", priority: 3},
    {name: "i5", priority: 2},
    {name: "i7", priority: 1}
];
export const ram = [
    {name: "4gb", priority: 3},
    {name: "8gb", priority: 1},
    {name: "16gb", priority: 2}
];
export const color = [
    {name: "white", priority: 1},
    {name: "black", priority: 2},
    {name: "gold", priority: 4},
    {name: "grey", priority: 3}
];


// collect user inserted attributes
const result = populateProductVariations([cpu, ram, color]);
console.log(
    formatVariationsName(result)
);
