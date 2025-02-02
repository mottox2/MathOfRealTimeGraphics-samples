---
sidebar_position: 1
---

# 6_0_fdist
## Code 6.1, Figure 6.1: 

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch6/6_0_fdist.frag'
/>

```glsl showLineNumbers title="6_0_fdist.frag"
#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;
//start hash
uvec3 k = uvec3(0x456789abu, 0x6789ab45u, 0x89ab4567u);
uvec3 u = uvec3(1, 2, 3);
const uint UINT_MAX = 0xffffffffu;
uint uhash11(uint n){
    n ^= (n << u.x);
    n ^= (n >> u.x);
    n *= k.x;
    n ^= (n << u.x);
    return n * k.x;
}
uvec2 uhash22(uvec2 n){
    n ^= (n.yx << u.xy);
    n ^= (n.yx >> u.xy);
    n *= k.xy;
    n ^= (n.yx << u.xy);
    return n * k.xy;
}
uvec3 uhash33(uvec3 n){
    n ^= (n.yzx << u);
    n ^= (n.yzx >> u);
    n *= k;
    n ^= (n.yzx << u);
    return n * k;
}
float hash11(float p){
    uint n = floatBitsToUint(p);
    return float(uhash11(n)) / float(UINT_MAX);
}
float hash21(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return float(uhash22(n).x) / float(UINT_MAX);
}
float hash31(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return float(uhash33(n).x) / float(UINT_MAX);
}
vec2 hash22(vec2 p){
    uvec2 n = floatBitsToUint(p);
    return vec2(uhash22(n)) / vec2(UINT_MAX);
}
vec3 hash33(vec3 p){
    uvec3 n = floatBitsToUint(p);
    return vec3(uhash33(n)) / vec3(UINT_MAX);
}
//end hash
float fdist(vec2 p){
    vec2 n = floor(p + 0.5);
    float dist = sqrt(2.0);
    for(float j = - 2.0; j <= 2.0; j ++ ){
        for(float i = - 2.0; i <= 2.0; i ++ ){
            vec2 glid = n + vec2(i, j);
            vec2 jitter = sin(u_time) * (hash22(glid) - 0.5);
            dist = min(dist, distance(glid + jitter, p));
        }
    }
    return dist;
}
void main(){
    vec2 pos = gl_FragCoord.xy/ min(u_resolution.x, u_resolution.y);
    pos *= 10.0;
    pos += u_time;
    fragColor = vec4(fdist(pos));
    fragColor.a = 1.0;
}

```
