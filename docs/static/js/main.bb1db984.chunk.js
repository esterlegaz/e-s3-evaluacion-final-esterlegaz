(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),i=a.n(c),l=a(33),s=(a(24),a(17)),u=a(5),o=a(6),m=a(9),h=a(7),p=a(8),f=a(10),d=a(35),v=a(34),b=a(32),E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,{className:"item__link",to:"/card/".concat(this.props.id)},n.a.createElement("img",{className:"item__img",src:this.props.image,alt:this.props.name}),n.a.createElement("h2",{className:"item__name"},this.props.name),n.a.createElement("p",{className:"item__house"},this.props.house)))}}]),t}(r.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return 0===this.props.filterCharacter().length?n.a.createElement("p",{className:"list__error"},"No hay resultados"):n.a.createElement("ul",{className:"list__container"},this.props.filterCharacter().map(function(e){return n.a.createElement("li",{className:"list__item",key:e.id,id:e.id},n.a.createElement(E,{id:e.id,name:e.name,house:e.house,image:e.image,index:e.id}))}))}}]),t}(r.Component),_=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"input__container"},n.a.createElement("input",{placeholder:"Buscar",className:"page__input",type:"text",onKeyUp:this.props.includeNameFilter}))}}]),t}(r.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"main__title"},"Buscador de personajes"),n.a.createElement(_,{includeNameFilter:this.props.includeNameFilter}),n.a.createElement(O,{character:this.props.character,filterCharacter:this.props.filterCharacter}))}}]),t}(r.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"getLife",value:function(e){return!0===e?"Vivo":n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"Muerto "),n.a.createElement("i",{className:"fas fa-skull-crossbones"}))}},{key:"getHouse",value:function(e){return"Gryffindor"===e?"gryffindor":"Slytherin"===e?"slytherin":"Ravenclaw"===e?"ravenclaw":"Hufflepuff"===e?"hufflepuff":""}},{key:"noPatronus",value:function(e){return""===e?"Sin patronus":e}},{key:"noHouse",value:function(e){return""===e?"Sin casa":e}},{key:"noBirth",value:function(e){return""===e?"Sin datos":e}},{key:"render",value:function(){var e=this.props.match.params.id;if(this.props.character.length>0&&e<this.props.character.length){var t=this.props.character[e];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card__container"},n.a.createElement("div",{className:"card__detail"},n.a.createElement("img",{className:"detail__img",src:t.image,alt:t.name}),n.a.createElement("div",{className:"detail__content"},n.a.createElement("h2",{className:"detail__name"},t.name),n.a.createElement("p",{className:"detail__house"},"Casa: ",this.noHouse(t.house)),n.a.createElement("p",{className:"detail__year"},"Nacimiento: ",this.noBirth(t.yearOfBirth)),n.a.createElement("p",{className:"detail__patronus"},"Patronus: ",this.noPatronus(t.patronus)),n.a.createElement("p",{className:"detail__alive"},"Estado: ",this.getLife(t.alive)),n.a.createElement("div",{className:"".concat(this.getHouse(t.house))})))),n.a.createElement(b.a,{to:"/",className:"detail__return"},"Volver"))}return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"No hay datos disponibles"),n.a.createElement(b.a,{to:"/"},"Volver"))}}]),t}(r.Component),N=(a(28),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={character:[],nameFilter:""},a.fetchData=a.fetchData.bind(Object(f.a)(Object(f.a)(a))),a.filterCharacter=a.filterCharacter.bind(Object(f.a)(Object(f.a)(a))),a.includeNameFilter=a.includeNameFilter.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getSavedCharacter()}},{key:"fetchData",value:function(){var e=this;fetch("https://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e,t){return Object(s.a)({},e,{id:t})});e.saveCharacter(a,"savedCharacter"),e.setState({character:a})})}},{key:"saveCharacter",value:function(e,t){localStorage.setItem(t,JSON.stringify(e))}},{key:"getSavedCharacter",value:function(){if(null!==localStorage.getItem("savedCharacter")){var e=JSON.parse(localStorage.getItem("savedCharacter"));this.setState({character:e})}else this.fetchData()}},{key:"filterCharacter",value:function(){var e=this;return this.state.character.filter(function(t){return t.name.toUpperCase().includes(e.state.nameFilter.toUpperCase())})}},{key:"includeNameFilter",value:function(e){var t=e.currentTarget.value;this.setState({nameFilter:t})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(v.a,{exact:!0,path:"/",render:function(){return n.a.createElement(j,{includeNameFilter:e.includeNameFilter,character:e.state.character,filterCharacter:e.filterCharacter})}}),n.a.createElement(v.a,{path:"/card/:id",render:function(t){return n.a.createElement(y,{match:t.match,character:e.state.character,name:e.state.character.name})}})))}}]),t}(r.Component));i.a.render(n.a.createElement(l.a,null,n.a.createElement(N,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.bb1db984.chunk.js.map