!function(t){function n(n){for(var a,o,i=n[0],c=n[1],l=n[2],p=0,g=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&g.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(u&&u(n);g.length;)g.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(a=!1)}a&&(r.splice(n--,1),t=o(o.s=e[0]))}return t}var a={},s={0:0},r=[];function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var u=c;r.push([3,1]),e()}([function(t,n,e){var a=e(1),s=e(2);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1},o=(a(s,r),s.locals?s.locals:{});t.exports=o},,function(t,n,e){},function(t,n,e){"use strict";e.r(n);var a,s={timer:30,lives:3,stats:["unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown","unknown"]},r=function(t,n,e){var a=["slow","fast","correct","wrong","unknown"];if(!1===a.includes(n))throw new Error("Value should be: ".concat(a));var s=t.stats.slice();s[e]=n;var r=JSON.parse(JSON.stringify(t));if(r.stats=s,t.stats===r.stats)throw new Error("Array of the object should be a copied");if(t===r)throw new Error("Returned object should not be equal to object in the parametrs of the function");return r},o={gameLevels:new Set([{type:"gameTypeOne",task:"Угадайте для каждого изображения фото или рисунок?",gameOption:[{image:"assets/img/paint/paint_1.jpg",alt:"Option 1",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint"}]},{image:"assets/img/photo/photo_1.jpg",alt:"Option 2",correctAnswer:"photo",answerParams:[{text:"Фото",value:"photo",name:"question2",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question2",class:"game__answer--paint"}]}]},{type:"gameTypeTwo",task:"Угадай, фото или рисунок?",gameOption:[{image:"assets/img/paint/paint_2.jpg",alt:"Option 1",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint  game__answer--wide"}]}]},{type:"gameTypeThree",task:"Найдите рисунок среди изображений",correctAnswer:2,gameOption:[{image:"assets/img/photo/photo_2.jpg",alt:"Option 1"},{image:"assets/img/photo/photo_3.jpg",alt:"Option 1"},{image:"assets/img/paint/paint_3.jpg",alt:"Option 1"}]},{type:"gameTypeOne",task:"Угадайте для каждого изображения фото или рисунок?",gameOption:[{image:"assets/img/paint/paint_4.jpg",alt:"Option 1",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint"}]},{image:"assets/img/photo/photo_4.jpg",alt:"Option 2",correctAnswer:"photo",answerParams:[{text:"Фото",value:"photo",name:"question2",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question2",class:"game__answer--paint"}]}]},{type:"gameTypeTwo",task:"Угадай, фото или рисунок?",gameOption:[{image:"assets/img/paint/paint_5.jpg",alt:"Option 1",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint  game__answer--wide"}]}]},{type:"gameTypeThree",task:"Найдите рисунок среди изображений",correctAnswer:0,gameOption:[{image:"assets/img/paint/paint_6.jpg",alt:"Option 1"},{image:"assets/img/photo/photo_5.jpg",alt:"Option 1"},{image:"assets/img/photo/photo_6.jpg",alt:"Option 1"}]},{type:"gameTypeOne",task:"Угадайте для каждого изображения фото или рисунок?",gameOption:[{image:"assets/img/photo/photo_7.jpg",alt:"Option 1",correctAnswer:"photo",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint"}]},{image:"assets/img/paint/paint_7.jpg",alt:"Option 2",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question2",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question2",class:"game__answer--paint"}]}]},{type:"gameTypeTwo",task:"Угадай, фото или рисунок?",gameOption:[{image:"assets/img/photo/photo_8.jpg",alt:"Option 1",correctAnswer:"photo",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint  game__answer--wide"}]}]},{type:"gameTypeThree",task:"Найдите рисунок среди изображений",correctAnswer:2,gameOption:[{image:"assets/img/photo/photo_9.jpg",alt:"Option 1"},{image:"assets/img/photo/photo_10.jpg",alt:"Option 1"},{image:"assets/img/paint/paint_8.jpg",alt:"Option 1"}]},{type:"gameTypeOne",task:"Угадайте для каждого изображения фото или рисунок?",gameOption:[{image:"assets/img/paint/paint_9.jpg",alt:"Option 1",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question1",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question1",class:"game__answer--paint"}]},{image:"assets/img/paint/paint_10.jpg",alt:"Option 2",correctAnswer:"paint",answerParams:[{text:"Фото",value:"photo",name:"question2",class:"game__answer--photo"},{text:"Рисунок",value:"paint",name:"question2",class:"game__answer--paint"}]}]}])}.gameLevels,i=function(t){return'  <header class="header">\n    <div class="header__back">\n      <span class="back">\n        <img src="assets/img/arrow_left.svg" width="45" height="45" alt="Back">\n        <img src="assets/img/logo_small.png" width="101" height="44">\n      </span>\n    </div>\n    <h1 class="game__timer"></h1>\n    <div class="game__lives">\n      '.concat(t(),"\n    </div>\n  </header>")},c=function(t){var n="    ".concat('  <header class="header">\n    <div class="header__back">\n      <span class="back">\n        <img src="assets/img/arrow_left.svg" width="45" height="45" alt="Back">\n        <img src="assets/img/logo_small.png" width="101" height="44">\n      </span>\n    </div>\n  </header>','        \n    <div class="result">\n      ').concat(function(t){var n=function(t){for(var n=t.stats,e=0,a=0;a<n.length;a++)"wrong"===n[a]&&e++;return e}(t),e=function(t){for(var n=t.stats,e=0,a=0;a<n.length;a++)"wrong"!==n[a]&&"unknown"!==n[a]&&e++;return e}(t),a=function(t){for(var n=t.stats,e=0,a=0;a<n.length;a++)"fast"===n[a]&&e++;return e}(t),s=function(t){for(var n=t.stats,e=0,a=0;a<n.length;a++)"slow"===n[a]&&e++;return e}(t),r=function(){return 100*e},o=function(){return 50*a},i=function(){return 50*t.lives},c=function(){return-50*s};return"  <h1>".concat(n>3?"FAIL":"Победа!",'</h1>\n  \n  <table class="result__table">\n    <tr>\n      <td class="result__number">1.</td>\n      <td colspan="2">\n        <ul class="stats">\n          ').concat(t.stats.map((function(t){return'          <li class="stats__result stats__result--'.concat(t,'"></li>')})).join(""),' \n        </ul>\n      </td>\n      <td class="result__points">×&nbsp;100</td>\n      <td class="result__total">').concat(r(),'</td>\n    </tr>\n    \n    <tr>\n      <td></td>\n      <td class="result__extra">Бонус за скорость:</td>\n      <td class="result__extra">').concat(a,'<span class="stats__result stats__result--fast"></span></td>\n      <td class="result__points">×&nbsp;50</td>\n      <td class="result__total">').concat(o(),'</td>\n    </tr>\n    \n    <tr>\n      <td></td>\n      <td class="result__extra">Бонус за жизни:</td>\n      <td class="result__extra">').concat(t.lives,'<span class="stats__result stats__result--heart"></span></td>\n      <td class="result__points">×&nbsp;50</td>\n      <td class="result__total">').concat(i(),'</td>\n    </tr>\n    \n    <tr>\n      <td></td>\n      <td class="result__extra">Штраф за медлительность:</td>\n      <td class="result__extra">').concat(s,'<span class="stats__result stats__result--slow"></span></td>\n      <td class="result__points">×&nbsp;50</td>\n      <td class="result__total">').concat(c(),'</td>\n    </tr>   \n     \n    <tr>\n      <td colspan="5" class="result__total  result__total--final">').concat(r()+o()+i()+c(),"</td>\n    </tr>\n  </table>\n")}(t),"\n    </div>"),e=p(n);return e.querySelector(".header__back").onclick=function(){clearInterval(a),u(),v(),w(),g(P)},g(e),e},l=JSON.parse(JSON.stringify(s)),u=function(){l=JSON.parse(JSON.stringify(s))},p=function(t){var n=document.createElement("div");return n.innerHTML=t,n},g=function(t){var n=document.getElementById("main");return n.innerHTML="",n.appendChild(t)},_=function(t){t.innerHTML=s.timer,l.timer=s.timer,a=setInterval((function(){l=function(t,n){if(n>s.timer)throw new RangeError("timer > ".concat(s.timer));if(n<0)throw new RangeError("timer < 0");var e=Object.assign({},t,{timer:n});if(t===e)throw new Error("Returned object should not be equal to object in the parametrs of the function");return e}(l,l.timer-1),t.innerHTML=l.timer,l.timer<=0&&(clearInterval(a),m(),b()())}),1e3)},m=function(){(l=r(l,"wrong",f-1)).lives<1&&c(l),l=function(t,n){if(n>s.lives)throw new RangeError("lives > ".concat(s.lives));if(n<0)throw new RangeError("lives < 0");var e=Object.assign({},t,{lives:n});if(t===e)throw new Error("Returned object should not be equal to object in the parametrs of the function");return e}(l,l.lives-1)},h=function(){l=l.timer>20?r(l,"fast",f-1):l.timer<10?r(l,"slow",f-1):r(l,"correct",f-1)},d=o.values(),v=function(){d=o.values()},f=0,w=function(){f=0},b=function(){var t=d.next().value;return function(){var n,e,s,r,o,d,k,O,j;if(t)switch(t.type){case"gameTypeOne":n=t,e=l,o="  ".concat(i(y),'\n  <div class="game">\n    ').concat(function(t){return'  <p class="game__task">'.concat(t.task,'</p>\n  <form class="game__content">\n\n    ').concat(t.gameOption.map((function(t){return'    <div class="game__option">\n      <img src="'.concat(t.image,'" alt="').concat(t.alt,'" width="468" height="458">\n\n      ').concat(t.answerParams.map((function(t){return'      <label class="game__answer  '.concat(t.class,'">\n        <input name="').concat(t.name,'" type="radio" value="').concat(t.value,'">\n        <span>').concat(t.text,"</span>\n      </label>")})).join(""),"\n\n    </div>")})).join(""),"\n  </form>")}(n),"\n    ").concat(function(t){return'  <div class="stats">\n    <ul class="stats">\n      '.concat(t.stats.map((function(t){return'      <li class="stats__result stats__result--'.concat(t,'"></li>')})).join(""),"\n    </ul>\n  </div>")}(e),"\n  </div>"),d=p(o),k=d.querySelector(".header__back"),O=d.querySelector(".game__timer"),j=d.querySelector(".game__content"),_(O),k.onclick=function(){clearInterval(a),u(),v(),w(),g(P)},j.onclick=function(t){t.target.checked&&("question1"===t.target.name?s=t.target.value:"question2"===t.target.name&&(r=t.target.value),s&&r&&(n.gameOption[0].correctAnswer===s&&n.gameOption[1].correctAnswer===r?(clearInterval(a),h(),b()()):(clearInterval(a),m(),b()())))},g(d),f++;break;case"gameTypeTwo":!function(t,n,e){var s,r="  ".concat(i(e),'\n  <div class="game">\n    ').concat(function(t){return'  <p class="game__task">'.concat(t.task,'</p>\n  <form class="game__content  game__content--wide">\n\n    ').concat(t.gameOption.map((function(t){return'    <div class="game__option">\n      <img src="'.concat(t.image,'" alt="').concat(t.alt,'" width="705" height="455">\n\n      ').concat(t.answerParams.map((function(t){return'      <label class="game__answer  '.concat(t.class,'">\n        <input name="').concat(t.name,'" type="radio" value="').concat(t.value,'">\n        <span>').concat(t.text,"</span>\n      </label>")})).join(""),"\n\n    </div>")})).join(""),"\n  </form>")}(t),"\n    ").concat(function(t){return'  <div class="stats">\n    <ul class="stats">\n      '.concat(t.stats.map((function(t){return'      <li class="stats__result stats__result--'.concat(t,'"></li>')})).join(""),"\n    </ul>\n  </div>")}(n),"\n  </div>"),o=p(r),c=o.querySelector(".header__back"),l=o.querySelector(".game__content"),d=o.querySelector(".game__timer");_(d),c.onclick=function(){clearInterval(a),u(),v(),w(),g(P)},l.onclick=function(n){n.target.checked&&(s=n.target.value),s&&(t.gameOption[0].correctAnswer===s?(clearInterval(a),h(),b()()):(clearInterval(a),m(),b()()))},g(o)}(t,l,y),f++;break;case"gameTypeThree":!function(t,n,e){var s="  ".concat(i(e),'\n  <div class="game">\n    ').concat(function(t){return'  <p class="game__task">'.concat(t.task,'</p>\n  <form class="game__content  game__content--triple">\n  \n    ').concat(t.gameOption.map((function(t){return'    <div class="game__option">\n      <img src="'.concat(t.image,'" alt="').concat(t.alt,'" width="304" height="455">\n    </div>')})).join(""),"  \n  </form>")}(t),"\n    ").concat(function(t){return'  <div class="stats">\n    <ul class="stats">\n      '.concat(t.stats.map((function(t){return'      <li class="stats__result stats__result--'.concat(t,'"></li>')})).join(""),"\n    </ul>\n  </div>")}(n),"\n  </div>"),r=p(s),o=r.querySelector(".header__back"),c=r.querySelector(".game__content"),l=c.querySelectorAll(".game__option"),d=r.querySelector(".game__timer");_(d),o.onclick=function(){clearInterval(a),u(),v(),w(),g(P)},c.onclick=function(n){if(n.target.classList.contains("game__option")){n.target.classList.add("game__option--selected");for(var e=0;e<l.length;e++){if(l[e].classList.contains("game__option--selected"))e===t.correctAnswer?(clearInterval(a),h(),b()()):(clearInterval(a),m(),b()())}}},g(r)}(t,l,y),f++;break;default:return}else c(l)}},y=function(){for(var t=l.lives,n="",e=3;e>0;e--)n+='<img src="assets/img/'.concat(t<e?"heart__empty.svg":"heart__full.svg",'" class="game__heart" alt="Life" width="32" height="32">');return n},k="  ".concat('  <header class="header">\n    <div class="header__back">\n      <span class="back">\n        <img src="assets/img/arrow_left.svg" width="45" height="45" alt="Back">\n        <img src="assets/img/logo_small.png" width="101" height="44">\n      </span>\n    </div>\n  </header>',"\n  ").concat('  <div class="rules  central--none">\n    <h1 class="rules__title">Правила</h1>\n    <p class="rules__description">Угадай 10 раз для каждого изображения фото\n    <img src="assets/img/photo_icon.png" width="16" height="16"> или рисунок\n    <img src="assets/img/paint_icon.png" width="16" height="16" alt="">.<br>\n      Фотографиями или рисунками могут быть оба изображения.<br>\n      На каждую попытку отводится 30 секунд.<br>\n      Ошибиться можно не более 3 раз.<br>\n      <br>\n      Готовы?\n    </p>\n    <form class="rules__form">\n      <input class="rules__input" type="text" placeholder="Ваше Имя">\n      <button class="rules__button  continue" type="submit" disabled>Go!</button>\n    </form>\n  </div>',"\n"),O=p(k),j=O.querySelector(".header__back"),q=O.querySelector(".rules__button");j.onclick=function(){g(P)},O.querySelector(".rules__input").oninput=function(t){q.disabled=!t.target.value},q.onclick=function(t){t.preventDefault(),b()()};var x=O,S=p('  <div class="greeting  central--blur">\n    <div class="greeting__logo"><img src="assets/img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>\n    <h1 class="greeting__asterisk">*</h1>\n    <div class="greeting__challenge">\n      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>\n      <p>Правила игры просты.<br>\n        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>\n        Задача кажется тривиальной, но не думай, что все так просто.<br>\n        Фотореализм обманчив и коварен.<br>\n        Помни, главное — смотреть очень внимательно.</p>\n    </div>\n    <div class="greeting__continue"><span><img src="assets/img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>\n  </div>');S.querySelector(".greeting__continue").onclick=function(){g(x)};var T=S,A=p('  <div id="intro" class="intro">\n    <h1 class="intro__asterisk">*</h1>\n    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>\n  </div>');A.querySelector(".intro__asterisk").onclick=function(){g(T)};var P=A;g(P);e(0)}]);