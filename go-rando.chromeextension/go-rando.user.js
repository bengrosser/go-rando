// ==UserScript==
// @name Go Rando
// @version 2.0.0
// @author Ben Grosser
// @namespace com.bengrosser.gorando
// @description Obfuscates your feelings on Facebook.

// @updateURL http://bengrosser.com/gr/share/go-rando.meta.js
// @downloadURL https://bengrosser.com/share/gr/go-rando.user.js
//
// @match *://*.facebook.com/*
// @include *://*.facebook.com/*
// @exclude *://*.facebook.com/ai.php*
// @exclude *://*.facebook.com/ajax/*
// @exclude *://*.facebook.com/dialog/*
// @exclude *://*.facebook.com/connect/*
// @exclude *://*.facebook.com/plugins/*
// @exclude *://*.facebook.com/xti.php*
//
// @icon http://bengrosser.com/share/gr/go-rando-logo-256.png
//
// ==/UserScript==// -----------------------------------------


// ******************************************
//
// Ben Grosser
//
// Go Rando
// 2017, 2021
// web browser extension
//
// (Started March 2016 -- Released February 2017, Revised January 2021)
//
// Premiere Exhibition:
// Blinding Pleasures
// Arebyte Gallery
// London, UK
// 10 Feb - 18 Mar, 2017
//
// Obfuscates your feelings on Facebook
// https://bengrosser.com/projects/go-rando/
//
// Thanks to my Beta Test Team!!
// --Janelle Gunther
// --Owen Mundy
// --Raphaël Duracell
//
// Thanks to Sebastian Frith for his Illustrator prowess!
//
// Big thanks to Kate McDowell, who suggested "Rando" as part 
// of the title!
//
// Special thanks to Filippo Lorenzin, curator of the 
// Blinding Pleasures exhibition for all his help and support 
// for this work.
//
// Amazing thanks to arebyte Gallery, Rebecca Edwards, and Nimrod Vardi
// for supporting a complete rewrite in 2021 (for the new FB design) as
// part of my upcoming solo exhibition in summer '21
//
// NO THANKS to Mark Zuckerberg
//
//
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢀⠠⠨⢀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠐⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⢈⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠠⠠⢙⣿⣿⣿⣿⣿⣿⢉⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠠⢐⣿⠀⠀⣿⣿⣿⣿⣿⢐⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠁⡟⣿⣿⠠⠠⠠⠠⠀⠀⠀⠀
// ⠀⠀⠀⠈⠠⢘⣿⣿⣿⣿⣿⣿⣿⣿⢲⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠁⣿⣿⣿⠀⠀⠀⣿⢐⠠⠠⠠⠠⠀⠀⠀
// ⠀⠀⢀⠠⠠⠠⠠⢰⣿⠀⠀⠀⠀⠀⠀⡓⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⣿⣿⠀⠀⠀⣿⣿⣿⢢⠠⠠⠠⠠⠠⠠⠠⠀⠀
// ⠀⠀⠠⠠⠠⠠⠠⣏⣿⠀⠀⠀⠀⠀⠀⣿⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠫⣿⣿⣿⠀⠀⠀⣿⣿⣿⢈⢀⢀⠠⠠⠠⠀⠀
// ⠀⠠⠠⠠⠠⠠⢘⡍⣿⠀⠀⠀⠀⠀⣿⢉⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⢐⡍⣿⣿⣿⠀⣿⢰⠈⠈⠐⠠⠠⠠⠀
//  ⠠⠠⠠⠠⠠⢈⠠⣆⣿⠀⠀⣿⣿⢘⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⢈⠠⠠⠠⠠⠁⣿⣿⣿⣿⠁⢈⠁⠠⠈⠈⠠⠠⠠⠠⢀
//  ⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⠨⢐⠰⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⢘⠠⠠⠠⠠⠹⣿⠀⠀⠀⠀⣿⢍⠠⢰⣿⣿⠰⢘⠠⠠⠰
// ⠀⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⢈⢈⠠⠨⢈⠠⠠⠠⠠⠠⠠⠠⠠⢐⠠⠠⠠⠠⢈⡃⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⢬⠰⠠⠠⠀
// ⠀⠠⠠⠠⠠⠠⠠⠠⠠⠠⠠⢈⢈⢈⠂⠠⠠⠠⠠⠠⠠⠠⠠⢈⠨⢼⣿⣿⠀⣿⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠺⠰⢈⠠⠠⠠⠀
// ⠀⠀⠠⠠⠠⠠⠠⠠⠑⢩⢙⢩⣈⣈⢙⢙⢙⢙⢙⢙⢙⢙⢙⢈⠠⢨⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣿⠨⢈⢐⠘⢈⠠⠠⠠⠀⠀
// ⠀⠀⠈⠠⠠⠠⠠⡤⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠠⠠⠠⠠⢘⢈⠠⠙⣿⣿⣿⣿⢘⠠⠠⠠⠠⠠⠠⠠⢀⠀⠀
// ⠀⠀⠀⠀⠠⠠⠠⢠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠿⢈⠠⠠⢈⠨⠠⠠⠹⣿⠓⠠⠠⠠⠠⢀⠀⠀⠀
// ⠀⠀⠀⠀⠠⠠⠠⠠⢘⣿⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣿⣍⠠⠠⠠⠠⠽⣿⣿⣿⢑⠠⠠⠠⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠠⠠⠠⠠⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢌⢘⠠⠠⡡⣿⣿⢘⠠⠠⠠⡇⣿⣿⣿⣿⣿⢴⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠠⠠⠠⠠⠩⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⠠⠠⠠⠠⠠⠠⠠⠠⠠⣠⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠠⠠⠠⠋⣿⣿⣿⣿⣿⣿⣿⣿⡈⠠⠠⠠⠠⠠⠠⠠⠠⠙⣿⣿⣿⣿⣿⣿⣿⣿⢰⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠠⢀⠠⠉⢔⠾⡓⡖⠨⠠⠠⠠⠠⠠⠠⠠⠠⠠⣿⣿⣿⣿⣿⣿⣿⣿⢈⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠨⣞⣏⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀
//
//
// ************************************************************

