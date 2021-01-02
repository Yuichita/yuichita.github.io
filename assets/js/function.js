'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });


  var slides = document.getElementsByClassName('slides')[0].getElementsByTagName('li');

//スライド表示用の関数を呼び出す（引数はスライドの切り替え時間）
  viewSlide(2000);

  function viewSlide(msec, slideCount = -1)
{
	//現在のスライドを消す
	if (slides[slideCount]) {
		slides[slideCount].style.display = 'none';
	}
	//スライド番号をカウントアップ
	slideCount++;
	if (slides[slideCount]) {
		//次のスライドを表示
		slides[slideCount].style.display = 'block';
	} else {
		//次のスライドがなければ最初のスライドを表示
		slides[1].style.display = 'block';
		slideCount = 0;
	}
	setTimeout(function(){viewSlide(msec, slideCount);}, msec);
}

$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


}

