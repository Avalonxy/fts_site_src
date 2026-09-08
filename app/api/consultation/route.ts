import { NextRequest, NextResponse } from 'next/server';
import { sendConsultationNotification } from '@/lib/email';
import { getApiMessage } from '@/i18n/api-messages';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, locale = 'en' } = body; // Fallback на английский

    // Валидация данных
    if (!name || !email || !service) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          message: getApiMessage(locale, 'missingFields')
        },
        { status: 400 }
      );
    }

    // Пушим уведомление о заявке на консультацию
    await sendConsultationNotification({
      name,
      email,
      phone,
      company,
      service,
      message,
      locale
    });

    // Логи
    console.log('💼 Новая заявка на консультацию отправлена:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      locale,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    return NextResponse.json({
      success: true,
      message: getApiMessage(locale, 'consultationSuccess')
    });

  } catch (error) {
    console.error('❌ Ошибка при обработке заявки на консультацию:', error);
    
    // locale из body или используем fallback
    const fallbackLocale = 'en';
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: getApiMessage(fallbackLocale, 'consultationError')
      },
      { status: 500 }
    );
  }
}
