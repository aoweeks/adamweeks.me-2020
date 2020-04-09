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
  animate,
} from '@angular/animations';

// export const fader =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           left: 0,
//           width: '100%',
//           opacity: 0,
//           transform: 'scale(0) translateY(100%)'
//         }),
//       ], {optional: true}),
//       query(':enter', [
//         animate('600ms ease',
//           style({ opacity: 1, transform: 'scale(1) translateY(0)'})
//         )
//       ], {optional: true})
//     ])
//   ]);

  export const slideLeft =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave',
            style({ position: 'fixed', width:'100%' }),
            { optional: true }),
      group([
        query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.75s ease-in-out', style({ transform: 'translateX(0%)' }))
          ],
          { optional: true }
        ),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.75s ease-in-out', style({ transform: 'translateX(-100%)' }))
            // Could maybe use a CSS variable that's set to be slower or faster depending on screen width?
          ],
          { optional: true }),
      ])
    ])
  ]);
