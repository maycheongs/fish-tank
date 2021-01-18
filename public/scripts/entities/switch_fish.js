class SwitchFish extends Fish {

  onClick(event) {
    console.log(this.constructor.name)
    this.makeNewVelocity(50);
  }
}
