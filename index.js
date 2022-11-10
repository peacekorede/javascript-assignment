let icons = document.getElementsByClassName('icons')
for(x = 0; x < icons.length; x++) {
  icons[x].style.display = "none"
}

let img = document.getElementsByClassName('img')
for (x = 0; x < img.length; x++) {
  img[x].style.display = 'none'
}
let imgBox = document.getElementById('img_holder')
imgBox.addEventListener('mouseenter', ()=>{
    for (x = 0; x < icons.length; x++) {
      icons[x].style.display = 'inline'
    }
     
})
imgBox.addEventListener('mouseleave', () => {
  for (x = 0; x < icons.length; x++) {
    icons[x].style.display = 'none'
  }
})

let icon1 = document.getElementById('icons_1')
let icon2 = document.getElementById('icons_2')
let slider = document.getElementById('slider')

let images = document.getElementsByClassName('img')

const imgaesSrc = []
 
for (x = 0; x < images.length; x++) {
  imgaesSrc.push(images[x].attributes.src.value)
  
}
let loopRight = loopImages()
let loopLeft = reverseImagesLoop()

icon1.addEventListener('click', () => {
  let val = loopLeft.next()
  if (val.done == true) {
    loopLeft = initReverseImagesLoop()
    console.log(d)
    val = loopLeft.next()
    slider.attributes.src.value = val.value
  }
  slider.attributes.src.value = val.value

})

icon2.addEventListener('click', ()=>{
    let val = loopRight.next()
    if (val.done == true) {
    loopRight = initLoopImages()
    val = loopRight.next()
slider.attributes.src.value = val.value
    }
slider.attributes.src.value = val.value

    })
 

    function initLoopImages() {
        return loopImages()
    }
     function initReverseImagesLoop() {
       return reverseImagesLoop()
     }


function* loopImages() {
  let num = imgaesSrc.length
  while (num > 0) {
    yield imgaesSrc[imgaesSrc.length - num]
    num -= 1
  }
}
function* reverseImagesLoop() {
  let num = imgaesSrc.length
let position = 1
  while (position <= num) {
    yield imgaesSrc[imgaesSrc.length - position]
    position += 1
  }
}