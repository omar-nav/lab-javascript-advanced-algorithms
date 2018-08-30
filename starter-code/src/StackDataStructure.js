class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
  }
  isEmpty() {
    if (this.stackControl.length > 0) {
      return false;
    } else {
      return true;
    }
  }
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  push(a) {
    if (this.canPush()) {
      this.stackControl.push(a);
      return this.stackControl;
    } else {
      return "Stack Overflow";
    }
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
