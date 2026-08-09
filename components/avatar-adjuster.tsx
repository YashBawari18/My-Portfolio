import { useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

/**
 * AvatarAdjuster – displays an avatar with a rotating gradient frame and provides
 * UI controls to adjust visual filters (brightness, contrast, saturation, hue),
 * zoom, and mouse‑drag panning (scroll‑like interaction).
 */
export default function AvatarAdjuster({
  src,
  alt = 'Profile picture',
}: {
  src: string;
  alt?: string;
}) {
  // visual filter states
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [saturate, setSaturate] = useState(1);
  const [hue, setHue] = useState(0);

  // zoom and panning states
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });

  const filterValue = `brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) hue-rotate(${hue}deg)`;

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startPos.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setOffset({ x: e.clientX - startPos.current.x, y: e.clientY - startPos.current.y });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar with frame, filters, zoom and pan */}
      <div
        className="avatar-frame avatar-adjustable"
        style={{ '--avatar-filters': filterValue } as React.CSSProperties}
      >
        <div
          className="avatar-zoomable"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            cursor: dragging.current ? 'grabbing' : 'grab',
            width: '150px',
            height: '150px',
            overflow: 'hidden',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{alt.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-sm text-foreground">
        <label>
          Brightness
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.01"
            value={brightness}
            onChange={e => setBrightness(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label>
          Contrast
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.01"
            value={contrast}
            onChange={e => setContrast(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label>
          Saturation
          <input
            type="range"
            min="0"
            max="3"
            step="0.01"
            value={saturate}
            onChange={e => setSaturate(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label>
          Hue
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={hue}
            onChange={e => setHue(parseInt(e.target.value, 10))}
            className="w-full"
          />
        </label>
        <label className="col-span-2">
          Zoom
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.01"
            value={zoom}
            onChange={e => setZoom(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
