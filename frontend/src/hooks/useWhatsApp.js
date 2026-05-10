export const WHATSAPP_NUMBER = '15550000000' // Replace with real number

export function useWhatsApp() {
  const openWhatsApp = (data) => {
    const message = formatMessage(data)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const formatMessage = (data) => {
    const lines = [
      `🚀 *New Inquiry — APEX Digital*`,
      ``,
      `👤 *Name:* ${data.name || 'N/A'}`,
      `🏢 *Business:* ${data.business || 'N/A'}`,
      `📧 *Email:* ${data.email || 'N/A'}`,
      `📞 *Phone:* ${data.phone || 'N/A'}`,
    ]

    if (data.revenue) lines.push(`💰 *Revenue:* ${data.revenue}`)
    if (data.goal) lines.push(`🎯 *Goal:* ${data.goal}`)
    if (data.services?.length) lines.push(`📋 *Services:* ${data.services.join(', ')}`)

    lines.push(``, `💬 *Message:*`, data.message || 'N/A')
    lines.push(``, `---`, `_Sent via APEX Digital website_`)

    return encodeURIComponent(lines.join('\n'))
  }

  return { openWhatsApp }
}