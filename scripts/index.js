document.addEventListener('DOMContentLoaded', () => {

  console.log('Hello World, working on some shapes')

  const shape = document.querySelector('.shape')
  let shapex = 0
  // let shapey = 0


  function whichmove(){
    const ShapeAnimation = ['Right','Right','Right','Right', 'Left', 'Up', 'Down']
    const which = ShapeAnimation[Math.floor(Math.random() * ShapeAnimation.length)]
    // console.log('a at ', shapex)


    switch (which){
      case 'Right':
        shapex ++
        shape.style.left = shapex + 'px'
        break
      // case 'Left':
      //   shapex --
      //   shape.style.left = shapex + 'px'
      //   break
      // case 'Up':
      //   shapey ++
      //   shape.style.top = shapey + 'px'
      //   break
      // case 'Down':
      //   shapey --
      //   shape.style.top = shapey + 'px'
      //   break

    }
  }

  setInterval(whichmove, 150)

  const shape2 = document.querySelector('.shape2')
  let shape2x = 0
  // let shape2y = 0


  function whichmove2(){
    const ShapeAnimation = ['Right', 'Left', 'Left','Left', 'Left', 'Up', 'Down']
    const which = ShapeAnimation[Math.floor(Math.random() * ShapeAnimation.length)]
    // console.log('b at ', shape2x)


    switch (which){
      // case 'Right':
      //   shape2x ++
      //   shape2.style.left = shape2x + 'px'
      //   break
      case 'Left':
        shape2x --
        shape2.style.left = shape2x + 'px'
        break
      // case 'Up':
      //   shape2y ++
      //   shape2.style.top = shape2y + 'px'
      //   break
      // case 'Down':
      //   shape2y --
      //   shape2.style.top = shape2y + 'px'
      //   break

    }
  }

  setInterval(whichmove2, 150)

})
