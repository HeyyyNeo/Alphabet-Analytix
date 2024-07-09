function Pulse() {
  return (
    <span className="absolute flex h-3 w-3 -right-1 -top-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan"></span>
    </span>
  );
}

export default Pulse;
