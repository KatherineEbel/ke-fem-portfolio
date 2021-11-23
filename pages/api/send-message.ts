import { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'
import formData from 'form-data'
import { validate } from '../../lib/utils'

function getConfig() {
  const apiKey = process.env.MAILGUN_API_KEY
  const domain = process.env.MAILGUN_DOMAIN
  if (!apiKey || !domain) throw new Error('Mailgun env not configured')
  return {
    apiKey,
    domain,
  }
}

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(404).json({ error: 'Not Found' })
  const { email, name, message } = req.body
  if (!email || !name || !message)
    return res.status(400).json({ error: 'Bad Request' })
  const data = {
    from: email,
    to: ['kathyebel@me.com'],
    text: message,
  }
  const errors = validate(req.body)
  if (JSON.stringify(errors) !== '{}') {
    return res.status(400).json({ errors })
  }
  try {
    const { apiKey, domain } = getConfig()
    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({ username: 'api', key: apiKey })
    const { id, message } = await mg.messages.create(domain, data)
    console.log(id)
    res.status(200).json({ message })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: 'Oops! Something went wrong' })
  }
}
