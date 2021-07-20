import { useState, useEffect, useRef } from "react";
import { Popover } from "bootstrap";

function BoostrapPopover() {
  const [popover, setPopover] = useState(null);
  const examplePopover = useRef();

  useEffect(() => {
    setPopover(new Popover(examplePopover.current));
  }, []);

  return (
    <div>
      <button
        type="button"
        ref={examplePopover}
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
      >
        Popover on bottom
      </button>
    </div>
  );
}

export default BoostrapPopover;
