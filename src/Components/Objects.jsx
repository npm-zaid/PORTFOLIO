import React from "react";

const Objects = ()=>{
    
const {
    assign
  } = Object
  const lets = '!@#%?&*()'.split``
  
  function letter() {
    let c = Math.random() * 155
    const el = assign(
      document.createElement`div`, {
        innerHTML: lets[~~(Math.random() * lets.length)],
        style: `
        position: absolute;
        font-family: Helvetica;
        color: rgb(${c}, ${c}, ${c})
      `
      })
    document.body.append(el)
    el.x = innerWidth/ 2
    el.y = innerHeight / 2
    el.s = Math.random() * 10 + .3
    el.vy = Math.random() * 3 + .1
    el.r = Math.random() * 360
    el.ri = Math.random() * 10 - 5
    el.vx = 0
    if (Math.abs(el.ri) < 1) el.ri = 1
    const o = {
      el,
      run() {
        el.r += el.ri
        assign(el.style, {
          rotate: el.r + 'deg',
          scale: el.s,
          translate: `${el.x}px ${el.y}px`
        })
  
        for (let i = 0; i < NUM; i++) {
          const l = letters[i]
          if (l[i] != o) {
            let dx = el.x - l.el.x
            let dy = el.y - l.el.y
            const d = Math.sqrt(dx ** 2 + dy ** 2)
  
            if (d < 100 * el.s / 4) {
              let ang = Math.atan2(dy, dx)
              el.vx += .02 * Math.cos(ang);
              el.vy += .02 * Math.sin(ang);
              l.el.vx += .02 * Math.cos(-ang);
              l.el.vy += .02 * Math.sin(-ang);
            }
          }
        }
        // el.vy += 1;
        el.vx *= .98
        el.vy *= .98
        //if (el.vx > 0) el.vx *= .9
  
        el.y += el.vy
        el.x += el.vx
  
        if (el.x > innerWidth + 200) {
          el.x = -100
        }
        if (el.y < -200) {
          el.y = innerHeight + 100
        }
        if (el.y > innerHeight + 100) {
          el.y = -100
        }
      }
    }
    return o
  }
  const NUM = 100
  let letters = []
  for (let i = 0; i < NUM; i++) {
    letters[i] = letter()
  }
  
  function loop() {
    for (let i = 0; i < NUM; i++) {
      letters[i].run()
    }
    requestAnimationFrame(loop)
  }
  loop() 
    return(
        <div className="h-screen w-full bg-zinc-900/60 flex item-center justify-center">
            <h1 className="text-[5vw] text-white">Objects</h1>
        </div>
    )
}

export default Objects;