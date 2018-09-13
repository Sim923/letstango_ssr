// JavaScript Document

//MEGA MENU DROPWN ON HOVER


$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).delay(200).fadeIn(500);
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).delay(200).fadeOut(500);
            $(this).toggleClass('open');       
        }
    );
	

});


function initializeMenu () {

$(document).ready(function(){
$('#head-serach').on('input', function() { 

  console.log($(this).val())

    var x = document.getElementById("talkbubble");
    if ($(this).val().length>1) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

});
});
}





 // function showSerachMenu(length){
 //    if(length<1)
 //    $( "#talkbubble" ).toggle( "slide" );
 //  } 




//MEGA MENU DROPWN ON HOVER END

//TOUCH ENABLE FOR HERO SLIDER
//$(document).ready(function() {
//   $("#myCarousel").swiperight(function() {
//      $(this).carousel('prev');
//    });
//   $("#myCarousel").swipeleft(function() {
//      $(this).carousel('next');
//   });
//});


//   $(document).ready(function() {  
//  		 $(".carousel-inner").swiperight(function() {  
//    		  $(this).parent().carousel('prev');  
//	    		});  
//		   $(".carousel-inner").swipeleft(function() {  
//		      $(this).parent().carousel('next');  
//	   });  
//	}); 

//TOUCH ENABLE FOR HERO SLIDER END


//COUNT DOWN

$( document ).ready(function() {
  setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  if((hours + '').length == 1){
    hours = '0' + hours;
  }
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#countdown #hour').html(hours);
  jQuery('#countdown #min').html(min);
  jQuery('#countdown #sec').html(sec);
}, 1000); 




	/************************/
/*** WEBSITE CONTENTS ***/
/************************/
/*
    Primary Menu toggle feature for tablets and mobile resolutions
*/
	
	$('#mob-menu').on('click tap', function (e) {
		console.log('test');
        e.preventDefault();
        $('#header-base .nav-bar').toggleClass('active');
        $('body').toggleClass('animate');
        $('html, body').css({'height':'100%','overflow-y':'hidden'});
		
    });
	
	
	
	

		$('.body-overlay, #primary-menu .nav-header .nav-bar').on('click tap swipeleft swiperight', function () {
	
			setTimeout(function(){
				$('html, body').css({'height':'auto','overflow-y':'auto'});
				$('body').removeClass('animate');
				$('#header-base .nav-bar').removeClass('active');
			}, 20)
			$('ul.nav-category li').removeClass('target selected child-selected child-target child-nav-active');
		});
		
		
		
		 $(window).on('scroll', function() {
        if( $("#main-header").hasClass('sticky-top')) {
            $('#wraper').find('#header-base').addClass('transform');
        } else {
            $('#wraper').find('#header-base').removeClass('transform');
        }
    });
	
	
	
 /*
        Primary Menu Mobile Functionality
    */
    checkSize();

    $(window).resize(checkSize);

    function checkSize() {
        if($('#primary-menu li.nav-header').css('display') == "flex") {
            $('#primary-menu .category-wrapper > a').on('click tap', function(e) {
               e.preventDefault();
                var anchorElement = $(this);
               setTimeout(function() {
                  $('ul.nav-category > li:not(:first-child)').toggleClass('target');
                $(anchorElement).parent('li').toggleClass('selected');
               }, 500);

            });

            $('#primary-menu .nav-subcategory > li:not(".list-header") > a').on('click tap', function(e) {
                e.preventDefault();
                var anchorElement = $(this);
                setTimeout(function() {
                    $('#primary-menu').find('.category-wrapper.target.selected').toggleClass('child-nav-active');
                $('ul.nav-subcategory > li:not(:first-child)').toggleClass('child-target');
                $(anchorElement).parent('li').toggleClass('child-selected');
                }, 500);

            });
        }
    }
	
	
	


});

//COUNT DOWN END








//DROP DOWN SELECTION PRODUCT PAGE





