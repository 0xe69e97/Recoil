(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(151)),l={title:"Recoil 0.3.0"},i={permalink:"/blog/2021/05/14/0.3.0-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-05-14-0.3.0-released.md",source:"@site/blog/2021-05-14-0.3.0-released.md",description:"We are pleased to announce the release of Recoil 0.3.0.",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 13, 2021",tags:[],title:"Recoil 0.3.0",readingTime:1.73,truncated:!1,nextItem:{title:"Recoil 0.2.0",permalink:"/blog/2021/03/22/0.2.0-released"}},c=[{value:"New Features",id:"new-features",children:[]},{value:"Breaking Change: Preparing for Memory Management",id:"breaking-change-preparing-for-memory-management",children:[]},{value:"Bug Fixes, Performance, and Other Improvements",id:"bug-fixes-performance-and-other-improvements",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are pleased to announce the release of Recoil 0.3.0."),Object(o.b)("h2",{id:"new-features"},"New Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can now create a RecoilRoot that falls through to the surrounding root if one exists. This lets you create re-usable components that use Recoil, yet can be used within or without the context of a larger Recoil app. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/973"},"#973"),")"),Object(o.b)("li",{parentName:"ul"},"You can now return Recoil callbacks from selectors. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/989"},"#989"),")")),Object(o.b)("h2",{id:"breaking-change-preparing-for-memory-management"},"Breaking Change: Preparing for Memory Management"),Object(o.b)("p",null,"The next release of Recoil will have a breaking API change. Today's release issues a console warning in development builds if you have any code that will need to be updated. Most apps will not need any code changes."),Object(o.b)("p",null,"When we ship memory management, Snapshots (such as the one you get as an argument to ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilCallback()"),") will only be valid for the tick in which they are created. If you want to keep a Snapshot around for longer, you need to manually retain and then release it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const release = snapshot.retain();\ntry {\n  await someAsyncWork(snapshot);\n} finally {\n  release();\n}\n")),Object(o.b)("p",null,"In 0.3.0, if you use a Snapshot that hasn't been retained, you will get a console warning in development. There is no change in behavior in production. In the next release, it will throw an exception, in both development and production."),Object(o.b)("p",null,"Retaining Snapshots should be avoided whenever possible, because it will prevent reclaiming of memory for all atoms for as long as that Snapshot is retained. Instead, pull out just the values you need before going to async."),Object(o.b)("h2",{id:"bug-fixes-performance-and-other-improvements"},"Bug Fixes, Performance, and Other Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reduced overhead when using ",Object(o.b)("inlineCode",{parentName:"li"},"atomFamily"),". One app with thousands of atoms saw 200MB less memory usage."),Object(o.b)("li",{parentName:"ul"},"Fix a bug where errors throws from async selectors were not caught by React error boundaries. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/998"},"#998"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1017"},"#1017"),")"),Object(o.b)("li",{parentName:"ul"},"Experimental Atom Effects ",Object(o.b)("inlineCode",{parentName:"li"},"onSet()")," is no longer called when triggered from ",Object(o.b)("inlineCode",{parentName:"li"},"setSelf()")," initializing with a Promise or from the same ",Object(o.b)("inlineCode",{parentName:"li"},"onSet()")," handler.  (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/974"},"#974"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/979"},"#979"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/953"},"#953"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/986"},"#986"),")"),Object(o.b)("li",{parentName:"ul"},"Improved support for Safari. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/967"},"#967"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/609"},"#609"),")"),Object(o.b)("li",{parentName:"ul"},"Values stored in selectors are now frozen in dev mode. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/911"},"#911"),")"),Object(o.b)("li",{parentName:"ul"},"Improved TypeScript support for ",Object(o.b)("inlineCode",{parentName:"li"},"Loadable"),"s.")))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(h,i(i({ref:t},p),{},{components:n})):r.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);