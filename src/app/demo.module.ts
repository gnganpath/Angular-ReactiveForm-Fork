import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { ReactiveFormsModule }  from '@angular/forms';

import { AppModule }            from './app.module';
import { DemoComponent }        from './demo.component';
import { HeroDetailComponent1 } from './hero-detail/hero-detail-1.component';
import { HeroDetailComponent2 } from './hero-detail/hero-detail-2.component';
import { HeroDetailComponent3 } from './hero-detail/hero-detail-3.component';
import { HeroDetailComponent4 } from './hero-detail/hero-detail-4.component';
import { HeroDetailComponent5 } from './hero-detail/hero-detail-5.component';
import { HeroDetailComponent6 } from './hero-detail/hero-detail-6.component';
import { HeroDetailComponent7 } from './hero-detail/hero-detail-7.component';
import { HeroDetailComponent8 } from './hero-detail/hero-detail-8.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppModule,
  ],
  declarations: [ DemoComponent,
  HeroDetailComponent1,
  HeroDetailComponent2,
  HeroDetailComponent3,
  HeroDetailComponent4,
  HeroDetailComponent5,
  HeroDetailComponent6,
  HeroDetailComponent7,
  HeroDetailComponent8],
  bootstrap:    [ DemoComponent ]
})
export class DemoModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/