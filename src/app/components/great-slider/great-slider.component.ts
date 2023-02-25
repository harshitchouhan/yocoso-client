import { Component, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-great-slider',
  templateUrl: './great-slider.component.html',
  styleUrls: ['./great-slider.component.scss'],
})
export class GreatSliderComponent {
  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  onSwiper(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
