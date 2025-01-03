import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const animationData = {"v":"5.10.2","fr":29.9700012207031,"ip":0,"op":449.000018288145,"w":640,"h":638,"nm":"success","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Sqaush stretch","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[316.5,322.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[228,224,100],"ix":6,"l":2,"x":"var $bm_rt;\nvar x, y, x, y, x, y;\nif (effect('Stretch / Squash')('Slider') > 100) {\n    x = effect('Stretch / Squash')('Slider');\n    y = $bm_sub(200, effect('Stretch / Squash')('Slider'));\n} else if (effect('Stretch / Squash')('Slider') < 100) {\n    x = effect('Stretch / Squash')('Slider');\n    y = $bm_sum(100, $bm_sub(100, effect('Stretch / Squash')('Slider')));\n} else if (effect('Stretch / Squash')('Slider') == 100) {\n    x = 100;\n    y = x;\n}\n$bm_rt = [\n    x,\n    y\n];"}},"ao":0,"ef":[{"ty":5,"nm":"Stretch / Squash","np":3,"mn":"ADBE Slider Control","ix":1,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]}],"ip":0,"op":2698.00010989179,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 2 Outlines","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[281.427,281.501,0],"ix":2,"l":2},"a":{"a":0,"k":[282.721,256.431,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.361,0.505],[0,0]],"o":[[0,0],[0.47,0.405],[0,0],[0,0]],"v":[[-157.721,29.428],[-35.067,131.027],[-33.519,130.84],[157.72,-131.431]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":50,"ix":5},"lc":2,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[282.721,256.431],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.509],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20.0000008146167,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":2698.00010989179,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 1 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1.301,-0.84,0],"ix":2,"l":2},"a":{"a":0,"k":[281.427,281.427,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.592,0.592,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.66,0.66,0.167],"y":[0,0,0]},"t":20,"s":[111,111,100]},{"t":25.0000010182709,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[74.972,0],[53.013,53.014],[0,74.972],[-53.012,53.013],[-74.971,0],[-53.013,-53.013],[0,-74.971],[53.012,-53.013]],"o":[[-74.971,0],[-53.012,-53.013],[0,-74.971],[53.013,-53.013],[74.972,0],[53.012,53.013],[0,74.972],[-53.013,53.014]],"v":[[0,280.677],[-198.468,198.468],[-280.676,0],[-198.468,-198.468],[0,-280.677],[198.469,-198.468],[280.676,0],[198.469,198.468]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[281.427,281.426],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":2698.00010989179,"st":0,"ct":1,"bm":0}],"markers":[]}

const SuccessAnimation = () =>{
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(()=>{
        animationRef.current = Lottie.loadAnimation({
            container: containerRef.current,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData:animationData
        });
        return () =>{
            if(animationRef.current){
                animationRef.current.destroy()
            }
        }
    },[])

    return(
        <div ref={containerRef} style={{width:"350px",height:"350px",marginBottom:"0px"}}/>)
}

export default SuccessAnimation