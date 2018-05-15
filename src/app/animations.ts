import { trigger, transition, style, animate, state  }  from '@angular/animations';

export let fadeInOneSecond = trigger('fadeInOneSecond', [
                                state('void', style({opacity: 0})),
                                transition(':enter, :leave', [
                                    animate(1000)
                                ]),
                            ]);