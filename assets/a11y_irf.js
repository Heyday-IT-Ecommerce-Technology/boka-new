function liveAnnouncement(liveText) {
  const para = document.createElement("p");
  para.innerText = liveText;
  document.getElementById('live-ann').innerHTML = "";
  setTimeout(function() {
    document.getElementById('live-ann').appendChild(para);
  },1000);
}


$(document).ready(function () {
  console.log("Irf js working");

  // $(".custom_subscription_container").attr({
  //   role: "group",
  //   "aria-label": "Purchase Section",
  // });

  $("div.smart-topic-collection").attr("role", "list");
  $("div.smart-topic-collection *").attr("role", "listitem");

  $(".a11y_links").each(function () {
    var title = $(this).find(".image-with-text__heading").text().trim();

    $(this)
      .find(".button-container a")
      .each(function () {
        var linkText = $(this).text().trim();
        $(this).attr("aria-label", linkText + " - " + title);
      });
  });

  $(".multicolumn-list .multicolumn-list__item").each(function () {
    var alt = $(this).find("img").attr("alt");
    var linktext = $(this).find(".multicolumn-card__info a").text().trim();
    $(this)
      .find(".multicolumn-card__info a")
      .attr("aria-label", linktext + " " + alt);
  });

  $(".slider-button,  .slider-counter__link--dots").click(function () {
    liveAnnouncement("Slide changed");
  });

  $("button.product-form__submit").click(function () {
    liveAnnouncement("Loading");
  });


  const modals = document.querySelectorAll(".quick-add-modal");

  modals.forEach(function (modal) {
    const observer = new MutationObserver(function (mutationsList) {
      mutationsList.forEach(function (mutation) {
        if (mutation.attributeName === "open") {
          if (modal.hasAttribute("open")) {
            console.log("A modal opened:", modal);
          } else {
            console.log("A modal closed:", modal);
          }
        }
      });
    });

    observer.observe(modal, {
      attributes: true,
      attributeFilter: ["open"],
    });
  });

  $(document).click(".quantity__button", function (event) {
    const NewValue = $(event.target)
      .closest(".quantity")
      .find("input.quantity__input")
      .val();
    if (NewValue) {
      liveAnnouncement("Quantity Updated to: " + NewValue);
      console.log(NewValue);
    }
  });

  $(".header__icon--menu.header__icon--summary").click(function () {
    const siblings = $(this).parents().siblings();

    siblings.each(function () {
      const isHidden = $(this).attr("aria-hidden") === "true";
      $(this).attr("aria-hidden", isHidden ? "false" : "true");
    });
  });

  console.log("ready!");
});

$(window).on("load", function () {
  $(".yotpo-search-label").append(`<span class="sr-only">Search</span>`);
  $(".additional-checkout-buttons #shopify-subscription-policy-button").attr({
    tabindex: "0",
    role: "button",
  });
  $(document).on(
    "keydown",
    "#shopify-subscription-policy-button",
    function (event) {
      if (event.which === 13) {
        event.preventDefault();
        $(this).trigger("click");
      }
    }
  );
  $(".card__information .yotpo-reviews-star-ratings-widget svg").removeAttr(
    "tabindex"
  );
  $(".product__info-container ul").attr("role", "list");
  $(".product__info-container ul li").attr("role", "listitem");

  setTimeout(function () {
    // $("p#yotpo-summary-header-text").attr("aria-hidden", "true");

    $(".yotpo-sr-bottom-line-summary svg").removeAttr("tabindex");

    $(".yotpo-smart-topics-panel").each(function () {
      var title = $(this).find(".yotpo-smart-topics-headline").text().trim();
      $(".smart-topic-collection").attr({ role: "group", "aria-label": title });
    });
    $(".reviews-carousel-reviews-bottomline").each(function () {
      var label = $(this).attr("aria-label");
      $(this)
        .find(".yotpo-star-ratings")
        .attr({ role: "img", "aria-label": label });
      $(this).removeAttr("aria-label");
    });

    $(
      ".yotpo-reviews-list .yotpo-review-votes-wrapper .yotpo-review-votes-icons-container"
    ).each(function () {
      var label = $(this).find(".yotpo-review-votes-icons").attr("aria-label");
      var count = $(this).find(".yotpo-review-votes-number").text().trim();
      $(this)
        .find(".yotpo-review-votes-icons")
        .attr("aria-label", label + " " + count + " Reaction");
    });

    $(
      "div.yotpo-sr-bottom-line-right-panel div.yotpo-sr-bottom-line-text"
    ).removeAttr("tabindex");
    
  }, 200);



  $(".product__description.quick-add-hidden > li").attr("role", "none");


  console.log("window loaded");
});

// function hideOverflowingSlides(container) {
//   const containerRect = container.getBoundingClientRect();
//   const slides = container.querySelectorAll('.grid__item.slider__slide');

//   slides.forEach(slide => {
//     const slideRect = slide.getBoundingClientRect();
    
//     const isOverflowing =
//       slideRect.left < containerRect.left ||
//       slideRect.right > containerRect.right ||
//       slideRect.top < containerRect.top ||
//       slideRect.bottom > containerRect.bottom;

//     slide.style.visibility = isOverflowing ? 'hidden' : 'visible';
//   });
// }

// // Initial call on all product grids
// function hideAllOverflowingSlides() {
//   const allGrids = document.querySelectorAll('.grid.product-grid');
//   allGrids.forEach(hideOverflowingSlides);
// }

// window.addEventListener('load', hideAllOverflowingSlides);
// window.addEventListener('resize', hideAllOverflowingSlides);

// // Click listener for slider-button and counter
// document.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.slider-button, .slider-counter__link');
//   if (clicked) {
//     const container = clicked.closest('slider-component').querySelector('.grid.product-grid');
//     console.log('container', container);
//     if (container) {
//       setTimeout(() => hideOverflowingSlides(container), 1000);
//     }
//   }
// });