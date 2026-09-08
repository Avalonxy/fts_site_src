import nodemailer from 'nodemailer';

// Конфигурация SMTP для FastPanel
const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 25,
  secure: false,
  auth: {
    user: 'noreply@fts77.ru',
    pass: process.env.SMTP_PASSWORD || 'password_ТУТ' 
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Альтернативная конфигурация для внешнего SMTP (если нужна)
const externalTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.fts77.ru',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'noreply@fts77.ru',
    pass: process.env.SMTP_PASSWORD || 'your_password_here'
  }
});

export async function sendEmail(options: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}) {
  try {
    const mailOptions = {
      from: options.from || 'FTS77 <noreply@fts77.ru>',
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ''),
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

        let result;
    try {
      result = await transporter.sendMail(mailOptions);
      console.log('✅ Email отправлен через локальный SMTP:', result.messageId);
    } catch (localError) {
      console.log('⚠️ Локальный SMTP не сработал, пробуем внешний:', localError);
      
      // Fallback на внешний SMTP
      result = await externalTransporter.sendMail(mailOptions);
      console.log('✅ Email отправлен через внешний SMTP:', result.messageId);
    }

    return result;
  } catch (error) {
    console.error('❌ Ошибка при отправке email:', error);
    throw error;
  }
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  locale: string;
}) {
  const subject = `📧 Новая заявка с сайта от ${data.name}`;
  
  const html = `
    <!DOCTYPE html>
    <html lang="${data.locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Новая заявка</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { margin-left: 10px; }
        .footer { background: #1a1a1a; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .offices { background: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .office { border-left: 4px solid #fbbf24; padding-left: 15px; margin: 15px 0; }
        .office-title { font-weight: bold; color: #1a1a1a; margin-bottom: 5px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🚀 FTS77 - Новая заявка с сайта</h1>
      </div>
      
      <div class="content">
        <div class="field">
          <span class="label">👤 Имя:</span>
          <span class="value">${data.name}</span>
        </div>
        
        <div class="field">
          <span class="label">📧 Email:</span>
          <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
        </div>
        
        ${data.phone ? `
        <div class="field">
          <span class="label">📞 Телефон:</span>
          <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
        </div>
        ` : ''}
        
        ${data.company ? `
        <div class="field">
          <span class="label">🏢 Компания:</span>
          <span class="value">${data.company}</span>
        </div>
        ` : ''}
        
        <div class="field">
          <span class="label">💬 Сообщение:</span>
          <div class="value" style="margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #fbbf24; border-radius: 4px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div class="field">
          <span class="label">🌍 Язык:</span>
          <span class="value">${data.locale.toUpperCase()}</span>
        </div>
        
        <div class="field">
          <span class="label">⏰ Время:</span>
          <span class="value">${new Date().toLocaleString('ru-RU')}</span>
        </div>

        <div class="offices">
          <h3 style="margin-top: 0; color: #1a1a1a;">🏢 Наши офисы для связи:</h3>
          
          <div class="office">
            <div class="office-title">🇷🇺 Иркутск (Главный офис)</div>
            <div>ул. Ширямова, 2/13а</div>
            <div>📞 +7 (904) 115-05-80</div>
            <div>📧 info@fts77.ru</div>
            <div>🕐 UTC+8, Пн-Пт: 9:00-18:00</div>
          </div>
          
          <div class="office">
            <div class="office-title">🇷🇺 Москва</div>
            <div>ул. Якиманка, 13/2</div>
            <div>📞 +7 (904) 115-05-80</div>
            <div>📧 info@fts77.ru</div>
            <div>🕐 UTC+3, Пн-Пт: 9:00-18:00</div>
          </div>
          
          <div class="office">
            <div class="office-title">🇭🇰 Гонконг</div>
            <div>Future Tech Systems Corp. 未來技術系統公司</div>
            <div>Mody Road 69, Tsim Sha Tsui East</div>
            <div>📞 +852-460-93-656</div>
            <div>📧 hongkong@fts77.ru</div>
            <div>🕐 UTC+8, Пн-Пт: 9:00-18:00</div>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <p>Это автоматическое уведомление с сайта FTS77</p>
        <p>Не отвечайте на это письмо</p>
      </div>
    </body>
    </html>
  `;

  const managers = [
    'info@fts77.ru',
    'sales@fts77.ru',
    'manager@fts77.ru'
  ].filter(Boolean);

  return sendEmail({
    to: managers,
    subject,
    html
  });
}

export async function sendNewsletterNotification(data: {
  email: string;
  locale: string;
}) {
  const subject = `📬 Новая подписка на новости: ${data.email}`;
  
  const html = `
    <!DOCTYPE html>
    <html lang="${data.locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Новая подписка</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { margin-left: 10px; }
        .footer { background: #1a1a1a; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📬 FTS77 - Новая подписка на новости</h1>
      </div>
      
      <div class="content">
        <div class="field">
          <span class="label">📧 Email:</span>
          <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
        </div>
        
        <div class="field">
          <span class="label">🌍 Язык:</span>
          <span class="value">${data.locale.toUpperCase()}</span>
        </div>
        
        <div class="field">
          <span class="label">⏰ Время:</span>
          <span class="value">${new Date().toLocaleString('ru-RU')}</span>
        </div>
      </div>
      
      <div class="footer">
        <p>Это автоматическое уведомление с сайта FTS77</p>
        <p>Не отвечайте на это письмо</p>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: 'marketing@fts77.ru',
    subject,
    html
  });
}

export async function sendConsultationNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message?: string;
  locale: string;
}) {
  const subject = `💼 Заявка на консультацию: ${data.service}`;
  
  const html = `
    <!DOCTYPE html>
    <html lang="${data.locale}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Заявка на консультацию</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { margin-left: 10px; }
        .service { background: #fbbf24; color: #1a1a1a; padding: 10px; border-radius: 4px; font-weight: bold; }
        .footer { background: #1a1a1a; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>💼 FTS77 - Заявка на консультацию</h1>
      </div>
      
      <div class="content">
        <div class="field">
          <span class="label">👤 Имя:</span>
          <span class="value">${data.name}</span>
        </div>
        
        <div class="field">
          <span class="label">📧 Email:</span>
          <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
        </div>
        
        ${data.phone ? `
        <div class="field">
          <span class="label">📞 Телефон:</span>
          <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
        </div>
        ` : ''}
        
        ${data.company ? `
        <div class="field">
          <span class="label">🏢 Компания:</span>
          <span class="value">${data.company}</span>
        </div>
        ` : ''}
        
        <div class="field">
          <span class="label">🔧 Услуга:</span>
          <span class="value service">${data.service}</span>
        </div>
        
        ${data.message ? `
        <div class="field">
          <span class="label">💬 Дополнительная информация:</span>
          <div class="value" style="margin-top: 10px; padding: 15px; background: white; border-left: 4px solid #fbbf24; border-radius: 4px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}
        
        <div class="field">
          <span class="label">🌍 Язык:</span>
          <span class="value">${data.locale.toUpperCase()}</span>
        </div>
        
        <div class="field">
          <span class="label">⏰ Время:</span>
          <span class="value">${new Date().toLocaleString('ru-RU')}</span>
        </div>
      </div>
      
      <div class="footer">
        <p>Это автоматическое уведомление с сайта FTS77</p>
        <p>Не отвечайте на это письмо</p>
      </div>
    </body>
    </html>
  `;

  const managers = [
    'sales@fts77.ru',
    'info@fts77.ru',
    'manager@fts77.ru'
  ].filter(Boolean);

  return sendEmail({
    to: managers,
    subject,
    html
  });
}
