import { ButtonManager } from "../manager";

export class IsLike {
  private static state = false;

  static get() {
    return this.state;
  }

  static set(newValue: boolean) {
    if (newValue !== this.state) {
      this.state = newValue;
      if (newValue) {
        ButtonManager.buttonLike(true);
      } else {
        ButtonManager.buttonLike(false);
      }
    }
  }
}
