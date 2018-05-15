import { Component, HostListener, ElementRef }  from '@angular/core';
import { Router, NavigationEnd }                from '@angular/router';
import { Subscription }                         from 'rxjs/Subscription';  
import { fadeInOneSecond }                      from '../../animations';
import { trigger, transition, style, animate, state  }  from '@angular/animations';

@Component({
    selector: 'work-history',
    templateUrl: './work-history.component.html',
    styleUrls: ['./work-history.component.css'],
    animations: [
        fadeInOneSecond
    ]
})

export class WorkHistoryComponent { 

    private fragment:  string;
    private scrollSub: Subscription;

    constructor(private router: Router,
                public  el:     ElementRef) { }

    ngOnInit(): void {
        this.scrollSub = this.router.events.subscribe(s => {
            if(s instanceof NavigationEnd) {
                const tree = this.router.parseUrl(this.router.url);
                if(tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if(element) {
                        element.scrollIntoView();
                    }
                }
            }
        });
    }


    ngOnDestroy(): void {
        this.scrollSub.unsubscribe();
    }
}