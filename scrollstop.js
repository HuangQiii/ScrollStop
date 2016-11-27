$.fn.scrollstop=function(){
        return $(this).each(function(){
                var eventType = 'mousewheel';
                if (document.mozHidden !== undefined) {
                    eventType = 'DOMMouseScroll';
                }
                $(this).on(eventType,function(event){
                        //console.log(event);
                        var scrollTop = this.scrollTop,
                            scrollHeight = this.scrollHeight,
                            height = this.clientHeight;

                        var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

                        if((delta > 0 && scrollTop - delta <= 0) || (delta < 0 && scrollTop + height >= scrollHeight)){
                                this.scrollTop = delta > 0? 0: scrollHeight;
                                event.preventDefault();
                                //console.log(scrollTop,scrollHeight,height);
                        }
                })
        })
}