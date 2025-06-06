// =========================
// DRAWING CANVAS COMPONENT
// =========================
import React from 'react';

const DrawingCanvas = ({
    width,
    height,
    lineColor = '#000000',
    lineWidth = 8,
    backgroundColor = '#FFFFFF',
    onDrawEnd,
    setClearCanvasFunc,
    setGetDrawingFunc,
}) => {
    const canvasRef = React.useRef(null);
    const [isDrawing, setIsDrawing] = React.useState(false);
    const [context, setContext] = React.useState(null);

    React.useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = lineWidth;
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, width, height);
                setContext(ctx);
            }
        }
    }, [width, height, lineColor, lineWidth, backgroundColor]);

    const getMousePosition = (event) => {
        if (!canvasRef.current) return { x: 0, y: 0 };
        const rect = canvasRef.current.getBoundingClientRect();
        let clientX, clientY;
        if (event.touches) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        return {
            x: clientX - rect.left,
            y: clientY - rect.top,
        };
    };

    const startDrawing = React.useCallback((event) => {
        event.preventDefault();
        if (context) {
            const { x, y } = getMousePosition(event);
            context.beginPath();
            context.moveTo(x, y);
            setIsDrawing(true);
        }
    }, [context]);

    const draw = React.useCallback((event) => {
        event.preventDefault();
        if (isDrawing && context) {
            const { x, y } = getMousePosition(event);
            context.lineTo(x, y);
            context.stroke();
        }
    }, [isDrawing, context]);

    const stopDrawing = React.useCallback(() => {
        if (isDrawing && context) {
            context.closePath();
            setIsDrawing(false);
            if (onDrawEnd && canvasRef.current) {
                onDrawEnd(canvasRef.current.toDataURL('image/png'));
            }
        }
    }, [isDrawing, context, onDrawEnd]);

    const clearCanvas = React.useCallback(() => {
        if (context && canvasRef.current) {
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    }, [context, backgroundColor]);

    const getDrawingAsDataURL = React.useCallback(() => {
        if (canvasRef.current) {
            return canvasRef.current.toDataURL('image/png');
        }
        return '';
    }, []);

    React.useEffect(() => {
        if (setClearCanvasFunc) setClearCanvasFunc(() => clearCanvas);
        if (setGetDrawingFunc) setGetDrawingFunc(() => getDrawingAsDataURL);
    }, [clearCanvas, getDrawingAsDataURL, setClearCanvasFunc, setGetDrawingFunc]);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseleave', stopDrawing);

            canvas.removeEventListener('touchstart', startDrawing);
            canvas.removeEventListener('touchmove', draw);
            canvas.removeEventListener('touchend', stopDrawing);
            canvas.removeEventListener('touchcancel', stopDrawing);
        };
    }, [startDrawing, draw, stopDrawing]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="border border-slate-400 rounded-lg shadow-inner bg-white touch-none"
            style={{ touchAction: 'none' }}
        />
    );
};

export default DrawingCanvas;
