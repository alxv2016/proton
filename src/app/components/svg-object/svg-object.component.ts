import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  NgZone,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

@Component({
  selector: 'c-svg-object',
  templateUrl: './svg-object.component.html',
  styleUrls: ['./svg-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgObjectComponent implements AfterViewInit {
  @HostBinding('class') class = 'c-svg-object';
  @ViewChild('proton') proton!: ElementRef;
  @ViewChild('theLight') theLight!: ElementRef;
  @ViewChildren('circle', {read: ElementRef}) circle!: QueryList<ElementRef>;
  @ViewChildren('circle2', {read: ElementRef}) circle2!: QueryList<ElementRef>;
  @ViewChildren('circle3', {read: ElementRef}) circle3!: QueryList<ElementRef>;
  @ViewChildren('circle4', {read: ElementRef}) circle4!: QueryList<ElementRef>;
  constructor(private element: ElementRef, private render: Renderer2, private ngZone: NgZone) {
    gsap.registerPlugin(ScrollTrigger);
  }

  private initGsap(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);
    const circles2 = this.circle2.map((cir) => cir.nativeElement);
    const circles3 = this.circle3.map((cir) => cir.nativeElement);

    gsap.fromTo(
      circles,
      {
        strokeDasharray: 439,
        strokeDashoffset: 80 * 2,
        strokeLinecap: 'round',
      },
      {
        strokeDasharray: 439 / 2,
        strokeDashoffset: 439 * 2,
        strokeLinecap: 'round',
        repeat: -1,
        duration: 4,
        ease: 'back',
        stroke: 'cyan',
        opacity: 0.97,
        yoyo: true,
        yoyoEase: true,
        stagger: 0.125,
      }
    );

    const staggering = gsap.timeline({
      defaults: {
        transformOrigin: 'center center',
        repeat: -1,
        duration: 3.5,
        yoyo: true,
        stagger: 0.095,
        ease: 'elastic',
        yoyoEase: true,
      },
    });

    staggering
      .to(
        circles,
        {
          y: 6,
          x: 6,
        },
        0
      )
      .to(
        circles2,
        {
          y: 6,
          x: 6,
          opacity: 0.75,
        },
        0.125
      )
      .to(
        circles3,
        {
          y: 6,
          x: 6,
          opacity: 0.75,
        },
        0.165
      )
      .to(
        this.proton.nativeElement,
        {
          y: -20,
          duration: 4,
          ease: 'none',
        },
        0
      );
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.initGsap();
    });
  }
}
