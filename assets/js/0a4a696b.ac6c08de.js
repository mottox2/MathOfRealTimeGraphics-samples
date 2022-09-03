"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=i(t),m=a,f=v["".concat(l,".").concat(m)]||v[m]||u[m]||c;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=v;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7462),a=t(7294);function c(e){let{baseUrl:n,fragUrl:t,disableFullscreen:c,limitWidth:o,...s}=e;const[l,i]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:o?{width:o,display:"table",margin:"0 auto"}:{}},!c&&a.createElement("button",{"aria-label":l?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");l?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),i(!l)}},l?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(l?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="'+n+'/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="'+n+'/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+"/"+t+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},s)))}},452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),c=t(5896);const o={sidebar_position:9},s="9_8_truncation",l={unversionedId:"chapter9/9_8_truncation",id:"chapter9/9_8_truncation",title:"9_8_truncation",description:"Code 9.9, Figure 9.15:",source:"@site/docs/chapter9/9_8_truncation.md",sourceDirName:"chapter9",slug:"/chapter9/9_8_truncation",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_8_truncation",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"9_7_octahedron",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_7_octahedron"},next:{title:"9_9_dist",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_9_dist"}},i={},p=[{value:"Code 9.9, Figure 9.15:",id:"code-99-figure-915",level:2}],u={toc:p};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"9_8_truncation"},"9_8_truncation"),(0,a.kt)("h2",{id:"code-99-figure-915"},"Code 9.9, Figure 9.15:"),(0,a.kt)(c.Z,{baseUrl:"/MathOfRealTimeGraphics-samples",fragUrl:"/frags/ch9/9_8_truncation.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="9_8_truncation.frag"',showLineNumbers:!0,title:'"9_8_truncation.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n//begin rot\nvec2 rot2(vec2 p, float t){\n    return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\nvec3 rotX(vec3 p, float t){\n    return vec3(p.x, rot2(p.yz, t));\n}\nvec3 rotY(vec3 p, float t){\n    return vec3(p.y, rot2(p.zx, t)).zxy;\n}\nvec3 rotZ(vec3 p, float t){\n    return vec3(rot2(p.xy, t), p.z);\n}\nvec3 euler(vec3 p, vec3 t){\n    return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\nfloat sphereSDF(vec3 p, vec3 c, float r){\n    return length(p - c) - r;\n}\nfloat planeSDF(vec3 p, vec3 n, float s){\n    return dot(normalize(n), p) - s;\n}\nfloat octaSDF(vec3 p, float s){\n    return planeSDF(abs(p), vec3(1.0), s);\n}\nfloat boxSDF(vec3 p, vec3 c, vec3 d, float s){\n    p = abs(p - c);\n    return length(max(p - d, vec3(0.0))) + min(max(max(p.x - d.x, p.y - d.y), p.z - d.z), 0.0) - s;\n}\nfloat sceneSDF(vec3 p){\n    vec3 v = vec3(0.5); \n    float s = mix(1.0 / 3.0, 1.0, 0.5 * sin(u_time) + 0.5);\n    // s = 1.0;    //cube\n    // s = (sqrt(2.0) + 1.0) / 3.0;    //truncated cube\n    // s = 2.0 / 3.0;  //cuboctahedron\n    // s = 0.5;    //truncated octahedron\n    // s = 1.0 / 3.0;  //octahedron\n    float d1 = octaSDF(p,  s * length(v));\n    float d2 = boxSDF(p, vec3(0.0), v, 0.0);\n    return max(d1, d2);\n}\nvec3 gradSDF(vec3 p){\n    float eps = 0.001;\n    return normalize(vec3(\n        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n    ));\n}\n\nvoid main(){\n    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n    \n    vec3 t = vec3(u_time * 0.3);\n    vec3 cPos = euler(vec3(0.0, 0.0, 2.0), t);\n    vec3 cDir = euler(vec3(0.0, 0.0, - 1.0), t);\n    vec3 cUp = euler(vec3(0.0, 1.0, 0.0), t);\n    vec3 cSide = cross(cDir, cUp);\n    \n    float targetDepth = 1.0;\n    \n    vec3 lDir = euler(vec3(0.0, 0.0, 1.0), t);\n    \n    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n    vec3 rPos = ray + cPos;\n    ray = normalize(ray);\n    fragColor.rgb = vec3(0.0);\n    for(int i = 0; i < 50; i ++ ){\n        if (sceneSDF(rPos) > 0.001){\n            rPos += sceneSDF(rPos) * ray;\n        } else {\n            float amb = 0.1;\n            float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n            vec3 col = vec3(0.0, 1.0, 1.0);\n            fragColor.rgb = col * (diff + amb);\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}\n")))}v.isMDXComponent=!0}}]);