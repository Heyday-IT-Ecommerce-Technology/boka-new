
window.addEventListener("DOMContentLoaded", function () {
  console.log("ally demo");

  // $(".icon-text img, #scrollParallaxSectionTrigger img").attr({
  //   alt: ""
  // });

  $(".fade-in h4").attr({
    role: "heading",
    "aria-level": "2"
  });
    $(".selected-subscription-option .active select").attr("aria-label", "Subscribe & Save");
  
const label = document.querySelector('#ContactFooter .field__label');

if (label) {
  label.innerHTML += ' <span>* Required</span>';
}
    $(".sidebar-wrap .page-nav").attr({
    role: "listitem"  });
  $(".sidebar-wrap").attr({
    role: "list"  });

  $("#main-cart-items  .cart-item__details dl,#main-cart-items  .cart-item__details dt,#main-cart-items  .cart-item__details dd").attr({
    role: "presentation"
  });
  $("#cart .button--tertiary").attr({
    role:"button"
  });
  $(".rte h4").attr({
    role: "heading",
    "aria-level": "2"  });
 


  $(".product--thumbnail_slider .custom_subscription_container, .product__info-container .custom_subscription_container")
  .removeAttr("role")
  .attr({
    role: "group",
    "aria-label": "Purchase"
  });
const slideshow = document.querySelector('slideshow-component');
  slideshow.removeAttribute('role');
  slideshow.removeAttribute('aria-roledescription');
  slideshow.removeAttribute('aria-label');
$("#Slide-template--15913578004523__e88125fd-54b1-4dc4-a7be-094d886854f5-1")
  .removeAttr('role aria-roledescription aria-label');

  
  $("#Form0 .CzyqN").removeAttr("aria-label")
  .attr({
    "aria-label": "Country Code"    //theme not applied
  });
$('.hamburger-menu').attr({
  tabindex: '0',
  role: 'button'
});
$(".icon-with-text--inlined").attr({
  role: "button"
});


$(".complementary-products-contains-quick-add aside").removeAttr("aria-label");
 $(".complementary-products-contains-quick-add aside").attr({
  role: 'none'
});
   $(".yotpo-media-filter #mediaInput").removeAttr("aria-label");

  $(".shopify-policy__body .rte").attr({
    role:'heading'
  })
  $(".card__information .card__heading").attr({
  role: "heading",
  "aria-level": "2"
  });
 
//  $("#mediaInput").attr({
//   "aria-label": "Review with Media"
// });

});
