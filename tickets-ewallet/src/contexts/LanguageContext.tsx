import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language } from '@/lib/supabase'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string>) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.amount': 'Amount',
    'common.date': 'Date',
    'common.status': 'Status',
    'common.description': 'Description',
    'common.balance': 'Balance',
    'common.currency': 'SYP',

    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.logout': 'Logout',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.phoneNumber': 'Phone Number',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.dontHaveAccount': "Don't have an account?",
    'auth.alreadyHaveAccount': 'Already have an account?',
    'auth.signUp': 'Sign Up',
    'auth.signIn': 'Sign In',
    'auth.role': 'I am a',
    'auth.passenger': 'Passenger',
    'auth.driver': 'Driver',
    'auth.merchant': 'Merchant',
    'auth.eventAdmin': 'Event Organizer',

    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.wallet': 'Wallet',
    'nav.transactions': 'Transactions',
    'nav.scanner': 'QR Scanner',
    'nav.events': 'Events',
    'nav.tickets': 'My Tickets',
    'nav.earnings': 'Earnings',
    'nav.trips': 'Trips',
    'nav.qrcode': 'QR Code',
    'nav.business': 'Business',
    'nav.management': 'Management',
    'nav.analytics': 'Analytics',
    'nav.users': 'Users',
    'nav.disputes': 'Disputes',
    'nav.support': 'Support',
    'nav.settings': 'Settings',
    'nav.profile': 'Profile',

    // Wallet
    'wallet.title': 'Digital Wallet',
    'wallet.balance': 'Current Balance',
    'wallet.recharge': 'Recharge Wallet',
    'wallet.rechargeAmount': 'Recharge Amount',
    'wallet.paymentMethod': 'Payment Method',
    'wallet.mtnCash': 'MTN Cash',
    'wallet.syriatelCash': 'Syriatel Cash',
    'wallet.shamCash': 'ShamCash',
    'wallet.fatora': 'Fatora',
    'wallet.stripe': 'Credit Card',
    'wallet.rechargeSuccess': 'Wallet recharged successfully',
    'wallet.insufficientBalance': 'Insufficient balance',

    // Transactions
    'transactions.title': 'Transaction History',
    'transactions.recent': 'Recent Transactions',
    'transactions.payment': 'Payment',
    'transactions.recharge': 'Recharge',
    'transactions.refund': 'Refund',
    'transactions.withdrawal': 'Withdrawal',
    'transactions.pending': 'Pending',
    'transactions.completed': 'Completed',
    'transactions.failed': 'Failed',
    'transactions.cancelled': 'Cancelled',
    'transactions.to': 'To',
    'transactions.from': 'From',

    // QR Scanner
    'scanner.title': 'QR Code Scanner',
    'scanner.scanToPayDriver': 'Scan driver QR to pay for transport',
    'scanner.scanToPayMerchant': 'Scan merchant QR to make payment',
    'scanner.scanning': 'Scanning...',
    'scanner.paymentSuccess': 'Payment successful',
    'scanner.paymentFailed': 'Payment failed',
    'scanner.quantity': 'Number of tickets',

    // Events
    'events.title': 'Events',
    'events.upcoming': 'Upcoming Events',
    'events.myEvents': 'My Events',
    'events.createEvent': 'Create Event',
    'events.eventTitle': 'Event Title',
    'events.eventDescription': 'Event Description',
    'events.eventLocation': 'Location',
    'events.eventDate': 'Date',
    'events.eventPrice': 'Ticket Price',
    'events.availableTickets': 'Available Tickets',
    'events.buyTicket': 'Buy Ticket',
    'events.ticketPurchased': 'Ticket purchased successfully',

    // Driver
    'driver.title': 'Driver Dashboard',
    'driver.earnings': 'Earnings',
    'driver.todayEarnings': "Today's Earnings",
    'driver.weekEarnings': 'Week Earnings',
    'driver.monthEarnings': 'Month Earnings',
    'driver.generateQR': 'Generate QR Code',
    'driver.activeTrip': 'Active Trip',
    'driver.startTrip': 'Start Trip',
    'driver.endTrip': 'End Trip',
    'driver.route': 'Route',
    'driver.ticketFee': 'Ticket Fee',
    'driver.passengerCount': 'Passengers',

    // Merchant
    'merchant.title': 'Merchant Dashboard',
    'merchant.business': 'Business Information',
    'merchant.businessName': 'Business Name',
    'merchant.businessCategory': 'Category',
    'merchant.generateQR': 'Generate Payment QR',
    'merchant.qrAmount': 'Payment Amount',

    // Admin
    'admin.title': 'Admin Dashboard',
    'admin.userManagement': 'User Management',
    'admin.systemAnalytics': 'System Analytics',
    'admin.totalUsers': 'Total Users',
    'admin.totalTransactions': 'Total Transactions',
    'admin.totalRevenue': 'Total Revenue',
    'admin.disputes': 'Disputes',

    // App Name
    'app.name': 'Tickets',
    'app.subtitle': 'Digital Wallet & Payment System',
    'app.welcome': 'Welcome to Tickets',
    'app.description': 'Your digital wallet for seamless payments, event tickets, and transportation in Syria.',

    // Onboarding
    'onboard.welcome': 'Welcome to Tickets!',
    'onboard.step1.title': 'Digital Wallet',
    'onboard.step1.desc': 'Securely store and manage your money digitally',
    'onboard.step2.title': 'QR Payments',
    'onboard.step2.desc': 'Pay for transportation and purchases instantly',
    'onboard.step3.title': 'Event Tickets',
    'onboard.step3.desc': 'Buy and manage event tickets digitally',
    'onboard.getStarted': 'Get Started',
    'onboard.skip': 'Skip Tour',
  },
  ar: {
    // Common
    'common.loading': 'جارٍ التحميل...',
    'common.error': 'حدث خطأ',
    'common.success': 'نجح',
    'common.cancel': 'إلغاء',
    'common.confirm': 'تأكيد',
    'common.save': 'حفظ',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.amount': 'المبلغ',
    'common.date': 'التاريخ',
    'common.status': 'الحالة',
    'common.description': 'الوصف',
    'common.balance': 'الرصيد',
    'common.currency': 'ل.س',

    // Auth
    'auth.login': 'تسجيل الدخول',
    'auth.register': 'إنشاء حساب',
    'auth.logout': 'تسجيل الخروج',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.confirmPassword': 'تأكيد كلمة المرور',
    'auth.fullName': 'الاسم الكامل',
    'auth.phoneNumber': 'رقم الهاتف',
    'auth.forgotPassword': 'نسيت كلمة المرور؟',
    'auth.dontHaveAccount': 'ليس لديك حساب؟',
    'auth.alreadyHaveAccount': 'لديك حساب بالفعل؟',
    'auth.signUp': 'إنشاء حساب',
    'auth.signIn': 'تسجيل الدخول',
    'auth.role': 'أنا',
    'auth.passenger': 'راكب',
    'auth.driver': 'سائق',
    'auth.merchant': 'تاجر',
    'auth.eventAdmin': 'منظم فعاليات',

    // Navigation
    'nav.dashboard': 'لوحة التحكم',
    'nav.wallet': 'المحفظة',
    'nav.transactions': 'المعاملات',
    'nav.scanner': 'ماسح QR',
    'nav.events': 'الفعاليات',
    'nav.tickets': 'تذاكري',
    'nav.earnings': 'الأرباح',
    'nav.trips': 'الرحلات',
    'nav.qrcode': 'رمز QR',
    'nav.business': 'العمل',
    'nav.management': 'الإدارة',
    'nav.analytics': 'التحليلات',
    'nav.users': 'المستخدمون',
    'nav.disputes': 'النزاعات',
    'nav.support': 'الدعم',
    'nav.settings': 'الإعدادات',
    'nav.profile': 'الملف الشخصي',

    // Wallet
    'wallet.title': 'المحفظة الرقمية',
    'wallet.balance': 'الرصيد الحالي',
    'wallet.recharge': 'شحن المحفظة',
    'wallet.rechargeAmount': 'مبلغ الشحن',
    'wallet.paymentMethod': 'طريقة الدفع',
    'wallet.mtnCash': 'إم تي إن كاش',
    'wallet.syriatelCash': 'سيرياتيل كاش',
    'wallet.shamCash': 'شام كاش',
    'wallet.fatora': 'فاتورة',
    'wallet.stripe': 'بطاقة ائتمانية',
    'wallet.rechargeSuccess': 'تم شحن المحفظة بنجاح',
    'wallet.insufficientBalance': 'رصيد غير كافٍ',

    // Transactions
    'transactions.title': 'سجل المعاملات',
    'transactions.recent': 'المعاملات الأخيرة',
    'transactions.payment': 'دفع',
    'transactions.recharge': 'شحن',
    'transactions.refund': 'استرداد',
    'transactions.withdrawal': 'سحب',
    'transactions.pending': 'معلق',
    'transactions.completed': 'مكتمل',
    'transactions.failed': 'فاشل',
    'transactions.cancelled': 'ملغى',
    'transactions.to': 'إلى',
    'transactions.from': 'من',

    // QR Scanner
    'scanner.title': 'ماسح رمز QR',
    'scanner.scanToPayDriver': 'امسح رمز السائق للدفع',
    'scanner.scanToPayMerchant': 'امسح رمز التاجر للدفع',
    'scanner.scanning': 'جارٍ المسح...',
    'scanner.paymentSuccess': 'تم الدفع بنجاح',
    'scanner.paymentFailed': 'فشل الدفع',
    'scanner.quantity': 'عدد التذاكر',

    // Events
    'events.title': 'الفعاليات',
    'events.upcoming': 'الفعاليات القادمة',
    'events.myEvents': 'فعالياتي',
    'events.createEvent': 'إنشاء فعالية',
    'events.eventTitle': 'عنوان الفعالية',
    'events.eventDescription': 'وصف الفعالية',
    'events.eventLocation': 'المكان',
    'events.eventDate': 'التاريخ',
    'events.eventPrice': 'سعر التذكرة',
    'events.availableTickets': 'التذاكر المتاحة',
    'events.buyTicket': 'شراء تذكرة',
    'events.ticketPurchased': 'تم شراء التذكرة بنجاح',

    // Driver
    'driver.title': 'لوحة تحكم السائق',
    'driver.earnings': 'الأرباح',
    'driver.todayEarnings': 'أرباح اليوم',
    'driver.weekEarnings': 'أرباح الأسبوع',
    'driver.monthEarnings': 'أرباح الشهر',
    'driver.generateQR': 'إنشاء رمز QR',
    'driver.activeTrip': 'الرحلة النشطة',
    'driver.startTrip': 'بدء الرحلة',
    'driver.endTrip': 'إنهاء الرحلة',
    'driver.route': 'المسار',
    'driver.ticketFee': 'أجرة التذكرة',
    'driver.passengerCount': 'الركاب',

    // Merchant
    'merchant.title': 'لوحة تحكم التاجر',
    'merchant.business': 'معلومات العمل',
    'merchant.businessName': 'اسم العمل',
    'merchant.businessCategory': 'الفئة',
    'merchant.generateQR': 'إنشاء رمز دفع QR',
    'merchant.qrAmount': 'مبلغ الدفع',

    // Admin
    'admin.title': 'لوحة تحكم المدير',
    'admin.userManagement': 'إدارة المستخدمين',
    'admin.systemAnalytics': 'تحليلات النظام',
    'admin.totalUsers': 'إجمالي المستخدمين',
    'admin.totalTransactions': 'إجمالي المعاملات',
    'admin.totalRevenue': 'إجمالي الإيرادات',
    'admin.disputes': 'النزاعات',

    // App Name
    'app.name': 'تذاكر',
    'app.subtitle': 'محفظة رقمية ونظام دفع',
    'app.welcome': 'مرحباً بك في تذاكر',
    'app.description': 'محفظتك الرقمية للمدفوعات السلسة وتذاكر الفعاليات والنقل في سوريا.',

    // Onboarding
    'onboard.welcome': 'مرحباً بك في تذاكر!',
    'onboard.step1.title': 'محفظة رقمية',
    'onboard.step1.desc': 'احفظ وأدر أموالك رقمياً بأمان',
    'onboard.step2.title': 'دفع بـ QR',
    'onboard.step2.desc': 'ادفع للنقل والمشتريات فوراً',
    'onboard.step3.title': 'تذاكر الفعاليات',
    'onboard.step3.desc': 'اشترِ وأدر تذاكر الفعاليات رقمياً',
    'onboard.getStarted': 'ابدأ الآن',
    'onboard.skip': 'تخطي الجولة',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && ['en', 'ar'].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = (key: string, params?: Record<string, string>) => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value)
      })
    }
    
    return translation
  }

  const value = {
    language,
    setLanguage,
    t,
    isRTL: language === 'ar'
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}