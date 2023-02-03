# Problem

In an online shop application, we need to create a function that can populate all product variations. Let's say we have
3 attributes: CPU, RAM, and COLOR. Each attribute has many options. Please create an algorithm for that part.
Sample Data:

```javascript

const cpu = [
    {"name": "i3", "priority": 3},
    {"name": "i5", "priority": 2},
    {"name": "i7", "priority": 1}
];
const ram = [
    {"name": "4gb", "priority": 3},
    {"name": "8gb", "priority": 1},
    {"name": "16gb", "priority": 2}
];
const color = [
    {"name": "white", "priority": 1},
    {"name": "black", "priority": 2},
    {"name": "gold", "priority": 4},
    {"name": "grey", "priority": 3}
];

const result = [
    {"name": "i3 - 4g - white", "priority": 7},
    {"name": "i3 - 8g - white", "priority": 5},
];


```