const ALCHEMY = process.env.ALCHEMY_KEY

export async function checkWallet(address: string) {
  let score = 0

  const res = await fetch(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getTransactionCount",
      params: [address, "latest"],
      id: 1,
    }),
  })

  const data = await res.json()
  const txCount = parseInt(data.result, 16)

  if (txCount > 5) score += 20
  if (txCount > 20) score += 30

  let status = "❌ Low"
  if (score >= 40) status = "🎉 Eligible"
  if (score >= 70) status = "🚀 Strong"

  return { score, txCount, status }
}
