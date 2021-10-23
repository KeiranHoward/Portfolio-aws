import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from "gsap";

barba.use(barbaCss);

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});