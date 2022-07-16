$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      nextArrow: '<div class="next_arrow"><i class="fas fa-chevron-right"></i></div>',
      prevArrow: '<div class="prev_arrow"><i class="fas fa-chevron-left"></i></div>',
      arrows: true,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

const btns = document.querySelectorAll(".tab-btn");  
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content"); 

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if(id){
    btns.forEach(function (btn){
      btn.classList.remove("active");
      
    });
    e.target.classList.add("active");
    articles.forEach( function (article){
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    //now on clicking button then within the article toggle the class on the actual parent (question)
    question.classList.toggle("show-text");
  });
});