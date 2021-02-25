import { Injectable } from '@angular/core';
import { Store } from './store';

export interface Loading {
  loading: boolean;
  errorMessage: string;
}

@Injectable()
export class LoadingService extends Store<Loading> {
  constructor() {
    super({ loading: false, errorMessage: '' });
  }
}
