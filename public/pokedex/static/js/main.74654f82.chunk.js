(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},31:function(e,t,a){},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),s=a.n(r),o=(a(31),a(19)),i=a(20),l=a(25),p=a(23),m=(a(32),a(3)),u=a(6),d=a.n(u),f=function(e){return{type:"WRITE",text:e.target.value}},E=function(e){return function(t){d.a.get("https://bernardmurphy.net/getPoke/".concat(e)).then((function(e){t({type:"FETCH",data:e.data.data})})).catch((function(e){d.a.post("https://bernardmurphy.net/test",{error:e}).then((function(e){t({type:"ERROR"})})).catch((function(e){t({type:"ERROR"})}))}))}},v=Object(m.b)((function(e){return{sprite:e.sprite,shinySprite:e.shinySprite,useSprite:e.useSprite,hp:e.hp,attack:e.attack,defense:e.defense,specialAttack:e.specialAttack,specialDefense:e.specialDefense,speed:e.speed,abilities:e.abilities,types:e.types,number:e.number,name:e.name,display:e.display,error:e.error,moveData:e.moveUrls,moves:e.moves}}),{changeSprite:function(){return function(e){e({type:"SPRITE"})}},moveFetch:function(e,t){return function(a){0===t.length?function(){var t=document.createElement("p");t.textContent="Loading moves. Please wait...",t.classList.add("p-loading-moves"),document.querySelector("#left").appendChild(t);for(var n=[],c=0;c<e.length;c++)d.a.get("".concat(e[c])).then((function(t){var c=t.data;n.push({name:c.names[7].name,type:c.type.name,power:null===c.power?"-":c.power,accuracy:null===c.accuracy?"-":c.accuracy,pp:c.pp,effect:c.effect_entries[0].effect}),n.length===e.length&&a({type:"MOVES",moves:n})})).catch((function(e){console.log(e),a({type:"ERROR"})}))}():a({type:"MOVES",moves:t})}}})((function(e){var t=e.types.map((function(e){var t="type ".concat(e);return c.a.createElement("p",{onClick:function(){window.open("https://bulbapedia.bulbagarden.net/wiki/".concat(e,"_(type)"))},key:Math.random()},c.a.createElement("span",{className:t},e))})),a=e.abilities.map((function(e){var t=e.ability.name.split("");t[0]=t[0].toUpperCase();for(var a=0;a<t.length;a++)"-"===t[a]&&(t[a]="_",t[a+1]=t[a+1].toUpperCase());var n=t.join("");return c.a.createElement("p",{className:"hover-pointers",onClick:function(){window.open("https://bulbapedia.bulbagarden.net/wiki/".concat(n,"_(Ability)"))},key:Math.random()},e.ability.name)}));return e.error?c.a.createElement("div",{id:"error"},"An error occurred"):e.display?c.a.createElement("div",{id:"pokemon"},c.a.createElement("div",{id:"left"},c.a.createElement("p",{onClick:function(){window.open("https://bulbapedia.bulbagarden.net/wiki/".concat(e.name))},className:"pokemon-name hover-pointers"},e.name,c.a.createElement("sup",{style:{fontSize:"18px"}}," #",e.number)),c.a.createElement("img",{className:"sprites",alt:e.name,src:e.useSprite}),c.a.createElement("div",{id:"types-abilities"},c.a.createElement("div",{className:"types"},"Types: ",c.a.createElement("span",{id:"span-types"},t)),c.a.createElement("div",{className:"abilities"},"Abilities: ",c.a.createElement("span",{className:"abilities-list"},a))),c.a.createElement("button",{id:"button-check-moves",onClick:function(){return e.moveFetch(e.moveData,e.moves)}},"Check moves")),c.a.createElement("div",{id:"right"},c.a.createElement("div",{id:"left-stats"},c.a.createElement("p",null,"HP: ",c.a.createElement("span",{style:{color:"hsl(".concat(e.hp-20,", 100%, 50%)")}},e.hp)),c.a.createElement("p",null,"ATTACK: ",c.a.createElement("span",{style:{color:"hsl(".concat(e.attack-20,", 100%, 50%)")}},e.attack)),c.a.createElement("p",null,"DEFENSE: ",c.a.createElement("span",{style:{color:"hsl(".concat(e.defense-20,", 100%, 50%)")}},e.defense)),c.a.createElement("p",null,"SPECIAL ATTACK: ",c.a.createElement("span",{style:{color:"hsl(".concat(e.specialAttack-20,", 100%, 50%)")}},e.specialAttack))),c.a.createElement("div",{id:"right-stats"},c.a.createElement("p",null,"SPECIAL DEFENSE: ",c.a.createElement("span",{style:{color:"hsl(".concat(e.specialDefense-20,", 100%, 50%)")}},e.specialDefense)),c.a.createElement("p",null,"SPEED: ",c.a.createElement("span",{style:{color:"hsl(".concat(e.speed-20,", 100%, 50%)")}},e.speed)),c.a.createElement("p",null,"TOTAL: ",c.a.createElement("span",{style:{color:"hsl(".concat((e.speed+e.hp+e.attack+e.defense+e.specialDefense+e.specialAttack)/6-20,", 100%, 50%)")}},e.speed+e.hp+e.attack+e.defense+e.specialDefense+e.specialAttack)))),c.a.createElement("img",{onClick:e.changeSprite,src:"star.png",alt:"shiny star",id:"shiny-star"})):c.a.createElement("div",null)})),h=Object(m.b)((function(e){return{formText:e.formText}}),{inputChange:f,formSubmit:E})((function(e){return c.a.createElement("div",{id:"form"},c.a.createElement("input",{type:"text",placeholder:"Enter a Pokemon",onChange:e.inputChange}),c.a.createElement("button",{id:"button",onClick:function(){return e.formSubmit(e.formText)}},"Submit"))})),b=Object(m.b)((function(e){return{moves:e.moves,name:e.name}}),{moveChange:function(){return function(e){e({type:"MOVECHANGE"})}}})((function(e){return c.a.createElement("div",{id:"div-moves-container"},c.a.createElement("p",{onClick:e.moveChange,id:"p-move-change"},"<< Back"),c.a.createElement("h2",{id:"h2-pokemon-moves"},"".concat(e.name,"'s Moves")),c.a.createElement("div",{id:"div-moves-legend"},c.a.createElement("p",{className:"p-move-leg"},"Move"),c.a.createElement("p",{className:"p-type-leg"},"Type"),c.a.createElement("p",{className:"p-pp-leg"},"PP"),c.a.createElement("p",{className:"p-power-leg"},"Power"),c.a.createElement("p",{className:"p-acc-leg"},"Accuracy"),c.a.createElement("p",{className:"p-desc-leg"},"Description")),c.a.createElement("div",{id:"div-moves"},e.moves.map((function(e){return c.a.createElement("div",{key:Math.random(),className:"div-move"},c.a.createElement("div",{className:"div-move-left"},c.a.createElement("p",{className:"p-move"},e.name),c.a.createElement("p",{className:"p-type ".concat(e.type)},e.type),c.a.createElement("p",{className:"p-pp"},e.pp),c.a.createElement("p",{className:"p-power"},e.power),c.a.createElement("p",{className:"p-acc"},e.accuracy)),c.a.createElement("p",{className:"p-desc"},e.effect))}))))})),y=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).inputHandler=function(){e.props.formSubmit(e.props.formText)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.inputHandler;document.getElementsByTagName("input")[0].addEventListener("keypress",(function(t){"Enter"===t.key&&e()}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("img",{id:"img-pokedex",alt:"pokedex",src:"/assets/pokedex.png"}),c.a.createElement(h,null),!1===this.props.showMoves?c.a.createElement(v,null):c.a.createElement(b,null)))}}]),a}(c.a.Component),k=Object(m.b)((function(e){return{formText:e.formText,showMoves:e.showMoves}}),{formSubmit:E,inputChange:f})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(24),O=a(1),w={sprite:"",shinySprite:"",useSprite:"",hp:0,attack:0,defense:0,specialAttack:0,specialDefense:0,speed:0,abilities:[],types:[],number:0,name:"",formText:"",error:!1,display:!1,showMoves:!1,moves:[],moveUrls:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WRITE":return Object(O.a)(Object(O.a)({},e),{},{formText:t.text});case"SPRITE":return e.useSprite===e.sprite?Object(O.a)(Object(O.a)({},e),{},{useSprite:e.shinySprite}):Object(O.a)(Object(O.a)({},e),{},{useSprite:e.sprite});case"FETCH":var a=t.data.moves,n=[];a.forEach((function(e){n.push(e.move.url)}));var c=[];return t.data.types.map((function(e){return c.push(e.type.name),"ok"})),Object(O.a)(Object(O.a)({},e),{},{sprite:t.data.sprites.front_default,shinySprite:t.data.sprites.front_shiny,useSprite:t.data.sprites.front_default,hp:t.data.stats[0].base_stat,attack:t.data.stats[1].base_stat,defense:t.data.stats[2].base_stat,specialAttack:t.data.stats[3].base_stat,specialDefense:t.data.stats[4].base_stat,speed:t.data.stats[5].base_stat,abilities:Object(g.a)(t.data.abilities),types:[].concat(c),number:t.data.id,name:t.data.name,error:!1,display:!0,moveUrls:n});case"ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:!0,display:!1});case"MOVES":return Object(O.a)(Object(O.a)({},e),{},{moves:t.moves,showMoves:!0});case"MOVECHANGE":return Object(O.a)(Object(O.a)({},e),{},{showMoves:!1});default:return Object(O.a)({},e)}},j=a(4),C=a(22),N=Object(j.c)(S,Object(j.a)(C.a));s.a.render(c.a.createElement(m.a,{store:N},c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.74654f82.chunk.js.map