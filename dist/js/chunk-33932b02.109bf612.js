(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33932b02"],{"0994":function(e,t,a){},"41d6":function(e,t,a){"use strict";a("0994")},b0b3:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("favoriteGames",{staticClass:"favorite-game"})},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.games,(function(e){return a("GamePreview",{key:e.game_id,attrs:{id:e.game_id,hostTeam:e.local_team,guestTeam:e.visitor_team,hostId:e.local_team_id,guestId:e.visitor_team_id,date:e.game_date,hour:e.game_date,hostTeamScore:e.local_team_score,guestTeamScore:e.visitor_team_score,field:e.field,events:e.events}})})),1)},r=[],i=a("2909"),c=a("1da1"),u=(a("96cf"),a("71ba")),l={name:"FavoriteGames",components:{GamePreview:u["a"]},data:function(){return{games:[]}},methods:{updateFavGames:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("favorite games"),t.prev=1,e.axios.defaults.withCredentials=!0,t.next=5,e.axios.get("http://localhost:3003/users/favoriteGames");case 5:s=t.sent,n=s.data,e.games=[],(a=e.games).push.apply(a,Object(i["a"])(n)),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log("error in update games"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},mounted:function(){console.log("favorite games mounted"),this.updateFavGames()}},m=l,d=a("2877"),v=Object(d["a"])(m,o,r,!1,null,null,null),f=v.exports,g={components:{FavoriteGames:f}},p=g,_=(a("41d6"),Object(d["a"])(p,s,n,!1,null,"7bbbbd0a",null));t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-33932b02.109bf612.js.map