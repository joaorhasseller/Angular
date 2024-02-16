import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import e from 'express';
import { error } from 'node:console';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})

export class EventComponent {

  private _http: HttpClient;
  public evento: any;

  constructor(http:HttpClient){
    this._http = http;
    this.get();
  }

  public get(): void{
    this._http.get<Teste>('http://localhost:5029/api/Event/Teste', {responseType: 'json'})
    .subscribe(r => this.evento = r.name)

  }
}

interface Teste {
  name:string
}
