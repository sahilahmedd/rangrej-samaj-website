import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface types {
  lable: any;
  path: string;
}

const LocaleLink = ({ lable, path }: types) => {
  const locale = useLocale();

  return <Link href={`/${locale}/${path}`}>{lable}</Link>;
};

export default LocaleLink;
