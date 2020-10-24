const left= document.getElementById('left')
const right= document.getElementById('right')
const title= document.getElementById('title')
const imgDesktop= document.getElementById('img-hero-desktop')
const imgMobile = document.getElementById('img-hero-mobile')
const p= document.getElementById('paragraph')
let slide_index = 0

let elements = [
        {
            title:"Discover innovative ways to decorate",
            src:"/assets/img/desktop-image-hero-1.jpg",
            p: "We provide unmatched quality, comfort, and style for propertyowners acrossthe country.Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            srcmobile:"/assets/img/mobile-image-hero-1.jpg"
        },
        {
            title:"We are available all across the globe",
            src:"/assets/img/desktop-image-hero-2.jpg",
            p:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            srcmobile:"/assets/img/mobile-image-hero-2.jpg"

        },
        {
            title:"Manufactured with the best materials",
            src:"/assets/img/desktop-image-hero-3.jpg",
            p:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
            srcmobile:"/assets/img/mobile-image-hero-3.jpg"

        }
]
const Action = (i) => {
    
    if(i >= elements.length) slide_index=0
    if(i < 0 ) {slide_index= elements.length - 1 }
    title.textContent=`${elements[slide_index].title}`
    imgDesktop.src=`${elements[slide_index].src}`
    imgMobile.srcset= `${elements[slide_index].srcmobile}`
    p.textContent=`${elements[slide_index].p}`
    imgDesktop.classList.toggle('animation')
}


left.addEventListener('click',()=>{
    Action(--slide_index)
});
right.addEventListener('click',()=>{
    Action(++slide_index)
});