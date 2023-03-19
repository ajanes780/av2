import mjml2html from 'mjml'
import sgMail from "@sendgrid/mail";

export default async function (req, res) {
    const htmlOutputToAdrain = mjml2html(`
<mjml>
  <mj-body background-color='black'>
    <mj-section >
      <mj-column>
        <mj-image width="500px"  src="https://www.adrianveinot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdrian-Veinot-light.b2135074.png&w=828&q=75"></mj-image>
           <mj-text align='center' font-size="20px" color="#FFF" font-family="helvetica">Message from: ${req.body.name}</mj-text>
           <mj-text align='center' font-size="20px" color="#FFF" font-family="helvetica">Contact email: ${req.body.email}</mj-text>
           <mj-text align='center' font-size="20px" color="#FFF" font-family="helvetica">Message: ${req.body.message}</mj-text>
        <mj-divider border-color="#FFF"></mj-divider>
            <mj-text align='center' font-size="20px" color="#FFF" font-family="helvetica">www.adrianveinot.com </mj-text>
            <mj-text  font-size="20px" color="#FFF" font-family="helvetica" align='center'>Powered by Ignite Web Design</mj-text>
        <mj-divider border-color="#FFF"></mj-divider>
        <mj-spacer></mj-spacer>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`)


    const htmlOutputToCustomer = mjml2html(`
<mjml>
  <mj-body background-color='black'>
    <mj-section >
      <mj-column>
        <mj-image width="500px"  src="https://www.adrianveinot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdrian-Veinot-light.b2135074.png&w=828&q=75"></mj-image>
           <mj-text align='center' font-size="20px" color="#FFF" font-family="helvetica">Thank you ${req.body.name}, I have received your request and will contact you as soon as possible </mj-text>
        <mj-divider border-color="#FFF"></mj-divider>
            <mj-text align='center' font-size="20px" color="#FFF" font-family="helvetica">www.adrianveinot.com </mj-text>
            <mj-text  font-size="20px" color="#FFF" font-family="helvetica" align='center'>Powered by Ignite Web Design</mj-text>
        <mj-divider border-color="#FFF"></mj-divider>
        <mj-spacer></mj-spacer>
      </mj-column>
    </mj-section>
  </mj-body>
`)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const mailDataToAdrian = {
        from: "aaron@ignitewebdesign.ca",
        to: "adrianveinot@gmail.com",
        subject: `Request from ${req.body.name} | ${req.body.email} to be contacted`,
        text: req.body.message + " | Sent from your website by: " + req.body.email,
        html: `${htmlOutputToAdrain.html}`
    }

    const mailDataToCustomer = {
        from: "aaron@ignitewebdesign.ca",
        to: `${req.body.email}`,
        subject: `Your email has been sent to Adrian Veinot`,
        html: `${htmlOutputToCustomer.html}`
    }

    try {
        await sgMail.send(mailDataToAdrian)
        await sgMail.send(mailDataToCustomer)

        res.status(200).json({message: "success"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error})
    }

}
