//getUp
const getUp = dc.id("getUp");
if (getUp) {
    const checkScroll = () => {
        if (window.scrollY > window.innerHeight) getUp.classList.add("active");
        else getUp.classList.remove("active");
    };

    window.addEventListener("scroll", checkScroll);
}

//search
//debugger;
//let searchInnerpageIcon = document.querySelector(".search-inner-page-icon")
//let searchInnerpage = document.querySelector(".search-inner-page");
//let closeBtnSearch = document.querySelector(".close-btn-search");
//searchInnerpageIcon.addEventListener("click", function () {
//  searchInnerpage.classList.add("active");
//})

//closeBtnSearch.addEventListener("click", function () {
//  searchInnerpage.classList.remove("active");
//})

//---
let widthScreen = window.innerWidth;
let sliderInterviweSmallDevice = document.querySelector(".kids > .interview--k ul");
let sliderInterviweTeensSmallDevice = document.querySelector("#items-interview-teens");
if (sliderInterviweSmallDevice) {
    if (widthScreen < 992) {

        sliderInterviweSmallDevice.classList.add("owl-carousel");

    }
}


if (sliderInterviweTeensSmallDevice) {
    if (widthScreen < 698) {

        sliderInterviweTeensSmallDevice.classList.add("owl-carousel");

    }
}
//---
//show more

let consultationSection = document.querySelector(".consultation");

let articleIndex = document.querySelectorAll(".article-index");
let showMoreBtn = document.querySelectorAll(".show-more--btn");


$(document).ready(function () {
    const target = Array.from($(".num"));
    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $('[data-count].num').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                counterRun = true;
                                //alert('finished');
                            }

                        });
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);
    target.forEach((target) => observer.observe(target));


    setTimeout(function () {
        articleIndex.forEach(function (show) {
            let showMoreBtn = show.querySelector(".show-more--btn");
            let showArticle = show.querySelector(".article-index article");
            showArticle.style.setProperty('--heightOpen', showArticle.scrollHeight + 'px');



            if (widthScreen < 992) {

                // add class p-limit and active to article tag and btn 
                if (showArticle.clientHeight > 150) {
                    showMoreBtn.classList.add("active");
                    showArticle.classList.add("p-limit");
                }
                else {
                    showMoreBtn.classList.remove("active");
                    showArticle.classList.remove("p-limit");
                }


            }



            // event btn
            showMoreBtn.addEventListener("click", function () {
                debugger;
                showArticle.classList.toggle("show");
                showArticle.classList.toggle("p-limit");
                consultationSection.classList.toggle("show");
                this.classList.toggle("close");
                
                // $(showArticle).slideToggle();
            })



        })
    },2000);
    



})



//LEARNING PATH

//video controls
function toggleControls(video) {
    if (video.hasAttribute("controls")) {
        video.removeAttribute("controls")
    } else {
        video.setAttribute("controls", "controls")
    }
}

let showVideoLearningPath = document.querySelectorAll(".show-video-l");

videoOverlayInit(showVideoLearningPath);


function videoOverlayInit(videos) {

    videos.forEach(function (sample) {

        let overlayVideo = sample.querySelector(".overlay-video-interview");
        let video = sample.querySelector("video");

        overlayVideo.addEventListener("click", function () {
            this.classList.add("hide");
            toggleControls(video);
            video.play();
        })

        video.addEventListener("ended", function () {
            overlayVideo.classList.remove("hide");
        })
    })
}



//end/video

//interviwe section

