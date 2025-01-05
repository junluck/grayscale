import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { cartAssign } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const animationData = {"v":"5.10.2","fr":29.9700012207031,"ip":0,"op":449.000018288145,"w":640,"h":638,"nm":"success","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[-13,5,0],"ix":2,"l":2},"a":{"a":0,"k":[-13,5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-264,5],[238,5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":91,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[0]},{"t":27.0000010997325,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":7.00000028511585,"op":2705.00011017691,"st":7.00000028511585,"ct":1,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 1","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[296.626,278.767,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[83,83,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-264,5],[238,5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":91,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":4,"s":[0]},{"t":24.00000097754,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":4.00000016292334,"op":2702.00011005472,"st":4.00000016292334,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Sqaush stretch","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[316.5,322.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[228,224,100],"ix":6,"l":2,"x":"var $bm_rt;\nvar x, y, x, y, x, y;\nif (effect('Stretch / Squash')('Slider') > 100) {\n    x = effect('Stretch / Squash')('Slider');\n    y = $bm_sub(200, effect('Stretch / Squash')('Slider'));\n} else if (effect('Stretch / Squash')('Slider') < 100) {\n    x = effect('Stretch / Squash')('Slider');\n    y = $bm_sum(100, $bm_sub(100, effect('Stretch / Squash')('Slider')));\n} else if (effect('Stretch / Squash')('Slider') == 100) {\n    x = 100;\n    y = x;\n}\n$bm_rt = [\n    x,\n    y\n];"}},"ao":0,"ef":[{"ty":5,"nm":"Stretch / Squash","np":3,"mn":"ADBE Slider Control","ix":1,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]}],"ip":0,"op":2698.00010989179,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 1 Outlines","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1.301,-0.84,0],"ix":2,"l":2},"a":{"a":0,"k":[281.427,281.427,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.592,0.592,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.66,0.66,0.167],"y":[0,0,0]},"t":20,"s":[111,111,100]},{"t":25.0000010182709,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[74.972,0],[53.013,53.014],[0,74.972],[-53.012,53.013],[-74.971,0],[-53.013,-53.013],[0,-74.971],[53.012,-53.013]],"o":[[-74.971,0],[-53.012,-53.013],[0,-74.971],[53.013,-53.013],[74.972,0],[53.012,53.013],[0,74.972],[-53.013,53.014]],"v":[[0,280.677],[-198.468,198.468],[-280.676,0],[-198.468,-198.468],[0,-280.677],[198.469,-198.468],[280.676,0],[198.469,198.468]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[281.427,281.426],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":2698.00010989179,"st":0,"ct":1,"bm":0}],"markers":[]}


const FailedAnimation = () =>{
    const dispatch = useDispatch()
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("cart")) != null )
        {
            sessionStorage.setItem("cart",JSON.stringify([]))
            dispatch(cartAssign([]))
          
        };
    },[])
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
        <div ref={containerRef} className="failedAnimationDiv"/>)
}

export default FailedAnimation