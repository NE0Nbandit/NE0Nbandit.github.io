// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://ne0nbandit.art/',
'https://stringsattached.neocities.org/',
'https://utnewsletterarchive.neocities.org/',
'https://toxoplasicity.neocities.org/',
'https://wolfsite.neocities.org/',
'https://superkirbylover.me/',
'https://itpuddle.neocities.org/',
'https://fulvern.neocities.org/',
'https://astraldisc.com/'
];

//the name of the ring
var ringName = 'deltAring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'deltaring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://ne0nbandit.art/cable/deltaring/about';

//should the widget include a random button?
var useRandom = true;
