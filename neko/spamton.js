// CREDIT TO https://webneko.net/ FOR THIS SCRIPT!

function gE(e, i) {
  if (l) {
    var o = (i = i || self).document.layers;
    if (o[e]) return o[e];
    for (var s = 0; s < o.length; ) t = gE(e, o[s++]);
    return t;
  }
  return d.all ? d.all[e] : d.getElementById(e);
}
function sE(e) { l ? (e.visibility = "show") : (e.style.visibility = "visible"); }
function hE(e) { l ? (e.visibility = "hide") : (e.style.visibility = "hidden"); }
function sZ(e, t) { l ? (e.zIndex = t) : (e.style.zIndex = t); }
function sX(e, t) { l ? (e.left = t) : op ? (e.style.pixelLeft = t) : (e.style.left = t + px); }
function sY(e, t) { l ? (e.top = t) : op ? (e.style.pixelTop = t) : (e.style.top = t + px); }
function sW(e, t) { l ? (e.clip.width = t) : op ? (e.style.pixelWidth = t) : (e.style.width = t + px); }
function sH(e, t) { l ? (e.clip.height = t) : op ? (e.style.pixelHeight = t) : (e.style.height = t + px); }
function sC(e, t, i, o, s) { l ? ((X = e.clip), (X.top = t), (X.right = i), (X.bottom = o), (X.left = s)) : (e.style.clip = "rect(" + t + px + " " + i + px + " " + o + px + " " + s + px + ")"); }
function wH(e, t) { l && ((Y = e.document), Y.open(), Y.write(t), Y.close()), e.innerHTML && (e.innerHTML = t); }
function cE(i) {
  l
    ? ((d.layers[i] = new Layer(0)), eval("document." + i + "=d.layers[i]"))
    : void 0 !== d.createElement &&
      ((X = "<div id='" + i + '\' style="position:absolute; transform: scale(2); image-rendering: pixelated;">&nbsp;</div>'),
      (Y = d.createElement("DIV")),
      Y
        ? ((Y.innerHTML = X), d.body.appendChild(Y))
        : void 0 !== d.body.insertAdjacentHTML &&
          d.body.insertAdjacentHTML("BeforeEnd", X));
}
function byName(e, t) { for (var i = 0; i < e.length; i++) if (e[i].name == t) return e[i]; return null; }
function createLayer(e, t, i, o, s, a) { cE(e); var r = gE(e); return ( sC(r, 0, o, s, 0), sE(r), sX(r, t), (r.myx = t), sY(r, i), (r.myy = i), wH(r, a), sZ(r, 1e3), r ); }
function Neko(x, y, active, imagedirectory) {
  (this.findHome = function () { (this.homeX = eval(this.homeXfn)), (this.homeY = eval(this.homeYfn)); }),
    x || (x = 0),
    y || (y = 0),
    parseInt(x) != x
      ? ((this.homeXfn = x),
        (this.homeYfn = y),
        this.findHome(),
        (x = this.homeX),
        (y = this.homeY))
      : ((x = parseInt(x)), (y = parseInt(y))),
    active || (active = !1),
    !imagedirectory && window.NekoType && (imagedirectory = window.NekoType),
    imagedirectory || (imagedirectory = "spamton"),
    window.remoteimages ||
    (imagedirectory = "https://ne0nbandit.github.io/neko/" + imagedirectory),
    (this.directory = imagedirectory);
  var aPreLoad = new Array(
    "alert",
    "still",
    "nrun1",
    "nrun2",
    "nerun1",
    "nerun2",
    "erun1",
    "erun2",
    "serun1",
    "serun2",
    "srun1",
    "srun2",
    "swrun1",
    "swrun2",
    "wrun1",
    "wrun2",
    "nwrun1",
    "nwrun2",
    "yawn",
    "sleep1",
    "sleep2",
    "itch1",
    "itch2",
    "nscratch1",
    "nscratch2",
    "escratch1",
    "escratch2",
    "sscratch1",
    "sscratch2",
    "wscratch1",
    "wscratch2"
  );
  this.aGifs = new Array();
  for (var i = 0; i < aPreLoad.length; i++) { var imgTemp = new Image(); (imgTemp.src = this.directory + "/" + aPreLoad[i] + ".gif"), (this.aGifs[aPreLoad[i]] = imgTemp); }
  (this.whichNeko = aNekos.length),
    (aNekos[aNekos.length] = this),
    (this.a_resting = new Array( "", 'this.SetBehavior("wakingup")', "this.chooseIdle()", "8", "1", "still" )),
    (this.a_itching = new Array( "", 'this.SetBehavior("wakingup")', 'this.SetBehavior("resting")', "6", ".5", "itch2", "itch1" )),
    (this.a_scratching = new Array( "", 'this.SetBehavior("wakingup")', 'this.SetBehavior("resting")', "4", "2", "scratch1", "scratch2" )),
    (this.a_yawning = new Array( "", 'this.SetBehavior("wakingup")', 'this.SetBehavior("resting2")', "5", "1", "yawn" )),
    (this.a_resting2 = new Array( "", 'this.SetBehavior("wakingup")', 'this.SetBehavior("sleeping")', "9", "1", "still" )),
    (this.a_wakingup = new Array( 'this.SetBehavior("resting")', "", 'this.SetBehavior("chasing")', "1", "1", "alert", "still" )),
    (this.a_chasing = new Array( 'this.SetBehavior("resting")', "", "", "0", "1", "run1", "run2" )),
    (this.a_sleeping = new Array( "", 'this.SetBehavior("wakingup")', "", "0", "1", "sleep1", "sleep1", "sleep1", "sleep2", "sleep2", "sleep2" )),
    (this.behaviorRepetition = 0),
    (this.loopTimes = 0);
  var strLayer = "layerNeko" + this.whichNeko,
    strImage = "imageNeko" + this.whichNeko,
    strImageSrc = this.directory + "/still.gif",
    strNekoObj = "aNekos[" + this.whichNeko + "]",
    strContent =
      "<a ondblclick='document.location.href=\"https://webneko.net\"' href='https://webneko.net' onmouseover='" +
      strNekoObj +
      ".message();return true' onmouseout='window.status = \"\"' onclick='" +
      strNekoObj +
      ".active = !" +
      strNekoObj +
      ".active;return false;' onfocus='this.blur()'><img border='0' name='" +
      strImage +
      "' src='" +
      strImageSrc +
      "'></a>";
    (this.layer = createLayer(strLayer, x, y, 32, 44, strContent)),
    (this.layer.Neko = this),
    (this.homeX = this.layer.myx),
    (this.homeY = this.layer.myy),
    (this.doc = this.layer.document),
    this.doc || (this.doc = document),
    (this.image = byName(this.doc.images, strImage)),
    (this.image.Neko = this), window.delay && window.delay > 0 ?
    (this.delay = window.delay + Math.floor(nDelayVariance * Math.random() - 5)) : (this.delay = 150 + Math.floor(nDelayVariance * Math.random() - 5)),
    (this.delayMultiplier = 1), window.stepsize && window.stepsize > 0 ? (this.stepsize = window.stepsize) : (this.stepsize = 16), active || (active = !1),
    (this.active = active), this.SetBehavior("resting"),
    (this.frame = nFirstRealFrame),
    (this.direction = ""),
    (this.looseDirection = ""),
    (this.endx = 0), this.endy, this.distx, this.disty, this.steps,
    (this.caught = !0), this.dx, this.dy,
    (this.boardX = -1),
    (this.boardY = -1),
    (this.eccX = Math.floor( checkerboardEccentricity * Math.random() - checkerboardEccentricity / 2 )),
    (this.eccY = Math.floor( checkerboardEccentricity * Math.random() - checkerboardEccentricity / 2 )),
    this.Think();
}

