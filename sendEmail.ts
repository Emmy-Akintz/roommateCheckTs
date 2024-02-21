import nodemailer from 'nodemailer';
// D308
// const email = ['igbekele.emmanuel@lmu.edu.ng', 'attentionofvc@lmu.edu.ng', 'sdo.dsa@lmu.edu.ng', 'dsa@lmu.edu.ng', 'prolusc@lmu.edu.ng']
const email = ['mohammed.folajimi@lmu.edu.ng']

const sendEmail = async (numberCount: Number) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MYEMAIL,
            pass: process.env.MYPASS
        }
    });

    for (let j = 0; j < email.length; j++) {
        var mailOptions = {
            from: process.env.MYEMAIL,
            to: email[j],
            subject: 'WE NEED BETTER INTERNET IN DORCAS HALL',
            text: 'Good day sir, I trust this meets you well.',
            html: '<b>We are really limited and there are a couple of things that could be done in little time that instead takes a load of time and this is due to unreliable network. We\'d really appreciate if our internets is made much faster and reliable as soon as possible. THANK YOU SIR</b>'
        };

        transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                console.log(error, numberCount, email[j])
            } else {
                console.log({ numberCount, message: 'Successfully sent to your mail' })
            }
        });
    }

}

const parentFunction = async () => {
    for (let i = 1; i <= 2; i++) {
        await sendEmail(i)
    }
}

parentFunction()