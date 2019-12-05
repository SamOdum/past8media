export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * full url, no username
   */
  instagram?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Past8 Media',
  description: 'Your professional e-money guide',
  coverImage: 'img/blog-cover2.jpg',
  logo: 'img/past8-logo.png',
  lang: 'en',
  siteUrl: 'https://past8media.com',
  facebook: 'https://www.facebook.com/Past8-Media-1254206468072878/?ref=bookmarks',
  twitter: 'https://twitter.com/Past8Media',
  instagram: 'https://instagram.com/Past8Media',
  showSubscribe: true,
  mailchimpAction:
    'https://past8media.us5.list-manage.com/subscribe/post?u=1b9612ef1a8aedad7355e4d9c&amp;id=a2ab8f724f',
  mailchimpName: 'b_1b9612ef1a8aedad7355e4d9c_a2ab8f724f',
  mailchimpEmailFieldName: 'EMAIL',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
