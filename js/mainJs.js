console.log($(document).width()) //remove Me after Finishing this shit
$("header, .sec2").css("height", $(window).height())
$(".fa-bars").on("click",_=>{
    let state = $("aside").width()
    if(state =="0"){
        $("aside").animate({width: "100%"}, 500, _=>{
            $(".fa-bars").hide()
            $(".fa-times").show()
            $(".subCont").fadeIn(800)
        })
    }
})
$(".fa-times").on("click",_=>{
    closeSubMenu()
})
let closeSubMenu = _=>{
    $(".fa-times").show()
    $(".subCont").fadeOut(500, _=>{
        $("aside").animate({width: "0"}, 500, _=>{
            $(".fa-bars").show()
            $(".fa-times, .subCont").hide()
        })
    })
}
$(window).scroll(_=>{
    let scrollValue = $(document).scrollTop()
    if(scrollValue >= $(window).height()){
        $(".top").fadeIn()
    } else{
        $(".top").fadeOut()
    }
})
let toTop = (p)=>{
    $("html, body").animate({scrollTop: p}, 1000)
}
$(".fa-angle-double-down").on("click", _=>{
    toTop($(window).height())
})
$(".top").on("click", _=>{toTop(0)})
$(window).on("load", _=>{
    toTop(0)
})
$("#contact, #contact2").on("click", _=>{
    $(".contSec").fadeIn()
})
$("#closeContact").on("click", _=>{
    $(".contSec").fadeOut()
})
$(".subHome").on("click", _=>{
    closeSubMenu()
    setTimeout(_=>{
        toTop(0)
    }, 1000)
})
$(".subAbout").on("click", _=>{
    closeSubMenu()
    setTimeout(_=>{
        toTop($(window).height())
    }, 1000)
    Setti
})
$(".sumContact").on("click", _=>{
    closeSubMenu()
    setTimeout(_=>{
        $(".contSec").fadeIn()
    }, 1000)
})
$("#home").css("border-bottom", "2px solid #df0021").on("click", _=>{
    toTop(0)
})
$("#about").on("click", _=>{
    toTop($(window).height())
})
$("#contact").on("click", _=>{
    $(".contSec").fadeIn()
})