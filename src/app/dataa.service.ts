import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataaService {

  constructor() { }

  currentDate = new Date();
}
