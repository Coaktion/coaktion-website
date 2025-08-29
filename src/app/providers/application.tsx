"use client";

type Props = {
  children: React.ReactNode;
};

export const ApplicationProvider = ({ children }: Props) => {
  return <>{children}</>;
};
