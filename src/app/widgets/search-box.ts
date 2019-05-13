import {
    Component,
    Input,
    Output,
    EventEmitter,
    Inject,
    forwardRef,
    ViewChild,
    AfterViewInit,
    ElementRef,
} from '@angular/core';

import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';

@Component({
    selector: 'app-search-box',
    template: `
    <form
          novalidate
          (submit)="handleSubmit($event)"
        >
    <mat-form-field>
        <input
            matInput
            autocapitalize="off"
            autocorrect="off"
            placeholder="{{placeholder}}"
            role="textbox"
            spellcheck="false"
            type="text"
            [value]="state.query"
            (input)="handleChange($event.target.value)"
            (focus)="focus.emit($event)"
            (blur)="blur.emit($event)"
            #searchBox
        >
        <button
            type="reset"
            title="{{resetTitle}}"
            (click)="handleReset($event)"
            *ngIf="state.query && !(state.query && !state.query.trim())"
            matSuffix mat-icon-button
            mat-button>
            <mat-icon>close</mat-icon>
        </button>
    </mat-form-field>
    </form>

    `,
})
export class AppSearchBoxComponent extends BaseWidget implements AfterViewInit {
    @ViewChild('searchBox') searchBox: ElementRef;
    @Input() public placeholder = 'Search';
    @Input() public submitTitle = 'Submit';
    @Input() public resetTitle = 'Reset';
    @Input() public searchAsYouType = true;
    @Input() public autofocus = false;

    // Output events
    // form
    @Output() submit = new EventEmitter();
    @Output() reset = new EventEmitter();

    // input
    @Output() change = new EventEmitter();
    @Output() focus = new EventEmitter();
    @Output() blur = new EventEmitter();

    public state = {
        query: '',
        refine: (args) => {
            // noop
        },
    };

    constructor(
        @Inject(forwardRef(() => NgAisInstantSearch))
        public instantSearchParent: any
    ) {
        super('SearchBox');
        this.createWidget(connectSearchBox);
    }

    public ngAfterViewInit() {
        if (this.autofocus) {
            this.searchBox.nativeElement.focus();
        }
    }

    public handleChange(query: string) {
        this.change.emit(query);
        if (this.searchAsYouType) {
            this.state.refine(query);
        }
    }

    public handleSubmit(event: Event) {
        // send submit event to parent component
        this.submit.emit(event);

        event.preventDefault();

        if (!this.searchAsYouType) {
            this.state.refine(this.searchBox.nativeElement.value);
        }
    }

    public handleReset(event: MouseEvent) {
        // send reset event to parent component
        this.reset.emit(event);

        // reset search
        this.state.refine('');
    }
}
