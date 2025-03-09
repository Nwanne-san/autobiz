import gsap from "gsap"

export const fadeInUp = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power3.out",
    },
  )
}

export const fadeInLeft = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power3.out",
    },
  )
}

export const fadeInRight = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power3.out",
    },
  )
}

export const staggerChildren = (
  parent: Element,
  childSelector: string,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
) => {
  const children = gsap.utils.toArray(parent.querySelectorAll(childSelector))

  return gsap.fromTo(children, fromVars, {
    ...toVars,
    stagger: 0.1,
  })
}

