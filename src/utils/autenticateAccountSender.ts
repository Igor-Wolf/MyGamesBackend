import nodemailer from 'nodemailer'
import { getAutenticateAccount } from './autenticateAccountHTML';



// Configurando o transporte (usando um serviço de e-mail, como Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Substitua pelo serviço de e-mail que você utiliza (e.g., Outlook, Yahoo)
    auth: {
      user: 'programadorigorrb@gmail.com' , // Seu endereço de e-mail
      pass: process.env.EMAIL_PASS, // Sua senha ou App Password
    },
    tls: {
        rejectUnauthorized: false, // Permitir certificados autoassinados
      },
  });
  
  // Função para enviar o e-mail
  export const sendEmail2 = async (to: string, subject: string, text: string, user:string) => {
      try {
          const mailOptions = {
              from: '"My games" <programadorigorrb@gmail.com>', // Remetente
              to, // Destinatário
              subject, // Assunto
              html: getAutenticateAccount(user, text),
          
              //text, // Texto do e-mail (pode adicionar HTML aqui também, com `html` em vez de `text`)
          };
  
          const info = await transporter.sendMail(mailOptions);
          return {
              message: `E-mail enviado com sucesso:'`
          };
      } catch (error) {
          return {message: `Erro ao enviar e-mail: ${error}`
      };
    }
  };