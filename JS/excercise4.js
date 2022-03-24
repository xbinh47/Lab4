'use strict'
function backNextBtn() {
    $('.move-img').click(function () {
        let img = $('img');
        let index = parseInt(img.attr('src').substring(14,16));
        let imgSrc = "";
        if ($(this).val() == 'back') {
            index--;
            if (index == 0) {
                index = 10;
            }
        }
        if ($(this).val() == 'next') {
            index++;
            if (index == 11) {
                index = 1;
            }
        }
        if (index == 10) {
            imgSrc = "./images/pic_0" + index + ".jpg";
            img.attr("src", imgSrc);
            $('p').text("pic_0" + index + ".jpg");
        } else {
            imgSrc = "./images/pic_00" + index + ".jpg";
            img.attr("src", imgSrc);
            $('p').text("pic_00" + index + ".jpg (10/55)");
        }
    })
}

function slideShow() {
    var interval;
    $('#slideShow').click(function () {
        let img = $('img');
        let index = parseInt(img.attr('src').substring(14,16));
        if ($(this).val() == 'start-slideshow') {
            $('.move-img').attr('disabled','disabled');
            $(this).attr('value','stop-slideshow');
            $(this).text("Stop slide show");
            interval=setInterval(function(){
                let imgSrc = "";
                index++;
                if (index == 11) {
                    index = 1;
                }
                if (index == 10) {
                    imgSrc = "./images/pic_0" + index + ".jpg";
                    img.attr("src", imgSrc);
                    $('p').text("pic_0" + index + ".jpg");
                } else {
                    imgSrc = "./images/pic_00" + index + ".jpg";
                    img.attr("src", imgSrc);
                    $('p').text("pic_00" + index + ".jpg (10/55)");
                }
            },1000)
        }else{
            $('.move-img').removeAttr('disabled');
            $(this).attr('value','start-slideshow');
            $(this).text("Start slide show");
            clearInterval(interval);
        }
        
    })


}


// run function here

backNextBtn()
slideShow()