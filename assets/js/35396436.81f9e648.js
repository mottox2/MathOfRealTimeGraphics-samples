"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[5017],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=o(t),v=a,m=f["".concat(s,".").concat(v)]||f[v]||p[v]||c;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(7462),a=t(7294);function c(e){let{baseUrl:n,fragUrl:t,disableFullscreen:c,limitWidth:i,...l}=e;const[s,o]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:i?{width:i,display:"table",margin:"0 auto"}:{}},!c&&a.createElement("button",{"aria-label":s?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");s?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),o(!s)}},s?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(s?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="'+n+'/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="'+n+'/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+"/"+t+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},l)))}},6413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),c=t(5896);const i={sidebar_position:6},l="9_5_displacement",s={unversionedId:"chapter9/9_5_displacement",id:"chapter9/9_5_displacement",title:"9_5_displacement",description:"Code 9.5, Figure 9.9:",source:"@site/docs/chapter9/9_5_displacement.md",sourceDirName:"chapter9",slug:"/chapter9/9_5_displacement",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_5_displacement",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"9_4_solidTexturing",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_4_solidTexturing"},next:{title:"9_6_repeat",permalink:"/MathOfRealTimeGraphics-samples/docs/chapter9/9_6_repeat"}},o={},u=[{value:"Code 9.5, Figure 9.9:",id:"code-95-figure-99",level:2}],p={toc:u};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"9_5_displacement"},"9_5_displacement"),(0,a.kt)("h2",{id:"code-95-figure-99"},"Code 9.5, Figure 9.9:"),(0,a.kt)(c.Z,{baseUrl:"/MathOfRealTimeGraphics-samples",fragUrl:"/frags/ch9/9_5_displacement.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="9_5_displacement.frag"',showLineNumbers:!0,title:'"9_5_displacement.frag"'},"#version 300 es\nprecision mediump float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\n//begin rot\nvec2 rot2(vec2 p, float t){\n    return vec2(cos(t) * p.x -sin(t) * p.y, sin(t) * p.x + cos(t) * p.y);\n}\nvec3 rotX(vec3 p, float t){\n    return vec3(p.x, rot2(p.yz, t));\n}\nvec3 rotY(vec3 p, float t){\n    return vec3(p.y, rot2(p.zx, t)).zxy;\n}\nvec3 rotZ(vec3 p, float t){\n    return vec3(rot2(p.xy, t), p.z);\n}\nvec3 euler(vec3 p, vec3 t){\n    return rotZ(rotY(rotX(p, t.x), t.y), t.z);\n}\n//end rot\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\n//start pnoise\nfloat gtable2(vec2 lattice, vec2 p){\n    uvec2 n = floatBitsToUint(lattice);\n    uint ind = uhash22(n).x >> 29;\n    float u = 0.92387953 * (ind < 4u ? p.x : p.y);  //0.92387953 = cos(pi/8)\n    float v = 0.38268343 * (ind < 4u ? p.y : p.x);  //0.38268343 = sin(pi/8)\n    return ((ind & 1u) == 0u ? u : -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise21(vec2 p){\n    vec2 n = floor(p);\n    vec2 f = fract(p);\n    float[4] v;\n    for (int j = 0; j < 2; j ++){\n        for (int i = 0; i < 2; i++){\n            v[i+2*j] = gtable2(n + vec2(i, j), f - vec2(i, j));\n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    return 0.5 * mix(mix(v[0], v[1], f[0]), mix(v[2], v[3], f[0]), f[1]) + 0.5;\n}\nfloat gtable3(vec3 lattice, vec3 p){\n    uvec3 n = floatBitsToUint(lattice);\n    uint ind = uhash33(n).x >> 28;\n    float u = ind < 8u ? p.x : p.y;\n    float v = ind < 4u ? p.y : ind == 12u || ind == 14u ? p.x : p.z;\n    return ((ind & 1u) == 0u? u: -u) + ((ind & 2u) == 0u? v : -v);\n}\nfloat pnoise31(vec3 p){\n    vec3 n = floor(p);\n    vec3 f = fract(p);\n    float[8] v;\n    for (int k = 0; k < 2; k++ ){\n        for (int j = 0; j < 2; j++ ){\n            for (int i = 0; i < 2; i++){\n                v[i+2*j+4*k] = gtable3(n + vec3(i, j, k), f - vec3(i, j, k)) * 0.70710678;\n            }\n            \n        }\n    }\n    f = f * f * f * (10.0 - 15.0 * f + 6.0 * f * f);\n    float[2] w;\n    for (int i = 0; i < 2; i++){\n        w[i] = mix(mix(v[4*i], v[4*i+1], f[0]), mix(v[4*i+2], v[4*i+3], f[0]), f[1]);\n    }\n    return 0.5 * mix(w[0], w[1], f[2]) + 0.5;\n}\n//end pnoise\nfloat sphereSDF(vec3 p){\n    return length(p) - 1.0;\n}\nfloat sceneSDF(vec3 p){\n    return sphereSDF(p)+ 0.1 * pnoise31(10.0 * p);\n}\nvec3 gradSDF(vec3 p){\n    float eps = 0.001;\n    return normalize(vec3(\n        sceneSDF(p + vec3(eps, 0.0, 0.0)) - sceneSDF(p - vec3(eps, 0.0, 0.0)),\n        sceneSDF(p + vec3(0.0, eps, 0.0)) - sceneSDF(p - vec3(0.0, eps, 0.0)),\n        sceneSDF(p + vec3(0.0, 0.0, eps)) - sceneSDF(p - vec3(0.0, 0.0, eps))\n    ));\n}\n\nvoid main(){\n    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);\n    \n    float t = u_time * 0.3;\n    vec3 cPos = rotY(vec3(0.0, 0.0, 2.0), t);\n    vec3 cDir = rotY(vec3(0.0, 0.0, - 1.0), t);\n    vec3 cUp = rotY(vec3(0.0, 1.0, 0.0), t);\n    vec3 cSide = cross(cDir, cUp);\n    float targetDepth = 1.0;\n    \n    vec3 lDir = rotY(vec3(1.0), t);\n    \n    vec3 ray = cSide * p.x + cUp * p.y + cDir * targetDepth;\n    vec3 rPos = ray + cPos;\n    ray = normalize(ray);\n    bool hit = false;\n    for(int i = 0; i < 50; i ++ ){\n        if (sceneSDF(rPos) > 0.001){\n            rPos += sceneSDF(rPos) * ray;\n        } else {\n            float amb = 0.1;\n            float diff = 0.9 * max(dot(normalize(lDir), gradSDF(rPos)), 0.0);\n            vec3 col = vec3(1.0);\n            fragColor.rgb = col * (diff + amb);\n            break;\n        }\n    }\n    fragColor.a = 1.0;\n}\n")))}f.isMDXComponent=!0}}]);