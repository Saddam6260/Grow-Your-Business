const reviews = [
  {
    id: 1,
    img: "./images/person-1.png",
    name: "Jaquon Hart",
    job: "Digital Marketing Executive",
  },
  {
    id: 2,
    img: "./images/shakib-img.jpg",
    name: "Shakib Al hasan",
    job: "cricketer all rounder",
  },
  {
    id: 3,
    img: "./images/liton-img.jpg",
    name: "Liton Kumar Das",
    job: "wicket kipper batsman",
  },
  {
    id: 4,
    img: "./images/taskin-img.jpg",
    name: "Taskin Ahammed",
    job: "very good fast bowler",
  },
  {
    id: 5,
    img: "./images/mashrafe-img.jpg",
    name: "Mashrafe Bin Mortoza",
    job: "captain in bangladesh cricket",
  },
];

// Change review cards

const img = document.getElementById("person-img");
const name = document.getElementById("person-name");
const job = document.getElementById("person-job");
const leftShifts = document.querySelectorAll(".left-shift");
const rightShifts = document.querySelectorAll(".right-shift");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
    let item = reviews[person];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    console.log(item);
  }

for(i of rightShifts) {
    i.addEventListener("click", function () {
        currentItem += 1;
      
        if (currentItem > reviews.length - 1) {
          currentItem = 0;
        }
        showPerson(currentItem);
      });
}

for(i of leftShifts) {
    i.addEventListener("click", function () {
        currentItem -= 1;
      
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
      });
}

/*** List item toggle ***/
const navtoggleBtn = document.querySelector(".toggle-btn");
const showLinks = document.querySelector(".link-container");

navtoggleBtn.addEventListener("click", function() {
    showLinks.classList.toggle("show-link");
    navtoggleBtn.classList.toggle("rotate");
})

/** Fixed Nav **/ 
const navber = document.querySelector(".navber");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset
    const navHeight = navber.getBoundingClientRect().height;

    if(navHeight < scrollHeight) {
        navber.classList.add("fixed-nav");
    }else{
        navber.classList.remove("fixed-nav");
    }

    if(scrollHeight > 50) {
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
})