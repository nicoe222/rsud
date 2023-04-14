"use client";

import Link from "next/link";
import React from "react";

const CleintSideRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default CleintSideRoute;
