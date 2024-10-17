const leaveAnimation = (container, bxup, bxdown, titleSection) => {
  let boxesUp = [];
  let boxesDown = [];

  bxup.forEach((element) => {
    return boxesUp.push(container.querySelectorAll(element));
  });
  bxdown.forEach((element) => {
    return boxesDown.push(container.querySelectorAll(element));
  });

  const title = container.querySelector(`${titleSection} p`);
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
      duration: .8,
    },
  });

  tl.to(
    [boxesUp, boxesDown],
    {
      height: 0,
      autoAlpha: 0,
      fontSize: 0,
    },
    1
  )
    .to(
      title,
      {
        color: "#fff8e8",
        opacity: 0,
        duration: 0.5,
      },
      1
    )
    .to(
      container,
      {
        backgroundColor: "#1E1E1E",
        duration: 0.5,
      },
      1
    )
    .eventCallback("onComplete", function remove() {
      container.remove();
    });

  return tl;
};

const enterAnimation = (container, pageBox, expandtToHeight) => {
  const boxExpand = [...container.querySelectorAll(pageBox)];
  const infoContainer = container.querySelector(".info");
  const title = container.querySelector(`${pageBox} p`);
  let svg = container.querySelectorAll("svg path");
  console.log(svg);
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
      duration: 0.7,
    },
  });

  tl.to(
    boxExpand,
    {
      height: expandtToHeight,
    },
    1
  )
    .from(
      title,
      {
        opacity: 0,
      },
      1
    )
    .to(
      svg,
      {
        fill: "#fff8e8",
      },
      1
    )
    .from(infoContainer, {
      autoAlpha: 0,
      scale: 0,
    });

  return tl;
};

barba.init({
  transitions: [
    {
      name: "education-transition",
      from: {
        namespace: ["homepage"],
      },
      to: {
        namespace: ["education"],
      },
      leave({ current }) {
        // create your stunning leave animation here
        return leaveAnimation(current.container,["#contact", "#portfolio"],["#experience"],"#education");
      },
      enter({ next }) {
        // create your amazing enter animation here
        return enterAnimation(next.container, "#education", 230);
      },
    },
    {
      name: "contact-transition",
      from: {
        namespace: ["homepage"],
      },
      to: {
        namespace: ["contact"],
      },
      leave({ current }) {
        // create your stunning leave animation here
        return leaveAnimation(current.container,["#portfolio"],["#experience", "#education"],"#contact");
      },
      enter({ next }) {
        // create your amazing enter animation here
        return enterAnimation(next.container, "#contact", 400);
      },
    },
    {
      name: "experience-transition",
      from: {
        namespace: ["homepage"],
      },
      to: {
        namespace: ["experience"],
      },
      leave({ current }) {
        // create your stunning leave animation here
        return leaveAnimation(current.container,["#contact", "#portfolio"],["#education"],"#experience");
      },
      enter({ next }) {
        // create your amazing enter animation here
        return enterAnimation(next.container, "#experience", 420);
      },
    },
    {
      name: "experience-transition",
      from: {
        namespace: ["homepage"],
      },
      to: {
        namespace: ["portfolio"],
      },
      leave({ current }) {
        // create your stunning leave animation here
        return leaveAnimation(current.container,["#contact"],["#education", "#experience"],"#portfolio");
      },
      enter({ next }) {
        // create your amazing enter animation here
        return enterAnimation(next.container, "#portfolio", 450);
      },
    },
  ],
});
