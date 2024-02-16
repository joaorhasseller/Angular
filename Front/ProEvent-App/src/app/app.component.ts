import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpeakerComponent } from "./speaker/speaker.component";
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      SpeakerComponent, 
      EventComponent, 
      HttpClientModule]
})
export class AppComponent {
  title = 'ProEvent-App';
}
