import { getRequestConfig } from "next-intl/server";

export const defaultLocale = "az";
export const locales = [defaultLocale, "en", "ru"];

export default getRequestConfig(async ({ locale }) => {
  const About = (await import(`../locales/${locale}/About.json`)).default;
  const Auth = (await import(`../locales/${locale}/Auth.json`)).default;
  const Common = (await import(`../locales/${locale}/Common.json`)).default;
  const Company = (await import(`../locales/${locale}/Company.json`)).default;
  const Home = (await import(`../locales/${locale}/Home.json`)).default;
  const Notification = (await import(`../locales/${locale}/Notification.json`))
    .default;
  const PrivacyPolice = (
    await import(`../locales/${locale}/PrivacyPolice.json`)
  ).default;
  const Profile = (await import(`../locales/${locale}/Profile.json`)).default;
  return {
    messages: {
      About,
      Auth,
      Common,
      Company,
      Home,
      Notification,
      PrivacyPolice,
      Profile,
    },
  };
});