function NekoMessage() { var e = this.caught ? sNekoMessageCaught : sNekoMessage; window.status = e; }
function NekoTargetMouse() { var e = mouse.x + 4, t = mouse.y - 20; (this.endx = e), (this.endy = t), box.setBoard(this.whichNeko, this.endx, this.endy); }
function NekoShow() { sE(this.layer); }
function NekoHide() { hE(this.layer); }
function NekoTargetHome() { (this.endx = this.homeX), (this.endy = this.homeY); }
function NekoCalculateDistance() {
  (this.distx = this.endx - this.layer.myx),
  (this.disty = this.endy - this.layer.myy),
  (this.steps = Math.sqrt(Math.pow(this.distx, 2) + Math.pow(this.disty, 2)) / this.stepsize), this.steps >= 1 ? (this.caught && eval(this.onUnCaught), (this.caught = !1)) : (this.caught || eval(this.onCaught), (this.caught = !0)),
  (this.dx = this.distx / this.steps),
  (this.dy = this.disty / this.steps);
}

function NekoSetBehavior(strNewBehavior) {
  (this.behavior = strNewBehavior), (this.frame = nFirstRealFrame);
  var paImages = eval("aNekos[" + this.whichNeko + "].a_" + this.behavior);
  (this.onCaught = paImages[0]),
  (this.onUnCaught = paImages[1]),
  (this.onLoopEnd = paImages[2]),
  (this.loopTimes = paImages[3]),
  (this.delayMultiplier = paImages[4]);
}
function NekoUpdateImage() {
  var paImages = eval("aNekos[" + this.whichNeko + "].a_" + this.behavior);
  if (this.frame >= paImages.length)
  if ((this.behaviorRepetition++, 0 != this.loopTimes && this.behaviorRepetition >= this.loopTimes) ) {(this.behaviorRepetition = 0), eval(this.onLoopEnd); var paImages = eval("aNekos[" + this.whichNeko + "].a_" + this.behavior); }
  else this.frame = nFirstRealFrame;
  if (this.aGifs[this.direction + paImages[this.frame]]) { var strImage = this.aGifs[this.direction + paImages[this.frame]].src; this.image.src = strImage; }
  else if (this.aGifs[paImages[this.frame]]) { var strImage = this.aGifs[paImages[this.frame]].src; this.image.src = strImage; }
  else if (this.looseDirection + this.aGifs[paImages[this.frame]]) { var strImage = this.aGifs[this.looseDirection + paImages[this.frame]].src; this.image.src = strImage; }
  else this.image.src = this.aGifs.alert.src; this.frame++; }

