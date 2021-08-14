import React, { useState, useRef, useEffect } from "react";

function Canvas() {

    const [isDrawing, setIsDrawing] = useState(false)

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [width, setWidth] = useState(window.innerWidth * 2);
    const [height, setHeight] = useState(window.innerHeight * 2);

    useEffect(() => {
        const canvas = canvasRef.current
        // canvas.width = window.innerWidth * 2;
        // canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

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



    return <canvas
        ref={canvasRef}
        id="canvas"
        width={width}
        height={height}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
    >

    </canvas>
}

export default Canvas;