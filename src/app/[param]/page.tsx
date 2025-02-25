export const dynamicParams = false

export function generateStaticParams() {
  return [{ param: 'foo' }]
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ param: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <>
      <pre>{JSON.stringify(await params, null, 2)}</pre>
      <pre>{JSON.stringify(await searchParams, null, 2)}</pre>
    </>
  )
}
