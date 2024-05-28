import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CodeIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { useState } from "react";

interface GetCssProps {
  gradientClass: string;
}

const GetCss: React.FC<GetCssProps> = ({ gradientClass }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(gradientClass);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CodeIcon className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Copy CSS</DialogTitle>
          <DialogDescription>
            You can copy the tailwind css from below:
          </DialogDescription>
        </DialogHeader>
        <div className="flex">
          <p>Tailwind: {gradientClass}</p>
        </div>
        <DialogFooter>
          <Button className={`${gradientClass}`} onClick={handleCopy}>
            {" "}
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GetCss;
