export default function LogoSVG({
  width = "50px",
  height = "39px",
}: {
  width?: string | number;
  height?: number | string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 50 39'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <g
        id='WiP'
        stroke='none'
        strokeWidth={"1"}
        fill='none'
        fillRule='evenodd'
      >
        <g id='Artboard' transform='translate(-90.000000, -38.000000)'>
          <g id='Group' transform='translate(90.000000, 38.000000)'>
            <polygon
              id='Rectangle'
              fill='#808282'
              points='3 14 25 26.5 47 14 40.855176 39 9.08421785 39'
            ></polygon>
            <polygon
              id='Triangle'
              fillOpacity={"0.262838724"}
              fill='#101A1A'
              points='25 8 40 39 10 39'
            ></polygon>
            <circle id='Oval' fill='#5E6363' cx='2' cy='9' r='2'></circle>
            <circle id='Oval' fill='#5E6363' cx='25' cy='2' r='2'></circle>
            <circle id='Oval' fill='#5E6363' cx='48' cy='9' r='2'></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}
