// TODO: refactoring this code to be dynamic and not hard coded
function generateVariations(cpu, ram, color) {
    const result = [];
    for (const cpuOption of cpu) {
        for (const ramOption of ram) {
            for (const colorOption of color) {
                result.push({
                    name: `${cpuOption.name} - ${ramOption.name} - ${colorOption.name}`,
                    priority: cpuOption.priority + ramOption.priority + colorOption.priority
                });
            }
        }
    }
    return result;
}

const variations = generateVariations(cpu, ram, color);
console.log(variations);