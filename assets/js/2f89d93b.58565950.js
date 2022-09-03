"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),v=a,m=f["".concat(o,".").concat(v)]||f[v]||p[v]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7462),a=t(7294);function i(e){let{fragUrl:n,disableFullscreen:t,limitWidth:i,...s}=e;const[l,o]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:i?{width:i,display:"table",margin:"0 auto"}:{}},!t&&a.createElement("button",{"aria-label":l?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");l?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),o(!l)}},l?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(l?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},s)))}},2986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),i=t(5896);const s={sidebar_position:4},l="4_3_noiseQuality",o={unversionedId:"chapter4/4_3_noiseQuality",id:"chapter4/4_3_noiseQuality",title:"4_3_noiseQuality",description:"Code 4.5, Figure 4.6:",source:"@site/docs/chapter4/4_3_noiseQuality.md",sourceDirName:"chapter4",slug:"/chapter4/4_3_noiseQuality",permalink:"/docs/chapter4/4_3_noiseQuality",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter4/4_3_noiseQuality.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"4_2_rotNoise",permalink:"/docs/chapter4/4_2_rotNoise"},next:{title:"4_4_pnoise",permalink:"/docs/chapter4/4_4_pnoise"}},c={},u=[{value:"Code 4.5, Figure 4.6:",id:"code-45-figure-46",level:2}],p={toc:u};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4_3_noisequality"},"4_3_noiseQuality"),(0,a.kt)("h2",{id:"code-45-figure-46"},"Code 4.5, Figure 4.6:"),(0,a.kt)(i.Z,{fragUrl:"/frags/ch4/4_3_noiseQuality.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="4_3_noiseQuality.frag"',showLineNumbers:!0,title:'"4_3_noiseQuality.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n\nvec2[4] diag = vec2[](    // 0.70710678 = 1.0 / sqrt(2.0)\n    vec2(0.70710678,0.70710678),\n    vec2(-0.70710678,0.70710678),\n    vec2(0.70710678,-0.70710678),\n    vec2(-0.70710678,-0.70710678)\n);\nvec2[4] axis = vec2[](\n    vec2(1, 0),\n    vec2(-1, 0),\n    vec2(0, 1),\n    vec2(0, -1)\n);\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nfloat gnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            uvec2 m = floatBitsToUint(n + vec2(i, j));\n            uint ind = (uhash22(m).x >> 30);\n            if (channel == 0){\n                v[i+2*j] = dot(diag[ind], f - vec2(i, j));\n            } else {\n                v[i+2*j] = dot(axis[ind], f - vec2(i, j));\n            }\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy / min(u_resolution.x, u_resolution.y);\n    channel = int(gl_FragCoord.x * 2.0 / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    float v = gnoise21(pos);\n    if (v > 0.85 || v < 0.15){\n        fragColor.rgb = vec3(1.,0.,0.);\n    }   else {\n        fragColor.rgb = vec3(v);\n    }\n    fragColor.a = 1.0;\n}\n")))}f.isMDXComponent=!0}}]);