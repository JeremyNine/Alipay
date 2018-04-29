$(function(){
    $(".li_logo:nth-child(2)").click(function () {
        $(".li_divblock1").css(
            {"display":"block"}
        )
    })
    $(".li_divblock1").mouseleave(function () {
        $(".li_divblock1").css(
            {"display":"none"}
        )
    })
    $(".close").click(function () {
        $(".li_divblock1").css(
            {"display":"none"}
        )
    })
    $(".li_logo:nth-child(3)").click(function () {
        $(".li_divblock2").css(
            {"display":"block"}
        )
    })
    $(".li_divblock2").mouseleave(function () {
        $(".li_divblock2").css(
            {"display":"none"}
        )
    })
    $(".close").click(function () {
        $(".li_divblock2").css(
            {"display":"none"}
        )
    })
    $(".li_logo:nth-child(4)").click(function () {
        $(".li_divblock3").css(
            {"display":"block"}
        )
    })
    $(".li_divblock3").mouseleave(function () {
        $(".li_divblock3").css(
            {"display":"none"}
        )
    })
    $(".close").click(function () {
        $(".li_divblock3").css(
            {"display":"none"}
        )
    })


})