//FLOATING CART HEADER

/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav#floater').addClass('fixed-header');
        $('nav#floater div.floater').addClass('visible-floating-cart');
    }
    else {
        $('nav#floater').removeClass('fixed-header');
        $('nav#floater div.floater').removeClass('visible-floating-cart');
    }
})


//<!--COMPAI PRODUCT PULL RIGHT
//-->
function showSimilarProducts() {
    document.getElementById("mySidenav_new").style.width = "320px";
	 document.getElementById("mySidenav_new").style.right = "0px";
	document.getElementById("mySidenav-bg").style.display = "block";
	document.getElementById("mySidenav-bg").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function hideSimilarProducts() {
    document.getElementById("mySidenav_new").style.width = "0";
	 document.getElementById("mySidenav_new").style.right = "-30px";
	document.getElementById("mySidenav-bg").style.display = "none";
	document.getElementById("mySidenav-bg").style.backgroundColor = "transparent";
}



//<!--FILTER MOB PRODUCT PULL RIGHT
//-->
function openNav(type) {
	if(type=="filter"){
    document.getElementById("left_filter").style.width = "100%";
	 document.getElementById("left_filter").style.right = "0px";
	}
	else if (type=="sort"){
	 document.getElementById("sortby-mob").style.bottom = "20px";
	}
}

function closeNav(type) {
	
	if(type=="filter"){
    document.getElementById("left_filter").style.width = "0";
	 document.getElementById("left_filter").style.right = "-30px";
	}
	else if (type=="sort"){
	 document.getElementById("sortby-mob").style.bottom = "-100%";
	}
	
    

}





//$(window).scroll(function(){
//    if ($('#left_filter').scrollTop() >= 50) {
//        $('nav#floater-filter').addClass('fixed-header');
//        $('nav#floater-filter div.floater-filter').addClass('visible-floating-cart');
//    }
//    else {
//        $('nav#floater-filter').removeClass('fixed-header');
//        $('nav#floater-filter div.floater-filter').removeClass('visible-floating-cart');
//    }
//})



//<!--SORT BY PULL BOTTOM
//-->
//function openNav() {
//	 document.getElementById("sortby-mob").style.bottom = "0px";
//
//}
//
//function closeNav() {
//	 document.getElementById("sortby-mob").style.bottom = "-100px";
//
//}





//SMOOOTH SCROLL

window.smoothScroll = function(target) {
    
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY-100, 0);
    
}









// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      if( document.getElementById("header-base")!= null )
        document.getElementById("header-base").style.top = "0";
        
        if( document.getElementById("hero-slider")!= null )
		    document.getElementById("hero-slider").style.marginTop = "0px";
    } else {
		
	if($(window).width() < 1500) {
		 if( document.getElementById("header-base")!= null )
      document.getElementById("header-base").style.top = "70px";

        if( document.getElementById("hero-slider")!= null )
		      document.getElementById("hero-slider").style.marginTop = "48px";
		}
		
		else{
       if( document.getElementById("header-base")!= null )
			     document.getElementById("header-base").style.top = "85px";

                 if( document.getElementById("hero-slider")!= null )
				 document.getElementById("hero-slider").style.marginTop = "48px";
		}
		
   
    }

}



//ARABIC SWITH



function changelanguage(lan) {
	 if (lan=="ar"){
		 $('body').addClass('rtl');
		 document.documentElement.setAttribute("lang", "ar");
	 }
	 else {
		 $('body').removeClass('rtl');
		 document.documentElement.setAttribute("lang", "en");
	 }
}


/** **/



// ALERT MESSAGE


