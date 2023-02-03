import {Attribute, color, cpu, formatVariationsName, populateProductVariations, ram} from "../probability/main.ts";

type Fields = keyof Attribute;
type Sortable = (a: Attribute, b: Attribute) => number;

const sortVariations = <T>(variations: T[], field: Fields, sort: Sortable): T[] => {
    return variations.sort(
        (a, b) => sort(a[field], b[field])
    );
}

const result = populateProductVariations([cpu, ram, color]);
const formatted = formatVariationsName(result);

//  Sort By Priority  - desc order (to change asc order, just change b - a to a - b)
const sortByPriority = sortVariations(formatted, "priority", (a, b) => b - a);

console.log("Sort By Priority 🤪", sortByPriority);