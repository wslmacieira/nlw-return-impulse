import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '35587f33ed0ceb',
    pass: 'a53eb9c2d85e88',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Wagner Santos <wsldev@email.com>',
      subject: 'Novo feedback',
      html: body
    });
  }
}
