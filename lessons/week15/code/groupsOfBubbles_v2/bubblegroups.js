class BubbleGroups {
  constructor(num, position) {
    this.origin = position.copy();
    this.bubbles = [];
    for (let i = 0; i < num; i++) {
      this.bubbles.push(new Bubble(this.origin));
    }
  }

  addBubble() {
    this.bubbles.push(new Bubble(this.origin));
  }

  run() {
    for (let Bubble of this.bubbles) {
      Bubble.run();
    }

    this.bubbles = this.bubbles.filter(Bubble => !Bubble.isPopped());

    // Without ES6 arrow code would look like:
    // this.bubbles = this.bubbles.filter(function(Bubble) {
    //   return !Bubble.isDead();
    // });

  }
}