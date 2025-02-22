import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const animationData = {"v":"5.10.2","fr":29.9700012207031,"ip":1.00000004073083,"op":28.0000011404634,"w":1920,"h":1080,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[518,518],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13,"s":[0]},{"t":29.0000011811942,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.652],"y":[0]},"t":0,"s":[0]},{"t":29.0000011811942,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.196078431373,0.196078431373,0.196078431373,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":36,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":900.000036657751,"st":0,"ct":1,"bm":0}],"markers":[]}

const LoadingAnimation = () =>{
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
        <div ref={containerRef} style={{width:"300px",height:"300px"}}/>)
}

export default LoadingAnimation