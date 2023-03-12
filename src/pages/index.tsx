import { type NextPage } from "next";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";

const Home: NextPage = () => {
  const [language, setLanguage] = useState<string>("en");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    const getTranslations = async (language: string) => {
      const res = await fetch(`/api/translations`, {
        method: "POST",
        body: language,
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    };
    void getTranslations(language).then((res: Record<string, string>) => {
      setTranslations(res);
    });
  }, [language]);

  if (!translations) return <div>Loading...</div>;

  console.log(translations);

  console.log(language);

  return (
    <>
      <IntlProvider
        defaultLocale="en"
        locale={language}
        messages={translations}
      >
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#c4b9d4] to-[#903674]">
          <Navbar
            setSelectedLanguage={(language: string) => {
              setLanguage(language);
            }}
          />
          <FormattedMessage id="PLEASED_TO_MEET_YOU" />
        </main>
      </IntlProvider>
    </>
  );
};

export default Home;
