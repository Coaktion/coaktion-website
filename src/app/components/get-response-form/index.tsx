import { useEffect, useRef } from "react";

export function GetResponseForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<getresponse-form form-id="a4a91570-d2cd-4179-992d-13598f83db31" e="0"></getresponse-form>`;
    }
  }, []);

  return <div ref={ref} />;
}
