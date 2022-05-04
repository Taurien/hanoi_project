import Stack from "./Stack";

class Tower {
  constructor() {
    this.disks = new Stack();
  }

  add(value) {
    this.disks.push(value);
  }

  moveTopTo(target) {
    if (this.disks.peek()) {
      let top = this.disks.pop();
      target.add(top.value);
    }
  }

  moveDisks(n, target, buffer) {
    if (n > 0) {
      this.moveDisks(n - 1, buffer, target);
      this.moveTopTo(target);
      buffer.moveDisks(n - 1, target, this);
    }
  }
}

export default Tower;
