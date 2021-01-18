class GoFish extends Fish {

  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    console.log(this.constructor.name)
    this.surgeSecondsLeft = this.maxSurge;
  }

  // update(t) {
  //   // if you're out of bounds, despawn
  //   if (this.outOfBounds(this.tank.getBounds())) {
  //     this.kill();
  //   }
  //   //if

  //   else if() {

  //   } else {
  //     for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
  //       this.updateOneTick();
  //     }
  //   }
  // }
}
