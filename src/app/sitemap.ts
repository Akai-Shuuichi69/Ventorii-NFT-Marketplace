import { fetchProduct } from '@/api/server/serverAction';

export default async function sitemap() {
  const productData = await fetchProduct();
  // Error to fetch data
  if (!productData)
    return [
      {
        url: `${process.env.NEXT_PUBLIC_FE_DOMAIN}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ];

  // fetch data success
  const sitemapArray = productData?.data?.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_FE_DOMAIN}/product/${item?._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_FE_DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sitemapArray,
  ];
}
