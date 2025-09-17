window.addEventListener("DOMContentLoaded", function () {
  console.log("ally start");

  // $("div.sidebar-wrap").attr("role", "list");
  // $("div.sidebar-wrap div.page-nav").attr("role", "listitem");

  // $(".product-info .product__text p strong").each(function () {
  //   $(this).each(function () {
  //     $(this).attr("role", "list");
  //   });
  // });

  // $(
  //   ".template-new-boka-well-vital-bite ul#Slider-template--15913580363819__multicolumn_HYhLX7"
  // )
  //   .find(".multicolumn-card__info")
  //   .each(function () {
  //     const randomId = "h3-" + Math.random().toString(36).substr(2, 9);
  //     const $h3 = $(this).find("h3");
  //     $h3.attr("id", randomId);

  //     const $anchor = $(this).find("a.link");
  //     $anchor.removeAttr("aria-label");
  //     $anchor.attr("aria-describedby", randomId);
  //   });

  // $(
  //   ".template-new-boka-well-pro-stix ul#Slider-template--15913580331051__multicolumn_HYhLX7"
  // )
  //   .find(".multicolumn-card__info")
  //   .each(function () {
  //     const randomId = "h3-" + Math.random().toString(36).substr(2, 9);
  //     const $h3 = $(this).find("h3");
  //     $h3.attr("id", randomId);

  //     const $anchor = $(this).find("a.link");
  //     $anchor.attr("aria-describedby", randomId);
  //     $anchor.removeAttr("aria-label");
  //   });

  // $(".complementary-slide")
  //   .find("li div.card-wrapper div.card-information div.price div.price__sale")
  //   .each(function () {
  //     $(this)
  //       .find("span")
  //       .each(function () {
  //         const $span = $(this);
  //         const $div = $("<div>").html($span.html());
  //         $.each(this.attributes, function () {
  //           $div.attr(this.name, this.value);
  //         });
  //         $span.replaceWith($div);
  //       });
  //   });

  // $("cart-drawer.active").parents().siblings().attr("aria-hidden", "true");

  // $("body").children().not("cart-drawer.active").attr("aria-hidden", "true");

  $(".multicolumn .title-wrapper-with-link div.h1").attr({
    role: "heading",
    "aria-level": "2",
  });

  $("h4.yotpo-mobile-filters-popup-title").attr("aria-level", "2");

  $(".product-card-wrapper h2.card__heading").attr({
    role: "heading",
    "aria-level": "3",
  });

  $(".collection__title h3.h1").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".template-fresh-faced .image-with-text__content p strong").attr({
    role: "heading",
    "aria-level": "3",
  });

  $(".template-new-boka-well-vital-bite .title-wrapper-with-link div.h0").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".template-new-boka-well-pro-stix .title-wrapper-with-link div.h0").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".template-new-boka-well-vital-bite .multicolumn h1.h0").attr({
    role: "heading",
    "aria-level": "2",
  });
  $(".template-new-boka-well-vital-bite .collection__title h1.h0").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".title-wrapper-with-link h1.h0").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".template-bfcm .a11y_links h3").attr("role", "none");

  $(".template-new-boka-well .multicolumn .title").attr({
    role: "heading",
    "aria-level": "2",
  });

  $("#merchandising-card .merchandising-card__title").attr({
    role: "heading",
    "aria-level": "2",
  });

  setTimeout(function () {
    $(
      ".complementary-products__container .slider-mobile-gutter h2.card__heading"
    ).attr({
      role: "heading",
      "aria-level": "3",
    });

    $("input#custom_onetimepurchase").attr("aria-label", "One time purchase");
    $("input#custom_subscription").attr("aria-label", "Subscribe and save");

    $("div.go2238661772 p span").attr({
      role: "heading",
      "aria-level": "2",
    });

    $("span.go3677360152").removeAttr("aria-label");

    // $(".yotpo-single-thumbnail.yotpo-image-thumbnail").removeAttr(
    //   "aria-pressed"
    // );

    // var $collection = $(".smart-topic-collection");
    // $collection.replaceWith(function () {
    //   return $("<ul/>", {
    //     class: $collection.attr("class"),
    //     html: $collection.html(),
    //   });
    // });
    // var $newCollection = $(".smart-topic-collection");
    // $newCollection.children("div").each(function () {
    //   $(this).wrap("<li></li>");
    // });

    // $(".yotpo-matched-reviews").attr("role", "alert");
  }, 2000);

  $(".product__description p b").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".template-new-boka-well-pro-stix h1.h0").attr({
    role: "heading",
    "aria-level": "2",
  });

  $('input[name="contact[email]"]').removeAttr("placeholder");

  $(".recipient-fields input").removeAttr("placeholder");
  $(".recipient-fields textarea").removeAttr("placeholder");

  $(".bulleted-content-text ul").attr("role", "list");
  $(".bulleted-content-text ul li").attr("role", "listitem");
  $(".bulleted-content-text ul span").attr("aria-hidden", "true");

  $("table.cart-items tbody dl").attr("role", "list");
  $("table.cart-items tbody dl *").attr("role", "listitem");

  setTimeout(function () {
    $("nav.yotpo-reviews-pagination-container").attr({
      "aria-label": "pagination",
    });

    $("span.yotpo-star-rating-reviews-summary-text").attr("role", "button");

    $("span.yotpo-matched-reviews").attr("role", "alert");

    // $("p.yotpo-headline").attr({
    //   role: "heading",
    //   "aria-level": "3",
    // });

    $(".smart-topic-collection div").removeAttr("aria-checked");

    $("input.yotpo-filter-select").removeAttr("aria-labelledby");

    $("#yotpo-tabs-main-widget-tab-0").removeAttr("aria-labelledby");

    $(".yotpo-dropdown-closable").removeAttr("aria-labelledby");

    $("#yotpo-tabs-main-widget-tab-panel-0").removeAttr("aria-labelledby");

    $(".go2810453892 div.vsly-svg-btn").attr("role", "button");

    $("div.go621427880 span").removeAttr("aria-label");

 let isKeyboardUser = false;

document.addEventListener('keydown', () => {
  isKeyboardUser = true;
});

document.addEventListener('focusin', (event) => {
  if (!isKeyboardUser) return;

  if (event.target instanceof HTMLElement) {
    event.target.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }
});

  $(".a11y_association").removeAttr("aria-label");

  $(".yotpo-sorting-filter-container").removeAttr("for");
  $(".yotpo-sorting-filter-container span.sr-only").removeAttr();

    $(".card__content .yotpo-widget-instance .yotpo-sr-bottom-line-summary div.star-container svg").removeAttr("tabindex");

    $(".merchandising-card__image-bg span.visually-hidden").remove();

  }, 2000);

  // $("span.a11y_errormessage").text("Email is invalid, eg abc@gmail.com");

  // $(".cart-drawer__footer .totals").removeAtr("role");

  $(".card-wrapper .card__heading a").removeAttr("aria-labelledby");

  $(".thumbnail-slider button.slider-button--prev").attr(
    "aria-label",
    "Previous slide"
  );
  $(".thumbnail-slider button.slider-button--next").attr(
    "aria-label",
    "Next slide"
  );

  $("section#_loomi_addon_1743665657328_dup1744056935")
    .find("div.go2851441673.go2678553859 div.go4090600831")
    .each(function (index) {
      const $buttonDiv = $(this).find("div.go621427880");
      $buttonDiv.removeAttr("aria-label");
    });

  $(
    ".modal-opener button.product__media-toggle.quick-add-hidden span"
  ).removeClass("visually-hidden");

  $("button.quick-add-hidden span").removeClass("visually-hidden");

  $(".product__modal-opener").attr("aria-label", "View Gallery");

  $(".collection__title div.h1").attr({
    role: "heading",
    "aria-level": "2",
  });

  // $(".product__info-container .product__description strong").attr({
  //   role: "heading",
  //   "aria-level": "2",
  // });

  $(".collapsible-content__header .collapsible-content__heading").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".banner__content--middle-center .banner__heading.h1").attr({
    role: "heading",
    "aria-level": "2",
  });

  $("h1.header__heading").attr("role", "none");
  $("h1.login-card__logo").attr("role", "none");

  $("div.slideshow__text div.banner__heading").attr({
    role: "heading",
    "aria-level": "1",
  });
  $(".rich-text.content-container .rich-text__wrapper div.h1").attr({
    role: "heading",
    "aria-level": "2",
  });
  $(".drawer__inner .drawer__heading.h2").attr({
    role: "heading",
    "aria-level": "2",
  });
  $(".collection__title--desktop-slider div.h2").attr({
    role: "heading",
    "aria-level": "2",
  });

  // Link associations issue
  $(".image-with-text__content div.h1").each(function (index) {
    const uniqueId = "test-title" + (index + 1);
    $(this).attr({
      role: "heading",
      "aria-level": "2",
      id: uniqueId,
    });
    const button = $(this)
      .closest(".image-with-text")
      .find(".button-container a")
      .eq(0);
    if (button.length) {
      button.attr("aria-describedby", uniqueId);
    }
  });

  $(".footer-block .footer-block__heading").attr({
    role: "heading",
    "aria-level": "3",
  });

  $("header-menu.new-customer-account summary").attr("aria-label", "Profile");
  $("header-menu.new-customer-account summary .visually-hidden").remove();

  // $("button.quantity__button.disabled").attr("aria-label", "unavailable");

  $("ul.contains-card--product")
    .find("li.grid__item")
    .each(function () {
      const h3 = $(this).find("div.card__content div.card__information h3");
      h3.attr({
        role: "heading",
        "aria-level": "2",
      });
      const h3Id = h3.attr("id");

      if (h3Id) {
        const link = $(this).find(
          "div.card__inner div.cta-buttons div.learn-more a"
        );
        link.attr("aria-describedby", h3Id);
      }
    });

  $("<div>", {
    id: "sr-announcer",
    "aria-live": "polite",
    "aria-atomic": "true", // Ensure whole message is read
    role: "status",
    style:
      "position:absolute; left:-9999px; height:1px; width:1px; overflow:hidden;",
  }).appendTo("body");
  function announce(message) {
    const $announcer = $("#sr-announcer");
    $announcer.text("");
    setTimeout(() => {
      $announcer.text(message);
    }, 50);
  }
  $("button.slider-button").on("click keydown", function (e) {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      announce("Slide changed");
    }
  });
  $("button.slider-counter__link--dots").on("click keydown", function (e) {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      announce("Slide changed");
    }
  });

  $(
    ".template-about-us .custom-image-with-text h2.image-with-text__heading"
  ).attr({
    role: "heading",
    "aria-level": "1",
  });

  $(".template-find-us-in-stores ul.multicolumn-list li h3").attr(
    "role",
    "none"
  );

  $(".template-find-us-in-stores ul.multicolumn-list li h3 a").removeAttr(
    "title"
  );

  $(
    ".template-find-us-in-stores .custom-image-with-text div.image-with-text__heading"
  ).attr({
    role: "heading",
    "aria-level": "1",
  });

  $(".shopify-policy__body strong").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(
    "header-menu.navigation-menu-container div.megamenu-image-container a img"
  ).attr("alt", "");

  $(".template-affiliates div.banner__content .banner__heading").attr({
    role: "heading",
    "aria-level": "1",
  });

  $("#ContactForm").prepend("<span>Fields marked with * are required.</span>");

  $("form#ContactForm h2.form__message").attr("role", "alert");

  // $(".template-dental-professionals")
  //   .find(".image-with-text__content")
  //   .each(function () {
  //     var randomId = "h2-" + Math.random().toString(36).substr(2, 9);
  //     var heading = $(this).find("h2").attr("id", randomId);
  //     var button = $(this).find(
  //       '.button-container a[href="https://www.boka.com/pages/wholesale-signup"]'
  //     );
  //     if (button.length) {
  //       button.attr("aria-describedby", randomId);
  //     }
  //   });

  // $("ul#Slider-template--15913577349163__multicolumn_YJKeFb")
  //   .find(".multicolumn-card")
  //   .each(function () {
  //     var randomId = "h2-" + Math.random().toString(36).substr(2, 9);
  //     var heading = $(this)
  //       .find("h3.inline-richtext strong")
  //       .attr("id", randomId);
  //     var button = $(this).find("a.link");
  //     if (button.length) {
  //       button.attr("aria-describedby", randomId);
  //       button.removeAttr("aria-label");
  //     }
  //   });

  $(".template-dental-professionals ul.multicolumn-list")
    .find("li")
    .each(function () {
      var heading = $(this).find(".multicolumn-card__info p");
      var text = heading.clone().children("em").remove().end().text().trim();
      var image = $(this).find(".multicolumn-card__image-wrapper img");
      image.attr("alt", text);
    });

  // $("input#scoreDropdownInput").removeAttr("aria-labelledby");

  $(
    ".template-dental-professionals .image-with-text__content.image-with-text__content--medium div.image-with-text__text"
  ).attr("role", "list");
  $(
    ".template-dental-professionals .image-with-text__content.image-with-text__content--medium div.image-with-text__text *"
  ).attr("role", "listitem");

  // $(".template-in-the-press-new")
  //   .find(".image-with-text__content--middle")
  //   .each(function () {
  //     var randomId = "heading-" + Math.random().toString(36).substr(2, 9);
  //     var heading = $(this)
  //       .find(".image-with-text__heading")
  //       .attr("id", randomId)
  //       .attr({
  //         role: "heading",
  //         "aria-level": "2",
  //       });
  //     var buttons = $(this).find(".button-container a");
  //     if (buttons.length) {
  //       buttons.attr("aria-describedby", randomId);
  //     }
  //   });

  $(".product-card-wrapper")
    .find(".card--media")
    .each(function (index) {
      const $anchor = $(this).find(".card__information h2 a");
      const anchorText = $anchor.text().trim();
      const $badge = $(this).find(
        ".card__inner .card__content .card__badge span"
      );
      const badgeText = $badge.text().trim();
      $badge.attr("aria-hidden", "true");
      const ariaLabel = badgeText ? `${badgeText} ${anchorText}` : anchorText;
      $anchor.attr("aria-label", ariaLabel);
    });

  $("div#menu-drawer").removeAttr("tabindex");

  $(".drawer__inner").each(function () {
    const $closeBtn = $(this).find(
      ".cart-drawer__empty-content button.drawer__close"
    );
    const $emptyContent = $(this).find(".cart-drawer__empty-content");

    if ($closeBtn.length && $emptyContent.length) {
      $emptyContent.prepend($closeBtn);
    }
  });

  $(".as-seen-on-logos-wrapper").append(`
    <div class="handle_btns">
      <button class="btn-play" id="playBtn">Play</button>
      <button class="btn-pause" id="pauseBtn">Pause</button>
   </div>   
    `);
  const $logoContainer = $(".as-seen-on-logos");
  $("#playBtn").on("click", function () {
    $logoContainer.removeClass("paused");
    $(this).attr("data-action", "play");
  });
  $("#pauseBtn").on("click", function () {
    $logoContainer.addClass("paused");
    $(this).attr("data-action", "pause");
  });
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        (mutation.target.id === "playBtn" || mutation.target.id === "pauseBtn")
      ) {
        const action = $(mutation.target).attr("data-action");
        if (action === "play") {
          $logoContainer.removeClass("paused");
        } else if (action === "pause") {
          $logoContainer.addClass("paused");
        }
      }
    }
  });
  observer.observe(document.getElementById("playBtn"), { attributes: true });
  observer.observe(document.getElementById("pauseBtn"), { attributes: true });

  const $prevBtn = $('<button class="slide-prev-sliderbtn">‹</button>');
  const $nextBtn = $('<button class="slide-next-sliderbtn">›</button>');
  $(".mobile-buttons-wrapper").after($nextBtn);
  $(".mobile-buttons-wrapper").after($prevBtn);
  const scrollAmount = 150;
  $prevBtn.on("click", function () {
    $(".mobile-buttons-wrapper").animate(
      {
        scrollLeft: "-=" + scrollAmount,
      },
      300
    );
  });
  $nextBtn.on("click", function () {
    $(".mobile-buttons-wrapper").animate(
      {
        scrollLeft: "+=" + scrollAmount,
      },
      300
    );
  });

  $("slideshow-component").removeAttr("aria-label");

  $("#MainContent .section-collection-list .color-custom .collection-list-title p").attr({
    role: "heading",
    "aria-level": "2"
  });

