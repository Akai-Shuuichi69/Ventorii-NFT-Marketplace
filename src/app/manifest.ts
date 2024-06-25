export default function manifest() {
  return {
    name: 'Nextjs 14.2.4 Base Resource',
    short_name: 'Nextjs 14.2.4 ',
    description: 'Nextjs 14.2.4 Base Resource',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
