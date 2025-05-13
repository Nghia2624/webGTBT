import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Thay thế bằng Service ID của bạn
        'YOUR_TEMPLATE_ID', // Thay thế bằng Template ID của bạn
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Nghĩa', // Tên người nhận
        },
        'YOUR_PUBLIC_KEY' // Thay thế bằng Public Key của bạn
      );

      toast.success('Tin nhắn đã được gửi thành công!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      <section className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Liên Hệ</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-accent" size={24} />
                    <div>
                      <h3 className="text-gray-400">Số điện thoại</h3>
                      <p className="text-white">{personalInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-accent" size={24} />
                    <div>
                      <h3 className="text-gray-400">Email</h3>
                      <p className="text-white">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-accent" size={24} />
                    <div>
                      <h3 className="text-gray-400">Địa chỉ</h3>
                      <p className="text-white">Trường Đại học Đại Nam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-400 mb-2">
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-400 mb-2">
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-primary border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-accent text-white py-3 rounded-lg font-medium transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/90'
                    }`}
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 