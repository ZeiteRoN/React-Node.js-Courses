console.log('#3. JavaScript homework example file')

/* #1 */
const userObj = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25,

    /* #2 */
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(userObj);
console.log(userObj.fullName());

/* #3 */
function defUpperStr(str) {
    return (str || 'default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

/* #4 */
function evenFn(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

/* #5 */
function weekFn(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return null;
    }

    switch (n) {
        case 1:
            return 'Понеділок';
        case 2:
            return 'Вівторок';
        case 3:
            return 'Середа';
        case 4:
            return 'Четвер';
        case 5:
            return "П'ятниця";
        case 6:
            return 'Субота';
        case 7:
            return 'Неділя';
        default:
            return null;
    }
}

console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

/* #6 */
function ageClassification(n) {
    return n <= 0 ? null
        : n <= 24 ? 'Дитинство'
            : n <= 44 ? 'Молодість'
                : n <= 65 ? 'Зрілість'
                    : n <= 75 ? 'Старість'
                        : n <= 90 ? 'Довголіття'
                            : n <= 122 ? 'Рекорд'
                                : null;
}

console.log(ageClassification(-1));
console.log(ageClassification(1));
console.log(ageClassification(24));
console.log(ageClassification(24.01));
console.log(ageClassification(44));
console.log(ageClassification(44.01));
console.log(ageClassification(65));
console.log(ageClassification(65.1));
console.log(ageClassification(75));
console.log(ageClassification(75.01));
console.log(ageClassification(90));
console.log(ageClassification(90.01));
console.log(ageClassification(122));
console.log(ageClassification(122.01));

/* #7 */
function oddFn(n) {
    const result = [];
    let i = 1;

    while (i <= n) {
        if (i % 2 !== 0) {
            result.push(i);
        }
        i++;
    }

    return result;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

/* #8 */
function mainFunc(a, b, callback) {
    if (typeof callback !== 'function') {
        return false;
    }

    return callback(a, b);
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
    return Math.pow(num, pow);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(10, 30, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));