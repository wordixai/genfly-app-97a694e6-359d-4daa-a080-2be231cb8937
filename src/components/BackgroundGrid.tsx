import React from 'react';

const BackgroundGrid = () => {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="1920" 
        height="1080" 
        viewBox="0 0 1920 1080" 
        fill="none" 
        className="-z-50 absolute hidden opacity-25 mask-[linear-gradient(to_right,white,transparent,transparent,white)] lg:block"
      >
        <g clipPath="url(#clip0_4_5)">
          <rect width="1920" height="1080" />
          {/* Horizontal lines */}
          {Array.from({length: 22}, (_, i) => (
            <line 
              key={i}
              y1={49.5 + i * 50} 
              x2="1920" 
              y2={49.5 + i * 50} 
              className="stroke-muted-foreground"
            />
          ))}
          {/* Vertical lines */}
          <g clipPath="url(#clip1_4_5)">
            {Array.from({length: 39}, (_, i) => (
              <line 
                key={i}
                x1={49.6133 + i * 50.1135} 
                y1="3.99995" 
                x2={49.7268 + i * 50.1135} 
                y2="1084" 
                className="stroke-muted-foreground"
              />
            ))}
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_5">
            <rect width="1920" height="1080" fill="#000000" />
          </clipPath>
          <clipPath id="clip1_4_5">
            <rect width="1920" height="1080" fill="#000000" transform="translate(-1 4)" />
          </clipPath>
        </defs>
      </svg>
      
      <div 
        className="pointer-events-none absolute size-full overflow-hidden [perspective:200px] opacity-50"
        style={{
          '--grid-angle': '65deg',
          '--cell-size': '60px',
          '--opacity': '0.5',
          '--light-line': 'gray',
          '--dark-line': 'gray'
        } as React.CSSProperties}
      >
        <div className="absolute inset-0" style={{ transform: 'rotateX(var(--grid-angle))' }}>
          <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
      </div>
    </>
  );
};

export default BackgroundGrid;