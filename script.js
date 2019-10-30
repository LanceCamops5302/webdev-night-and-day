

$(document).ready( function() {
    $('orb').click(function(){
       if($('body').hasClass('sun')) {
       $('body').removeClass('sun').addClass('moon');
    }
       else {
            $('body').removeClass('moon').addClass('sun');
       }
    });
    if ($('#sky').hasClass('day')) {}
});