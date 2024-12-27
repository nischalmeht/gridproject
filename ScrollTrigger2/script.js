// gsap.to("#page2 img",{
//     width:"100%",
//     scrollTrigger:{
//         trigger:"page2",
//         scroller:"body",
//         start:"top 0",
//         end:"top -100%",
//         scrub:3,
//         pin:true
        
//     }
// })

gsap.to("#page2 h1",{
    transform:"transalteX(-125%)",
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        scrub:2,
        markers:true,
        start:"top 0",
        end:"top -100%",
        pin:true
    }
})