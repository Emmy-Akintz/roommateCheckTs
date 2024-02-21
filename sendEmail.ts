import nodemailer from 'nodemailer';
import 'dotenv/config'
import ElasticEmail from '@elasticemail/elasticemail-client'
const client = ElasticEmail.ApiClient.instance
const apiKey = client.authentications['apikey']
apikey.apiKey = process.env.
// D308
// const email = ['igbekele.emmanuel@lmu.edu.ng', 'attentionofvc@lmu.edu.ng', 'sdo.dsa@lmu.edu.ng', 'dsa@lmu.edu.ng', 'prolusc@lmu.edu.ng']
const email = ['emzyakints2005@gmail.com']

const sendEmail = async (numberCount: Number) => {
    let transporter = nodemailer.createTransport({
        service: 'lmu.edu',
        auth: {
            user: process.env.MYEMAIL,
            pass: process.env.MYPASS
        }
    });

    const sendPromises = email.map(async (recipient) => {
        let mailOptions = {
            from: process.env.MYEMAIL,
            to: recipient,
            subject: 'WE NEED BETTER INTERNET IN DORCAS HALL',
            text: 'Good day sir, I trust this meets you well.',
            html: '<b>We are really limited and there are a couple of things that could be done in little time that instead takes a load of time and this is due to unreliable network. We\'d really appreciate if our internets is made much faster and reliable as soon as possible. THANK YOU SIR</b>'
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log({ numberCount, message: 'Successfully sent to your mail' });
            return info;
        } catch (error) {
            console.log(error, numberCount, recipient);
            return error;
        }
    });

    return Promise.all(sendPromises);
};

const parentFunction = async () => {
    try {
        for (let i = 1; i <= 2; i++) {
            await sendEmail(i);
        }
    } catch (error) {
        console.error('Error sending emails: ', error);
    }
};


parentFunction()