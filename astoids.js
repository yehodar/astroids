(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"astoids_atlas_P_", frames: [[0,1114,306,238],[0,0,960,590],[1639,517,76,39],[1525,526,34,34],[962,475,203,64],[0,592,921,520],[1447,476,76,79],[1167,475,138,79],[1307,476,138,79],[962,541,202,48],[1525,476,112,48],[1639,476,106,39],[923,891,383,473],[962,0,395,473],[1359,0,388,474],[923,592,806,297],[1561,543,25,28],[1588,543,25,28],[1166,556,25,28],[1615,543,17,31],[1561,526,67,15]]},
		{name:"astoids_atlas_NP_", frames: [[3842,156,239,154],[3842,0,239,154],[0,0,3840,590],[2406,592,239,154],[0,592,960,590],[3842,468,239,154],[2165,592,239,154],[1924,592,239,154],[2647,592,239,154],[3842,312,239,154],[2888,592,239,154],[962,592,960,590],[3129,592,239,154],[3370,592,239,154]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.astroid = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.avengers = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bear = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bigbackground = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dishon = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.end_btn = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.end_screen = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fish = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hipo = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.inside_out = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.kung_fu = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mina = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pause = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pause_btn = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pause_screen = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.play_btn = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.play_btn1 = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.play_btn2 = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.playagain_btn = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.progressbar_background = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.progressbar_front = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.shabtay_happy = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.shabtay_reg = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.shabtay_sad = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.shrek = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.spaceship = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.speedbar_btn1 = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.speedbar_btn2 = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.speedbar_btn3 = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.speedbar_dial = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.speedbar_txt = function() {
	this.spriteSheet = ss["astoids_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.start_scene = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wall_e = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.zvi = function() {
	this.spriteSheet = ss["astoids_atlas_NP_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.startgame_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.play_btn();
	this.instance.parent = this;
	this.instance.setTransform(-38,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-40,76,79);


(lib.start_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.start_scene();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.start_screen, new cjs.Rectangle(0,0,960,590), null);


(lib.speedbar_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.speedbar_txt();
	this.instance.parent = this;
	this.instance.setTransform(-36,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speedbar_txt_1, new cjs.Rectangle(-36,-10,67,15), null);


(lib.speedbar_dial_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.speedbar_dial();
	this.instance.parent = this;
	this.instance.setTransform(-9,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speedbar_dial_1, new cjs.Rectangle(-9,-21,17,31), null);


(lib.speedbar_btn3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.speedbar_btn3();
	this.instance.parent = this;
	this.instance.setTransform(-12,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speedbar_btn3_1, new cjs.Rectangle(-12,-13,25,28), null);


(lib.speedbar_btn2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.speedbar_btn2();
	this.instance.parent = this;
	this.instance.setTransform(-12,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speedbar_btn2_1, new cjs.Rectangle(-12,-13,25,28), null);


(lib.speedbar_btn1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.speedbar_btn1();
	this.instance.parent = this;
	this.instance.setTransform(-13,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.speedbar_btn1_1, new cjs.Rectangle(-13,-14,25,28), null);


(lib.spaceship_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spachshipsvg.svg
	this.instance = new lib.spaceship();
	this.instance.parent = this;
	this.instance.setTransform(-403,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spaceship_1, new cjs.Rectangle(-403,-149,806,297), null);


(lib.shabtay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.shabtay_reg();
	this.instance.parent = this;
	this.instance.setTransform(-198,-237);

	this.instance_1 = new lib.shabtay_happy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-198,-237);

	this.instance_2 = new lib.shabtay_sad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-198,-237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-237,395,473);


(lib.progressbar_front_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.progressbar_front();
	this.instance.parent = this;
	this.instance.setTransform(-53,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.progressbar_front_1, new cjs.Rectangle(-53,-20,106,39), null);


(lib.progressbar_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.progressbar_background();
	this.instance.parent = this;
	this.instance.setTransform(-56,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.progressbar_background_1, new cjs.Rectangle(-56,-24,112,48), null);


(lib.playagain_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playagain_btn();
	this.instance.parent = this;
	this.instance.setTransform(-101,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-24,202,48);


(lib.pause_screen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pause_screen();
	this.instance.parent = this;
	this.instance.setTransform(-461,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pause_screen_1, new cjs.Rectangle(-461,-260,921,520), null);


(lib.pause_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pause_btn();
	this.instance.parent = this;
	this.instance.setTransform(-102,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-32,203,64);


(lib.pause_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pause();
	this.instance.parent = this;
	this.instance.setTransform(-17,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pause_1, new cjs.Rectangle(-17,-16,34,34), null);


(lib.imgitems = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// Layer 1
	this.instance = new lib.avengers();
	this.instance.parent = this;
	this.instance.setTransform(-120,-77);

	this.instance_1 = new lib.inside_out();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120,-77);

	this.instance_2 = new lib.kung_fu();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-120,-77);

	this.instance_3 = new lib.shrek();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-120,-77);

	this.instance_4 = new lib.wall_e();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-120,-77);

	this.instance_5 = new lib.bear();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-120,-77);

	this.instance_6 = new lib.dishon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-120,-77);

	this.instance_7 = new lib.fish();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-120,-77);

	this.instance_8 = new lib.hipo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-120,-77);

	this.instance_9 = new lib.mina();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-120,-77);

	this.instance_10 = new lib.zvi();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-120,-77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-77,239,154);


(lib.game_play2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.play_btn2();
	this.instance.parent = this;
	this.instance.setTransform(-69,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-40,138,79);


(lib.game_play1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.play_btn1();
	this.instance.parent = this;
	this.instance.setTransform(-69,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-40,138,79);


(lib.end_screen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.end_screen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_screen_1, new cjs.Rectangle(0,0,960,590), null);


(lib.end_btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.end_btn();
	this.instance.parent = this;
	this.instance.setTransform(-38,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-20,76,39);


(lib.walle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wall_e();
	this.instance.parent = this;
	this.instance.setTransform(-120,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.walle, new cjs.Rectangle(-120,-77,239,154), null);


(lib.shrek_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shrek();
	this.instance.parent = this;
	this.instance.setTransform(-120,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shrek_1, new cjs.Rectangle(-120,-77,239,154), null);


(lib.kungfu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kung_fu();
	this.instance.parent = this;
	this.instance.setTransform(-120,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kungfu, new cjs.Rectangle(-120,-77,239,154), null);


(lib.avengers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.avengers();
	this.instance.parent = this;
	this.instance.setTransform(-120,-77);

	this.instance_1 = new lib.inside_out();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-77,239,154);


(lib.insideout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.inside_out();
	this.instance.parent = this;
	this.instance.setTransform(-120,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.insideout, new cjs.Rectangle(-120,-77,239,154), null);


(lib.big_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigbackground();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.big_background, new cjs.Rectangle(0,0,3840,590), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-484,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(-484,-292,960,590), null);


(lib.astroid_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.astroid();
	this.instance.parent = this;
	this.instance.setTransform(-153,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.astroid_1, new cjs.Rectangle(-153,-117,306,238), null);


// stage content:
(lib.astoids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		//שם ומספר המשחק
		var gamename = "סרטי דיסני";
		var gameindex = 0;
		//משתנה המהירות - הפיקסלים שהאסטרואיד מתקדם
		var astroidspeedx = 0;
		var astroidspeedy = 0;
		//הגדרת משתנה שיזכור את המהירות הנוכחית לצורך שחזור
		var currentspeedx = 4;
		//סופר לחיצות על תשובה נכונה
		var correctclickcount = 0;
		//משתנה הזוכר האם הפריט האחרון נלחץ 
		var isclicked = false;
		//משתנה להשהיית הטיקר
		var tickerpause = true;
		
		
		
		//מערך התוכן
		var items = [
			//דוגמת תוכן ראשונה - סרטי דיסני
			//תוכן>נכון או לא>תמונה או טקסט>להראות שוב>להוסיף כוכבית
			[
				["הקיסר נפל על הראש", "יומני הנסיכה", 4, "ספר הגונגל", "שודדי הקאריביים: קללת הפנינה השחורה", "מואנה", "מלחמת הכוכבים - פרק 7: הכוח מתעורר", "זוטרופוליס", "שומרי הגלקסיה", "פנטסיה", "במבי", "היפהפייה והיחפן", "למעלה", "אטלנטיס: האימפריה האבודה", 0, 1, "הדרך לאל דוראדו", "נסיך מצרים", "סוד הממלכה הקסומה", "החרב הקסומה", "אצבעונית", 3, "גן עדן לכלבים", "רובוטריקים", "מדגסקר", 2, "עידן הקרח", "כוורת בסרט", "החיים הסודיים של חיות המחמד", "המיניונים"],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, false, false, false, true, false, false, false, false],
				[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
				[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
			],
		
			//דוגמת תוכן שניה - 
			[
				["ברדלס אסייאתי", "אריה", "תנין יאור", 5, 10, "צב ביצות אירופאי", 6, "יען", "כלב ים נזירי", 8, 9, 7, "גירית", "לוטרה אירופאית", "ג'אמוס", "ראם לבן"],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
				[false, false, false, true, true, false, true, false, false, true, true, true, false, false, false, false],
				[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
				[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
			]
		];
		
		//סוף מערך התוכן
		
		//הגדרת משתנה לכמות הפריטים
		var itemsum = 0;
		//משתנה הסופר כמה תשובות נכונות יש במשחק
		var rightans = 0;
		//הגדרת משתנה לבחירת הפריט הבא
		var nextitem = 0;
		
		
		//הגדרת משתנה לכמות הפריטים שהשחקן הוציא מהמשחק על ידי זה שבחר נכון או התעלם מתשובה שגויה
		var correctcount = 0;
		//הגדרת משתנה לספירת שגיאות השחקן
		var mistakes = 0;
		//הגדרת משתנה לכמות הפריטים הנכונים שהשחקן לחץ עליהם
		var rightanscount = 0;
		//הגדרת משתנה לשינוי הגודל של האסטרואיד - בשביל תשובה נכונה
		var astroscalechange = 0;
		//משתנה המגדיר האם המשחק פעיל כרגע - למטרת ספירת זמן
		var isplay = false;
		//משתנה לספירת זמן המשחק לפי פריימים
		var gametime = 0;
		
		//משתנה השומר פריט נכון להופיע בסוף
		var lastitem = 0;
		
		//הפעלת סאונד
		
		
		
		//הפעלת הממשק 
		startscreenfunc();
		
		
		
		//פונקציית מסך הפתיחה
		function startscreenfunc() {
			//אפשור הובר
			var frequency = 3;
			stage.enableMouseOver(frequency);
			//הוספת רקע מסך פתיחה
			var startscreen = new lib.start_screen();
			startscreen.name = "startscreen";
			stage.addChild(startscreen);
			//כפתורים לבחירת משחק
			var playbtn1 = new lib.game_play1();
			playbtn1.x = 440;
			playbtn1.y = 370;
			playbtn1.name = "playbtn1";
			stage.addChild(playbtn1);
			playbtn1.addEventListener("click", function playbtn1_click() {
				stage.removeAllChildren();
				stage.update();
				gamename = "סרטים השייכים לדיסני";
				gameindex = 0;
				startgame();
			});
			playbtn1.addEventListener("mouseover", function playbtn1_hover() {
				playbtn1.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				playbtn1.cursor = "pointer";
			});
			playbtn1.addEventListener("mouseout", function playbtn1_out() {
				playbtn1.shadow = null;
			});
			var playbtn2 = new lib.game_play2();
			playbtn2.x = 260;
			playbtn2.y = 370;
			playbtn2.name = "playbtn2";
			stage.addChild(playbtn2);
			playbtn2.addEventListener("click", function playbtn2_click() {
		
				stage.removeAllChildren();
				stage.update();
				gamename = "בעלי חיים שנעלמו מהטבע בישראל";
				gameindex = 1;
				startgame();
		
			});
			playbtn2.addEventListener("mouseover", function playbtn2_hover() {
				playbtn2.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				playbtn2.cursor = "pointer";
			});
			playbtn2.addEventListener("mouseout", function playbtn2_out() {
				playbtn2.shadow = null;
			});
		
		}
		
		
		//סוף כל מה שקשור לפונקית מסך הפתיחה
		
		
		
		
		//פונקציית המשחק
		function startgame() {
			//הפעלת הטיקר
			tickerpause = false;
			//סימון מצב משחק בשביל כפתור ההשהייה
			isplay = true;
		
			//הזנת תוכן למשתנים כללים לפי המשחק הנבחר
		
			//כמות הפריטים במשחק זה
			itemsum = items[gameindex][0].length;
			//כמות הפריטים הנכונים במשחק זה
			rightans = 0;
			for (i = 0; i < items[0][0].length; i++) {
				if (items[gameindex][1][i] == 1) {
					rightans++;
					//מציאת הפריט האחרון הנכון
					lastitem = i;
				}
			}
			//הפריט הראשון שיופיע
			nextitem = Math.floor(Math.random() * (itemsum));
			//בדיקה שהפריט הראשון לא יהיה תמונה - כיוון שזה יוצר בעיות
			var found1 = false;
			while (found1 == false) {
				nextitem = Math.floor(Math.random() * (itemsum));
				if (items[gameindex][2][nextitem] == false && nextitem != lastitem) {
					found1 = true;
				}
			}
		
			//קביעת מהירות ברירת מחדל לאסטרואיד
			astroidspeedx = 5;
			//אפשור הובר
			var frequency = 3;
			stage.enableMouseOver(frequency);
		
			// הוספת רקע שמיים
			var background = new lib.big_background();
			background.x = 0;
			background.name = "background";
			stage.addChild(background);
		
			//הוספת שבתאי
			var shabtay = new lib.shabtay();
			shabtay.x = 490;
			shabtay.y = 372;
			shabtay.scaleX = 0.35;
			shabtay.scaleY = 0.33;
			shabtay.name = "shabtay";
			stage.addChild(shabtay);
		
			//הוספת חללית
			var spaceship = new lib.spaceship();
			spaceship.x = 83;
			spaceship.y = 277;
			stage.addChild(spaceship);
		
			//הוספת תיבות טקסט ללוח המשימה
			var txt1 = new createjs.Text("אספו את האסטרואידים המכילים", "13pt Arial", "#191919");
			txt1.x = 380;
			txt1.y = 455;
			stage.addChild(txt1);
			var txt2 = new createjs.Text(gamename, "bold 14pt Arial", "#191919");
			txt2.textAlign = "center";
			txt2.x = 487;
			txt2.y = 480;
			stage.addChild(txt2);
			var txt3 = new createjs.Text("לחצו על האסטרואיד הרצוי", "12pt Arial", "#595959");
			txt3.x = 410;
			txt3.y = 510;
			stage.addChild(txt3);
		
		
			//הוספת מד מהירות
			var speedbar_txt = new lib.speedbar_txt();
			speedbar_txt.x = 660;
			speedbar_txt.y = 510;
			stage.addChild(speedbar_txt);
		
			//כפתור מד מהירות 1 - איטי
			var speedbar_btn1 = new lib.speedbar_btn1();
			speedbar_btn1.x = 655;
			speedbar_btn1.y = 470;
			stage.addChild(speedbar_btn1);
			speedbar_btn1.addEventListener("click", function click1() {
				speedbar_dial.rotation = -40;
				speedbar_dial.x = 670;
				speedbar_dial.y = 490;
				astroidspeedx = 3;
				currentspeedx = 3;
		
			});
			speedbar_btn1.addEventListener("mouseover", function pause_func() {
				speedbar_btn1.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				speedbar_btn1.cursor = "pointer";
			});
			speedbar_btn1.addEventListener("mouseout", function pause_func() {
				speedbar_btn1.shadow = null;
			});
		
			//כפתור מד מהירות 2 - רגיל
			var speedbar_btn2 = new lib.speedbar_btn2();
			speedbar_btn2.x = 680;
			speedbar_btn2.y = 460;
			stage.addChild(speedbar_btn2);
			speedbar_btn2.addEventListener("click", function click2() {
				speedbar_dial.rotation = 0;
				speedbar_dial.x = 685;
				speedbar_dial.y = 480;
				astroidspeedx = 4;
				currentspeedx = 4;
		
			});
			speedbar_btn2.addEventListener("mouseover", function pause_func() {
				speedbar_btn2.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				speedbar_btn2.cursor = "pointer";
			});
			speedbar_btn2.addEventListener("mouseout", function pause_func() {
				speedbar_btn2.shadow = null;
			});
			//כפתור מד מהירות 3 - מהיר
			var speedbar_btn3 = new lib.speedbar_btn3();
			speedbar_btn3.x = 705;
			speedbar_btn3.y = 470;
			stage.addChild(speedbar_btn3);
			speedbar_btn3.addEventListener("click", function click3() {
				speedbar_dial.rotation = 40;
				speedbar_dial.x = 705;
				speedbar_dial.y = 480;
				astroidspeedx = 8;
				currentspeedx = 8;
		
			});
			speedbar_btn3.addEventListener("mouseover", function pause_func() {
				speedbar_btn3.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				speedbar_btn3.cursor = "pointer";
			});
			speedbar_btn3.addEventListener("mouseout", function pause_func() {
				speedbar_btn3.shadow = null;
			});
		
			var speedbar_dial = new lib.speedbar_dial();
			speedbar_dial.x = 685;
			speedbar_dial.y = 480;
			stage.addChild(speedbar_dial);
		
			//הוספת כפתור השהיה
			var pause_btn = new lib.pause();
			pause_btn.x = 750;
			pause_btn.y = 480;
			stage.addChild(pause_btn);
			pause_btn.addEventListener("click", function pause_func() {
				//השהייה
				currentspeedx = astroidspeedx;
				astroidspeedx = 0;
				astroidspeedy = 0;
				isplay = false;
				//הוספת מסך הסתרה
				var pausescreen = new lib.pause_screen();
				pausescreen.x = 20;
				pausescreen.y = 30;
				pausescreen.name = "pausescreen";
				stage.addChild(pausescreen);
				//הוספת כפתור וטקסט
				var pausetxt = new createjs.Text("המשחק הושהה", "18pt Arial", "#000000");
				pausetxt.name = "pausetxt";
				pausetxt.x = 412;
				pausetxt.y = 250;
				stage.addChild(pausetxt);
				var pausebtn2 = new lib.pause_btn();
				pausebtn2.x = 390;
				pausebtn2.y = 350;
				pausebtn2.scaleX = 0.9;
				pausebtn2.scaleY = 0.9;
				pausebtn2.name = "pausebtn2";
				pausebtn2.cursor = "pointer";
				//אירוע לחיצה על כפתור המשך
				pausebtn2.addEventListener("click", function pausebtn_click() {
		
					stage.removeChild(stage.getChildByName("pausescreen"));
					stage.removeChild(stage.getChildByName("pausetxt"));
					stage.removeChild(stage.getChildByName("pausebtn2"));
		
					items[gameindex][3][nextitem] = true;
		
		
					astroidspeedy = 0;
					isplay = true;
					astroscalechange = 0;
		
					mistakes++;
					isclicked = false;
		
					//החזרת המהירות למהירות האחרונה
					astroidspeedx = currentspeedx;
		
					//הגדרת לולאה למציאת פריט שצריך להופיע שוב
					var found = false;
					while (found == false) {
						nextitem = Math.floor(Math.random() * (itemsum));
						if (items[gameindex][3][nextitem] == true) {
							found = true;
						}
					}
					if (items[gameindex][2][nextitem] == true) {
						stage.getChildByName("imgitem").gotoAndStop(items[gameindex][0][nextitem]);
						stage.getChildByName("imgitem").alpha = 1;
					}
					if (items[gameindex][2][nextitem] == false) {
						stage.getChildByName("optiontxt").text = items[gameindex][0][nextitem];
						stage.getChildByName("imgitem").alpha = 0;
					}
		
					stage.getChildByName("astroid").x = 960;
					stage.getChildByName("optiontxt").x = 1200;
					stage.getChildByName("imgitem").x = 1114;
		
				});
				stage.addChild(pausebtn2);
			});
			pause_btn.addEventListener("mouseover", function pause_func() {
				pause_btn.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				pause_btn.cursor = "pointer";
			});
			pause_btn.addEventListener("mouseout", function pause_func() {
				pause_btn.shadow = null;
			});
		
			//סוף כפתור השהייה
		
			//הוספת בר התקדמות
			var progressback = new lib.progressbar_background();
			progressback.x = 200;
			progressback.y = 470;
			progressback.name = "progressback";
			stage.addChild(progressback);
		
			var progressfront = new lib.progressbar_front();
			progressfront.x = 202;
			progressfront.y = 474;
			progressfront.name = "progressfront";
			progressfront.scaleX = 0;
			stage.addChild(progressfront);
		
			//הוספת אחוז התקדמות
			var progresstxt = new createjs.Text("0%", "16pt Arial", "#FFFFFF");
			progresstxt.x = 240;
			progresstxt.y = 480;
			progresstxt.name = "progresstxt";
			stage.addChild(progresstxt);
		
			//הוספת אסטרואיד
			var astroid = new lib.astroid();
			astroid.x = 960;
			astroid.y = 20;
			astroid.name = "astroid";
			astroid.cursor = "pointer";
			astroid.addEventListener("click", itemClick);
			stage.addChild(astroid);
		
			//הוספת תיבת טקסט לפריט
			var optiontxt = new createjs.Text(items[gameindex][0][nextitem], "16pt Arial", "#000000");
			optiontxt.name = "optiontxt";
			optiontxt.x = 1200;
			optiontxt.y = 120;
			optiontxt.textAlign = "right";
			optiontxt.lineWidth = 180;
			stage.addChild(optiontxt);
		
		
			//הוספת תמונה לפריט
			var imgitem = new lib.imgitems();
			imgitem.x = 1114;
			imgitem.y = 140;
			imgitem.scaleX = 0.78;
			imgitem.scaleY = 0.78;
			imgitem.name = "imgitem";
			imgitem.alpha = 0;
			stage.addChild(imgitem);
		
			//אלמנטים של בדיקות לעת הצורך
		
			//var idtest = new createjs.Text("true? " + items[gameindex][1][nextitem] + " | pic? " + items[gameindex][2][nextitem] + " | show again?" + items[gameindex][3][nextitem] + " | kok?: " + items[gameindex][4][nextitem], "16pt Arial", "#D03E4B");
			//idtest.x = 240;
			//idtest.y = 180;
			//idtest.name = "idtest";
			//stage.addChild(idtest);
			//var idtest = new createjs.Text(correctcount + " | " + itemsum, "20pt Arial", "#D03E4B");
			//idtest.x = 10;
			//idtest.y = 550;
			//idtest.name = "idtest";
			//stage.addChild(idtest);
		}
		
		//יצירת טיקר 
		
		createjs.Ticker.addEventListener("tick", mytick);
		function mytick() {
			//בדיקה האם יש להפעילו
			if (tickerpause == false) {
		
				//תזוזת רקע
				stage.getChildByName("background").x -= 0.5;
				if (stage.getChildByName("background").x < -2850) {
					stage.getChildByName("background").x = 0;
				}
		
		
				//ספירת זמן
				if (isplay == true) {
					gametime++;
				}
		
		
				//הגדרת תנועת האסטרואיד על ציר האיקס
				stage.getChildByName("astroid").x -= astroidspeedx;
				stage.getChildByName("optiontxt").x -= astroidspeedx;
				stage.getChildByName("astroid").y += astroidspeedy;
				stage.getChildByName("optiontxt").y += astroidspeedy;
				stage.getChildByName("imgitem").x -= astroidspeedx;
				stage.getChildByName("imgitem").y += astroidspeedy;
		
				//הגדרת שינוי גודל האסטרואיד
				stage.getChildByName("astroid").scaleX -= astroscalechange;
				stage.getChildByName("astroid").scaleY -= astroscalechange;
				stage.getChildByName("optiontxt").scaleX -= astroscalechange;
				stage.getChildByName("optiontxt").scaleY -= astroscalechange;
				stage.getChildByName("imgitem").scaleX -= astroscalechange;
				stage.getChildByName("imgitem").scaleY -= astroscalechange;
		
				//הגדרת האירועים שקורים כשפריט יוצא מהפריים בצד שמאל
				//כלומר פריט שגוי שנלחץ או פריט שלא נלחץ בכלל
		
				if (stage.getChildByName("astroid").x < -260) {
					//איפוס משתנה שינוי גודל אסטרואיד
					astroscalechange = 0;
					//בדיקה האם זה הפריט האחרון ונגמר המשחק
					if (correctcount == itemsum) {
						endscreenfunc();
					}
					//בדיקה האם הפריט הזה נלחץ - במידה וכן, כל מה שקשור לזה כבר רשום בפונקצית לחיצה
					if (isclicked == true) {
						isclicked = false;
					} else {
						//אם השחקן מתעלם מתשובה שגויה, היא לא ציכה להופיע יותר
						if (items[gameindex][1][nextitem] == 0) {
							items[gameindex][3][nextitem] = false;
							//הגדלת מד התשובות הנכונות
							correctcount++;
							//עדכון אחוז ההתקדמות
							stage.getChildByName("progresstxt").text = Math.floor((rightanscount * 100) / rightans) + "%";
		
						}
						//אם השחקן מתעלם מתשובה נכונה, צריכה להופיע לידה כוכבית במשוב
						if (items[gameindex][1][nextitem] == 1) {
							items[gameindex][4][nextitem] = true;
							mistakes++;
						}
		
					}
		
		
					//החזרת המהירות למהירות האחרונה
					astroidspeedx = currentspeedx;
					//העברת שבתאי להבעה נטרלית
					stage.getChildByName("shabtay").gotoAndStop(0);
		
		
					//הגדרת לולאה למציאת פריט שצריך להופיע שוב
					//אם נשאר עוד פריט אחד בלבד, זה בוודאות יהיה פריט נכון
					if (correctcount == itemsum - 1) {
						nextitem = lastitem;
					} else {
						var found = false;
						while (found == false) {
							nextitem = Math.floor(Math.random() * (itemsum));
							if (items[gameindex][3][nextitem] == true && nextitem != lastitem) {
								found = true;
							}
						}
					}
		
					//פריט מסוג תמונה
					if (items[gameindex][2][nextitem] == true) {
						stage.getChildByName("imgitem").gotoAndStop(items[gameindex][0][nextitem]);
						stage.getChildByName("imgitem").alpha = 1;
					}
					//פריט מסוג טקסט
					if (items[gameindex][2][nextitem] == false) {
						stage.getChildByName("optiontxt").text = items[gameindex][0][nextitem];
						stage.getChildByName("imgitem").alpha = 0;
					}
		
		
		
		
					//איפוס מיקום האסטרואיד
					stage.getChildByName("astroid").x = 960;
					stage.getChildByName("optiontxt").x = 1200;
					stage.getChildByName("imgitem").x = 1114;
		
		
				}
		
				//הגדרת האירועים שיקרו כשפריט יוצא מהפריים מלמטה
				//כלומר פריט נכון שהשחקן לחץ עליו
				if (stage.getChildByName("astroid").y > 470) {
					//האם זה הפריט האחרון ויש לסיים את המשחק
					if (correctcount == itemsum) {
						endscreenfunc();
					}
					//עדכון מד התקדמות
					stage.getChildByName("progressfront").scaleX = rightanscount / rightans;
					stage.getChildByName("progresstxt").text = Math.floor((rightanscount * 100) / rightans) + "%";
					//איפוס הגדלים
					astroscalechange = 0;
					stage.getChildByName("astroid").scaleX = 1;
					stage.getChildByName("astroid").scaleY = 1;
					stage.getChildByName("optiontxt").scaleX = 1
					stage.getChildByName("optiontxt").scaleY = 1;
					stage.getChildByName("imgitem").scaleX = 0.78;
					stage.getChildByName("imgitem").scaleY = 0.78;
					stage.getChildByName("optiontxt").alpha = 1;
					stage.getChildByName("imgitem").alpha = 1;
		
					//החזרת ההבעה של שבתאי להבעה רגילה
					stage.getChildByName("shabtay").gotoAndStop(0);
					//איפוס המהירות
					astroidspeedx = currentspeedx;
					astroidspeedy = 0;
					//הגדרת לולאה למציאת פריט שצריך להופיע שוב
					//אם נשאר עוד פריט אחד בלבד, זה בוודאות יהיה פריט נכון
					if (correctcount == itemsum - 1) {
						nextitem = lastitem;
					} else {
						var found = false;
						while (found == false) {
							nextitem = Math.floor(Math.random() * (itemsum));
							if (items[gameindex][3][nextitem] == true && nextitem != lastitem) {
								found = true;
							}
						}
					}
					//פריט מסוג טקסט
					if (items[gameindex][2][nextitem] == false) {
						stage.getChildByName("optiontxt").text = items[gameindex][0][nextitem];
						stage.getChildByName("imgitem").alpha = 0;
					}
					//פריט מסוג תמונה
					if (items[gameindex][2][nextitem] == true) {
						stage.getChildByName("imgitem").gotoAndStop(items[gameindex][0][nextitem]);
						stage.getChildByName("imgitem").alpha = 1;
					}
					//החזרת האסטרואיד למקומו הראשוני
					stage.getChildByName("astroid").x = 960;
					stage.getChildByName("optiontxt").x = 1200;
					stage.getChildByName("astroid").y = 20;
					stage.getChildByName("optiontxt").y = 120;
					stage.getChildByName("imgitem").x = 1114;
					stage.getChildByName("imgitem").y = 140;
		
		
				}
			}
		
		}
		//סוף טיקר
		
		
		//פונקצית לחיצה על פריט
		function itemClick() {
		
			//לחיצה על תשובה נכונה
			if (items[gameindex][1][nextitem] == 1) {
				createjs.Sound.play("true_sound");
				//הקטנת האסטרואיד בעזרת הטיקר
				astroscalechange = 0.02;
				//העלמת התוכן
				stage.getChildByName("optiontxt").alpha = 0;
				stage.getChildByName("imgitem").alpha = 0;
		
				//מגדיר לפריט לא להופיע יותר
				items[gameindex][3][nextitem] = false;
				//מעלה באחד את מונה הפריטים שיצאו מהמשחק		
				correctcount++;
				rightanscount++;
		
		
				//אנימציה
				var speedkeep = astroidspeedx;
				astroidspeedx = ((100 - stage.getChildByName("astroid").x) / 100) * -3;
				astroidspeedy = 15;
				stage.getChildByName("shabtay").gotoAndStop(1);
				correctclickcount++;
		
		
		
			}
			//לחיצה על תשובה שגויה
			else {
				createjs.Sound.play("false_sound");
				isclicked = true;
				
				//מעבר שבתאי למצב עצוב
				stage.getChildByName("shabtay").gotoAndStop(2);
				//מעלה באחד את מד הטעויות
				mistakes++;
				//עצירת התנועה
				astroidspeedx = 0;
				//אנימציה
				stage.getChildByName("astroid").x += 9;
				setTimeout(function () {
					stage.getChildByName("astroid").x += -9;
				}, 200);
				setTimeout(function () {
					stage.getChildByName("astroid").x += 9;
				}, 400);
				setTimeout(function () {
					stage.getChildByName("astroid").x += -9;
				}, 600);
				setTimeout(function () {
					stage.getChildByName("astroid").x += 9;
				}, 800);
				setTimeout(function () {
					stage.getChildByName("astroid").x += -9;
					astroidspeedx = 20;
				}, 1000);
		
			}
		}
		//סוף פונקצית לחיצה
		
		//פונקצית סיום המשחק
		function endscreenfunc() {
			createjs.Sound.play("endgame_sound");
			//אפשור הובר
			var frequency = 3;
			stage.enableMouseOver(frequency);
			//ניקוי הבמה
			stage.removeAllChildren();
			stage.update();
			//עצירת הטיקר
			tickerpause = true;
			isplay = false;
			//הוספת רקע
			var endscreen = new lib.end_screen();
			endscreen.name = "endscreen";
			stage.addChild(endscreen);
		
			//רישום שם המשחק למעלה
			var gamenametxt1 = new createjs.Text(gamename, "16pt Arial", "#000000");
			gamenametxt1.x = 750;
			gamenametxt1.y = 21;
			gamenametxt1.textAlign = "right";
			gamenametxt1.name = "gamenametxt1";
			stage.addChild(gamenametxt1);
			//ציון
			var endgrade = Math.floor((1 - mistakes / itemsum) * 100);
			var gradetxt = new createjs.Text(endgrade, "16pt Arial", "#000000");
			gradetxt.x = 840;
			gradetxt.y = 58;
			gradetxt.name = "gradetxt";
			stage.addChild(gradetxt);
			//זמן - חישוב לפי מספר הפריימים שעברו 
			//לפי משתנה שחושב בטיקר
			var endtimemin = Math.floor((gametime / 24) / 60);
			var endtimesec = Math.floor((((gametime / 24) / 60) - endtimemin) * 60);
			if (endtimesec < 10) {
				endtimesec = "0" + endtimesec;
			}
			var timetxt = new createjs.Text(endtimemin + ":" + endtimesec, "16pt Arial", "#000000");
			timetxt.x = 700;
			timetxt.y = 58;
			timetxt.name = "timetxt";
			stage.addChild(timetxt);
		
		
		
			//כפתור סיום משחק
			var endgamebtn = new lib.end_btn();
			endgamebtn.x = 800;
			endgamebtn.y = 104;
			endgamebtn.name = "endgamebtn";
			stage.addChild(endgamebtn);
			endgamebtn.addEventListener("click", function endgamebtn_click() {
				resetdata();
				stage.removeAllChildren();
				stage.update();
				startscreenfunc();
		
			});
			endgamebtn.addEventListener("mouseover", function endgamebtn_hover() {
				endgamebtn.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				endgamebtn.cursor = "pointer";
			});
			endgamebtn.addEventListener("mouseout", function endgamebtn_out() {
				endgamebtn.shadow = null;
			});
		
			//כפתור שחק שוב
			var playagainbtn = new lib.playagain_btn();
			playagainbtn.x = 520;
			playagainbtn.y = 100;
			playagainbtn.name = "playagainbtn";
			stage.addChild(playagainbtn);
			playagainbtn.addEventListener("click", function playagainbtn_click() {
				resetdata();
				stage.removeAllChildren();
				stage.update();
				startgame();
			});
			playagainbtn.addEventListener("mouseover", function playagainbtn_hover() {
				playagainbtn.shadow = new createjs.Shadow("#484949", 3, 3, 10);
				playagainbtn.cursor = "pointer";
			});
			playagainbtn.addEventListener("mouseout", function playagainbtn_out() {
				playagainbtn.shadow = null;
			});
		
			//הסבר הכוכביות האדומות
			var reddottxt = new createjs.Text("", "9pt Arial", "#FF0000");
			reddottxt.x = 930;
			reddottxt.y = 190;
			reddottxt.textAlign = "right";
			reddottxt.name = "reddottxt";
			stage.addChild(reddottxt);
		
			//הצגת הפריטים הנכונים - הפריטים שהשחקן אסף
		
			//הצגת פרטי מסוג טקסט
			var itemtxty = 210;
			for (i = 0; i < itemsum; i++) {
				//בדיקה האם זה פריט טקסט והאם הוא נכון
				if (items[gameindex][1][i] == 1 && items[gameindex][2][i] == false) {
					//הוספת כוכבית אדומה לפי הצורך
					if (items[gameindex][4][i] == true) {
						var dottxt = new createjs.Text("*", "10pt Arial", "#FF0000");
						dottxt.x = 943;
						dottxt.y = itemtxty;
						stage.addChild(dottxt);
						stage.getChildByName("reddottxt").text = "פריטים שלא הצלחתם בניסיון ראשון*";
					}
		
					//הוספת תיבת טקסט למסיח
					var enditemtxt = new createjs.Text(items[gameindex][0][i], "11pt Arial", "#000000");
					enditemtxt.name = "enditemtxt";
					enditemtxt.x = 940;
					enditemtxt.y = itemtxty;
					enditemtxt.textAlign = "right";
					stage.addChild(enditemtxt);
		
					itemtxty += 17;
				}
			}
			//הוספת פריטים מסוג תמונה
			var itempicx = 650;
			var itempicy = 220;
			var itempiccount = 0;
			for (i = 0; i < itemsum; i++) {
				//בדיקה האם תמונה והאם נכון
				if (items[gameindex][2][i] == true && items[gameindex][1][i] == 1) {
					//הוספת כוכבית אדומה לפי הצורך
					if (items[gameindex][4][i] == true) {
						var dottxt = new createjs.Text("*", "11pt Arial", "#FF0000");
						dottxt.x = itempicx + 40;
						dottxt.y = itempicy - 20;
						stage.addChild(dottxt);
					}
					var enditempic = new lib.imgitems();
					enditempic.x = itempicx;
					enditempic.y = itempicy;
					enditempic.name = "enditempic" + i;
					enditempic.scaleX = 0.3;
					enditempic.scaleY = 0.3;
		
					stage.addChild(enditempic);
					enditempic.gotoAndStop(items[gameindex][0][i]);
					itempicy += 55;
					itempiccount++;
				}
				//מעבר לטור שני
				if (itempiccount > 7) {
					itempicx == 550;
				}
			}
		
		
		}
		
		
		
		//פונקציה לאיפוס המשחק
		
		function resetdata() {
		
		
			astroidspeedx = 0;
			astroidspeedy = 0;
			currentspeedx = 4;
			correctclickcount = 0;
			isclicked = false;
			items = [
				//דוגמת תוכן ראשונה - סרטי דיסני
				//תוכן>נכון או לא>תמונה או טקסט>להראות שוב>להוסיף כוכבית
				[
					["הקיסר נפל על הראש", "יומני הנסיכה", 4, "ספר הגונגל", "שודדי הקאריביים: קללת הפנינה השחורה", "מואנה", "מלחמת הכוכבים - פרק 7: הכוח מתעורר", "זוטרופוליס", "שומרי הגלקסיה", "פנטסיה", "במבי", "היפהפייה והיחפן", "למעלה", "אטלנטיס: האימפריה האבודה", 0, 1, "הדרך לאל דוראדו", "נסיך מצרים", "סוד הממלכה הקסומה", "החרב הקסומה", "אצבעונית", 3, "גן עדן לכלבים", "רובוטריקים", "מדגסקר", 2, "עידן הקרח", "כוורת בסרט", "החיים הסודיים של חיות המחמד", "המיניונים"],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, false, false, false, true, false, false, false, false],
					[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
					[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
				],
		
				//דוגמת תוכן שניה - 
				[
					["ברדלס אסייאתי", "אריה", "תנין יאור", 5, 10, "צב ביצות אירופאי", 6, "יען", "כלב ים נזירי", 8, 9, 7, "גירית", "לוטרה אירופאית", "ג'אמוס", "ראם לבן"],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
					[false, false, false, true, true, false, true, false, false, true, true, true, false, false, false, false],
					[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
					[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
				]
			];
		
			//סוף מערך התוכן
			correctcount = 0;
			mistakes = 0;
			rightanscount = 0;
			astroscalechange = 0;
			gametime = 0;
		
		
		}
		playSound("true_sound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'EA509DA944B7454C936B2102539A947B',
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/astoids_atlas_P_.png", id:"astoids_atlas_P_"},
		{src:"images/astoids_atlas_NP_.jpg", id:"astoids_atlas_NP_"},
		{src:"sounds/endgame_sound.mp3", id:"endgame_sound"},
		{src:"sounds/false_sound.mp3", id:"false_sound"},
		{src:"sounds/true_sound.mp3", id:"true_sound"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EA509DA944B7454C936B2102539A947B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;