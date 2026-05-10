import { useEffect } from "react"

export const useWhatsApp = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://static.getbutton.io/widget-send-button/js/init.js'
    script.async = true
    script.onload = () => {
      window.Widgets?.init({
        whatsapp: '+1234567890', // Replace with your WhatsApp number
      })
    }
    document.body.appendChild(script)
  }, [])

  const openWhatsApp = (form) => {
    const message = `Hi, I'm ${form.name}. I'm interested in learning more about your services.`
    window.Widgets?.open({
      whatsapp: '+1234567890',
      message: message
    })
  }

  return { openWhatsApp }
}