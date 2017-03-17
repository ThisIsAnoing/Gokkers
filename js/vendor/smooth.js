$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});

jQuery(function($) {

    $('a.panel').click(function() {
        var $target = $($(this).attr('href')),
            $other = $target.siblings('.active'),
            animIn = function () {
                $target.addClass('active').show().css({
                    left: -($target.width())
                }).animate({
                    left: 0
                }, 500);
            };
        
        if (!$target.hasClass('active') && $other.length > 0) {
            $other.each(function(index, self) {
                var $this = $(this);
                $this.removeClass('active').animate({
                    left: -$this.width()
                }, 500, animIn);
            });
        } else if (!$target.hasClass('active')) {
            animIn();
        }
    });

});