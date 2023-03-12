import { type NextApiRequest, type NextApiResponse } from "next";

import prisma from "lib/prisma";
import { type Prisma } from ".prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const language = req.body as string;
  const selectQuery: Prisma.translationsSelect = {
    term: true,
    en: false,
    de: false,
    tr: false,
  };
  if (language === "en") {
    selectQuery.en = true;
  } else if (language === "de") {
    selectQuery.de = true;
  } else if (language === "tr") {
    selectQuery.tr = true;
  }
  const translations = await prisma?.translations.findMany({
    select: selectQuery,
  });

  if (translations === null)
    return res.status(500).json({ error: "Internal Server Error" });

  console.log(translations);

  const translationsObject: Record<string, string> = {};

  translations &&
    translations.forEach((translation) => {
      if (translation && translation.hasOwnProperty(language)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        translationsObject[translation.term as string] = translation[language];
      }
    });

  return res.status(200).json(translationsObject);
}