function NekoMoveAStep() {
  this.steps >= 1
    ? ((this.layer.myx += this.dx), (this.layer.myy += this.dy))
    : ((this.layer.myx = this.endx), (this.layer.myy = this.endy)),
    box.checkBoard(this.whichNeko, this.layer.myx, this.layer.myy) &&
      ((this.layer.myx += this.eccX), (this.layer.myy += this.eccY)),
    sX(this.layer, this.layer.myx),
    sY(this.layer, this.layer.myy),
    box.setBoard(this.whichNeko, this.layer.myx, this.layer.myy);
}
function NekoFindDirection() {
  if (0 != t || 0 != e) {
    var e = -1 * this.dy,
      t = this.dx,
      i = Math.abs(t),
      o = "",
      s = "",
      a = Math.abs(e) / i,
      r = a < 0.41421,
      h = a > 2.4142;
    e > 0 ? r || (o = "n") : r || (o = "s"),
      t > 0 ? h || (s = "e") : h || (s = "w"),
      (this.looseDirection = "" != s ? s : o),
      (this.direction = o + s);
  } else this.direction = "";
}
function NekoThink() {
  this.active ? this.TargetMouse() : this.TargetHome(),
  this.CalculateDistance(),
  this.FindDirection(),
  this.UpdateImage(),
  "chasing" == this.behavior && this.MoveAStep();
  var e = Math.floor(this.delay * this.delayMultiplier);
  setTimeout("aNekos[" + this.whichNeko + "].Think()", e);
}
function nekoChooseIdle() {
  var e = new Array("resting", "yawning", "itching", "scratching"),
    t = Math.floor(Math.random() * e.length);
  this.SetBehavior(e[t]);
}
function startANeko() {
  var e = 0,
    t = 0;
  window.startNekoX && (e = window.startNekoX),
  window.startNekoY && (t = window.startNekoY),
  parseInt(e) != e &&
  (window.onresize = function () { for (var e = 0; e < aNekos.length; e++) aNekos[e].homeXfn && aNekos[e].findHome(); });
  new Neko(e, t, !1);
  window.onloadOriginal();
}
function mouse() { (this.x = 0), (this.y = 0); }
function box() {
  (this.width = function () { return window.innerWidth ? window.innerWidth : document.body.clientWidth; }),
  (this.height = function () { return window.innerHeight ? window.innerHeight : document.body.clientHeight; }),
  (this.xoffset = function () { return void 0 !== window.pageXOffset ? window.pageXOffset : document.body.scrollLeft; }),
  (this.yoffset = function () { return void 0 !== window.pageYOffset ? window.pageYOffset : document.body.scrollTop; });
}
function boxBoundWidth(e) { 0 == e || e || (e = this.width()); var t = this.width() - 36; return e < 0 && (e = 0), e > t && (e = t), e; }
function boxBoundHeight(e) { 0 == e || e || (e = this.height()); var t = this.height() - 12; return e < 20 && (e = 20), e > t && (e = t), e; }
function boxSetBoard(e, t, i) {
  var o = Math.floor((t / this.width()) * checkerboardScale),
    s = Math.floor((i / this.height()) * checkerboardScale);
  o < 0 && (o = 0),
    o >= checkerboardScale && (o = checkerboardScale - 1),
    s < 0 && (s = 0),
    s >= checkerboardScale && (s = checkerboardScale - 1);
  var a = aNekos[e];
  return (
    (a.boardX == o && a.boardY == s) ||
      (-1 != a.boardX && checkerboard[a.boardX][a.boardY]--,
      checkerboard[o][s]++,
      (a.boardX = o),
      (a.boardY = s)),
    0 == checkerboard[o][s] ? 0 : checkerboard[o][s] - 1
  );
}
function boxCheckBoard(e, t, i) {
  var o = Math.floor((t / this.width()) * checkerboardScale),
    s = Math.floor((i / this.height()) * checkerboardScale);
  o < 0 && (o = 0),
    o >= checkerboardScale && (o = checkerboardScale - 1),
    s < 0 && (s = 0),
    s >= checkerboardScale && (s = checkerboardScale - 1);
  var a = aNekos[e],
    r = 0;
  return a.boardX == o && a.boardY == s && (r = 1), checkerboard[o][s] - r;
}
(d = document),
  (l = d.layers),
  (op = -1 != navigator.userAgent.indexOf("Opera")),
  (px = "px"),
  document.write('<style type="text/css">#nl{display:none;}</style>');
