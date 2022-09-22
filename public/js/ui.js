"use strict";

$(document).ready(function () {


    var page = document.location.hash;
    $(".page").hide();


    console.log(page)

    if (page == "#aboutpage") {
        $("#aboutpage").show();
    } else if (page == "#collections") {
        $("#collectionspage").show();
    } else if (page == "#contact-general") {
        $("#contactuspage, #contactform").show();
    } else if (page == "#products") {
        $("#allproductspage").show();
    } else if (page == "#contact-bespoke") {
        $("#contactuspage, #bespokeform").show();
    } else if (page == "#care-page") {
        $("#carepage, #care-text").show();
    } else if (page == "#removal-page") {
        $("#carepage, #removal-text").show();
    } else if (page == "#uniquesizeguide") {
        $("#uniquesize-guide").show();
    } else if (page == "#shapeguide") {
        $("#shape-guide").show();
    } else if (page == "#faqs") {
        $("#faqs").show();
    } else if (page == "#delivery-info") {
        $("#delivery-info").show();
    } else if (page == "#t&cs") {
        $("#terms-info").show();
    } else {
        $("#homepage").show();
    };



    $("#cont-logo").click(function () {
        $(".page").hide();
        $("#homepage").show();
        document.location.hash = "homepage";
        $('html').scrollTop(0);
    });

    $(".info-btn").click(function () {
        $(".page").hide();
        $("#aboutpage").show();
        document.location.hash = "aboutpage";
        $('html').scrollTop(0);
    });

    $(".collections-btn").click(function () {
        $(".page").hide();
        $("#collectionspage").show();
        document.location.hash = "collections"
    });

    $('.allproduct-btn').click(function () {
        $(".page").hide();
        $("#allproductspage").show();
        document.location.hash = "products"
    });

    // MOBILE NAV BUTTON DROP DOWN

    $(".mob-nav-button").click(function () {
        $(".mov-nav").show();
    });


    $(".contact-btn").click(function () {
        $(".page, #bespokeform").hide();
        $("#contactuspage, #contactform").show();
        document.location.hash = "contact-general";
        $('html').scrollTop(0);
    });

    $(".bespokeform-btn").click(function () {
        $(".page, #contactform").hide();
        $("#contactuspage, #bespokeform").show();
        document.location.hash = "contact-bespoke";
        $('html').scrollTop(0);
    });

    $(".care-btn").click(function () {
        $(".page, #removal-text").hide();
        $("#carepage, #care-text").show();
        document.location.hash = "care-page";
        $('html').scrollTop(0);
    });

    $(".removal-btn").click(function () {
        $(".page, #care-text").hide();
        $("#carepage, #removal-text").show();
        document.location.hash = "removal-page";
        $('html').scrollTop(0);
    });

    $(".uniquesize-btn").click(function () {
        $(".page").hide();
        $("#uniquesize-guide").show();
        document.location.hash = "uniquesizeguide";
        $('html').scrollTop(0);
    });

    $(".shapeguide-btn").click(function () {
        $(".page").hide();
        $("#shape-guide").show();
        document.location.hash = "shapeguide";
        $('html').scrollTop(0);
    });

    $(".faq-btn").click(function () {
        $(".page").hide();
        $("#faqs").show();
        document.location.hash = "faqs";
        $('html').scrollTop(0);
    });

    $(".delivery-btn").click(function () {
        $(".page").hide();
        $("#delivery-info").show();
        document.location.hash = "#delivery-info";
        $('html').scrollTop(0);
    });

    $(".terms-btn").click(function () {
        $(".page").hide();
        $("#terms-info").show();
        document.location.hash = "#t&cs";
        $('html').scrollTop(0);
    });

    $('.product-viewAll').click(function () {
        $('.product-item').show();
    });

    $('.blog-btn').click(function () {
        console.log('blog-btn working');
        window.location.assign("https://www.instagram.com/dazzlingnailsco/");
    });

    $('.fb-btn').click(function () {
        console.log('blog-btn working');
        window.location.assign("https://www.facebook.com/DazzlingNailsco");
    });

    $('#sortby').change(function () { //.change

        sort_type = $('#sortby').val(); //getting the value attribute of all elements under the id 'sortby' 

        if (sort_type == "a-z") { //if value=a-z then  run...

            product_dict = {}; // creates an empty dictionary to store data later

            $('.product-item').each(function (i, product_obj) { //get object "product-item" and apply function to each element

                product_name = $(product_obj).children('span').text(); //variable product_name get text within span tags
                product_dict[product_name] = product_obj;  //creates entry inside the product dictionary of the above ^ stores it in product_obj
                $(product_obj).remove(); // removes product items from html so it only deals with dictionary
            });
            // product  list blank slate 
            product_names = Object.keys(product_dict); // Gets array of dictionary keys and count them ?
            product_names.sort(); //.sort sorts strings by alphabetical as default

            for (index = 0; index < product_names.length; index++) { //index through all items

                product_name = product_names[index];
                product_obj = product_dict[product_name];

                $('#product-container').append(product_obj); //converts back to strings
            }
        }
    });

    function selectCollec() {
        var class_name = $('#collection-list').val();
        // alert (class_name);
        $('.product-item').hide();
        $("." + class_name).show();
        console.log('.change activated');
    };

    $('#collection-list').change(selectCollec);

    $('.collec-all').click(function () {
        $('#collection-list').val('product-item');
        selectCollec();
    });

    $('.collec-marble').click(function () {
        $('#collection-list').val('marble');
        selectCollec();
    });

    $('.collec-seasonal').click(function () {
        $('#collection-list').val('summer');
        selectCollec();
    });

    $('.collec-glitter').click(function () {
        $('#collection-list').val('glitter');
        selectCollec();
    });

    $('.collec-gemstone').click(function () {
        $('#collection-list').val('gemstone');
        selectCollec();
    });

    $('.collec-animals').click(function () {
        $('#collection-list').val('animal');
        selectCollec();
    });

    $('#colour-list').change(function () {
        var class_name = $('#colour-list').val();
        $('.product-item').hide();
        $("." + class_name).show();
    });

    $('#mob-nav-button').click(function () {
        $('#mob-nav').slideToggle("fast");
    });

    $(window).on('popstate', function () {
        location.reload();
    });
});

  //select val of marble from id of collection list
