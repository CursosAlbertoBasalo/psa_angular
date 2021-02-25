import { BehaviorSubject } from 'rxjs';

export abstract class Store<Type> {
  private state$ = new BehaviorSubject(this.initialValue);

  public setState(newValue: Type) {
    const state = { ...newValue };
    this.state$.next(state);
  }

  public getState() {
    return { ...this.state$.value };
  }

  public getState$() {
    return this.state$.asObservable();
  }

  constructor(private initialValue: Type) {}
}
