import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  public Insert(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }

  public Remove(key: string) {
    sessionStorage.removeItem(key);
  }

  public Select(key: string): any {
    return sessionStorage.getItem(key);
  }

  public ClearAll() {
    sessionStorage.clear();
  }
}
