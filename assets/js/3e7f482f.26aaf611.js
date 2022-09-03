"use strict";(self.webpackChunkMathOfRealTimeGraphics_samples=self.webpackChunkMathOfRealTimeGraphics_samples||[]).push([[2205],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=o(t),d=a,f=v["".concat(l,".").concat(d)]||v[d]||p[d]||s;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=v;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<s;o++)c[o]=t[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5896:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7462),a=t(7294);function s(e){let{fragUrl:n,disableFullscreen:t,limitWidth:s,...c}=e;const[i,l]=(0,a.useState)(!1);return a.createElement("div",{className:"glslcanvas-box-wrapper",style:s?{width:s,display:"table",margin:"0 auto"}:{}},!t&&a.createElement("button",{"aria-label":i?"Minimize the example":"Fullscreen the example",className:"glslcanvas-box-fullscreen-toggle",onClick:e=>{const n=e.target.closest(".glslcanvas-box-wrapper");i?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen(),l(!i)}},i?a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"})):a.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"26 26 48 48"},a.createElement("path",{d:"M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"}))),a.createElement("iframe",(0,r.Z)({width:"100%",frameborder:"0",height:"500px",className:"docus-glslcanvas-box"+(i?" is-fullscreen":""),srcDoc:'\n        <!DOCTYPE html>\n          <html>\n          <head>\n            <meta charset="utf-8">\n            <title>GlslCanvas</title>\n            <link type="text/css" href="/css/glsl-canvas.css" rel="stylesheet"/>\n            <script type="text/javascript" src="/js/glsl-canvas.min.js"><\/script>\n          </head>\n          <body>\n            <canvas class="glsl-canvas" data-fragment-url="'+n+'"></canvas>\n          </body>\n          <script>\n            var options = {\n              backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)",\n              alpha: true,\n              antialias: false,\n              premultipliedAlpha: false,\n              preserveDrawingBuffer: false, \n              extensions: [],\n              doubleSided: false,\n            };\n            var canvas = document.querySelector(".glsl-canvas");\n            console.log(canvas);\n            var glsl = new glsl.Canvas(canvas, options);\n            glsl.setUniforms({});\n          <\/script>\n          </html>\n        '},c)))}},5914:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),s=t(5896);const c={sidebar_position:1},i="6_6_cnoise",l={unversionedId:"chapter6/6_6_cnoise",id:"chapter6/6_6_cnoise",title:"6_6_cnoise",description:"Code 6.6, Figure 6.14:",source:"@site/docs/chapter6/6_6_cnoise.md",sourceDirName:"chapter6",slug:"/chapter6/6_6_cnoise",permalink:"/docs/chapter6/6_6_cnoise",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter6/6_6_cnoise.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6_5_fdist4RGB",permalink:"/docs/chapter6/6_5_fdist4RGB"},next:{title:"Chapter 7: Distance and SDF",permalink:"/docs/category/chapter-7-distance-and-sdf"}},o={},u=[{value:"Code 6.6, Figure 6.14:",id:"code-66-figure-614",level:2}],p={toc:u};function v(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6_6_cnoise"},"6_6_cnoise"),(0,a.kt)("h2",{id:"code-66-figure-614"},"Code 6.6, Figure 6.14:"),(0,a.kt)(s.Z,{fragUrl:"/frags/ch6/6_6_cnoise.frag",mdxType:"GLSLCanvasBox"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-glsl",metastring:'showLineNumbers title="6_6_cnoise.frag"',showLineNumbers:!0,title:'"6_6_cnoise.frag"'},"#version 300 es\nprecision highp float;\nprecision highp int;\nout vec4 fragColor;\nuniform float u_time;\nuniform vec2 u_resolution;\nivec2 channel;\n//start hash\nuvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);\nuvec3 u = uvec3(1, 2, 3);\nconst uint UINT_MAX = 0xffffffffu;\nuint uhash11(uint n){\n    n ^= (n << u.x);\n    n ^= (n >> u.x);\n    n *= k.x;\n    n ^= (n << u.x);\n    return n * k.x;\n}\nuvec2 uhash22(uvec2 n){\n    n ^= (n.yx << u.xy);\n    n ^= (n.yx >> u.xy);\n    n *= k.xy;\n    n ^= (n.yx << u.xy);\n    return n * k.xy;\n}\nuvec3 uhash33(uvec3 n){\n    n ^= (n.yzx << u);\n    n ^= (n.yzx >> u);\n    n *= k;\n    n ^= (n.yzx << u);\n    return n * k;\n}\nfloat hash11(float p){\n    uint n = floatBitsToUint(p);\n    return float(uhash11(n)) / float(UINT_MAX);\n}\nfloat hash21(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return float(uhash22(n).x) / float(UINT_MAX);\n}\nfloat hash31(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return float(uhash33(n).x) / float(UINT_MAX);\n}\nvec2 hash22(vec2 p){\n    uvec2 n = floatBitsToUint(p);\n    return vec2(uhash22(n)) / vec2(UINT_MAX);\n}\nvec3 hash33(vec3 p){\n    uvec3 n = floatBitsToUint(p);\n    return vec3(uhash33(n)) / vec3(UINT_MAX);\n}\n//end hash\nvec4 sort(vec4 list, float v){\n    bvec4 res = bvec4(step(v, list));\n    return res.x ? vec4(v, list.xyz):\n        res.y ? vec4(list.x, v, list.yz):\n        res.z ? vec4(list.xy, v, list.z):\n        res.w ? vec4(list.xyz, v):\n        list;\n}\nvec4 fdist24(vec2 p){\n    vec2 n = floor(p) + 0.5;\n    vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n    for(float j = 0.0; j <= 4.0; j ++ ){\n        vec2 glid;\n        glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n        if (abs(glid.y - p.y) - 0.5 > dist4.w){\n            continue;\n        }\n        for(float i = -2.0; i <= 2.0; i ++ ){\n            glid.x = n.x + i;\n            vec2 jitter = hash22(glid) - 0.5;\n            dist4 = sort(dist4, length(glid + jitter - p));\n        }\n    }\n    return dist4;\n}\nvec4 fdist34(vec3 p){\n    vec3 n = floor(p) + 0.5;\n    vec4 dist4 = vec4(length(1.5 - abs(p - n)));\n    for(float k = 0.0; k <= 4.0; k ++ ){\n            vec3 glid;\n            glid.z = n.z + sign(mod(k, 2.0) - 0.5) * ceil(k * 0.5);\n            if (abs(glid.z - p.z) - 0.5 > dist4.w){\n                continue;\n            }\n        for(float j = 0.0; j <= 4.0; j ++ ){\n            glid.y = n.y + sign(mod(j, 2.0) - 0.5) * ceil(j * 0.5);\n            if (abs(glid.y - p.y) - 0.5 > dist4.w){\n                continue;\n            }\n            for(float i = -2.0; i <= 2.0; i ++ ){\n                glid.x = n.x + i;\n                vec3 jitter = hash33(glid) - 0.5;\n                dist4 = sort(dist4, length(glid + jitter - p));\n            }\n        }\n    }\n    return dist4;\n}\nvec4 wt;\nfloat cnoise21(vec2 p){\n    return abs(dot(wt, fdist24(p)));\n}\nfloat cnoise31(vec3 p){\n    return abs(dot(wt, fdist34(p)));\n}\nvoid main(){\n    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);\n    channel = ivec2(vec2(3, 2) * gl_FragCoord.xy/ u_resolution.xy); \n    pos *= 10.0;\n    pos += u_time;\n    wt = channel.x == 0 ? vec4(0.2):\n        channel.x == 1 ? vec4(0.5, -1.0, 1.4, -0.1):\n        vec4(-0.3, -0.5, -1.2, 1.0);\n    fragColor = vec4(channel.y == 0 ? cnoise21(pos) : cnoise31(vec3(pos, u_time)));\n    fragColor.a = 1.0;\n}\n\n")))}v.isMDXComponent=!0}}]);