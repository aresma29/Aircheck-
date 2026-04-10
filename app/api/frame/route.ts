export const dynamic = "force-dynamic"

export async function GET() {
  return new Response(`<!DOCTYPE html>
<html>
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://placehold.co/1200x630/png" />
    <meta property="fc:frame:button:1" content="Launch" />
    <meta property="fc:frame:post_url" content="https://aircheck.vercel.app/api/frame" />
  </head>
</html>`, {
    headers: {
      "Content-Type": "text/html",
    },
  })
}