let interview = document.querySelector(".interview--k");
if (interview) {
    let showInterviewVideo = document.querySelector(".show-video-i video");
    let sourceVideoInterview = document.getElementById('sourceVideo');
    let sectionVideoInterview = document.querySelectorAll(".section-video-i");
    let playVideoInterview = document.querySelector(".show-video-i");
    let overlayVideoInterview = playVideoInterview.querySelector(".overlay-video-interview");
    let namePersonVideo = document.querySelector("#person-interview .name");
    let agePersonVideo = document.querySelector("#person-interview .age");
    let descriptionPersonVideo = document.querySelector("#person-interview .description");
let sliderInterviweSmallDevice = document.querySelector(".interview--k ul");


let widthScreen = window.innerWidth;


if (widthScreen < 1200) {
  
  sliderInterviweSmallDevice.classList.add("owl-carousel");

}





    sectionVideoInterview.forEach(function (item) {

        let sectionVideoInterviewBox = item.querySelector("div");
        let sectionVideoInterviewSrc = sectionVideoInterviewBox.getAttribute("data-srcInterview");
        let sectionimageUrl = sectionVideoInterviewBox.getAttribute("data-imageInterview");
        let namePerson = item.querySelector(".name-person");
        let agePerson = item.querySelector(".age-person");
        let descriptionPerson = item.querySelector(".description-person");




        item.addEventListener("click", function () {
            overlayVideoInterview.classList.remove("hide");

            namePersonVideo.innerText = namePerson.innerText;
            agePersonVideo.innerText = agePerson.innerText;
            descriptionPersonVideo.innerText = descriptionPerson.innerText;
            sourceVideoInterview.src = sectionVideoInterviewSrc;

            overlayVideoInterview.style.backgroundImage = `url(${sectionimageUrl})`;
            showInterviewVideo.load();

        })


      
    })


 


    showInterviewVideo.addEventListener("ended", function () {
        overlayVideoInterview.classList.remove("hide");
        playVideoInterview.classList.remove("hide");
    })


    playVideoInterview.addEventListener("click", function () {
      
        playVideoInterview.classList.add("hide");
        overlayVideoInterview.classList.add("hide");
        showInterviewVideo.play();
        toggleControls(showInterviewVideo);

    })
  

}


// sourceVideoInterview.addEventListener("click", function () {
//     overlayVideoInterview.style.display = "none";
// })







let ourCourses = document.querySelector(".ourCourses");
if (ourCourses) {

    let videoOurCourse = document.querySelectorAll(".show-video");

    videoOurCourse.forEach(function (item) {
        let overlayVideoInterview = item.querySelector(".overlay-video-interview");
    let showOurCourseVideo = item.querySelector(" video");
        item.addEventListener("click", function () {
           
            overlayVideoInterview.classList.add("hide");
            showOurCourseVideo.play();
            toggleControls(showOurCourseVideo);
          
          

        })

        showOurCourseVideo.addEventListener("ended", function () {
            overlayVideoInterview.classList.remove("hide");
            item.classList.remove("hide");
        })

    })
}

$(document).ready(function () {

    //lazy loads
    function loadStyle(href) {
        if (!document.getElementById(href)) {
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.id = href;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = href;
            link.media = 'all';
            head.appendChild(link);
        }
    }
    respondToVisibility('.td-content', () => {
        loadStyle("/Content/pages/InnerStyle.min.css");
    }, {offset: 600})

  var owlInterview = $('.interview--k .owl-carousel');
  owlInterview.owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1.5
      },
      400: {
        items: 2.5,
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  // ---
  var owlProjectsStudents = $('.projects-students .owl-carousel');
  owlProjectsStudents.owlCarousel({

    loop: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.5
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })


    let operator = document.querySelector(".operator");
    if (operator) {
    function checkScroll() {
        if (window.scrollY > 200) {
            window.removeEventListener('scroll', checkScroll);
            setTimeout(() => {
                operator.classList.remove('initialHide');
            }, 600)
        }
    }
    window.addEventListener('scroll', checkScroll);

    if (widthScreen > 701) {
        operator.classList.add("screen-operator");
    }
    let close = document.querySelectorAll(".close");
    let modalOperator = document.querySelector(".operator-modal");
    let screenOperator=document.querySelector(".screen-operator");
    close.forEach(function (close) {
    close.addEventListener("click", function () {
        if (screenOperator) {
            screenOperator.classList.add("close");
        }
        else {
 modalOperator.classList.remove("show");
        }
       
     
    })
    })

    if (widthScreen < 700) {
        operator.classList.add("click");

        document.querySelector(".click").addEventListener("click", function () {

            modalOperator.classList.add("show");
        })
    }
 
}

})



