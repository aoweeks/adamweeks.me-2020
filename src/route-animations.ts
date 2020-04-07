// import {trigger, animate, style, group, query, transition} from '@angular/animations';


// // Page transition: old page exits right, new page enters from the left
// const slideRight = [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%' })
//       , { optional: true }),
//     group([
//       query(':enter', [
//         style({ transform: 'translateX(-100%)' }),
//         animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(100%)' }))
//       ], { optional: true }),
//       query('body', [
//         style({ background: 'red' }),
//         animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', style({ background: 'green' }))
//       ], { optional: true}),
//     ])
//   ];

// // Page transition: old page exits left, new page enters from the right
// const slideLeft = [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%' })
//       , { optional: true }),
//     group([
//       query(':enter', [
//         style({ transform: 'translateX(100%)' }),
//         animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)' }))
//       ], { optional: true }),
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(-100%)' }))
//       ], { optional: true }),
//     ])
//   ];

// export const routeTransition =
//   trigger('routeTransition', [
//   transition('* => art', slideRight),
//   transition('art => *', slideLeft),
//   transition('* <=> *', slideLeft)
// ]);

import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';
