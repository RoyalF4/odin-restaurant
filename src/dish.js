export default Dish;

class Dish {
    constructor(name, description, cost) {
        this._name = name;
        this._description = description;
        this._cost = cost;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get cost() {
        return this._cost;
    }
}