var checkerboardEccentricity = 10,
  checkerboardScale = 20,
  nDelayVariance = 20,
  nFirstRealFrame = 5,
  sNekoMessage =
    "Click Neko and he'll chase your mouse!    Double-click to visit Neko's home (https://webneko.net)",
  sNekoMessageCaught = sNekoMessage,
  aNekos = new Array();
  (Neko.prototype.message = NekoMessage),
  (Neko.prototype.TargetMouse = NekoTargetMouse),
  (Neko.prototype.Show = NekoShow),
  (Neko.prototype.Hide = NekoHide),
  (Neko.prototype.TargetHome = NekoTargetHome),
  (Neko.prototype.CalculateDistance = NekoCalculateDistance),
  (Neko.prototype.SetBehavior = NekoSetBehavior),
  (Neko.prototype.UpdateImage = NekoUpdateImage),
  (Neko.prototype.MoveAStep = NekoMoveAStep),
  (Neko.prototype.FindDirection = NekoFindDirection),
  (Neko.prototype.Think = NekoThink),
  (Neko.prototype.chooseIdle = nekoChooseIdle),
  (window.onloadOriginal = new Function()),
  window.onload && (window.onloadOriginal = window.onload),
  window.NekoNoDefault || (window.onload = startANeko),
  (mouse = new mouse()),
  (box.prototype.boundWidth = boxBoundWidth),
  (box.prototype.boundHeight = boxBoundHeight),
  (box.prototype.setBoard = boxSetBoard),
  (box.prototype.checkBoard = boxCheckBoard),
  (box = new box()),
  (document.onmousemove = function (e) {
    var t = e ? e.pageX : event.x + document.body.scrollLeft,
      i = e ? e.pageY : event.y + document.body.scrollTop;
    (mouse.x = box.boundWidth(t)), (mouse.y = box.boundHeight(i));
  }),
  document.captureEvents && document.captureEvents(Event.MOUSEMOVE);
for ( var checkerboard = new Array(checkerboardScale), i = 0; i < checkerboardScale; i++ ) { checkerboard[i] = new Array(checkerboardScale); for (var j = 0; j < checkerboardScale; j++) checkerboard[i][j] = 0; }