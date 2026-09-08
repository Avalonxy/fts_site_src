import { NextRequest, NextResponse } from 'next/server';
import { sendNewsletterNotification } from '@/lib/email';
import { getApiMessage } from '@/i18n/api-messages';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, locale = 'en' } = body;

    // Валидация мыла
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { 
          error: 'Invalid email address',
          message: getApiMessage(locale, 'invalidEmail')
        },
        { status: 400 }
      );
    }

    // Пушим уведомление о подписке
    await sendNewsletterNotification({
      email,
      locale
    });

    // Логи
    console.log('📬 Новая подписка на новости отправлена:', {
      email,
      locale,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    return NextResponse.json({
      success: true,
      message: getApiMessage(locale, 'newsletterSuccess')
    });

  } catch (error) {
    console.error('❌ Ошибка при подписке на новости:', error);
    
      const fallbackLocale = 'en';
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: getApiMessage(fallbackLocale, 'newsletterError')
      },
      { status: 500 }
    );
  }
}
