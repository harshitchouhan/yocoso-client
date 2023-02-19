import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeBannerComponent } from 'src/app/components/home-banner/home-banner.component';
import { YocosoSpecialComponent } from 'src/app/components/yocoso-special/yocoso-special.component';
import { WhyYocosoComponent } from 'src/app/components/why-yocoso/why-yocoso.component';
import { GreatSliderComponent } from 'src/app/components/great-slider/great-slider.component';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HomeBannerComponent,
    YocosoSpecialComponent,
    WhyYocosoComponent,
    GreatSliderComponent,
    GalleryComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
