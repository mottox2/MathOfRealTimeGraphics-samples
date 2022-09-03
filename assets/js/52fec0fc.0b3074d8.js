"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[9701],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>v});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),i=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),v=a,h=m["".concat(o,".").concat(v)]||m[v]||u[v]||s;return n?t.createElement(h,c(c({ref:r},p),{},{components:n})):t.createElement(h,c({ref:r},p))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<s;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5896:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(7462),a=n(7294);function s(e){let{fragUrl:r,disableFullscreen:n,limitWidth:s,...c}=e;const[l,o]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:s?{width:s,display:"table",margin:"0 auto"}:{}},!n&&a.createElement("button",{"aria-label":l?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const r=e.target.closest(".glslcanvas-box-wrapper");l?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen(),o(!l)}},l?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,t.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(l?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+r+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},c)))}},2189:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var t=n(7462),a=(n(7294),n(3905)),s=n(5896);const c={sidebar_position:7},l="8_6_sphere",o={unversionedId:"chapter8/8_6_sphere",id:"chapter8/8_6_sphere",title:"8_6_sphere",description:"Code 8.9, 8.10, Figure 8.9:",source:"@site/docs/chapter8/8_6_sphere.md",sourceDirName:"chapter8",slug:"/chapter8/8_6_sphere",permalink:"/docs/chapter8/8_6_sphere",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter8/8_6_sphere.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"8_5_raymarching",permalink:"/docs/chapter8/8_5_raymarching"},next:{title:"8_7_rotSphere",permalink:"/docs/chapter8/8_7_rotSphere"}},i={},p=[{value:"Code 8.9, 8.10, Figure 8.9:",id:"code-89-810-figure-89",level:2}],u={toc:p};function m(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"8_6_sphere"},"8_6_sphere"),(0,a.kt)("h2",{id:"code-89-810-figure-89"},"Code 8.9, 8.10, Figure 8.9:"),(0,a.kt)(s.Z,{fragUrl:"/frags/ch8/8_6_sphere.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="8_6_sphere.frag"',showLineNumbers:!0,title:'"8_6_sphere.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nfloat sphereSDF(vec3 p){\n    return length(p) - 1.0;\n}\nfloat sceneSDF(vec3 p){\n    return sphereSDF(p);\n}\nvec3 gradSDF(vec3 p){\n    float eps = 0.001;\n    return normalize(vec3(\n        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n    ));\n}\nvoid main(){\n    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n    \n    vec3 cPos = vec3(0.0, 0.0, 2.0);\n    vec3 cDir = vec3(0.0, 0.0, - 1.0);\n    vec3 cUp = vec3(0.0, 1.0, 0.0);\n    vec3 cSide = cross(cDir, cUp);\n    \n    float targetDepth = 1.0;\n    \n    vec3 lPos = vec3(2.0);\n    \n    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n    vec3 rPos = ray + cPos;\n    ray = normalize(ray);\n    \n    fragColor.rgb = vec3(0.0);\n    for(int i = 0; i < 50; i ++ ){\n        if (sceneSDF(rPos) > 0.001){\n            rPos += sceneSDF(rPos) * ray;\n        } else {\n            float amb = 0.1;\n            float diff = 0.9 * max(dot(normalize(lPos - rPos), gradSDF(rPos)), 0.0);\n            vec3 col = vec3(0.0, 1.0, 1.0);\n            col *= diff + amb;\n            fragColor.rgb = col;\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}\n")))}m.isMDXComponent=!0}}]);