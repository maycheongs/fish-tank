class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bitefish.gif';
    this.food = ['GoFish', 'SwitchFish']

  }

  update(t) {
    // if you're out of bounds, despawn
    if (this.outOfBounds(this.tank.getBounds())) {
      this.kill();
      return;
    }
    let fishes = this.tank.denizens;
    for (let id in fishes) {
      let fish = fishes[id]
      let fishX = fish.position.x;
      let fishY = fish.position.y;

      if (this.isFood(fish) &&
      fishX > (this.position.x - 5) &&
      fishX < (this.position.x + 50) &&
      fishY > (this.position.y - 20) &&
      fishY < (this.position.y + 20)) {
        this.tank.removeDenizen(id);
        console.log(`${this.constructor.name} ate ${fish.constructor.name}!`)
      }
    }
    for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
        this.updateOneTick();
    }

  }

  isFood(fishObj) {
    let isFood = false;
    this.food.forEach(food => {
      if (food === fishObj.constructor.name) {
        isFood = true;
      }
    })
    return isFood;
  }

}
