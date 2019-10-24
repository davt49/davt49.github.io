document.addEventListener('DOMContentLoaded', () => {

  console.log('Hello World, working on some shapes')

  const shape = document.querySelector('.shape')
  let shapex = 0
  function move(){
    shapex ++
    shape.style.left = shapex + 'px'
  }
  setInterval(move, 60)

  const shape2 = document.querySelector('.shape2')
  let shape2x = 0
  function move2(){
    shape2x --
    shape2.style.left = shape2x + 'px'
  }
  setInterval(move2, 60)

  const shape3 = document.querySelector('.shape3')
  let shape3x = 0
  function move3(){
    shape3x ++
    shape3.style.left = shape3x + 'px'
  }
  setInterval(move3, 60)

  const shape4 = document.querySelector('.shape4')
  let shape4x = 0
  function move4(){
    shape4x --
    shape4.style.left = shape4x + 'px'
  }
  setInterval(move4, 60)

  const shape5 = document.querySelector('.shape5')
  let shape5y = 0
  function move5(){
    shape5y ++
    shape5.style.top = shape5y + 'px'
  }
  setInterval(move5, 60)

  const shape6 = document.querySelector('.shape6')
  let shape6y = 0
  function move6(){
    shape6y --
    shape6.style.top = shape6y + 'px'
  }
  setInterval(move6, 60)

})
