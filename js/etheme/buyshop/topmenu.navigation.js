jQuery(function(){
    var $activeMenuParent = '.header_wrapper' ;     
    initialize();
    //adding click events for previous and next topmenu navigation
    jQuery('#topmenu-nav-prev').click(function(){
        doPrevNextNavigation('first');
    });

    jQuery('#topmenu-nav-next').click(function(){
        doPrevNextNavigation('last');
    });
    
     jQuery('#header-nav-prev').click(function(e){
        e.preventDefault();
        doPrevNextNavigation('first');
    });

    jQuery('#header-nav-next').click(function(e){
        e.preventDefault();
        doPrevNextNavigation('last');
    });
    
    function doPrevNextNavigation(position)
    {
        var lastElement = jQuery($activeMenuParent).find('#megamenu > ul > li.'+position+':visible');
            if(lastElement.length == 0)
            {    prevNextNavigation();
                return true;
        }
            else{
            return false;}
    }

    function initialize()
    {
        //menu change on resizing window mobile view(width < 965)
        jQuery(window).resize(function(){
            if(jQuery(window).width() < 965)
            {   
                jQuery('#topmenu-navigation').hide();
            }
            else if(jQuery(document).width() >= 965 && !jQuery('#spy').hasClass('fix'))
            {
                menuDefaultSettings();    
            }
        });

        if ( jQuery(document).width() >= 965 && !jQuery('#spy').hasClass('fix')) {
            menuDefaultSettings();
        }

        changesForFixTopmenu();
    }

    //adding prev and next navigation for top menu
    function menuDefaultSettings()
    {   
        if($activeMenuParent == '.header_wrapper')
        {
            jQuery('#topmenu-navigation').show();
        }
        if(jQuery($activeMenuParent).find('#megamenu').length > 0)
        {
            var $megamenuListItems = jQuery($activeMenuParent).find('#megamenu').children().children('li');
            var firstElementPosition = $megamenuListItems.first().position().top;   
            jQuery.each($megamenuListItems, function(index, value )
            {
                 if(firstElementPosition != jQuery(this).position().top)
                   jQuery(this).hide();     
            });
        }
    }

    //removing previous and next navigation for fix top menu that comes while scrolling window
    function changesForFixTopmenu()
    {
        jQuery(window).scroll(function(){
            if(jQuery(document).width() < 965)
            {
                jQuery('#topmenu-navigation').hide();
            }
            else if(jQuery('#spy').hasClass('fix'))
            {
                //jQuery('#megamenu').children().children('li').show();
                jQuery('#topmenu-navigation').hide();
                $activeMenuParent = '#spy' ;
                //menuDefaultSettings();
            }else{

                jQuery('#topmenu-navigation').show();
                $activeMenuParent = '.header_wrapper' ;
                menuDefaultSettings();
            }
        })
    }

    //hiding the navigation list items according to previous and next navigation click.
    function prevNextNavigation()
    {
        var visibleListItems = jQuery($activeMenuParent).find('#megamenu > ul > li:visible');
        var hiddenListItems = jQuery($activeMenuParent).find('#megamenu > ul > li:hidden');
        visibleListItems.hide();
        hiddenListItems.show();
    }
});

