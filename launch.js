if(FlashDetect.installed === false){
  document.getElementById("embed").innerHTML = '<span>Hey Bud,<br>Flash does not appear to be working<br><a href="https://www.supersmashflash.com/how-to-enable-flash" target="_blank">Click here</a> for help fixing it!</span>';
} else {
  var el = document.getElementById("embed");
  swfobject.embedSWF("reimu.swf", el, 660, 480, 11);
}