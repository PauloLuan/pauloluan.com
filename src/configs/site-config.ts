const baseUrl = 'http://pauloluan.com'

const siteConfig = {
  copyright: `Copyleft © ${new Date().getFullYear()} Paulo Luan.`,
  author: {
    name: 'Paulo Luan',
    github: 'https://github.com/pauloluan',
    linkedin: 'https://linkedin.com/in/pauloluan',
    email: 'pauloluan.inova@gmail.com'
  },
  youtube: '',
  seo: {
    title: 'Paulo Luan',
    titleTemplate: '%s - Paulo Luan',
    description:
      'Paulo Luan personal website portfólio',
    siteUrl: `${baseUrl}`,
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${baseUrl}`,
      title: 'Paulo Luan',
      description:
        'Paulo Luan ',
      site_name:
        'Paulo Luan',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1240,
          height: 480,
          alt: 'Paulo Luan'
        },
        {
          url: `${baseUrl}/twitter-og-image.png`,
          width: 1012,
          height: 506,
          alt: 'Paulo Luan'
        }
      ]
    }
  }
}

export default siteConfig
