import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface types {
  lable: any;
  path: string;
  classes: string;
}

const LocaleLink = ({ lable, path, classes }: types) => {
  const locale = useLocale();

  return <Link href={`/${locale}/${path}`} className={classes || ''}>{lable}</Link>;
};

export default LocaleLink;
