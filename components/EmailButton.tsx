'use client'

import React from "react";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

interface EmailProps {
  emailAddress: string;
  subject: string;
  body: string;
}

const EmailButton = ({ emailAddress, subject, body }: EmailProps) => {
  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Button
      onClick={handleClick}
      variant={"outline"}
      className="text-white border border-zinc-800 bg-[#161616]  w-full sm:w-auto "
    >
      <Mail className="mr-2 h-4 w-4" />
      E-Mail
    </Button>
  );
};

export default EmailButton;