/* global $, ready */

// TODO:
// remove all_frames from manifest? - test
// need wildcard in match on manifest (for https)?
// still need to tweak initial wait after first load?

(function() {

function main() {

const VERSION_NUMBER = "2.0.0";
const ROLL_MIN = 8; // ensures we'll wrap at least once
const ROLL_MAX = ROLL_MIN + (7 * 3); // min+7*3 ensures we'll wrap max 3x more 
const NUM_REACTIONS = 7; // how many total are we looking for?

// time between each reaction when going rando
// has to be pretty long due to FB being sluggish
const TIME_DELAY = 135;

// lowercase reaction slugs used for selector code
let reactionSlugs = ["like","love","care","haha","wow","sad","angry"];

// language support (translation tables at EOF)
const supportedLanguages = [ "en", "fr", "es", "de", "it", "pt", "da" ];

// console hello
console.log("-----------------------------------------------");
console.log("Go Rando (2017, 2021)");
console.log("-- version "+VERSION_NUMBER);
console.log("-- https://bengrosser.com/projects/go-rando/\n");
console.log("-- by Ben Grosser\n");

// determine language, default to English if user language not supported
let langLabel = $('html').attr('lang');

if(langLabel != undefined) {
    if(supportedLanguages.includes(langLabel)) {
        switch(langLabel) {
            case "en": lang = en; break;
            case "fr": lang = fr; break;
            case "de": lang = de; break;
            case "es": lang = es; break;
            case "pt": lang = pt; break;
            case "it": lang = it; break;
            case "da": lang = da; break;
        }
        console.log(
            "-- supported language "+langLabel.toUpperCase()+
            " detected. "+lang["like"]+"!"
        );
    }
} else {
    console.log("-- unsupported language detected ("+langLabel.toUpperCase()+")"); 
    console.log("-- defaulting to EN (English)");
    lang = en;
}

console.log("-----------------------------------------------");

// watch for new like buttons, attach reaction obufscators
ready('div[aria-label="'+lang["like"]+'"],'+
      'div[aria-label="'+ lang["remove_"+lang["like"]] +'"],'+
      'div[aria-label="'+ lang["remove_"+lang["love"]] +'"],'+
      'div[aria-label="'+ lang["remove_"+lang["care"]] +'"],'+
      'div[aria-label="'+ lang["remove_"+lang["haha"]] +'"],'+
      'div[aria-label="'+ lang["remove_"+lang["wow"]] +'"],'+
      'div[aria-label="'+ lang["remove_"+lang["sad"]] +'"],'+
      'div[aria-label="'+ lang["remove_"+lang["angry"]] +'"]',
        function(e) { 
            // if it's a Reactions dialog itself, ignore as this will get
            // triggered/automated by attachments to Like buttons
            if($(e).parent().parent().parent().attr('role') == "dialog") return;

            // attach code to intercept Like clicks and Go Rando
            attachReactionObfuscator(e); 
        }
);

// when <head> loads, add a new style called no-accent
// we use this later to temporarily hide auto-triggered outlines on 
// feed items that are inadvertently triggered by our covert keyboard 
// accessibility triggers
ready('head', function(e) {
    let s = document.createElement('style');
    s.innerText = ".no-accent { --accent: rgb(0,0,0,0) !important; }";
    $(e).append(s);
});

// attach to each Like button, intercept user clicks
// (when appropriate), and redirect reaction selection
// to goRando()
function attachReactionObfuscator(e) {

    // if we've already been here ignore, otherwise tag
    if($(e).is('[go-rando-seen]')) return;
    else $(e).attr('go-rando-seen','true');

    // bind to click so we can swap out our needs with FB's
    $(e).click(function(event) {

        // ignore clicks on buttons that don't have associated 
        // Reactions (e.g. Like buttons on Pages/Groups). that
        // way everything with those buttons will proceed as 
        // normal. detect by looking for the accessibility button 
        // for triggering the pop-up reaction dialog
        if(!$(this).parent().
            find('div[aria-label="'+lang["react"]+'"]').length) {
            return;
        }

        // using keyboard accessibility options to trigger the 
        // reactions dialog also triggers a flashed outline on the
        // overall feed item. because a Go Rando user isn't using
        // the keyboard, hide that outline temporarily using our
        // inserted no-accent class. this is turned back off once
        // the new reaction is chosen
        $('div[role="article"]').parent().addClass('no-accent');

        // as long as this isn't a 'remove reaction' button
        // then proceed (if it is, just let the click go through
        // as normal to turn the already activated reaction off
        if(!$(this).attr("aria-label").contains(lang["remove"])) {

            // temporarily stop event bubbling so it doesn't 
            // trigger default actions (e.g. selecting 'Like')
            event.stopImmediatePropagation();

            // test for old crusty reaction code leftover 
            // from the pre-2020 redesign--which is unfortunately
            // still hanging around in various places and which 
            // comes in at least two different versions (*eyeroll*)
            if($(e).find('> div > span > i').length > 0 || 
               $(e).find('> div > span').length > 0) 
            {
                // with old reaction code, clone the element
                // that contains the "Like" text, hide the original
                // and use the clone to display 'Picking...'
                // then we'll remove the clone and re-show the original
                // when finished
                let orig = $(this).find('div:eq(0)');
                let cln = $(this).find('div:eq(0)').clone();
                orig.addClass("like-text-orig");
                cln.addClass("like-text-clone").text(lang["picking"]);
                $(this).append(cln);
                orig.hide();
            } 
            
            // otherwise we must have the new 2020 reaction code, which
			// is simpler to deal with (though more complicated to 
			// programatically navigate/trigger)
            else {
                $(this).find('div div:eq(1) span span').addClass("like-text");
                $(this).find('.like-text').text(lang["picking"]);
            }

            // hide the reaction accessibility button temporarily 
            // so it doesn't become visible in next step (will unhide
            // the button as soon as we're done with it so it doesn't break)
            $(this).parent().find('div[aria-label="'+lang["react"]+'"]').hide();

            // trigger the reaction accessibility button (e.g. the
            // one used by keyboard navigators). this will force FB to 
            // create the Reactions dialog we need, as otherwise it's not 
            // already on the page / in the DOM
            $(this).parent().
                find('div[aria-label="'+lang["react"]+'"]')[0].
                dispatchEvent(kbENTER);

            // take a brief pause and then GO RANDO
            setTimeout(function() { ;goRando(e) }, 250);
        }
    });
}

// now that a Like button's reaction dialog is created and ready, 
// scan/navigate and then select from it. called by attachReactionObfuscator()
function goRando(e) {

    // default selectors for the new 2020 redesign
    let reactionSelectors = [
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["like"]+'"]',
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["love"]+'"]',
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["care"]+'"]',
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["haha"]+'"]',
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["wow"]+'"]',
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["sad"]+'"]',
        'div[aria-label="'+lang["reactions"]+'"] [aria-label="'+lang["angry"]+'"]'
    ];

    // the reaction buttons we'll navigate / select from
    let reactionButtons = [];

    // with the new style, there's only one dialog in the DOM at a time
    // so we can just use document.querySelector() to find them
    for(let i = 0; i < reactionSelectors.length; i++) {
        reactionButtons.push(document.querySelector(reactionSelectors[i]));
    }

    // turn off the accessibility outline just for the Like button
    // as it distracts. will turn it back on right after we're done
    $(e).css('outline-width','0');

    // how many reactions we'll run through before selection this time
    let roll = randomInteger(ROLL_MIN, ROLL_MAX);

    // how long we'll sit on each reaction during the process. 
    // would like to go faster but FB can't handle it
    let timeDelay = TIME_DELAY;

    // tracks whether the reaction code we're working with is 
    // the old crusty style or most recent redesign code
    let oldReactionStyle = false;

    // more reliable to navigate with TABs on the parent element
    let oldReactionsParent = undefined;

    // two different hierarchies to test for to detect old reaction code
    // if we find it, reset the reactionButtons accordingly. 
    // I've made the new code the default action above (rather than testing
    // for old OR new) in the hopes that I'll be able to remove this whole
    // block someday, leaving default new reaction code in place
    if($(e).find('> div > span > i').length > 0 || 
       $(e).find('> div > span').length > 0)
       {
        oldReactionStyle = true;

		// for old reactions code, pad the roll +1 so that we add one for 
		// every crossover from end to start (angry to like). this is bc
		// tabs at that point on the old dialog require 2 tabs to get 
		// back to like. then add 2 more as its the average number of 
		// reactions missed due to the laggy-loading dialog 
		roll += Math.floor(roll/NUM_REACTIONS) + 2;

        // clear out reactionButtons so we can refill the array
        reactionButtons = [];

        // old reaction style for primary like buttons
        if($(e).find('div span i').length > 0) {

            // clear them out
            reactionSelectors = [];

            // run through the slugs and store new selectors
            for(let i = 0; i < reactionSlugs.length; i++) {
                reactionSelectors.push(
                    'body > div.uiLayer div[aria-label="'+
                    lang["reactions"]+'"] [aria-label="'+lang[reactionSlugs[i]]+'"]',
                );
            }	

            // less buggy to TAB on the parent element, so store it now
            oldReactionsParent = document.querySelector(
                'body > div.uiLayer div[aria-label="'+ lang["reactions"]+'"]'
            ); 
        }
        
        // if it's not an old primary like button it must be a comment like button
        else {
            reactionSelectors = [];

            for(let i = 0; i < reactionSlugs.length; i++) {
                reactionSelectors.push(
                    'div[aria-label="'+
                    lang["reactions"]+'"] div[role="toolbar"] > [aria-label="'+
                    lang[reactionSlugs[i]]+'"]',
                );
            }	

            // less buggy to TAB on the parent element, so store it now
            oldReactionsParent = document.querySelector( 
                'div[aria-label="'+lang["reactions"]+'"] div[role="toolbar"]' 
            );
        }

        // reset reactionButtons with the updated selectors
        function getOldReactionButtons() {
            for(let i = 0; i < reactionSelectors.length; i++) {
                reactionButtons.push(document.querySelector(reactionSelectors[i]));
            }
        }

        // sometimes FB's dynamic insertion of these reactions into the DOM is 
        // laggy. delaying our access a bit helps, as does other strategies
        // in the for() below
        setTimeout(function() { 
            getOldReactionButtons(); 

            // try again if needed, though am no longer seeing need for this
	        if(!reactionButtons.length > 0) {
	            setTimeout(function() { 
                    getOldReactionButtons(); 
                }, 250);

            }
        }, 100);
    }

	
    // reactionButtons are tracked and ready. run through them, select 
	// the pick, and then reset everything back as it was before 
    for(let i = 0; i < roll; i++) {

        // if we've finally landed, reset "Picking..." and click/enter 
        // on the reaction to trigger 
        if(i == roll-1) {
            setTimeout(function() {

                let finalReactionIndex = i%reactionButtons.length;
                let finalPick = reactionButtons[finalReactionIndex];

                // old reaction code can't always keep up
                // best workaround I've found after trying many is to just
                // walk through the reactions and look for the one that has its 
                // outline-width=1px, which will tell us the one the user sees
                // as the last one highlighted (this outline shows because we're
				// using keyboard accessibility triggers
                if(oldReactionStyle) {
                    for(let j = 0; j < reactionButtons.length; j++) {
                        if($(reactionButtons[j]).css('outline-width') == "1px") {
                            finalPick = reactionButtons[j];
                        }
                    }
                }

                // needed for finding elements below
                let finalReactionLabel = $(finalPick).attr('aria-label');

                // if we landed on "Like" we have to manually reset 
                // the button text because FB won't do it for us
                if(finalReactionIndex == 0 && !oldReactionStyle) {
                    $(e).find('.like-text').text(lang["like"]);
                }

                // on old style, show the clone and hide the orig
                if(oldReactionStyle || $(e).find('.like-text-clone').length) {
                    $('.like-text-orig').show();
                    $('.like-text-clone').remove();
                }

                // if old style, click it. otherwise, kb enter it.
                // why do both in some cases? it's helping me avoid
                // setting *visible* focus on a comment's parent like
                // button after going rando on a comment. why? idk
                if(oldReactionStyle) $(finalPick).click();
                else finalPick.dispatchEvent(kbENTER);

                // turn accessibility reaction menu opacity back on.
                // depending on async timing, it may or may not have its 
                // aria-label changed, so try both
                let t = $(e).parent().
                    find('div[aria-label="'+lang["change_"+finalReactionLabel]+'"]');

                // if that didn't find it, try this
                if(!t.length) {
                    t = $(e).parent().find('div[aria-label="'+lang["react"]+'"]');
                }

                // if we found it, show it
                if(t.length) t.show();

                // now I need to *unfocus* the like button so the outline and/or 
                // reaction menu doesn't show up. despite all the built-in ways
                // of doing this (element.blur(), $(element).blur(), etc.), only
                // way I've found that works in this instance is to create a tmp
                // dummy element, hide it, append to the parent, focus it, then rm.
                // dumb, but works!
                let tmpInput = document.createElement('input');
                tmpInput.style=
                    "opacity:0;position:absolute;z-index:-1000;benwashere:yes";
                e.parentElement.appendChild(tmpInput);
                tmpInput.focus({preventScroll: true });
                e.parentElement.removeChild(tmpInput);

                // now that it no longer has keyboard focus, turn outline-width 
                // back on for the like button
                $(e).css('outline-width','1px');

                // resetting keyboard-focus outline on outer feed item elements
                $('div[role="article"]').parent().removeClass('no-accent');

        	}, timeDelay * i + 1000);
        } 
        
        // otherwise we're still rolling through the options...
        else {
            setTimeout(function() {

                // get the next button
                let nextButton = reactionButtons[i%reactionButtons.length];

                // if this is is old style code, use tab on the parent to advance
                if (oldReactionStyle) {

                    // waiting for nextButton to be valid lets us know 
                    // when the menu is fully loaded
                    // could trigger before then but it gets dicey
                    if(nextButton != undefined)
                        oldReactionsParent.dispatchEvent(kbTAB);
                }	

                // otherwise, with new code, use the right arrow to advance
                else nextButton.dispatchEvent(kbRA);

            }, timeDelay * i);
        }

    } // for() -- roll
} // goRando()

} // end main()

// run the main function once the webpage is loaded
$(document).ready(function(){ main(); });

// cleaner syntax than match()
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

// int between min (inclusive) and max (inclusive)
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// language translation tables
// ---------------------------

// US and UK English
const en = {
    like: "Like",
    love: "Love",
    care: "Care",
    haha: "Haha",
    wow: "Wow",
    sad: "Sad",
    angry: "Angry",

    react: "React",
    reactions: "Reactions",
    remove: "Remove",

    "remove_Like": "Remove Like reaction",
    "remove_Love": "Remove Love reaction",
    "remove_Care": "Remove Care reaction",
    "remove_Haha": "Remove Haha reaction",
    "remove_Wow": "Remove Wow reaction",
    "remove_Sad": "Remove Sad reaction",
    "remove_Angry": "Remove Angry reaction",

    "change_Like": "Change Like reaction",
    "change_Love": "Change Love reaction",
    "change_Care": "Change Care reaction",
    "change_Haha": "Change Haha reaction",
    "change_Wow": "Change Wow reaction",
    "change_Sad": "Change Sad reaction",
    "change_Angry": "Change Angry reaction",

    picking: "Picking..."
}

// Italian
const it = {
    like: "Mi piace",
    love: "Love",
    care: "Abbraccio",
    haha: "Ahah",
    wow: "Wow",
    sad: "Sigh",
    angry: "Grrr",

    react: "Aggiungi una reazione",
    reactions: "Reazioni",
    remove: "Rimuovi",

    "remove_Mi piace": "Rimuovi Mi Piace", 
    "remove_Love": "Rimuovi Love", 
    "remove_Abbraccio": "Rimuovi Abbraccio", 
    "remove_Ahah": "Rimuovi Ahah",
    "remove_Wow": "Rimuovi Wow", 
    "remove_Sigh": "Rimuovi Sigh",
    "remove_Grrr": "Rimuovi Grrr", 

    "change_Mi piace": "Cambia la reazione Mi Piace", 
    "change_Love": "Cambia la reazione Love", 
    "change_Abbraccio": "Cambia la reazione Abbraccio", 
    "change_Ahah": "Cambia la reazione Ahah",
    "change_Wow": "Cambia la reazione Wow", 
    "change_Sigh": "Cambia la reazione Sigh",
    "change_Grrr": "Cambia la reazione Grrr", 

    picking: "Selezione..."
}

// Portuguese
const pt = {
    like: "Curtir",
    love: "Amei",
    care: "Força",
    haha: "Haha",
    wow: "Uau",
    sad: "Triste",
    angry: "Grr",

    react: "Reagir",
    reactions: "Reações",
    remove: "Remover",

    "remove_Curtir": "Remover Curtir", 
    "remove_Amei": "Remover Amei", 
    "remove_Força": "Remover Força", 
    "remove_Haha": "Remover Haha",
    "remove_Uau": "Remover Uau", 
    "remove_Triste": "Remover Triste",
    "remove_Grr": "Remover Grr", 

    "change_Curtir": "Alterar reação Curtir", 
    "change_Amei": "Alterar reação Amei", 
    "change_Força": "Alterar reação Força", 
    "change_Haha": "Alterar reação Haha",
    "change_Uau": "Alterar reação Uau", 
    "change_Triste": "Alterar reação Triste",
    "change_Grr": "Alterar reação Grr", 

    picking: "Seleção..."
}

// Spanish
const es = {
    like: "Me gusta",
    love: "Me encanta",
    care: "Me importa",
    haha: "Me divierte",
    wow: "Me asombra",
    sad: "Me entristece",
    angry: "Me enfada",

    react: "Reaccionar",
    reactions: "Reacciones",
    remove: "Eliminar",

    "remove_Me gusta": "Eliminar Me gusta", 
    "remove_Me encanta": "Eliminar Me encanta", 
    "remove_Me importa": "Eliminar Me importa", 
    "remove_Me divierte": "Eliminar Me divierte",
    "remove_Me asombra": "Eliminar Me asombra", 
    "remove_Me entristece": "Eliminar Me entristece",
    "remove_Me enfada": "Eliminar Me enfada", 

    "change_Me gusta": "Cambiar reacción Me gusta", 
    "change_Me encanta": "Cambiar reacción Me encanta", 
    "change_Me importa": "Cambiar reacción Me importa", 
    "change_Me divierte": "Cambiar reacción Me divierte",
    "change_Me asombra": "Cambiar reacción Me asombra", 
    "change_Me entristece": "Cambiar reacción Me entristece",
    "change_Me enfada": "Cambiar reacción Me enfada", 

    picking: "Selección..."
}

// French
const fr = {
    like: "J’aime",
    love: "J’adore",
    care: "Solidaire",
    haha: "Haha",
    wow: "Wouah",
    sad: "Triste",
    angry: "Grrr",

    react: "Réagir",
    reactions: "Réactions",
    remove: "Supprimer",

    "remove_J’aime": "Supprimer J’aime",
    "remove_J’adore": "Supprimer J’adore",
    "remove_Solidaire": "Supprimer Solidaire",
    "remove_Haha": "Supprimer Haha",
    "remove_Wouah": "Supprimer Wouah",
    "remove_Triste": "Supprimer Triste",
    "remove_Grrr": "Supprimer Grrr",

    "change_J’aime": "Changer la réaction J’aime",
    "change_J’adore": "Changer la réaction J’adore",
    "change_Solidaire": "Changer la réaction Solidaire",
    "change_Haha": "Changer la réaction Haha",
    "change_Wouah": "Changer la réaction Wouah",
    "change_Triste": "Changer la réaction Triste",
    "change_Grrr": "Changer la réaction Grrr",

    picking: "Sélection..."
}

// German
const de = {
    like: "Gefällt mir",
    love: "Love",
    care: "Umarmung",
    haha: "Haha",
    wow: "Wow",
    sad: "Traurig",
    angry: "Wütend",

    react: "Reagieren",
    reactions: "Reaktionen",
    remove: "Entfernen",

    "remove_Gefällt mir": "Gefällt mir entfernen",
    "remove_Love": "Love entfernen",
    "remove_Umarmung": "Umarmung entfernen",
    "remove_Haha": "Haha entfernen",
    "remove_Wow": "Wow entfernen",
    "remove_Traurig": "Traurig entfernen",
    "remove_Wütend": "Wütend entfernen",

    "change_Gefällt mir": "Gefällt mir-Reaktion ändern",
    "change_Love": "Love-Reaktion ändern",
    "change_Umarmung": "Umarmung-Reaktion ändern",
    "change_Haha": "Haha-Reaktion ändern",
    "change_Wow": "Wow-Reaktion ändern",
    "change_Traurig": "Traurig-Reaktion ändern",
    "change_Wütend": "Wütend-Reaktion ändern",

    picking: "Auswählen..."
}

// Danish
const da = {
    like: "Synes godt om",
    love: "Elsker",
    care: "Omsorg",
    haha: "Haha",
    wow: "Wow",
    sad: "Ked",
    angry: "Vred",

    react: "Reager",
    reactions: "Reaktioner",
    remove: "Skift",

    "remove_Synes godt om": "Fjern Synes godt om",
    "remove_Elsker": "Fjern Elsker",
    "remove_Omsorg": "Fjern Omsorg",
    "remove_Haha": "Fjern Haha",
    "remove_Wow": "Fjern Wow",
    "remove_Ked": "Fjern Ked",
    "remove_Vred": "Fjern Vred",

    "change_Synes godt om": "Skift Synes godt om reaktion",
    "change_Elsker": "Skift Elsker reaktion",
    "change_Omsorg": "Skift Omsorg reaktion",
    "change_Haha": "Skift Haha reaktion",
    "change_Wow": "Skift Wow reaktion",
    "change_Ked": "Skift Ked reaktion",
    "change_Vred": "Skift Vred reaktion",

    picking: "Plukning..."
}

// maybe add arabic, indonesian, japanese, russian?
// arabic = ar_AR - العربية
// japanese = ja_JP - 日本語
// russian = ru_RU = Русский - ru



// keyboard events definitions
// used for triggering keys using dispatchEvent()
// ----------------------------------------------
const kbRA = new KeyboardEvent('keydown', {
    code: 'ArrowRight',
    key: 'ArrowRight',
    charCode: 39,
    keyCode: 39,
    view: window,
    bubbles: true
});

const kbENTER = new KeyboardEvent('keydown', {
    code: 'Enter',
    key: 'Enter',
    charCode: 13,
    keyCode: 13,
    view: window,
    bubbles: true
});

const kbTAB = new KeyboardEvent('keydown', {
    code: 'Tab',
    key: 'Tab',
    charCode: 9,
    keyCode: 9,
    view: window,
    bubbles: true
});


// close the opening invoked function
})();
