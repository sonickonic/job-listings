(this["webpackJsonpjob-listings"]=this["webpackJsonpjob-listings"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var o=t(0),l=t.n(o),n=t(5),r=t.n(n),i=(t(13),t(1)),s=t(7),c=t(6);var m=function(e){var a=e.selectedFilters,t=e.handleClick,o=e.clearFilter;return l.a.createElement("div",{className:"filters-bar ".concat(0===a.length&&"filters-bar--hidden")},l.a.createElement("ul",{className:"filters-list"},a.map((function(e,a){return l.a.createElement("li",{key:a,className:"filters-list__item filters-list__item--clear"},e,l.a.createElement("div",{onClick:o,className:"btn--delete"}))}))),l.a.createElement("button",{onClick:t,className:"btn"},"Clear"))};var u=function(e){var a=e.data,t=e.handleClick,o=[a.role,a.level].concat(Object(i.a)(a.languages||[]),Object(i.a)(a.tools||[]));return l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:a.logo,alt:"logo",className:"card__logo"}),l.a.createElement("div",{className:"job-details"},l.a.createElement("span",{className:"job-details__company-name"},a.company),a.new&&l.a.createElement("span",{className:"job-details__label"},"new!"),a.featured&&l.a.createElement("span",{className:"job-details__label job-details__label--dark"},"feature"),l.a.createElement("h3",{className:"job-details__job-title"},a.position),l.a.createElement("ul",{className:"job-details__info-list"},l.a.createElement("li",{className:"job-details__info-item"},a.postedAt),l.a.createElement("li",{className:"job-details__info-item job-details__info-item--bullet"},a.contract),l.a.createElement("li",{className:"job-details__info-item job-details__info-item--bullet"},a.location))),l.a.createElement("ul",{className:"filters-list"},o.map((function(e,a){return l.a.createElement("li",{onClick:t,key:a,className:"filters-list__item"},e)}))))};var d=function(){var e=Object(o.useState)([]),a=Object(s.a)(e,2),t=a[0],n=a[1];function r(e){if(!t.map((function(e){return e.toLowerCase()})).includes(e.target.innerText.toLowerCase()))return n([].concat(Object(i.a)(t),[e.target.innerText]))}return l.a.createElement("div",null,l.a.createElement("header",{className:"header"}),l.a.createElement("div",{className:"main"},l.a.createElement(m,{clearFilter:function(e){var a=e.target.parentNode.innerText;n(t.filter((function(e){return e!==a})))},handleClick:function(){return n([])},selectedFilters:t}),l.a.createElement("div",{className:"main__container"},c.filter((function(e){return function(e){if(0===t.length)return!0;var a=[].concat(Object(i.a)(e.languages||[]),Object(i.a)(e.tools||[]),[e.level,e.role]).map((function(e){return e.toLowerCase()}));return t.every((function(e){return a.includes(e.toLowerCase())}))}(e)})).map((function(e,a){return l.a.createElement(u,{handleClick:r,key:a,data:e})})))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue, Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1345e75f.chunk.js.map