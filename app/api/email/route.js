import sgMail from '@sendgrid/mail';
//TODO refactor to move templates to seperate file and keep logic here
export async function POST(request) {
  const { email, first_name, last_name, message, phone, refer } = await request.json();

  console.log({ email, first_name, last_name, message, phone, refer });

  try {
    const emailToAdrian = await fetch('https://api.mjml.io/v1/render', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          btoa('be2b7edc-9d40-4b3e-bcda-01bd94b8bf47:0ce4364f-039d-43ef-a2fc-5aa9aba05f95'),
      },
      body: JSON.stringify({
        mjml: `<mjml>
      <mj-body background-color='black'>
        <mj-section >
          <mj-column>
            <mj-image width='500px'  src='https://www.adrianveinot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdrian-Veinot-light.b2135074.png&w=828&q=75'></mj-image>
               <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>Message from: ${first_name} ${last_name}</mj-text>
               <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>Contact email: ${email}</mj-text> 
                <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>Contact email: ${phone}</mj-text>
               <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'> I was refered by: ${refer}</mj-text>
               <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>Message: ${message}</mj-text>
            <mj-divider border-color='#FFF'></mj-divider>
                <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>www.adrianveinot.com </mj-text>
                <mj-text  font-size='20px' color='#FFF' font-family='helvetica' align='center'>Powered by Ignite Web Design</mj-text>
            <mj-divider border-color='#FFF'></mj-divider>
            <mj-spacer></mj-spacer>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
    `,
      }),
    });
    let emailToAdrianData = await emailToAdrian.json();

    const emailToClient = await fetch('https://api.mjml.io/v1/render', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          btoa('be2b7edc-9d40-4b3e-bcda-01bd94b8bf47:0ce4364f-039d-43ef-a2fc-5aa9aba05f95'),
      },
      body: JSON.stringify({
        mjml: `<mjml>
      <mj-body background-color='black'>
        <mj-section >
          <mj-column>
            <mj-image width='500px'  src='https://www.adrianveinot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAdrian-Veinot-light.b2135074.png&w=828&q=75'></mj-image>
               <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>Thank you ${first_name}, I have received your request and will contact you as soon as possible </mj-text>
            <mj-divider border-color='#FFF'></mj-divider>
                <mj-text align='center' font-size='20px' color='#FFF' font-family='helvetica'>www.adrianveinot.com </mj-text>
                <mj-text  font-size='20px' color='#FFF' font-family='helvetica' align='center'>Powered by Ignite Web Design</mj-text>
            <mj-divider border-color='#FFF'></mj-divider>
            <mj-spacer></mj-spacer>
          </mj-column>
        </mj-section>
      </mj-body>`,
      }),
    });

    let emailToClientData = await emailToClient.json();
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const mailDataToAdrian = {
      from: 'aaron@ignitewebdesign.ca',
      to: 'adrianveinot@gmail.com',
      // to: 'aaron.janes@gmail.com',
      subject: `Request from ${first_name} ${last_name} | ${email} to be contacted`,
      text: message + ' | Sent from your website by: ' + email,
      html: `${emailToAdrianData.html}`,
    };

    const mailDataToCustomer = {
      from: 'aaron@ignitewebdesign.ca',
      to: `${email}`,
      subject: `Your email has been sent to Adrian Veinot`,
      html: `${emailToClientData.html}`,
    };
    await sgMail.send(mailDataToAdrian);
    await sgMail.send(mailDataToCustomer);

    return new Response('Success', { status: 200 });
  } catch (e) {
    return new Response(e, { status: 500 });
  }
}
