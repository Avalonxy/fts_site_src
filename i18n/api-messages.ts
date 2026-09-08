export const apiMessages = {
  ru: {
    // Сообщения об успехе
    contactSuccess: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
    newsletterSuccess: 'Вы успешно подписались на новости!',
    consultationSuccess: 'Заявка на консультацию успешно отправлена! Наш специалист свяжется с вами в ближайшее время.',
    
    // Сообщения об ошибках
    missingFields: 'Отсутствуют обязательные поля',
    invalidEmail: 'Неверный email адрес',
    internalError: 'Произошла ошибка при отправке заявки. Попробуйте позже.',
    newsletterError: 'Произошла ошибка при подписке. Попробуйте позже.',
    consultationError: 'Произошла ошибка при отправке заявки. Попробуйте позже.',
    
    // Валидация
    nameRequired: 'Имя обязательно для заполнения',
    emailRequired: 'Email обязателен для заполнения',
    messageRequired: 'Сообщение обязательно для заполнения',
    serviceRequired: 'Выберите услугу'
  },
  
  en: {
    // Success messages
    contactSuccess: 'Your request has been successfully sent! We will contact you soon.',
    newsletterSuccess: 'You have successfully subscribed to our newsletter!',
    consultationSuccess: 'Your consultation request has been successfully sent! Our specialist will contact you soon.',
    
    // Error messages
    missingFields: 'Missing required fields',
    invalidEmail: 'Invalid email address',
    internalError: 'An error occurred while sending your request. Please try again later.',
    newsletterError: 'An error occurred while subscribing. Please try again later.',
    consultationError: 'An error occurred while sending your request. Please try again later.',
    
    // Validation
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    messageRequired: 'Message is required',
    serviceRequired: 'Please select a service'
  },
  
  zh: {
    // 成功消息
    contactSuccess: '您的请求已成功发送！我们会尽快与您联系。',
    newsletterSuccess: '您已成功订阅我们的新闻通讯！',
    consultationSuccess: '您的咨询请求已成功发送！我们的专家将尽快与您联系。',
    
    // 错误消息
    missingFields: '缺少必填字段',
    invalidEmail: '无效的电子邮件地址',
    internalError: '发送请求时发生错误。请稍后再试。',
    newsletterError: '订阅时发生错误。请稍后再试。',
    consultationError: '发送请求时发生错误。请稍后再试。',
    
    // 验证
    nameRequired: '姓名是必填项',
    emailRequired: '电子邮件是必填项',
    messageRequired: '消息是必填项',
    serviceRequired: '请选择服务'
  },
  
  de: {
    // Erfolgsmeldungen
    contactSuccess: 'Ihre Anfrage wurde erfolgreich gesendet! Wir werden uns bald mit Ihnen in Verbindung setzen.',
    newsletterSuccess: 'Sie haben sich erfolgreich für unseren Newsletter angemeldet!',
    consultationSuccess: 'Ihr Beratungsantrag wurde erfolgreich gesendet! Unser Spezialist wird sich bald mit Ihnen in Verbindung setzen.',
    
    // Fehlermeldungen
    missingFields: 'Erforderliche Felder fehlen',
    invalidEmail: 'Ungültige E-Mail-Adresse',
    internalError: 'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
    newsletterError: 'Beim Abonnieren ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
    consultationError: 'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
    
    // Validierung
    nameRequired: 'Name ist erforderlich',
    emailRequired: 'E-Mail ist erforderlich',
    messageRequired: 'Nachricht ist erforderlich',
    serviceRequired: 'Bitte wählen Sie einen Service'
  },
  
  es: {
    // Mensajes de éxito
    contactSuccess: '¡Su solicitud ha sido enviada exitosamente! Nos pondremos en contacto con usted pronto.',
    newsletterSuccess: '¡Se ha suscrito exitosamente a nuestro boletín!',
    consultationSuccess: '¡Su solicitud de consulta ha sido enviada exitosamente! Nuestro especialista se pondrá en contacto con usted pronto.',
    
    // Mensajes de error
    missingFields: 'Faltan campos obligatorios',
    invalidEmail: 'Dirección de email inválida',
    internalError: 'Ocurrió un error al enviar su solicitud. Por favor, inténtelo más tarde.',
    newsletterError: 'Ocurrió un error al suscribirse. Por favor, inténtelo más tarde.',
    consultationError: 'Ocurrió un error al enviar su solicitud. Por favor, inténtelo más tarde.',
    
    // Validación
    nameRequired: 'El nombre es obligatorio',
    emailRequired: 'El email es obligatorio',
    messageRequired: 'El mensaje es obligatorio',
    serviceRequired: 'Por favor seleccione un servicio'
  }
} as const;

export type Locale = keyof typeof apiMessages;
export type MessageKey = keyof typeof apiMessages.ru;

// Функция для получения сообщения на нужном языке
export function getApiMessage(locale: string, key: MessageKey): string {
  const messages = apiMessages[locale as Locale];
  if (!messages) {
    // Fallback на английский если язык не поддерживается
    return apiMessages.en[key];
  }
  return messages[key];
}
