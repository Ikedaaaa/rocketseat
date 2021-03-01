import nodemailer, {Transporter} from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

//No vídeo ela fez diferente, ela passou variables como sendo do tipo 'object',
//e passou 4 parâmetros na função execute, o segundo era 'subject',
//que seria survey.title de SendMailController.ts, porém isso já era passado dentro de variables,
//daí resolvi fazer assim pra survey.title não ser passado duas vezes.
interface Variables {
    name: string,
    title: string,
    description: string,
    user_id: string,
    link: string
}

class SendMailService{
    private client: Transporter;
    constructor(){
        nodemailer.createTestAccount().then((account) => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                }
            });

            this.client = transporter;
        })
    }

    async execute(to: string, variables: Variables, path: string){
        const templateFileContent = fs.readFileSync(path).toString("utf8");

        const mailTemplateParse = handlebars.compile(templateFileContent);

        const html = mailTemplateParse(variables);

        const subject = variables.title;

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "NPS <noreply@nps.com.br>"
        });

        console.log("Message sent: %s", message.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
    }
}

export default new SendMailService();