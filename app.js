let longMode = false
$('.disclaimer').hide()

$('body').keydown((event) => {
    
    if (event.which == 32) {
        $('.name').hide()
        $('.position').hide()
        $('.btn-return').removeAttr('disabled') 
    } 
})

$('.btn').on('click', (event) => {
    event.stopPropagation()
    if ($('.btn').html() == "Развернуть"){
        $('.btn').html('Свернуть')
        } else {$('.btn').html("Развернуть")}
    $('.disclaimer').slideToggle(250)
    $('.menu').toggleClass('active')
    $('.btn').toggleClass('up')
})

$('.btn-return').on('click', (event) => {
    event.stopPropagation()
    $('.name').show().removeClass('hide')
    $('.position').show().removeClass('hide')
    $('.btn-return').attr('disabled', true)
})

$('.menu input').on('click', (event) => {
    event.stopPropagation()
    longMode = !longMode
    $('.name').show().removeClass('hide')
    $('.position').show().removeClass('hide')
})


    $('.name-and-position').on('click', function(){
        if (longMode) { 
        $('.name').toggleClass('hide')
        $('.position').toggleClass('hide')    
    }})
 