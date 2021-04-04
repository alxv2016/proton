import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtFrameComponent} from './art-frame/art-frame.component';
import {SvgObjectComponent} from './svg-object/svg-object.component';

@NgModule({
  declarations: [ArtFrameComponent, SvgObjectComponent],
  exports: [ArtFrameComponent, SvgObjectComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
