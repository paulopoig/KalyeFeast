jQuery(document).ready(function(){

/*************** Checkbox script ***************/
jQuery(document).bind('ready ajaxComplete', function() {
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "checkbox") {
var id = inputs[a].getAttribute("id");
if (id==null){
id=  "checkbox" +a;
}
inputs[a].setAttribute("id",id);
inputs[a].style.visibility = 'hidden';
var container = document.createElement('div');
container.setAttribute("class", "ttr_checkbox");
var label = document.createElement('label');
label.setAttribute("for", id);
if(jQuery(inputs[a]).parent(" .ttr_checkbox").length == 0)
{
jQuery(inputs[a]).wrap(container).after(label);
}
}
}
});

/*************** Radiobutton script ***************/
jQuery(document).bind('ready ajaxComplete', function() {
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "radio") {
var id = inputs[a].getAttribute("id");
if (id==null){
 id=  "radio" +a;
}
inputs[a].setAttribute("id",id);
inputs[a].style.visibility = 'hidden';
var container = document.createElement('div');
container.setAttribute("class", "ttr_radio");
var label = document.createElement('label');
label.setAttribute("for", id);
if(jQuery(inputs[a]).parent(" .ttr_radio").length == 0)
{
jQuery(inputs[a]).wrap(container).after(label);
}
}
}
});

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = jQuery(document.body).height();
var content = jQuery("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
jQuery("div[id$='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
stopTransition:false ,
slideShowSpeed:4000, begintime:3000,cssPrefix: 'ttr_'
});
}
/* Animation Function Call */
jQuery().TTAnimation({cssPrefix: 'ttr_'});

/*************** Hamburgermenu slideleft script ***************/
jQuery('button#nav-expander').on('click',function(e){
e.preventDefault();
jQuery('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
jQuery('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
});

/*************** Sidebarmenu click script ***************/
jQuery('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 991 && jQuery(this).attr('href')){
window.location.href = jQuery(this).attr('href'); 
}
else{
if(jQuery(this).parent().hasClass('open')){
location.assign(jQuery(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
jQuery('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown], .ttr_menu_items_parent_link_arrow ').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('open');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".open") && jQuery(this).children(" .ttr_menu_items_parent_link_arrow").attr('href') !== undefined ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
});

/*************** Tab-Sidebarmenu script ***************/
jQuery('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown], .ttr_vmenu_items_parent_link_arrow ').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
jQuery(this).parent().siblings().removeClass('open');
jQuery(this).parent().toggleClass(function() {
if (jQuery(this).is(".open") && jQuery(this).children(" .ttr_vmenu_items_parent_link_arrow").attr('href') !== undefined ) {
window.location.href = jQuery(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "open";
}
});
}
});
WebFontConfig = {
google: { families: [ 'Rajdhani','Rajdhani:600','Rajdhani:500','Hind','Rajdhani:700'] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();

/*************** Joomla motools display script ***************/
if(window.MooTools) {
window.addEvent('domready', function() {
Element.implement({
hide: function() {
this.setStyle('display','');
}
});
});
}
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]', 'object'];
for(var i = 0 ; i < objects.length ; i++){
if (jQuery(objects[i]).length > 0) {
jQuery(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
jQuery(objects[i]).addClass('embed-responsive-item');
}
}
});
