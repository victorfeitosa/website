(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),l=a(163),o=a(1),s=a.n(o),c=a(28),m=function(e){var t=e.icon,a=e.to,n=e.children,i=e.title;return r.a.createElement("div",{className:"portfolio-link"},r.a.createElement(c.a,{to:a,icon:t,title:i},r.a.createElement("h2",{className:"portfolio-link__header"},n)))},p=function(e){var t=e.children;return r.a.createElement("div",{className:"portfolio-badge"},t)},u=function(e){var t=e.title,a=e.image,n=e.children,i=e.links,l=e.badges;return r.a.createElement("div",{className:"portfolio-entry"},r.a.createElement("div",{className:"portfolio-entry__block-area"},r.a.createElement("img",{src:a,alt:t,className:"portfolio-entry__image"}),r.a.createElement("h2",{className:"portfolio-entry__title"},t),r.a.createElement("div",{className:"portfolio-entry__header"},r.a.createElement("div",{className:"portfolio-entry__links"},i&&i.map(function(e,t){return r.a.createElement(m,{key:t,to:e.to,icon:e.icon,title:e.title},e.text)})))),r.a.createElement("div",{className:"portfolio-entry__sub-area"},l&&l.map(function(e,t){return r.a.createElement(p,{key:t},e)})),r.a.createElement("div",{className:"portfolio-entry__text-area"},n))};u.propTypes={image:s.a.string.isRequired,title:s.a.string.isRequired,badges:s.a.arrayOf(s.a.string),links:s.a.arrayOf(s.a.shape({to:s.a.string,icon:s.a.element,title:s.a.string,text:s.a.string}))};var d=u,f=a(164),h=a.n(f),b=a(165),E=a.n(b),g=a(166),v=a.n(g);t.default=function(){return r.a.createElement(l.b,null,r.a.createElement(l.f,null,"Portfolio"),r.a.createElement(d,{image:h.a,title:"My Website",links:[{to:"https://github.com/victorfeitosa/victorfeitosa.github.io",icon:r.a.createElement(i.d,null),title:"Github",text:"Repository"},{to:"https://victorfeitosa.github.io",icon:r.a.createElement(i.e,null),title:"Home",text:"Home"}],badges:["GatsbyJS","Portfolio","React","SCSS","Website"]},r.a.createElement("p",null,"My portfolio website!"),r.a.createElement("p",null,"This website you're visiting was made entirely in React with GatsbyJS. It is intended to be updated constantly and soon will have a mobile version and a PWA. All styles colors and design are entirely by me. Visit it's GitHub page to check out the source code.")),r.a.createElement(d,{image:E.a,title:"Expense Manager App",links:[{to:"https://github.com/victorfeitosa/ExpenseManager",icon:r.a.createElement(i.d,null),title:"Github",text:"Repository"},{to:"https://expense-man.herokuapp.com/",icon:r.a.createElement(i.h,null),title:"App",text:"WebApp"}],badges:["Firebase","Mobile-First","React","SCSS","SPA","WebApp"]},r.a.createElement("p",null,"An Expense Manager WebApp. Done in React with Firebase for Database and Authentication."),r.a.createElement("p",null,"This app records expenses the user had and filters them in a date span. It is mobile-first and soon will be a PWA. This was done so I could learn React and Firebase, so  it's pretty simple!")),r.a.createElement(d,{image:v.a,title:"Old FrontEnd Projects",links:[{to:"https://github.com/victorfeitosa/OldFrontendProjects",icon:r.a.createElement(i.d,null),title:"Github",text:"Repository"}],badges:["ES6","Front End","Mobile-first","SCSS","SPA","WebApp"]},r.a.createElement("p",null,"These are several Front End projects I've done in the past, usually small things to learn a framework, or tests for job interviews"),r.a.createElement("p",null,"Some of them are pretty rough around the edges and were done only to learn some concepts.")))}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"f",function(){return o}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return p}),a.d(t,"e",function(){return u});var n=a(0),r=a.n(n),i=a(1),l=function(e){var t=e.children;return r.a.createElement("main",{className:"page-main"},t)};a.n(i).a.oneOf(["full","half","third"]);var o=function(e){var t=e.children,a=e.icon,n=void 0===a?null:a;return r.a.createElement("div",{className:"title"},n," ",r.a.createElement("h2",{className:"title__text"},t))},s=function(e){var t=e.children;return r.a.createElement("h3",{className:"subtitle"},t)},c=function(e){var t=e.to,a=e.icon,n=e.iconPosition,i=void 0===n?"before":n,l=e.children,o=a&&"before"===i,s=a&&"after"===i;return r.a.createElement("span",{className:"page-link"},o&&r.a.createElement(a,{className:"page-link__icon"}),r.a.createElement("a",{href:t,className:"page-link__anchor"},l),s&&r.a.createElement(a,{className:"page-link__icon"}))},m=function(){return r.a.createElement(r.a.Fragment,null,"    ")},p=function(e){var t=e.children;return r.a.createElement("p",{className:"paragraph"},r.a.createElement(m,null),t)},u=function(e){var t=e.src,a=e.srcSet,n=e.responsive,i=void 0===n||n,l=e.alt;return r.a.createElement("img",{alt:l,src:t,srcSet:a,className:"text-image"+(i?" text-image--responsive":"")})}},164:function(e,t,a){e.exports=a.p+"static/website-0e834eb20652792f92c2267e14e92b74.jpg"},165:function(e,t,a){e.exports=a.p+"static/expenseman-98c58a2dd6d91df063d0df20b2ea0952.jpg"},166:function(e,t,a){e.exports=a.p+"static/oldprojs-b2f8a058504cc0a92a66508a96e00e3f.jpg"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-ce9d32399c063df2e7f7.js.map