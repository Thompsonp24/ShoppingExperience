function fadeButtons() {
    $(document).ready(function(){
        $('nav a, footer a, button').mouseover(function(){
            $(this).fadeTo(150, 0.3);
        });
        $('nav a, footer a, button').mouseout(function(){
            $(this).fadeTo(150, 1);
        });
        $('nav a, footer a, button').click(function(){
            $(this).fadeTo(0, 1);
        });
    });
}
fadeButtons();