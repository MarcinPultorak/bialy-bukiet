import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: 'bialybukietweddingplanner@gmail.com', // Your email where you'll receive emails
            from: 'bialybukietweddingplanner@gmail.com', // your website email address here
            subject: `Zapytanie ofertowe`,
            text: 'Bialy Bukiet',
            html: `<h3>Masz nową wiadomość od: ${req.body.fullname}. Adres e-mail klienta: ✉️${req.body.email}</h3>
                   <div style="font-size: 16px;">
                      <p>wiadomość:</p>
                      <p>${req.body.message}</p>
                      <br>
                      <p>Data wydarzenia:</p>
                      <p>${req.body.date}</p>
                      <p>Miejsce wydarzenia:</p>
                      <p>${req.body.place}</p>
                      <p>Numer telefonu klienta:</p>
                      <p>${req.body.phone}</p>
                   </div>`
        })
    } catch (error) {
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}

export default sendEmail