import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ width: '200px', marginRight: '20px' }}>
        <button onClick={handleClick} style={{ marginBottom: '10px' }}>
          Move circles down!
        </button>
      </div>
      <div style={{ position: 'relative', height: '200px' }}> {/* Definindo uma altura para a área de desenho */}
        {shapes.map(shape => (
          <div
            key={shape.id}
            style={{
              background: 'purple',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === 'circle' ? '50%' : '',
              width: 20,
              height: 20,
            }}
          />
        ))}
      </div>
    </div>
  );
}
