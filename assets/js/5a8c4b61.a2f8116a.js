"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9895],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),i=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?t.createElement(f,c(c({ref:r},u),{},{components:n})):t.createElement(f,c({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5896:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(7462),a=n(7294);function o(e){let{fragUrl:r,disableFullscreen:n,limitWidth:o,...c}=e;const[s,l]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:o?{width:o,display:"table",margin:"0 auto"}:{}},!n&&a.createElement("button",{"aria-label":s?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const r=e.target.closest(".glslcanvas-box-wrapper");s?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen(),l(!s)}},s?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,t.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(s?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+r+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},c)))}},3098:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=n(7462),a=(n(7294),n(3905)),o=n(5896);const c={sidebar_position:6},s="8_5_raymarching",l={unversionedId:"chapter8/8_5_raymarching",id:"chapter8/8_5_raymarching",title:"8_5_raymarching",description:"Figure 8.8:",source:"@site/docs/chapter8/8_5_raymarching.md",sourceDirName:"chapter8",slug:"/chapter8/8_5_raymarching",permalink:"/docs/chapter8/8_5_raymarching",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter8/8_5_raymarching.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"8_4_normalMapping",permalink:"/docs/chapter8/8_4_normalMapping"},next:{title:"8_6_sphere",permalink:"/docs/chapter8/8_6_sphere"}},i={},u=[{value:"Figure 8.8:",id:"figure-88",level:2}],p={toc:u};function m(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8_5_raymarching"},"8_5_raymarching"),(0,a.kt)("h2",{id:"figure-88"},"Figure 8.8:"),(0,a.kt)(o.Z,{fragUrl:"/frags/ch8/8_5_raymarching.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="8_5_raymarching.frag"',showLineNumbers:!0,title:'"8_5_raymarching.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nfloat circleSDF(vec2 p, vec2 c, float r){\n    return length(p - c) - r;\n}\nfloat contour(float v){\n    return step(abs(v), 0.002);\n}\nfloat point(vec2 p, vec2 c){\n    return step(length(p-c), 0.01);\n}\nfloat line(vec2 p, vec2 c, vec2 d){\n    return step(abs(dot(p - c, vec2(-d.y, d.x))), 0.002);\n}\nvoid main(){\n    vec2 pos = (2.0 * gl_FragCoord.xy -u_resolution.xy)/ u_resolution.yy;\n    vec2 cPos = vec2(-0.5, 0.0);    //camera position\n    vec2 oPos = vec2(1.0, 0.0); //object position\n    vec2 ray = oPos - cPos;\n    ray.y +=  2.0 * u_mouse.y / u_resolution.y - 1.0;\n    ray = normalize(ray);\n    float rad = 0.8;\n    vec2 rPos = cPos;\n    fragColor.rgb = contour(circleSDF(pos, oPos, rad)) * vec3(1);    //draw circle of object\n    fragColor.rgb += line(pos, cPos, ray) * vec3(0,0,1);  //draw line\n    for (int i = 0; i < 50; i++){\n        fragColor.rgb += point(pos, rPos) * vec3(1.0, 0.0, 0.0);  //plot ray position\n        float dist = circleSDF(rPos, oPos, rad);\n        if (dist < 0.01){\n            break;\n        }\n        fragColor.rgb += contour(circleSDF(pos, rPos, dist)) * vec3(0.5, 0.5, 0.0);     //draw circle with radius of SDF value\n        rPos += dist * ray;\n        if (rPos.x > oPos.x + rad){\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}\n\n")))}m.isMDXComponent=!0}}]);