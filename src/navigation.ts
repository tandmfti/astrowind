import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: getPermalink('/services')
    } ]
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/taxiecopark/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://hoangmanhtaxi.com"> HoangManhTaxi.com</a> · All rights reserved.
  `,
};
