import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatComponent, MatSidenavContent, MatSidenavContainer, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VideoChatDemo';
}
