function SpiderSquareWeb() {
  return (
    <div className="fixed h-3/4 w-screen -z-10 -top-1 overflow-hidden">
      {[...Array(200)].map((_: any, index: number) => (
        <hr
          className={`absolute w-screen text-borderLight`}
          style={{
            position: "absolute",
            left: `${-1 * (50 - index * 1.5)}%`,
            transform: `rotate(90deg)`,
          }}
          key={`lines-ui-vert-${index}`}
        />
      ))}
      {[...Array(200)].map((_: any, index: number) => (
        <hr
          className={`absolute w-screen text-borderLight h-screen`}
          key={`lines-ui-horz-${index}`}
          style={{
            position: "absolute",
            top: `${index * 22}px`,
            transform: `rotate(0deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default SpiderSquareWeb;
