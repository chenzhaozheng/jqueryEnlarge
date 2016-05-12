(function($){
    $.fn.enlarge = function(options){
        var settings = $.extend({}, {zoomSize:'1.5',zoomSpeed:'500'}, options),
            wd = $(this).width(),
            hg = $(this).height(),
            zoomSize = settings.zoomSize;
            zoomSpeed = settings.zoomSpeed;
            lf = ( wd * zoomSize - wd ) / 2 * (-1)+'px',
            tp = ( wd * zoomSize - wd ) / 2 * (-1)+'px';
        return this.each(function(){
            var imgs = $(this).children('img');
            imgs.hover(onHover);
            imgs.mouseout(onMouseout);
        });
        function onHover(){
            $(this).animate({
                width:wd * zoomSize,
                height:hg * zoomSize,
                left:lf,
                top:tp
            },zoomSpeed);
            return false;
        }
        function onMouseout(){
            $(this).animate({
                width:wd,
                height:hg,
                left:'0px',
                top:'0px'
            },(zoomSpeed-300));
            return false;
        }
    }
})(jQuery);