var $closeButton = $('.drawer__close');
var $emptyContent = $('.cart-drawer__empty-content');
if ($closeButton.length && $emptyContent.length) {
  $closeButton.prependTo($emptyContent);
}

// $(".menu-drawer-container").attr({
//   role: "button",
//   "aria-label": "menu",
//   "tabindex": "0"
// });
// $('.menu-drawer-container').on("click", function () {
//       const isOpen = $(this).hasClass('menu-opening');
//       const $nav = $("#menu-drawer");
//       if (isOpen) {
//         console.log("Hamburger open button clicked.");
//         $(this).attr("aria-expanded", "true");
//         $nav.parents().siblings().attr("aria-hidden", "true");
//       } else {
//         console.log("Hamburger close button clicked.");
//         $(this).attr("aria-expanded", "false");
//         $nav.parents().siblings().removeAttr("aria-hidden");
//       }
// });

$('.header__icon--menu').on('click', function () {
        var expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
});

const $drawer = $('#Details-menu-drawer-container');
  const $menuDrawer = $('#menu-drawer');

  function trapFocus($container) {
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    const $focusable = $container.find(focusableSelectors.join(',')).filter(':visible');

    const firstFocusable = $focusable.first();
    const lastFocusable = $focusable.last();

    // Focus first element
    firstFocusable.focus();

    // Handle keydown for Tab
    $container.on('keydown.trapFocus', function (e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if ($(document.activeElement).is(firstFocusable)) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab
          if ($(document.activeElement).is(lastFocusable)) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }

      // Optionally trap Escape to close drawer
      if (e.key === 'Escape') {
        $drawer.removeAttr('open');
        $container.off('keydown.trapFocus');
      }
    });
  }

  // When the drawer is opened (details[open] attribute added)
  $drawer.on('toggle', function () {
    if ($drawer.prop('open')) {
      trapFocus($menuDrawer);
    } else {
      $menuDrawer.off('keydown.trapFocus');
    }
  });

  console.log("ally end");
});
