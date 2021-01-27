var $header_top = $('.header-top');
var $nav = $('nav');
 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
 
$('#fullpage').fullpage({
  sectionsColor: ['#fff', '#000', '#ff8b20', '#ff5757', '#ffd03c'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',
 
  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(256, 256, 256, 0)');
    $nav.css('background', 'rgba(256, 256, 256, 0)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },
 
  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },
 
 
});


// navbar

const menuBtn =  
        document.querySelector(".menu-btn"); 
  
    const menu =  
        document.querySelector(".menu"); 
  
    const menuNav =  
        document.querySelector(".menu-nav"); 
  
    const menuBranding =  
        document.querySelector(".menu-branding"); 
  
    const navItems =  
        document.querySelectorAll(".nav-item"); 
  
    // Set the initial state of the menu 
    let showMenu = false; 
  
    menuBtn.addEventListener("click", toggleMenu); 
  
    function toggleMenu() { 
        if (!showMenu) { 
            menuBtn.classList.add("close"); 
            menu.classList.add("show"); 
            menuNav.classList.add("show"); 
            menuBranding.classList.add("show"); 
            navItems.forEach((item) => 
                item.classList.add("show")); 
  
            // Reset the menu state 
            showMenu = true; 
        } else { 
            navItems.forEach((item) => 
                item.classList.remove("show")); 
            menuBtn.classList.remove("close"); 
            menu.classList.remove("show"); 
            menuNav.classList.remove("show"); 
            menuBranding.classList.remove("show"); 
            
  
            // Reset the menu state 
            showMenu = false; 
        } 
    } 