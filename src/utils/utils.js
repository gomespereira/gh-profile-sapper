export async function fetcher(url, session) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': session.GITHUB_TOKEN
    }
  })

  return await response.json()
}

export function dateFormatter(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
}

export function numberFormatter(number) {
  return `${(number / 1000).toFixed(1)}k`
}
