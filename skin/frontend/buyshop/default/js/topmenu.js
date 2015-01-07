jQuery(function(){
    
    initialize();

    //adding click events for previous and next topmenu navigation
    jQuery('#topmenu-nav-prev').click(function(){
            var firstElement = jQuery('#megamenu > ul > li.first:visible');
            if(firstElement.length == 0)
                prevNextNavigation();
            return false;
    });

    jQuery('#topmenu-nav-next').click(function(){
            var lastElement = jQuery('#megamenu > ul > li.last:visible');
            if(lastElement.length == 0)
                prevNextNavigation();
            return false;
    });

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
                topMenuDefaultsSettings();    
            }
        });

        if ( jQuery(document).width() >= 965 && !jQuery('#spy').hasClass('fix')) {
            topMenuDefaultsSettings();
        }

        changesForFixTopmenu();
    }

    //adding prev and next navigation for top menu
    function topMenuDefaultsSettings()
    {   jQuery('#topmenu-navigation').show();
        var $megamenuListItems = jQuery('#megamenu').children().children('li');
        var firstElementPosition = $megamenuListItems.first().position().top;   
        jQuery.each($megamenuListItems, function(index, value )
        {
             if(firstElementPosition != jQuery(this).position().top)
               jQuery(this).hide();     
        });
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
                jQuery('#megamenu').children().children('li').show();
                jQuery('#topmenu-navigation').hide();
            }else{

                jQuery('#topmenu-navigation').show();
                topMenuDefaultsSettings();
            }
        })
    }

    //hiding the navigation list items according to previous and next navigation click.
    function prevNextNavigation()
    {
        var visibleListItems = jQuery('#megamenu > ul > li:visible');
        var hiddenListItems = jQuery('#megamenu > ul > li:hidden');
        visibleListItems.hide();
        hiddenListItems.show();
    }
});

