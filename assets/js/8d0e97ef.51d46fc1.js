"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2561],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>v});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),s=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=s(n.components);return a.createElement(i.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),p=s(t),v=r,m=p["".concat(i,".").concat(v)]||p[v]||f[v]||o;return t?a.createElement(m,l(l({ref:e},u),{},{components:t})):a.createElement(m,l({ref:e},u))}));function v(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,l=new Array(o);l[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"==typeof n?n:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5896:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(7462),r=t(7294);function o(n){let{fragUrl:e,disableFullscreen:t,limitWidth:o,...l}=n;const[c,i]=(0,r.useState)(!1);return r.createElement("div",{className:"glslcanvas-box-wrapper",style:o?{width:o,display:"table",margin:"0 auto"}:{}},!t&&r.createElement("button",{"aria-label":c?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:n=>{const e=n.target.closest(".glslcanvas-box-wrapper");c?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),i(!c)}},c?r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},r.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},r.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),r.createElement("iframe",(0,a.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(c?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+e+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},l)))}},3821:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905)),o=t(5896);const l={sidebar_position:6},c="5_5_bool",i={unversionedId:"chapter5/5_5_bool",id:"chapter5/5_5_bool",title:"5_5_bool",description:"Code 5.6, 5.7, Figure 5.6:",source:"@site/docs/chapter5/5_5_bool.md",sourceDirName:"chapter5",slug:"/chapter5/5_5_bool",permalink:"/docs/chapter5/5_5_bool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter5/5_5_bool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5_4_blending",permalink:"/docs/chapter5/5_4_blending"},next:{title:"Chapter 6: Cellular Noise",permalink:"/docs/category/chapter-6-cellular-noise"}},s={},u=[{value:"Code 5.6, 5.7, Figure 5.6:",id:"code-56-57-figure-56",level:2}],f={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5_5_bool"},"5_5_bool"),(0,r.kt)("h2",{id:"code-56-57-figure-56"},"Code 5.6, 5.7, Figure 5.6:"),(0,r.kt)(o.Z,{fragUrl:"/frags/ch5/5_5_bool.frag",mdxType:"GLSLCanvasBox"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="5_5_bool.frag"',showLineNumbers:!0,title:'"5_5_bool.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nint channel;\nconst float PI = 3.1415926;\nconst float TAU = 6.2831853;\n\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n\n//start vnoise\nfloat vnoise21(vec2 p){\n    vec2 n = floor(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = hash21(n + vec2(i, j));\n        }\n    }\n    vec2 f = fract(p);\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]);\n}\n//end vnoise\n\n//start pnoise\nfloat gtable2(vec2 lattice, vec2 p){\n    uvec2 n = floatBitsToUint(lattice);\n    uint ind = uhash22(n).x >> 29;\n    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\n//end pnoise\n\nfloat fbm21(vec2 p, float g){\n    float val = 0.0;\n    float amp = 1.0;\n    float freq = 1.0;\n    for (int i = 0; i < 4; i++){\n        val += amp * (vnoise21(freq * p) - 0.5);\n        amp *= g;\n        freq *= 2.01;\n    }\n    return 0.5 * val + 0.5;\n}\nfloat base21(vec2 p){\n    return mod(u_time, 20.0) < 10.0 ?\n    fbm21(p, 0.5) : \n    pnoise21(p);\n}\nfloat warp21(vec2 p, float g){\n    float val = 0.0;\n    for (int i = 0; i < 4; i++){\n        val = base21(p + g * vec2(cos(TAU * val), sin(TAU * val)));\n    }\n    return val;\n}\n\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/min(u_resolution.x, u_resolution.y);\n    channel = int(2.0 * gl_FragCoord.x / u_resolution.x);\n    pos = 10.0 * pos + u_time;\n    vec2 f = vec2(warp21(pos, 1.0), warp21(pos + 10.0, 1.0));\n    f -= 0.5;\n    vec4 x;\n    if (channel == 0){\n        bvec2 b = bvec2(step(f, vec2(0)));\n        x = vec4(b[0] && b[1], \n        b[0] && !b[1],\n        !b[0] && b[1],\n        !(b[0] || b[1])\n        );\n    } else {\n        x = vec4(max(f[0], f[1]),\n        max(f[0], -f[1]), \n        max(-f[0], f[1]), \n        -min(f[0], f[1]));\n        x = step(x, vec4(0.0)\n        );\n    }\n    vec3[4] col4 = vec3[](\n        vec3(1, 0, 0),\n        vec3(0, 1, 0),\n        vec3(0, 0, 1),\n        vec3(1, 1, 0)\n    );\n    for (int i = 0; i < 4; i++){\n        fragColor.rgb += x[i] * col4[i];\n    }\n    // matrix formulation\n    // mat4x3 col = mat4x3(\n    //     vec3(1, 0, 0),\n    //     vec3(0, 1, 0),\n    //     vec3(0, 0, 1),\n    //     vec3(1, 1, 0)\n    // );\n    // fragColor.rgb = col * x;\n    fragColor.a = 1.0;\n}\n")))}p.isMDXComponent=!0}}]);