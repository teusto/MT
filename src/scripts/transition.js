const leaveAnimation = (container) => {
    const boxesUp = [...container.querySelectorAll('#contact'), ...container.querySelectorAll('#portfolio')];
    const boxesDown = [...container.querySelectorAll('#experience')];
    const title = container.querySelector('#education p');
    const tl = gsap.timeline({
        defaults:{
            ease: 'expo.inOut',
            duration: 2
        }
    })

    tl.to([boxesUp, boxesDown], {
        height: 0,
        autoAlpha: .2,
        fontSize: 0
    }, 1).to(title, {
        color: "#fff8e8",
        opacity: 0,
        duration: .8
    }, 1).to(container, {
        backgroundColor: "#1E1E1E",
        duration: .8
    }, 1).eventCallback("onComplete", function remove(){
        container.remove()
    })
    
    return tl;
}

const enterAnimation = (container) => {
    const boxExpand = [...container.querySelectorAll('#education')];
    const infoContainer = container.querySelector('.info');
    const title = container.querySelector('#education p');
    let svg = container.querySelectorAll('svg path');
    console.log(svg)
    const tl = gsap.timeline({
        defaults:{
            ease: 'expo.inOut',
            duration: .7
        }
    })

    tl
    .to(boxExpand, {
        height: 380,
    },1)
    .from(title,{
        opacity: 0,
    },1)
    .to(svg, {
        fill: "#fff8e8",
    }, 1)
    .from(infoContainer, {
        autoAlpha: 0,
        scale: 0,
    })

    return tl;
}

barba.init({
    transitions: [{
      name: 'education-transition',
      from: {
        namespace:["homepage"]
      },
      to: {
        namespace: ["education"]
      },
      leave({current}) {
        // create your stunning leave animation here
        return leaveAnimation(current.container);
      },
      enter({next}) {
        // create your amazing enter animation here
        return enterAnimation(next.container);
      }
    }]
});