"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[5424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),v=a,h=p["".concat(l,".").concat(v)]||p[v]||f[v]||i;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7462),a=t(7294);function i(e){let{baseUrl:n,fragUrl:t,disableFullscreen:i,limitWidth:s,...o}=e;const[l,c]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:s?{width:s,display:"table",margin:"0 auto"}:{}},!i&&a.createElement("button",{"aria-label":l?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");l?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),c(!l)}},l?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(l?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="'+n+'/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="'+n+'/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+"/"+t+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},o)))}},4279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),i=t(5896);const s={sidebar_position:1},o="3_0_vnoise",l={unversionedId:"chapter3/3_0_vnoise",id:"chapter3/3_0_vnoise",title:"3_0_vnoise",description:"Code 3.1, 3.2, Figure 3.2:",source:"@site/docs/chapter3/3_0_vnoise.md",sourceDirName:"chapter3",slug:"/chapter3/3_0_vnoise",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter3/3_0_vnoise",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chapter 3: Value Noise",permalink:"/MathOfRealTimeGraphics-samples/docs/category/chapter-3-value-noise"},next:{title:"3_1_vnoiseGrad",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter3/3_1_vnoiseGrad"}},c={},u=[{value:"Code 3.1, 3.2, Figure 3.2:",id:"code-31-32-figure-32",level:2}],f={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3_0_vnoise"},"3_0_vnoise"),(0,a.kt)("h2",{id:"code-31-32-figure-32"},"Code 3.1, 3.2, Figure 3.2:"),(0,a.kt)(i.Z,{baseUrl:"/MathOfRealTimeGraphics-samples",fragUrl:"/frags/ch3/3_0_vnoise.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="3_0_vnoise.frag"',showLineNumbers:!0,title:'"3_0_vnoise.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n\n\nfloat vnoise21(vec2 p){\n    vec2 n = floor(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = hash21(n + vec2(i, j));\n        }\n    }\n    vec2 f = fract(p);\n    if (channel == 1){\n        f = f * f * (3.0 -2.0 * f); // Hermite interpolation\n    }\n    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\nfloat vnoise31(vec3 p){\n    vec3 n = floor(p);\n    float[8] v;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                v[i+2*j+4*k] = hash31(n + vec3(i, j, k));\n            }\n            \n        }\n    }\n    vec3 f = fract(p);\n    f = f * f * (3.0 - 2.0 * f); // Hermite interpolation\n    float[2] w;\n    for (int i = 0; i < 2; i++){\n        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n    }\n    return mix(w[0], w[1], f[2]);\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n    channel = int(gl_FragCoord.x * 3.0 / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    if (channel < 2){\n        fragColor = vec4(vnoise21(pos));  //right\n    } else {\n        fragColor = vec4(vnoise31(vec3(pos, u_time)));\n        \n    }\n    fragColor.a = 1.0;\n}\n")))}p.isMDXComponent=!0}}]);