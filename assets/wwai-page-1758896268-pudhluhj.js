/* Start Section boka_listicle_hero_banner_ccrmq6 */
document.addEventListener("DOMContentLoaded",function(){const videoPlayers=document.querySelectorAll("video-player");videoPlayers.forEach((player,index)=>{const video=player.querySelector("video");const transcript=player.querySelector(".video-transcript");if(video&&transcript){let transcriptId=transcript.id;if(!transcriptId){transcriptId=`video-transcript-${index+1}`;transcript.id=transcriptId;}
video.setAttribute("aria-describedby",transcriptId);const altText=video.getAttribute("alt")||video.getAttribute("aria-label")||"Video with transcript available.";video.setAttribute("aria-label",altText);video.setAttribute("alt",altText);if(!video.hasAttribute("tabindex")){video.setAttribute("tabindex","0");}}});});function updateGradientForMobile(){const isMobile=window.matchMedia('(max-width: 768px)').matches;const stops=document.querySelectorAll('#greadient-template--boka_listicle_hero_banner_ccrmq6 stop');stops.forEach((stop)=>{const original=stop.getAttribute('data-original')||stop.getAttribute('stop-color');stop.setAttribute('data-original',original);if(isMobile&&original.toLowerCase()==='#682db7'){stop.setAttribute('stop-color','#ffffff');}else{stop.setAttribute('stop-color',original);}});}
window.addEventListener('DOMContentLoaded',updateGradientForMobile);window.addEventListener('resize',updateGradientForMobile);document.addEventListener('DOMContentLoaded',()=>{const timerElements=document.querySelectorAll('[timer]');timerElements.forEach((el)=>{const timerAttr=el.getAttribute('timer');let targetDate=new Date(timerAttr);if(isNaN(targetDate)){const[month,day,yearPart,time,meridian]=timerAttr.split(/[\s,]+/);targetDate=new Date(`${month}${day},${yearPart}${time}${meridian}`);}
if(isNaN(targetDate)){el.innerText='Invalid Date';return;}
let interval;const updateCountdown=()=>{const now=new Date().getTime();let distance=targetDate.getTime()-now;if(distance<=0){targetDate=new Date(Date.now()+24*60*60*1000);distance=targetDate.getTime()-now;}
const totalDays=Math.floor(distance/(1000*60*60*24));const hours=String(Math.floor((distance%(1000*60*60*24))/(1000*60*60))).padStart(2,'0');const minutes=String(Math.floor((distance%(1000*60*60))/(1000*60))).padStart(2,'0');const seconds=String(Math.floor((distance%(1000*60))/1000)).padStart(2,'0');let display='';if(totalDays>0){display+=`${String(totalDays).padStart(2,'0')}d`;}
display+=`${hours}:${minutes}:${seconds}`;el.innerText=display;};interval=setInterval(updateCountdown,1000);updateCountdown();});});
/* End Section boka_listicle_hero_banner_ccrmq6 */
/* Start Section boka_static_listicle_marquee_p37ynX */
let ele=document.querySelector('.section-template--boka_static_listicle_marquee_p37ynX #marquee');let subject=ele.innerHTML;for(var i=0;i<=4;i++){ele.insertAdjacentHTML('beforeend',subject);}
let perentEle=document.querySelector('.section-template--boka_static_listicle_marquee_p37ynX .marquee-container');let perentSubject=perentEle.innerHTML;perentEle.insertAdjacentHTML('beforeend',perentSubject);
/* End Section boka_static_listicle_marquee_p37ynX */
/* Start Section boka_static_listicle_reasons_GnRmFH */
document.addEventListener('DOMContentLoaded',function(){var Swipes_reason_block_zfQC7p=new Swiper('.section-template--boka_static_listicle_reasons_GnRmFH .testimonial_swiper_reason_block_zfQC7p',{loop:false,slidesPerView:1.2,spaceBetween:15,initialSlide:0,loop:true,autoplay:{delay:5000,disableOnInteraction:false,},speed:2000});var Swipes_reason_block_tMWbJd=new Swiper('.section-template--boka_static_listicle_reasons_GnRmFH .testimonial_swiper_reason_block_tMWbJd',{loop:false,slidesPerView:1.2,spaceBetween:15,initialSlide:0,loop:true,autoplay:{delay:5000,disableOnInteraction:false,},speed:2000});var Swipes_reason_block_8txUfG=new Swiper('.section-template--boka_static_listicle_reasons_GnRmFH .testimonial_swiper_reason_block_8txUfG',{loop:false,slidesPerView:1.2,spaceBetween:15,initialSlide:0,loop:true,autoplay:{delay:5000,disableOnInteraction:false,},speed:2000});});
/* End Section boka_static_listicle_reasons_GnRmFH */
/* Start Section boka_static_listicle_brand_logos_XhkYVH */
document.addEventListener('DOMContentLoaded',function(){let ele=document.querySelector('.section-template--boka_static_listicle_brand_logos_XhkYVH #marquee');let subject=ele.innerHTML;for(var i=0;i<=4;i++){ele.insertAdjacentHTML('beforeend',subject);}
let perentEle=document.querySelector('.section-template--boka_static_listicle_brand_logos_XhkYVH .marquee-container');let perentSubject=perentEle.innerHTML;perentEle.insertAdjacentHTML('beforeend',perentSubject);});
/* End Section boka_static_listicle_brand_logos_XhkYVH */
/* Start Section boka_static_listicle_pdp_25sep_C9pxRm */
function increaseQty(){const input=document.querySelector('[data-wwai-add-to-cart-quantity]');const current=parseInt(input.value,10)||1;input.value=current+1;}
function decreaseQty(){const input=document.querySelector('[data-wwai-add-to-cart-quantity]');const current=parseInt(input.value,10)||1;if(current>1){input.value=current-1;}}
document.addEventListener('DOMContentLoaded',function(){var Swipes=new Swiper('.section-template--boka_static_listicle_pdp_25sep_C9pxRm .review_wrapper.swiper',{loop:false,slidesPerView:1.6,spaceBetween:12,grabCursor:false,initialSlide:0,roundLengths:true,breakpoints:{768:{slidesPerView:3.01,centeredSlides:false,loop:false,initialSlide:0,spaceBetween:14,},},on:{init:function(){updateNavigationVisibility(this);},resize:function(){updateNavigationVisibility(this);},slideChange:function(){updateNavigationVisibility(this);},},});function updateNavigationVisibility(swiper){const totalSlides=swiper.slides.length;const slidesPerView=swiper.params.slidesPerView;const canShowAllSlides=totalSlides<=slidesPerView;const sliderControls=document.querySelector('.section-template--boka_static_listicle_pdp_25sep_C9pxRm .slider-controls');if(sliderControls){if(canShowAllSlides){sliderControls.style.display='none';}else{sliderControls.style.display='';}}}});document.addEventListener('DOMContentLoaded',function(){const productSection=document.querySelector('.section-template--boka_static_listicle_pdp_25sep_C9pxRm.product_fixed');const parentSection=document.querySelector('#shopify-section-template--boka_static_listicle_pdp_25sep_C9pxRm');window.addEventListener('scroll',(event)=>{let windowTop=Math.floor(window.scrollY);let windowBottom=windowTop+window.innerHeight;let parentTop=parentSection.offsetTop;let parentBottom=parentTop+parentSection.offsetHeight;let isParentInViewport=parentTop<windowBottom&&parentBottom>windowTop;if(isParentInViewport){productSection.style.display='none';}else{productSection.style.display='block';}});});
/* End Section boka_static_listicle_pdp_25sep_C9pxRm */
/* Start Section boka_static_listicle_video_KpkFki */
document.addEventListener("DOMContentLoaded",function(){const videoPlayers=document.querySelectorAll("video-player");videoPlayers.forEach((player,index)=>{const video=player.querySelector("video");const transcript=player.querySelector(".video-transcript");if(video&&transcript){let transcriptId=transcript.id;if(!transcriptId){transcriptId=`video-transcript-${index+1}`;transcript.id=transcriptId;}
video.setAttribute("aria-describedby",transcriptId);const altText=video.getAttribute("alt")||video.getAttribute("aria-label")||"Video with transcript available.";video.setAttribute("aria-label",altText);video.setAttribute("alt",altText);if(!video.hasAttribute("tabindex")){video.setAttribute("tabindex","0");}}});});document.addEventListener("DOMContentLoaded",function(){const videoPlayers=document.querySelectorAll("video-player");videoPlayers.forEach((player,index)=>{const video=player.querySelector("video");const transcript=player.querySelector(".video-transcript");if(video&&transcript){let transcriptId=transcript.id;if(!transcriptId){transcriptId=`video-transcript-${index+1}`;transcript.id=transcriptId;}
video.setAttribute("aria-describedby",transcriptId);const altText=video.getAttribute("alt")||video.getAttribute("aria-label")||"Video with transcript available.";video.setAttribute("aria-label",altText);video.setAttribute("alt",altText);if(!video.hasAttribute("tabindex")){video.setAttribute("tabindex","0");}}});});document.addEventListener("DOMContentLoaded",function(){const videoPlayers=document.querySelectorAll("video-player");videoPlayers.forEach((player,index)=>{const video=player.querySelector("video");const transcript=player.querySelector(".video-transcript");if(video&&transcript){let transcriptId=transcript.id;if(!transcriptId){transcriptId=`video-transcript-${index+1}`;transcript.id=transcriptId;}
video.setAttribute("aria-describedby",transcriptId);const altText=video.getAttribute("alt")||video.getAttribute("aria-label")||"Video with transcript available.";video.setAttribute("aria-label",altText);video.setAttribute("alt",altText);if(!video.hasAttribute("tabindex")){video.setAttribute("tabindex","0");}}});});document.addEventListener("DOMContentLoaded",function(){const videoPlayers=document.querySelectorAll("video-player");videoPlayers.forEach((player,index)=>{const video=player.querySelector("video");const transcript=player.querySelector(".video-transcript");if(video&&transcript){let transcriptId=transcript.id;if(!transcriptId){transcriptId=`video-transcript-${index+1}`;transcript.id=transcriptId;}
video.setAttribute("aria-describedby",transcriptId);const altText=video.getAttribute("alt")||video.getAttribute("aria-label")||"Video with transcript available.";video.setAttribute("aria-label",altText);video.setAttribute("alt",altText);if(!video.hasAttribute("tabindex")){video.setAttribute("tabindex","0");}}});});document.querySelectorAll('.section-template--boka_static_listicle_video_KpkFki video-player').forEach(video=>{video.addEventListener('click',function(){document.querySelectorAll('.section-template--boka_static_listicle_video_KpkFki video-player').forEach(ele=>{if(video!=ele){ele.pauseAllVideo();}});});});
/* End Section boka_static_listicle_video_KpkFki */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
(function () {
  // Check if the custom element is already defined
  if (!customElements.get('video-player')) {
    class VideoPlayer extends HTMLElement {
      constructor() {
        super();
        this.videos = this.querySelectorAll('video');
        this.videoWeb = this.videos[0];
        this.videoMob = this.videos[1];
        this.playBtn = this.querySelector('.play-btn');
        this.soundBtn = this.querySelector('.mute-btn');
        this.disableClick = this.dataset.click;

        if (this.disableClick) {
          this.initEventListeners();
        }
      }

      initEventListeners() {
        this.videos.forEach(video => {
          video.addEventListener('click', () => this.togglePlay(video));
          video.addEventListener('ended', () => this.handleVideoEnded(video));
        });

        if (this.playBtn) {
          this.playBtn.addEventListener('click', () => this.handlePlayButton());
        }

        if (this.soundBtn) {
          this.soundBtn.addEventListener('click', () => this.toggleMute());
        }

        window.addEventListener('resize', () => this.handleResize());
      }

      togglePlay(video) {
        if (video.paused) {
          this.playVideo(video);
        } else {
          this.pauseVideo(video);
        }
      }

      playVideo(video) {
        this.videos.forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
            otherVideo.muted = true;
          }
        });

        video.muted = false;
        video.play();
        this.classList.add('played');

        // ✅ Hide the Play button
        if (this.playBtn) {
          this.playBtn.style.opacity = '0';
          this.playBtn.style.pointerEvents = 'none'; // Prevent clicking while hidden
        }

        if (this.soundBtn) {
          this.soundBtn.classList.remove('active');
        }
      }

      pauseVideo(video) {
        video.pause();
        video.muted = true;
        this.classList.remove('played');

        // ✅ Show the Play button again
        if (this.playBtn) {
          this.playBtn.style.opacity = '1';
          this.playBtn.style.pointerEvents = 'auto';
        }

        if (this.soundBtn) {
          this.soundBtn.classList.add('active');
        }
      }
      pauseAllVideo() {
        this.videos.forEach(video => {
          this.pauseVideo(video)
        });
      }

      handlePlayButton() {
        const targetVideo = window.innerWidth < 749 && this.videoMob ? this.videoMob : this.videoWeb;
        if (targetVideo) this.togglePlay(targetVideo);
      }

      toggleMute() {
        const targetVideo = window.innerWidth < 749 && this.videoMob ? this.videoMob : this.videoWeb;
        if (targetVideo) {
          targetVideo.muted = !targetVideo.muted;
          this.soundBtn.classList.toggle('active', targetVideo.muted);
        }
      }

      handleResize() {
        if (!this.videoMob) return;

        const isMobile = window.innerWidth < 749;
        const targetVideo = isMobile ? this.videoMob : this.videoWeb;

        this.videos.forEach(video => {
          video.pause();
          video.muted = true;
        });

        targetVideo.play();
        targetVideo.muted = false;
        targetVideo.pause();
      }

      handleVideoEnded(video) {
        if (!video.loop) {
          this.classList.remove('played');
          video.muted = true;

          // ✅ Show the Play button again
          if (this.playBtn) {
            this.playBtn.style.opacity = '1';
            this.playBtn.style.pointerEvents = 'auto';
          }
        }
      }
    }

    // Define the custom element
    customElements.define('video-player', VideoPlayer);
  }
})();
if (!customElements.get('carousel-slider')) {
  class CarouselSlider extends HTMLElement {
    constructor() {
      super();
      this.activeIndex = 0;
      this.has_pre_injected_media = false;
    }

    connectedCallback() {
      this.init();
      
      // If a selected media is pre-injected, set that in has_pre_injected_media.
      // In that case, in gotoSlide, we will use index + 1.
      const selectedMediaEl = this.mainMedia.querySelector('[data-wwai-selected-variant-product-media]');
      if (selectedMediaEl) {
        this.has_pre_injected_media = true;
      }
    }

    init() {
      this.cacheElements();
      this.bindEvents();
      // We dont perform scroll here, since either we have 
      // pre injected media or we will use index = 0 or we will call gotoSlide from 
      // functionality generator.
      // this.scrollToMediaItem(this.activeIndex);
    }

    cacheElements() {
      this.mainMedia = this.querySelector('main-slider');
      this.thumbSlider = this.querySelector('thumb-slider');
      this.thumbVertical = this.thumbSlider?.dataset.vartical;
      this.pagenation = this.querySelector('pagenation');
      this.mediaItems = this.mainMedia?.querySelectorAll('main-slider-slide') || [];
      this.thumbItems = this.thumbSlider?.querySelectorAll('thumb-slider-slide') || [];
      this.pageItems = this.pagenation?.querySelectorAll('button.page-media-item') || [];
    }

    bindEvents() {
      const mediaBtnNext = this.querySelector('.media-next');
      const mediaBtnPrev = this.querySelector('.media-prev');

      mediaBtnNext?.addEventListener('click', () => this.goToNext());
      mediaBtnPrev?.addEventListener('click', () => this.goToPrev());

      // Only add thumbnail event listeners if thumbItems exist
      if (this.thumbItems && this.thumbItems.length > 0) {
        this.thumbItems.forEach((thumb, index) => {
          thumb.addEventListener('click', () => this.scrollToMediaItem(index));
        });
      }
    
      this.pageItems.forEach((page, index) => {
        page.addEventListener('click', () => this.scrollToMediaItem(index));
      });
    
      let scrollTimeout = null;
      this.mainMedia?.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => this.handleScrollSnap(), 200);
      });
    
      const updateThumbSliderHeight = () => {
        if (this.thumbSlider && this.thumbVertical && window.innerWidth > 768) {
          this.thumbSlider.style.maxHeight = this.mainMedia.offsetHeight + 'px';
        } else if (this.thumbSlider) {
          this.thumbSlider.style.maxHeight = '';
        }
      };
      
      setTimeout(updateThumbSliderHeight, 200);
      
      window.addEventListener('resize', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateThumbSliderHeight, 200);
      });
    }

    handleScrollSnap() {
      const scrollLeft = this.mainMedia.scrollLeft;
      const itemWidth = this.mediaItems[0]?.clientWidth || 0;
      const offset = scrollLeft + this.mainMedia.offsetLeft;

      let closestIndex = 0;
      let minDiff = Infinity;
      this.mediaItems.forEach((item, i) => {
        const diff = Math.abs(item.offsetLeft - offset);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      });

      this.scrollToMediaItem(closestIndex);
    }

    goToNext() {
      if (this.activeIndex < this.mediaItems.length - 1) {
        this.scrollToMediaItem(this.activeIndex + 1);
      }
    }

    goToPrev() {
      if (this.activeIndex > 0) {
        this.scrollToMediaItem(this.activeIndex - 1);
      }
    }

    scrollToMediaItem(index) {
      if (!this.mediaItems.length) return;
    
      this.mediaItems[this.activeIndex]?.classList.remove('active');
      this.thumbItems[this.activeIndex]?.classList.remove('active');
      this.pageItems[this.activeIndex]?.classList.remove('active');
      
      const video_player = this.mediaItems[this.activeIndex].querySelector('video-player');
      
      this.activeIndex = index;
      
      if (video_player) {
        video_player.pauseAllVideo();
      }
    
      this.mediaItems[this.activeIndex]?.classList.add('active');
      this.thumbItems[this.activeIndex]?.classList.add('active');
      this.pageItems[this.activeIndex]?.classList.add('active');
    
      const scrollLeft = this.mediaItems[this.activeIndex].offsetLeft - this.mainMedia.offsetLeft;
      this.mainMedia.scrollTo({ left: scrollLeft, behavior: 'smooth' });

      try {
          if (this.thumbSlider && this.thumbVertical && window.innerWidth > 768) {
            const thumbScroll = this.thumbItems[this.activeIndex].offsetTop - this.thumbSlider.offsetTop - ((this.thumbSlider.clientHeight / 2) - (this.thumbItems[this.activeIndex].clientHeight / 2));
            this.thumbSlider.scrollTo({ top: thumbScroll, behavior: 'smooth' });  
          } else {
            const thumbScroll = this.thumbItems[this.activeIndex].offsetLeft - this.thumbSlider.offsetLeft - ((this.thumbSlider.clientWidth / 2) - (this.thumbItems[this.activeIndex].clientWidth / 2));
            this.thumbSlider.scrollTo({ left: thumbScroll, behavior: 'smooth' });  
          }
        } catch (error) {
          console.log('error in thumb scroll', error);
        }
    }

    refresh(index = 0) {
      this.activeIndex = index;
      this.cacheElements();
      this.bindEvents();
    }

    createCustomCarouselSlide(data, isThumbnail = false) {
      const slideTag = isThumbnail ? 'thumb-slider-slide' : 'main-slider-slide';
      const slideClass = isThumbnail ? 'thumb-media-item' : 'main-media-item';
      const slide = document.createElement(slideTag);
      slide.className = slideClass;
      slide.id = isThumbnail ? undefined : `wwai-media-${data.id}`;
  
      const img = document.createElement('img');
      img.src = isThumbnail ? `${data.src}&width=${data.width}` : data.src;
      img.alt = data.alt || "Image";
      img.width = data.width;
      img.height = data.height;
      img.loading = 'lazy';
      img.className = isThumbnail ? 'thumb-media-img' : 'main-media-img';
  
      const srcset = isThumbnail
        ? `${data.src}&width=${data.width} ${data.width}w`
        : [
            `${data.src}&width=352 352w`,
            `${data.src}&width=832 832w`,
            `${data.src}&width=1200 1200w`,
            `${data.src}&width=1920 1920w`,
            `${data.src}&width=2561 2561w`
          ].join(', ');
  
      img.setAttribute('srcset', srcset);
      img.setAttribute('sizes', '(min-width: 1536px) 1500px,(min-width: 1280px) 1250px,(min-width: 768px) 994px,(min-width: 768px) 708px,(min-width: 640px) 610px,100vw');
  
      if (isThumbnail) {
        slide.setAttribute('data-handle', `media-${data.id}`);
        slide.setAttribute('data-img-id', data.src);
      }
  
      slide.appendChild(img);
      return slide;
    }

    gotoSlide(index) {
      console.log('isReinitializing4', index);
      if (!this.mediaItems.length) return;

      // We need to make sure that we use custom media config in functionality.
      // we can improve this by making clear slide not delete the pre injected media.
      let index_to_use = index;
      if (this.has_pre_injected_media) {
        index_to_use = index + 1;
      }

      if (index_to_use < 0) {
        const resolvedIndex = this.mediaItems.length + index;
        this.scrollToMediaItem(resolvedIndex);
      } else {
        this.scrollToMediaItem(index_to_use);
      }
    }

    clearSlides() {
      this.mainMedia.innerHTML = '';
      if (this.thumbSlider) {
        this.thumbSlider.innerHTML = '';
      }
      this.mediaItems = [];
      this.thumbItems = [];
      this.activeIndex = 0;
    }
  }
  
  customElements.define('carousel-slider', CarouselSlider);
}
