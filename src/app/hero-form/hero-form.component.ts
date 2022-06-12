import { Component } from '@angular/core';

import { HeRo } from '../hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new HeRo(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }
}
