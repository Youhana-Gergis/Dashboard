$(document).ready(function(){
    $('#layout').click(function(){
        $('.layout-item').fadeToggle();
    });
    $('#active').click(function(){
        $('.dashbard-item').fadeToggle();
    });
    $('#app').click(function(){
        $('.App-items').fadeToggle();
    });
    $('#page').click(function(){
        $('.page-item').fadeToggle();
    });
    $('#component').click(function(){
        $('.component-item').fadeToggle();
    });
    $('#crm').click(function(){
        $('.crm-task').fadeIn();
    });
    $('.crm-task').mouseleave(function(){
        $('.crm-task').fadeOut();
    });
    $('#ecommerce-toggle').click(function(){
        $('.ecommerce-task').fadeIn();
    });
    $('.ecommerce-task').mouseleave(function(){
        $('.ecommerce-task').fadeOut();
    });
    $('#email-toggle').click(function(){
        $('.email-task').fadeIn();
    });
    $('.email-task').mouseleave(function(){
        $('.email-task').fadeOut();
    });
    $('#project-toggle').click(function(){
        $('.project-task').fadeIn();
    });
    $('.project-task').mouseleave(function(){
        $('.project-task').fadeOut();
    });
    $('#task-toggle').click(function(){
        $('.tasks-task').fadeIn();
    });
    $('.tasks-task').mouseleave(function(){
        $('.tasks-task').fadeOut();
    });
    $('#authen').click(function(){
        $('.page-toggle').fadeIn();
    });
    $('.page-toggle').mouseleave(function(){
        $('.page-toggle').fadeOut();
    });
    $('#error').click(function(){
        $('.error-toggle').fadeIn();
    });
    $('.error-toggle').mouseleave(function(){
        $('.error-toggle').fadeOut();
    });
    $('#handle-youhana').click(function(){
        $('.profile-admin').fadeToggle();
    });
    $('#handle-you').click(function(){
        $('.profile-admin').fadeToggle();
    });



    $('.menu-bar').css('display','none')
    $('.bar').click(function(){
        $('.menu-bar').slideToggle(300);
        $('.menu-bar').css('display','grid');
    });



    $('#i').click(function(){
        $('.title-info').fadeIn();
    });
    $('#dashboard-min-ele').click(function(){
        $('.dash-min-ele').fadeToggle();
        $('.dash-min-ele').css('display','grid');
    });
    $('#apps-min-ele').click(function(){
        $('.app-min-ele').fadeToggle();
        $('.app-min-ele').css('display','grid');
    });
    $('#pages-min-ele').click(function(){
        $('.page-min-ele').fadeToggle();
        $('.page-min-ele').css('display','grid');
    });
    $('#comp-min-ele').click(function(){
        $('.component-min-ele').fadeToggle();
        $('.component-min-ele').css('display','grid');
    });
    $('#layout-min-ele').click(function(){
        $('.Layouts-min-ele').fadeToggle(10);
        $('.Layouts-min-ele').css('display','grid');
    });
    $('.glass').click(function(){
        $('#search-icon').slideToggle(200);
    });



    $('#crm-min-dash-menu').click(function(){
        $('.crm-min-apps').fadeToggle();
        $('.crm-min-apps').css('display','grid');
    });
    $('#ecom-min-menu').click(function(){
        $('.ecommerce-min-menu').fadeToggle();
        $('.ecommerce-min-menu').css('display','grid');
    });
    $('#email-min-menu').click(function(){
        $('.email-min').fadeToggle();
        $('.email-min').css('display','grid');
    });


    $('#proj-menu-max').click(function(){
        $('.proj-menu-min').fadeToggle();
        $('.proj-menu-min').css('display','grid');
    });
    $('#task-max-menu').click(function(){
        $('.tasks-min-menu').fadeToggle();
        $('.tasks-min-menu').css('display','grid');
    });


    $('#authen-max-menu').click(function(){
        $('.authen-min-menu').fadeToggle();
        $('.authen-min-menu').css('display','grid');
    });


    $('#error-max-menu').click(function(){
        $('.error-min-menu').fadeToggle();
        $('.error-min-menu').css('display','grid');
    });



    $('.notification-nav1').click(function(){
        $('.notification').slideToggle();
        $('.notification').css('display','grid');
    });

    $('.multi-application-icon').click(function(){
        $('.grid-application').slideToggle();
        $('.grid-application').css('display','grid');
    });
    


});