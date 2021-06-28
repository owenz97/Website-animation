const revealMask = (target, fDashOffset, duration) => {
  var tl = new gsap.timeline();
  tl.to(target, {
    strokeDashoffset: fDashOffset,
    ease: "Linear.easeNone",
    duration: duration,
  });
  return tl;
};
const type = (target, duration) => {
  var tl = new gsap.timeline();
  tl.fromTo(
    target,
    {
      attr: {
        d: "M0,110 h0",
      },
    },
    {
      attr: {
        d: "M0,110 h1100",
      },
      duration: duration,
    }
  );
  return tl;
};
const typeTimeline = () => {
  var tl = new gsap.timeline();
  tl.add("one");
  tl.add(type("#line-1", 30), "one");
  tl.add("two");
  tl.add(type("#line-2", 30), "two-=27");
  return tl;
};

var tl = new gsap.timeline();
tl.add("one");
tl.set(
  "#edit-icon",
  {
    fill: "#ffffff",
    stroke: "#ffffff",
    strokeWidth: "0.3",
  },
  "one"
);
tl.set(
  "#edit-icon-bg",
  {
    fill: "red",
  },
  "one"
);
tl.add(revealMask("#mark-mask", 600, 0.5), "one");
tl.add("two");
tl.add(revealMask("#arrow-line-mask", 0, 0.5), "two");
tl.add("three");
tl.add(revealMask("#arrow-head-mask", 0, 0.6), "three");
tl.add("four");
tl.add(revealMask("#mask-path-d-1", 60, 0.5), "four");
tl.add("five");
tl.add(revealMask("#mask-path-d-2", 100, 0.5), "five");
tl.add("six");
tl.add(revealMask("#mask-path-d-3", 120, 0.5), "six");
tl.add("seven");
tl.add(revealMask("#mask-path-d-4", 0, 0.5), "seven");
tl.add("eight");
tl.add(revealMask("#mask-path-d-5", 0, 0.5), "eight");
tl.add("nine");
tl.add(revealMask("#mask-path-d-6", 60, 0.5), "nine");
tl.add("ten");
tl.add(revealMask("#mask-path-d-7", 0, 0.5), "ten");
tl.add("eleven");
tl.add(revealMask("#mask-path-d-8", 200, 0.7), "eleven");
tl.add("twelve");
tl.add(revealMask("#mask-path-d-9", 0, 0.5), "twelve");
tl.add("thirteen");
tl.add(revealMask("#mask-path-d-10", 60, 0.5), "thirteen");
tl.add("fourteen");
tl.add(revealMask("#mask-path-d-11", 60, 0.3), "fourteen");
tl.add("fifteen");
tl.add(revealMask("#mask-path-d-12", 60, 0.3), "fifteen");
tl.add("sixteen");
tl.add(revealMask("#mask-path-d-13", 60, 0.5), "sixteen");
tl.add("seventeen");
tl.add(revealMask("#mask-path-d-14", 100, 0.5), "seventeen");
tl.add("eighteen");
tl.add(revealMask("#mask-path-d-15", 0, 0.5), "eighteen");
tl.add("nineteen");
tl.add(revealMask("#mask-path-d-16", 240, 0.5), "nineteen");
tl.add("twenty");
tl.add(revealMask("#mask-path-d-17", 60, 0.5), "twenty");
tl.add("twentyOne");
tl.add(revealMask("#mask-path-d-18", 120, 0.5), "twentyOne");
tl.add("twentyTwo");
tl.add(revealMask("#mask-path-d-19", 0, 0.5), "twentyTwo");
tl.add("twentyThree");
tl.add(revealMask("#mask-path-d-20", 60, 0.5), "twentyThree");
tl.add("twentyFour");
tl.add(revealMask("#mask-path-d-21", 0, 0.5), "twentyFour");
tl.add("twentyFive");
tl.add(revealMask("#mask-path-d-22", 60, 0.5), "twentyFive");
tl.add("twentySix");
tl.add(revealMask("#mask-path-d-23", 0, 0.5), "twentySix");
tl.add("twentySeven");
tl.add(revealMask("#mask-path-d-24", 200, 0.5), "twentySeven");
tl.add("twentyEight");
tl.add(revealMask("#mask-path-d-25", 100, 0.5), "twentyEight");
tl.add("twentyNine");
tl.add(revealMask("#mask-path-d-26", 0, 0.5), "twentyNine");
tl.add("thirty");
tl.add(revealMask("#mask-path-d-27", 60, 0.5), "thirty");
tl.add("thirtyOne");
tl.add(revealMask("#mask-path-d-28", 0, 0.5), "thirtyOne");
tl.add("thirtyTwo");
tl.add(revealMask("#mask-path-d-29", 60, 0.5), "thirtyTwo");
tl.add("thirtyThree");
tl.add(revealMask("#mask-path-d-30", 0, 0.5), "thirtyThree");
tl.add("thirtyFour");
tl.add(revealMask("#mask-path-d-31", 0, 0.5), "thirtyFour");
tl.add("thirtyFive");
tl.add(revealMask("#mask-path-d-32", 140, 0.5), "thirtyFive");
tl.add("thirtySix");
tl.add(revealMask("#mask-path-d-33", 0, 0.5), "thirtySix");
tl.add("thirtySeven");
tl.add(revealMask("#mask-path-d-34", 0, 0.5), "thirtySeven");
tl.add("thirtyEight");
tl.add(revealMask("#mask-path-d-35", 0, 0.5), "thirtyEight");
tl.add("thirtyNine");
tl.add(revealMask("#mask-path-d-36", 0, 0.5), "thirtyNine");
tl.add("fourty");
tl.add(revealMask("#mask-path-d-37", 140, 0.5), "fourty");
tl.add("fourtyOne");
tl.add(revealMask("#mask-path-d-38", 0, 1), "fourtyOne");
tl.add("fourtyTwo");
tl.add(revealMask("#mask-path-d-39", 200, 0.5), "fourtyTwo");
tl.add("fourtyThree");
tl.add(revealMask("#mask-path-d-40", 0, 1), "fourtyThree");
tl.add("fourtyFour");
tl.add(revealMask("#mask-path-d-41", 200, 0.7), "fourtyFour");
tl.add("fourtyFive");
tl.add(revealMask("#graph-mask", 1000, 3), "fourtyFive+=1");
tl.add("fourtySix");
tl.set(
  "#edit-icon",
  {
    fill: "#070707",
    stroke: "#070707",
    strokeWidth: "0.3",
  },
  "fourtySix"
);
tl.set(
  "#edit-icon-bg",
  {
    fill: "#ffffff",
  },
  "fourtySix"
);
tl.set(
  "#type-icon-bg",
  {
    fill: "#cfcfcf",
  },
  "fourtySix"
);
tl.add("fourtySeven");
tl.add(typeTimeline(), "fourtySeven");
tl.pause();

tl.restart();
setInterval(() => {
  tl.restart();
}, 35000);
