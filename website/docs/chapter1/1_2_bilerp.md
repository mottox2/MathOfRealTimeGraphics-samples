---
sidebar_position: 3
---

# 1_2_bilerp
## Code 1.3, Figure 1.4: 

import GLSLCanvasBox from "../../static/js/glslcanvas-box";

<GLSLCanvasBox
  baseUrl='/MathOfRealTimeGraphics-samples'  fragUrl='/frags/ch1/1_2_bilerp.frag'
/>

```glsl showLineNumbers title="1_2_bilerp.frag"
#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 pos = gl_FragCoord.xy / u_resolution.xy;
    vec3[4] col4 = vec3[](
        vec3(1.0, 0.0, 0.0),
        vec3(0.0, 0.0, 1.0),
        vec3(0.0, 1.0, 0.0),
        vec3(1.0, 1.0, 0.0)
    );
    
    vec3 col = mix(mix(col4[0], col4[1], pos.x), mix(col4[2], col4[3], pos.x), pos.y);
    fragColor = vec4(col, 1.0);
}
```

