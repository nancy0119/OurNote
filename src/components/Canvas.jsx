import React, { useState, useRef, useEffect } from "react";

function Canvas(props) {

    const [isDrawing, setIsDrawing] = useState(false)

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [width, setWidth] = useState(2000);
    const [height, setHeight] = useState(585);

    useEffect(() => {
        const canvas = canvasRef.current

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const context = canvas.getContext("2d")
        context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }) => {

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;

        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();

    };



    return <div style={{ maxHeight: "585px", maxWidth: props.maxWidth.toString() + "px", overflow: "auto" }}>
        <canvas
            ref={canvasRef}
            id="canvas"
            width={width * 2}
            height={height * 2}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
        >

        </canvas>
    </div>
}

export default Canvas;