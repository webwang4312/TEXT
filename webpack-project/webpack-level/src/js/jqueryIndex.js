 require("expose-loader?$!jquery");
export const jqueryindex=function(){
    $(function() {
        $('.asideleft li').mouseenter(function(){
            $('.asideright li').eq($(this).index()).show().siblings().hide()  
        });
        $('.aside').mouseleave(function(){
            $('.asideright li').hide()  
        })

     })
}

