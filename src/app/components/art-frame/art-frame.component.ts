import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'c-art-frame',
  templateUrl: './art-frame.component.html',
  styleUrls: ['./art-frame.component.scss'],
})
export class ArtFrameComponent {
  artworkDescr = 'The motion art experiments';
  artworkTitle = 'Enter the void.';
  artworkNum = '001';

  @HostBinding('class') class = 'c-art-frame';
  constructor() {}
}
