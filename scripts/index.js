document.addEventListener('DOMContentLoaded', () => {

  const nav = document.getElementById('navbar__list');
  const sections = document.querySelectorAll("section")
  let navItems = ["Main","About","Projects"];

  function createNavs() {
    for (let i = 0; i < navItems.length; i++) {
      let itemName = navItems[i];
      let li = document.createElement('li');
      let anchor = document.createElement('a');
      li.classList.add("nav-link" + (i + 1));
      anchor.innerHTML = itemName;
      anchor.href = "#section" + (i + 1);
      anchor.classList.add("anchor" + (i + 1));
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        sections[i].scrollIntoView({ behavior: "smooth" });
      });
      li.appendChild(anchor);
      nav.appendChild(li);

    }
  }
  createNavs()

  const one = document.getElementById('section1');
  const two = document.getElementById('section2');
  const three = document.getElementById('section3');
  const navOne = document.querySelector('.nav-link1');
  const navTwo = document.querySelector('.nav-link2');
  const navThree = document.querySelector('.nav-link3');

  window.addEventListener('scroll', function () {

    if (one.getBoundingClientRect().top < window.innerHeight - 500) {
      navTwo.classList.remove("active");
      navThree.classList.remove("active");
      navOne.classList.add("active");

      two.classList.remove("your-active-class");
      three.classList.remove("your-active-class");
      one.classList.add("your-active-class");

    }
    if (two.getBoundingClientRect().top < window.innerHeight - 500) {
      navOne.classList.remove("active");
      navThree.classList.remove("active");
      navTwo.classList.add("active");

      one.classList.remove("your-active-class");
      three.classList.remove("your-active-class");
      two.classList.add("your-active-class");
    }
    if (three.getBoundingClientRect().top < window.innerHeight - 500) {
      navOne.classList.remove("active");
      navTwo.classList.remove("active");
      navThree.classList.add("active");

      two.classList.remove("your-active-class");
      one.classList.remove("your-active-class");
      three.classList.add("your-active-class");

    }

  });

  

})
