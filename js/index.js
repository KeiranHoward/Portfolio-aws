import {
  gsap
} from "gsap";

const load = gsap.timeline({
  paused: 'true'
});
load.from(".header, .decor", {
  duration: 1.5,
  y: "150%",
  x: "-50%",
  opacity: 0,
  stagger: {
    amount: .4
  }
}, "-=.5");
load.from(".content h1, p", {
  duration: 1.8,
  delay: 1,
  y: 200,
  skewY: 10,
  stagger: {
    amount: .4
  },
  opacity: 0,
  ease: "power4.out"

}, "-=1.5");