$(function(value,val) {
  Alert = {
    show: function($div, msg) {
      $div.find('.alert-msg').text(msg);
      if ($div.css('display') === 'none') {
        // fadein, fadeout.
        $div.fadeIn(1000).delay(2000).fadeOut(2000);
      }
    },
    info: function(msg) {
      this.show($('#alert-info'), msg);
    },
    warn: function(msg) {
      this.show($('#alert-warn'), msg);
    }
  }
  $('body').on('click', '.alert-close', function() {
  	$(this).parents('.alert').hide();
  });
  $('#info').click(function() {
    Alert.info(val)
  });
  $('#warn').click(function() {
    Alert.warn('Please enter valid Email ID')
  });
});



//OTP FORM



$(document).ready(function() {
            $('#pincode-input1').pincodeInput({hidedigits:false,complete:function(value, e, errorElement){
            	
            	$("#pincode-callback").html("This is the 'complete' callback firing. Current value: " + value);
            	
            	// check the code
            	if(value!="1234"){
            		$(errorElement).html("The code is not correct. Should be '1234'");
            	}else{
            		alert('code is correct!');
            	}
            	
            }});
            $('#pincode-input5').pincodeInput({hidedigits:true,inputs:4,placeholders:"0 0 0 0",change: function(input,value,inputnumber){
            	$("#pincode-callback2").html("onchange from input number "+inputnumber+", current value: " + value);
            }});
            $('#pincode-input4').pincodeInput({hidedigits:false,inputs:4});
            $('#pincode-input3').pincodeInput({hidedigits:false,inputs:5});
            $('#pincode-input2').pincodeInput({hidedigits:false,inputs:6,complete:function(value, e, errorElement){
            	$("#pincode-callback").html("Complete callback from 6-digit test: Current value: " + value);
            	
            	$(errorElement).html("I'm sorry, but the code not correct");
            }});
            
            
        });

//SELECT SEARCH


 $(document).ready(function () {
    var mySelect = $('#first-disabled2');

    $('#special').on('click', function () {
      mySelect.find('option:selected').prop('disabled', true);
      mySelect.selectpicker('refresh');
    });

    $('#special2').on('click', function () {
      mySelect.find('option:disabled').prop('disabled', false);
      mySelect.selectpicker('refresh');
    });

    $('#basic2').selectpicker({
      liveSearch: true,
      maxOptions: 1
    });
  });
  
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

  })();




