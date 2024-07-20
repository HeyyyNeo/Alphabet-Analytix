import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const src = "https://github.com/shadcn.png";

type AvatarPropTypes = {
  src?: string;
  fallbackSrc?: string;
  className?: string;
};

function AvatarUI({
  fallbackSrc,
  src = "https://github.com/shadcn.png",
  ...forwardProps
}: AvatarPropTypes) {
  return (
    <Avatar className={forwardProps.className}>
      {src && <AvatarImage src={src} alt="@shadcn" {...forwardProps} />}
      {fallbackSrc && <AvatarFallback>CN</AvatarFallback>}
    </Avatar>
  );
}

export default AvatarUI;
