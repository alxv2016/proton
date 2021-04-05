import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
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
})
export class SvgObjectComponent implements AfterViewInit {
  @HostBinding('class') class = 'c-svg-object';
  @ViewChild('proton') proton!: ElementRef;
  @ViewChild('theLight') theLight!: ElementRef;
  @ViewChildren('circle', {read: ElementRef}) circle!: QueryList<ElementRef>;
  @ViewChildren('circle2', {read: ElementRef}) circle2!: QueryList<ElementRef>;
  @ViewChildren('circle3', {read: ElementRef}) circle3!: QueryList<ElementRef>;
  @ViewChildren('circle4', {read: ElementRef}) circle4!: QueryList<ElementRef>;
  constructor(private element: ElementRef, private render: Renderer2) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // randomize(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  ngAfterViewInit(): void {
    const circles = this.circle.map((cir) => cir.nativeElement);
    const circles2 = this.circle2.map((cir) => cir.nativeElement);
    const circles3 = this.circle3.map((cir) => cir.nativeElement);
    const colors = {
      primary: '#FDCE56',
      secondary: '#373596',
      accent1: '#1AFFD6',
      accent2: '#FF429D',
    };

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
        duration: 2.125,
        ease: 'back',
        stroke: 'cyan',
        yoyo: true,
        yoyoEase: true,
        stagger: 0.025,
      }
    );

    const staggering = gsap.timeline({
      defaults: {
        ease: 'elastic',
        transformOrigin: 'center center',
        repeat: -1,
        duration: 1.75,
        yoyo: true,
        yoyoEase: true,
      },
    });

    staggering
      .to(this.element.nativeElement, {
        '--progress-start': '100%',
        ease: 'power2.inOut',
      })
      .fromTo(
        circles,
        {
          y: -6,
          x: -6,
          rotate: -2,
        },
        {
          y: 6,
          x: 6,
          rotate: 2,
          stagger: 0.125,
        },
        0
      )
      .fromTo(
        circles2,
        {
          y: -6,
          x: -6,
          rotate: -2,
          fill: '#0EFFF1',
        },
        {
          y: 6,
          x: 6,
          rotate: 2,
          stagger: 0.135,
          fill: '#0EFFF1',
        },
        0
      )
      .fromTo(
        circles3,
        {
          y: -6,
          x: -6,
          rotate: -2,
          fill: '#FF164E',
        },
        {
          y: 6,
          x: 6,
          rotate: 2,
          stagger: 0.145,
          fill: '#FF164E',
        },
        0
      )
      .to(
        this.proton.nativeElement,
        {
          y: 20,
          duration: 2,
          ease: 'none',
        },
        0
      );
  }
}