/* file */
"function"!=typeof Object.create&&(Object.create=function(t){function o(){}return o.prototype=t,new o}),function(t,o){"use strict";var i={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(o){this.prepareOptions(o,t.toast.options),this.process()},prepareOptions:function(o,i){var s={};"string"==typeof o||o instanceof Array?s.text=o:s=o,this.options=t.extend({},i,s)},process:function(){this.setup(),this.addToDom(),this.position(),this.bindToast(),this.animate()},setup:function(){var o="";if(this._toastEl=this._toastEl||t("<div></div>",{"class":"jq-toast-single"}),o+='<span class="jq-toast-loader"></span>',this.options.allowToastClose&&(o+='<span class="close-jq-toast-single">&times;</span>'),this.options.text instanceof Array){this.options.heading&&(o+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),o+='<ul class="jq-toast-ul">';for(var i=0;i<this.options.text.length;i++)o+='<li class="jq-toast-li" id="jq-toast-item-'+i+'">'+this.options.text[i]+"</li>";o+="</ul>"}else this.options.heading&&(o+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),o+=this.options.text;this._toastEl.html(o),this.options.bgColor!==!1&&this._toastEl.css("background-color",this.options.bgColor),this.options.textColor!==!1&&this._toastEl.css("color",this.options.textColor),this.options.textAlign&&this._toastEl.css("text-align",this.options.textAlign),this.options.icon!==!1&&(this._toastEl.addClass("jq-has-icon"),-1!==t.inArray(this.options.icon,this._defaultIcons)&&this._toastEl.addClass("jq-icon-"+this.options.icon))},position:function(){"string"==typeof this.options.position&&-1!==t.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:t(o).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:t(o).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:t(o).outerWidth()/2-this._container.outerWidth()/2,top:t(o).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"==typeof this.options.position?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left")},bindToast:function(){var t=this;this._toastEl.on("afterShown",function(){t.processLoader()}),this._toastEl.find(".close-jq-toast-single").on("click",function(o){o.preventDefault(),"fade"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))}),"function"==typeof this.options.beforeShow&&this._toastEl.on("beforeShow",function(){t.options.beforeShow()}),"function"==typeof this.options.afterShown&&this._toastEl.on("afterShown",function(){t.options.afterShown()}),"function"==typeof this.options.beforeHide&&this._toastEl.on("beforeHide",function(){t.options.beforeHide()}),"function"==typeof this.options.afterHidden&&this._toastEl.on("afterHidden",function(){t.options.afterHidden()})},addToDom:function(){var o=t(".jq-toast-wrap");if(0===o.length?(o=t("<div></div>",{"class":"jq-toast-wrap"}),t("body").append(o)):(!this.options.stack||isNaN(parseInt(this.options.stack,10)))&&o.empty(),o.find(".jq-toast-single:hidden").remove(),o.append(this._toastEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var i=o.find(".jq-toast-single").length,s=i-this.options.stack;s>0&&t(".jq-toast-wrap").find(".jq-toast-single").slice(0,s).remove()}this._container=o},canAutoHide:function(){return this.options.hideAfter!==!1&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||this.options.loader===!1)return!1;var t=this._toastEl.find(".jq-toast-loader"),o=(this.options.hideAfter-400)/1e3+"s",i=this.options.loaderBg,s=t.attr("style")||"";s=s.substring(0,s.indexOf("-webkit-transition")),s+="-webkit-transition: width "+o+" ease-in;                       -o-transition: width "+o+" ease-in;                       transition: width "+o+" ease-in;                       background-color: "+i+";",t.attr("style",s).addClass("jq-toast-loaded")},animate:function(){var t=this;if(this._toastEl.hide(),this._toastEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._toastEl.fadeIn(function(){t._toastEl.trigger("afterShown")}):"slide"===this.options.showHideTransition.toLowerCase()?this._toastEl.slideDown(function(){t._toastEl.trigger("afterShown")}):this._toastEl.show(function(){t._toastEl.trigger("afterShown")}),this.canAutoHide()){var t=this;o.setTimeout(function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden")})):"slide"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden")})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden")}))},this.options.hideAfter)}},reset:function(o){"all"===o?t(".jq-toast-wrap").remove():this._toastEl.remove()},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindToast()}};t.toast=function(t){var o=Object.create(i);return o.init(t,this),{reset:function(t){o.reset(t)},update:function(t){o.update(t)}}},t.toast.options={text:"",heading:"",showHideTransition:"fade",allowToastClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}}}(jQuery,window,document);



/* Starts from here */
function showErrorToast(title,message){
  $.toast({
  heading: title,
  text: message,
  icon: 'error',
  loader: false,
  loaderBg: '#fff',
  showHideTransition: 'slide',
  hideAfter: 3000,
  position: {
    left: 100,
    top: 30
  }
})
}

function showSuccessToast(title,message){
  $.toast({
    heading:title,
    text:message,
    icon:'success',
    loader: false,
    loaderBg: '#fff',
    showHideTransition: 'slide',
    hideAfter: 3000,
    allowToastClose: false,
    position: {
      left:100,
      top:30
    }
  })
}

function showWarning(title,message){
  $.toast({
    heading:title,
    text:message,
    icon:'info',
    loader: false,
    loaderBg: '#fff',
    showHideTransition: 'slide',
    hideAfter: 3000,
    allowToastClose: false,
    position: {
      left:100,
      top:30
    }
  })
}

$("#warning").click(function(){
  $.toast({
    heading:'Warning',
    text:'You cant do that!',
    icon:'warning',
    loader:false,
    hideAfter: false,
    allowToastClose: true,
    position: {
      left:100,
      top:30
    }
  })
})




















