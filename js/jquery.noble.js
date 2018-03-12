;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function getParameterByName( name ){
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if( results == null )
		return "";
		else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function fixHeader(){
		if($("body").hasClass("home")){
			$(window).on("scroll", function(){
				var topScroll = $(this).scrollTop();
				if(topScroll >= 100){
					$(".homeNavBg").addClass("activeBg");
					//$(".header").addClass("fixHeader");
				}
				else{
					$(".homeNavBg").removeClass("activeBg");
					//$(".header").removeClass("fixHeader");
				}
			});
		}
	}

	function bannerText(){
		$(".bannerInner h2").css({opacity:0});
		$(".bannerInner h2").waypoint(function() {
            $(".bannerInner h2").css({opacity:1});
            
            TweenMax.from($(this), 1, {scale:0, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
        },{
            offset: '50%',
            triggerOnce: true
        });
	}

	function checkQString(){
		var field = 'tab';
		var url = window.location.href;
		if(url.indexOf('?' + field + '=') != -1)
		    return true;
		else if(url.indexOf('&' + field + '=') != -1)
		    return true;
		return false
	}

	function tabs(){
		var index = getParameterByName("tab"),
			isQ = checkQString();
		if(isQ){
			$(".tabContent").eq(index).slideDown(300);
		}else{
			$(".tabContent").eq(0).slideDown(300);
		}
		$(".tabs li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".tabContent").slideUp(300);
				$(target).slideDown(300);
				return false;
			});
		});
	}

	function whatTheySayTabs(){
		$(".year").eq(0).slideDown(0);
		$(".yearList li a").eq(0).addClass("activeYear");
		$(".yearList li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".year").slideUp(0);
				$(".activeYear").removeClass("activeYear");
				$(this).addClass("activeYear");
				$(target).slideDown(0);
				return false;
			});
		});
	}

	function whatTheySayDetailsTabs(){
		$(".hotelDetailsTabContent").eq(0).slideDown(0);
		$(".hotelNav li a").eq(0).addClass("activeHotel");
		$(".hotelNav li a").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".hotelDetailsTabContent").slideUp(0);
				$(".activeHotel").removeClass("activeHotel");
				$(this).addClass("activeHotel");
				$(target).slideDown(0);
				return false;
			});
		});
	}

	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(".topNav").stop(true, true).slideDown(300);
			}
			else{
				$(".topNav").stop(true, true).slideUp(300);
			}
		});
	}



	$(function(){
		if(!device){
			bannerText();
		}
		fixHeader();
		mobileNav();
		tabs();
		whatTheySayTabs();
		whatTheySayDetailsTabs();
	});

})(jQuery);




