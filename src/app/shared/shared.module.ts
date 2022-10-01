import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ImgComponent } from './components/img/img.component';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductsComponent,
    ProductComponent,
    ImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    ProductsComponent,
    ProductComponent,
    ImgComponent
  ]
})
export class SharedModule { }
