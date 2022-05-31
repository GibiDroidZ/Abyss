//Get the button
var scrollToTop = document.getElementById("goToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

$(function() {
  $("#generateImage").click(function() {

    //html2canvas(document.getElementById('GenshinCard')).then(function(canvas) {
  //    document.getElementById('cardExportImage').appendChild(canvas);
    //});
var container = document.body;
    html2canvas(container,{allowTaint : true}).then(function(canvas) {
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "html_image.png";
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
              });
  });
});

function downloadimage() {
  //var container = document.getElementById("image-wrap"); //specific element on page
  var container = document.getElementById("GenshinCard");; // full page
  html2canvas(container, {
    allowTaint: true
  }).then(function(canvas) {

    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
  });
}

var type;
for (var i = 0; i < charList.length; i++) {

  switch (charList[i].vision) {
    case 'Pyro':
      type = 'Pyro';
      break;

    case 'Cryo':
      type = 'Cryo';
      break;

    case 'Electro':
      type = 'Electro';
      break;

    case 'Hydro':
      type = 'Hydro';
      break;

    case 'Geo':
      type = 'Geo';
      break;

    case 'Anemo':
      type = 'Anemo';
      break;

    case 'Dendro':
      type = 'Dendro';
      break;
    default:

  }

  //$('#charList').append('<div class="col l2 dePad"><div class="characters Star' + charList[i].rarity + '"><div class="' + charList[i].vision + 'Vision vision"></div><input type="checkbox" id="' + charList[i].label + '" name="' + charList[i].label + '" value="' +charList[i].label + '" class="reset-checkbox filter"><img src="Characters/' + charList[i].label + '.png" /></div></div>');
  $('#charList').append('<div class="col l2 dePad"><div class="characters Star' + charList[i].rarity + '"><div class="' + charList[i].vision + 'Vision vision"></div><input type="checkbox" id="' + charList[i].label + '" name="' + charList[i].label + '" value="' + charList[i].label + '" class="reset-checkbox filter"><div class="charPic charPic-' + charList[i].label + '"></div></div></div>');
}

var newBG;

$('.characters input').click(function() {
  if ($(this).is(':checked')) {
    //$('#CharacterInfo').append('');
    newBG = $(this).next().css('background-image').replace('/Gray', '');
    $(this).next().css('background-image', newBG);
    $(this).parent().addClass('hover');
  }

  else {
    newBG = $(this).next().css('background-image').replace('/Characters', '/Characters/Gray');
    $(this).next().css('background-image', newBG);
    $(this).parent().removeClass('hover');
  }
});

$('.applyCardDetails').click(function() {
  $('.card_title').html($('.cardTitle').val());
  $('.card_owner').html($('.cardOwner').val());
  $('.card_ARank').html($('.cardARank').val());
  $('.card_UID').html($('.cardUID').val());
  $('.card_sign').html($('.cardSign').val());
});
