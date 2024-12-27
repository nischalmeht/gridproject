// gsap.to("#box",{
//     x:800,
//     duration:5,
//     backgroundColor:"blue",
//     rotate:360,
//     delay:3
// })


// gsap.from("#box",{
//     x:800,
//     duration:5,
//     backgroundColor:"blue",
//     rotate:360,
//     delay:3
// })

// let tl = gsap.timeline();
// tl.to("#box1",{
//    x:1000,
//    rotate:360,
//    scale:0.5,
//    duration:2,
// //    delay:1
// })

// tl.to("#box2",{
//     x:1000,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     // delay:3
//  })
//  tl.to("#box3",{
//     x:1000,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     // delay:5
//  })

let tl= gsap.timeline()
tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.5
})

tl.from("#main h1",{
   x:-500,
   opacity:0,
   duration:0.8,
   stagger:0.4,

})

tl.from("#main img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
 
 })