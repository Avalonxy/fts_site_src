import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/email';
import { getApiMessage } from '@/i18n/api-messages';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, locale = 'en' } = body; // Fallback на английский

    // Валидация
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          message: getApiMessage(locale, 'missingFields')
        },
        { status: 400 }
      );
    }

    // Пушим уведомление менеджерам
    await sendContactNotification({
      name,
      email,
      phone,
      company,
      message,
      locale
    });

    // Логи
    console.log('📧 Новая заявка отправлена:', {
      name,
      email,
      phone,
      company,
      message,
      locale,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    return NextResponse.json({
      success: true,
      message: getApiMessage(locale, 'contactSuccess')
    });

  } catch (error) {
    console.error('❌ Ошибка при обработке заявки:', error);
    
    // locale из body или используем fallback
    const fallbackLocale = 'en';
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: getApiMessage(fallbackLocale, 'internalError')
      },
      { status: 500 }
    );
  }
}
