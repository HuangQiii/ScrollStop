$.fn.scrollstop=function(){
        return $(this).each(function(){
                $(this).on('mousewheel',function(event){
                        //console.log(event);
                        var scrollTop = this.scrollTop;
                        var scrollHeight = this.scrollHeight;
                        var height = this.clientHeight;
                        var delta = event.originalEvent.wheelDelta;

                        if((delta > 0 && scrollTop - delta <= 0) || (delta < 0 && scrollTop + height >= scrollHeight)){
                                this.scrollTop = delta > 0? 0: scrollHeight;
                                event.preventDefault();
                                //console.log(scrollTop,scrollHeight,height);
                        }
                })
        })
}