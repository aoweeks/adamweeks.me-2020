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
  sequence,
  query,
  group,
  stagger,
  animate,
  animateChild,
} from '@angular/animations';
import { AbsoluteSourceSpan } from '@angular/compiler';

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

// export const slideLeft =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       query(':enter, :leave',
//             style({ position: 'fixed', width:'100%' }),
//             { optional: true }),
//       group([
//         query(':enter', [
//             style({ transform: 'translateX(100%)' }),
//             animate(
//               '0.75s ease-in-out',
//               style({ transform: 'translateX(0%)' })
//             )
//           ],
//           { optional: true }
//         ),
//         query(':leave', [
//             style({ 'transform': 'translateX(0%)' }),
//             animate(
//               '0.75s ease-in-out',
//               style({ color: 'var(--aw-accent)', transform: 'translateX(-100%)' })
//             )
//             // Could maybe use a CSS variable that's set to be slower or faster depending on screen width?
//           ],
//           { optional: true }),
//         // query('#aw-background', [
//         //     animate(
//         //       '0.75s ease-in-out',
//         //       style({ 'background-position': '-100vw' })
//         //     )

//           // ],
//           // {optional: true})
//       ]),
//     ])
//   ]);

// export const fadePageInOut =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%'
//         }),
//       ], {optional: true}),
//       query(':enter', [
//           style({ left: '-100%'})
//       ], {optional: true}),
//       group([
//         query(':leave', [
//           animate('600ms ease',
//             style(
//               {left: '100%'}
//             )
//           )
//         ], {optional: true}),
//         query(':enter', [
//           animate('600ms ease',
//             style(
//               {left: '0%'}
//             )
//           )
//         ], {optional: true})
//       ])
//     ])
//   ]);
const clipPathLeave =
  query(':leave', [
    style(
      {'clip-path': 'inset(0px 0px 0px 0px)'}
    ),
    animate('600ms ease',
      style(
        {'clip-path': 'inset(0px 100% 0px 0px)'}
      )
    )
  ], {optional: true});

const clipPathEnter =
  query(':enter', [
    style(
      {
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        width: '100%',
        'clip-path': 'inset(0px 100% 0px 0px)'
      }
    ),
    animate('600ms 600ms ease',
      style(
        {
          'clip-path': 'inset(0px 0px 0px 0px)'
        }
      )
    )
  ], {optional: true});

//       ])
//     ])
//   ]);
const fadeLeave =
  query(':leave', [

    animate('125ms ease-out',
      style(
        {opacity: 0}
      )
    )
  ], {optional: true});

const fadeEnter =
  query(':enter', [
    style(
      {
        position: 'fixed',
        top: 70,
        width: '100%',
        opacity: 0
      }
    ),
    animate('125ms 125ms ease-in',
      style(
        {
          opacity: 1
        }
      )
    )
  ], {optional: true});

const slideLeave =
  query(':leave', [
    animate('1250ms ease-out',
      style({
          transform: 'translateX(100%)'
      })
    )], {optional: true});

const slideEnter =
  query(':enter', [
    style(
      {
        position: 'fixed',
        top: 'var(--header-height)',
        width: '100%',
        left: '-100%'
      }
    ),
    animate('1250ms ease-out',
      style(
        {
          left: 0
        }
      )
    )
  ], {optional: true});

// read this to revamp transitions later:
// https://medium.com/@perjansson/angular-dynamic-page-transitions-for-better-ux-8435077c26cc

export const fadePageInOut =
  trigger('routeAnimations', [
    transition('* <=> *', [
      group([
        // clipPathLeave,
        // clipPathEnter
        fadeLeave,
        fadeEnter,
        // slideLeave,
        // slideEnter

      ]),
      query(  '@pageLoadAnimations',
              animateChild(),
              {optional: true}
      )
    ]),
  ]);

export const fadeFromRightOrBottom =
  trigger('pageLoadAnimations', [
    transition(':enter', [
      query('.load-fade-from-right', [
        style({
          opacity: 0,
          transform: 'translateX(100px)'
        }),
        stagger(50, [
          animate('200ms ease-out',
            style({
              opacity: 1, transform: 'none'
            })
          )
        ])
      ], {optional: true}),
      query('.load-fade-from-bottom', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        stagger(50, [
          animate('200ms ease-out',
            style({
              opacity: 1, transform: 'none'
            })
          )
        ])
      ], {optional: true}),
    ])
  ]);



// export const fadeFromToRight =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
      // query(':enter .load-fade-from-right', [
      //   style({
      //     opacity: 0,
      //     transform: 'translateX(100px)'
      //   }),
      //   stagger(50, [
      //     animate('200ms ease-out',
      //       style({
      //         opacity: 1, transform: 'none'
      //       })
      //     )
      //   ])
      // ], {optional: true}),
//       query(':leave .load-fade-from-right', [
//         stagger(50, [
//           animate('200ms ease-out',
//             style({
//               opacity: 0,
//               transform: 'translateX(100px)'
//             })
//           )
//         ])
//       ], {optional: true})
//     ])
//   ]);

// export const fadeFromToBottom =
//   trigger('routeAnimations', [
//     transition('* <=> *', [
//       query(':enter .load-fade-from-bottom', [
//         style({
//           opacity: 0,
//           transform: 'translateY(100px)'
//         }),
//         stagger(50, [
//           animate('200ms ease-out',
//             style({
//               opacity: 1, transform: 'none'
//             })
//           )
//         ])
//       ], {optional: true}),
//       query(':leave .load-fade-from-bottom', [
//         stagger(50, [
//           animate('200ms ease-out',
//             style({
//               opacity: 0, transform: 'translateY(100px)'
//             })
//           )
//         ])
//       ], {optional: true})
//     ])
//   ]);
