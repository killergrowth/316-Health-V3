/* custom.js — KillerGrowth 316 Health Insurance
   Loaded after script.js. Overrides accordion with a clean single handler.
   ------------------------------------------------------------------- */
$(document).ready(function () {

  // Accordion — clean override
  // The template's script.js binds the handler twice (two identical blocks),
  // causing a double-fire bug. We neutralize those and replace with one handler.
  if ($('.accordion-box').length) {
    // Remove any existing delegated accordion click handlers
    $('.accordion-box').off('click', '.acc-btn');

    $('.accordion-box').on('click', '.acc-btn', function () {
      var $btn     = $(this);
      var $box     = $btn.closest('.accordion-box');
      var $item    = $btn.closest('.accordion');
      var $content = $btn.next('.acc-content');

      if ($btn.hasClass('active')) {
        // Collapse this item
        $btn.removeClass('active');
        $item.removeClass('active-block');
        $content.slideUp(300);
      } else {
        // Collapse all other open items in this box
        $box.find('.acc-btn').removeClass('active');
        $box.find('.accordion').removeClass('active-block');
        $box.find('.acc-content').slideUp(300);
        // Open clicked item
        $btn.addClass('active');
        $item.addClass('active-block');
        $content.slideDown(300);
      }

      return false;
    });
  }

});
