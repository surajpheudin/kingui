import { IToast } from "./toast/interface";

export class Observable {
  toasts: IToast[] = [];
  subscribers: Array<(data: IToast) => void> = [];
  constructor() {
    this.subscribers = [];
    this.toasts = [];
  }

  subscribe(item: (data: IToast) => void) {
    this.subscribers.push(item);
  }
  notify = (data: IToast) => {
    this.subscribers.forEach((subscriber) => subscriber(data));
    this.toasts = [...this.toasts, data];
  };
  unsubscribe() {}
}
