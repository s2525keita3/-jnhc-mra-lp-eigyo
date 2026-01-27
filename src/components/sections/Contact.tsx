import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { contactData } from '@/content/contact';

// Web3Forms Access Key - 後で設定してください
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
    privacy: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `【営業LP】新規お問い合わせ: ${formData.companyName}`,
          from_name: formData.name,
          ...formData
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
        setFormData({
          companyName: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          preferredDate: '',
          message: '',
          privacy: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <section id="contact" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border border-slate-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
              送信完了
            </h3>
            <p className="text-text-secondary whitespace-pre-line">
              {contactData.successMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-baum-500 font-bold tracking-wider text-sm uppercase bg-baum-100 px-4 py-2 rounded-full mb-4">
            <Send className="w-4 h-4" />
            Contact
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-2">
            {contactData.title}
          </h2>
          <p className="text-lg font-medium text-baum-600 mb-2">
            {contactData.subtitle}
          </p>
          <p className="text-text-tertiary text-sm">
            {contactData.description}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-slate-200 animate-fade-up">
          {formStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-700 text-sm whitespace-pre-line">{contactData.errorMessage}</p>
            </div>
          )}

          <div className="space-y-5">
            {/* 貴社名 */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.companyName}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all"
              />
            </div>

            {/* ご担当者様名 */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.name}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all"
              />
            </div>

            {/* ご担当者様の役職 */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.position}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.email}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.phone}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all"
              />
            </div>

            {/* ご相談可能な日時 */}
            <div>
              <label className="block text-text-primary font-medium mb-1">
                {contactData.fields.preferredDate}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <p className="text-text-tertiary text-xs mb-2">
                {contactData.fields.preferredDateExample}
              </p>
              <input
                type="text"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all"
              />
            </div>

            {/* その他 */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all resize-none"
              />
            </div>

            {/* プライバシーポリシー */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                {contactData.fields.privacy}
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                name="privacy"
                value={formData.privacy}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-baum-500 focus:border-baum-500 outline-none transition-all bg-white"
              >
                <option value="">選択してください</option>
                {contactData.privacyOptions.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-gradient-to-r from-baum-500 to-baum-600 text-white font-bold py-4 px-6 rounded-xl hover:from-baum-600 hover:to-baum-700 transition-all duration-300 shadow-lg shadow-baum-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  送信中...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {contactData.submitButton}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
