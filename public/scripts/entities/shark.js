class Shark extends BiteFish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/shark.png';
    this.width = 200;
    this.height = 120;
    this.maxSwimSpeed = 250;
    this.food = ['GoFish', 'SwitchFish', 'BiteFish']

  }
}
