import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  RefreshCw,
  AlertCircle,
  Trash2,
} from 'lucide-react';
import { Container, Section } from '@/components/layout/Container';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { siteConfig, generalFAQs } from '@/data/site';
import {
  saveDemoInquiry,
  formatInquiryForClipboard,
  createWhatsAppDraftUrl,
  clearDemoInquiries,
  getDemoInquiries,
  DemoInquiry,
} from '@/utils/inquiries';
import { useSeo } from '@/utils/seo';

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(80, { message: 'Name must be under 80 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(100, { message: 'Email must be under 100 characters' }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(val), {
      message: 'Please enter a valid phone number or leave blank',
    }),
  serviceType: z.string().min(1, { message: 'Please select a primary design service' }),
  projectType: z.string().min(1, { message: 'Please select a project typology' }),
  location: z
    .string()
    .trim()
    .min(2, { message: 'Please provide the project location or city' })
    .max(80, { message: 'Location must be under 80 characters' }),
  estimatedTimeline: z.string().min(1, { message: 'Please select an estimated timeframe' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Please provide a brief description of your space (at least 10 characters)' })
    .max(1500, { message: 'Message cannot exceed 1500 characters' }),
  isConsultation: z.boolean().default(false),
  consultationPreferredChannel: z.string().optional(),
  consultationPreferredTime: z.string().optional(),
  consultationDate: z.string().optional(),
  demoConsent: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge that this is a private demo preview',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  useSeo({
    title: 'Begin a Conversation — Contact & Consultation',
    description: 'Connect with Arun Saini Architects for residential commissions and interior transformations across Gurugram and Pan-India.',
    image: '/images/projects/01-dining-open-plan.jpg',
  });

  const [searchParams] = useSearchParams();
  const [submittedInquiry, setSubmittedInquiry] = useState<DemoInquiry | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [showConsultationFields, setShowConsultationFields] = useState(false);
  const [demoSavedCount, setDemoSavedCount] = useState<number>(0);

  const prefillService = searchParams.get('service') || '';
  const prefillProject = searchParams.get('project') || '';
  const prefillSector = searchParams.get('sector') || '';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      serviceType: prefillService || 'architecture',
      projectType: prefillSector || (prefillProject ? 'residential' : 'residential'),
      location: 'Gurugram / Delhi NCR',
      estimatedTimeline: 'within-3-months',
      message: prefillProject ? `I would like to discuss a project inspired by the "${prefillProject}" design study.` : '',
      isConsultation: false,
      consultationPreferredChannel: 'video-call',
      consultationPreferredTime: 'weekday-morning',
      demoConsent: false,
    },
  });

  useEffect(() => {
    setDemoSavedCount(getDemoInquiries().length);
  }, [submittedInquiry]);

  const onSubmit = (data: ContactFormData) => {
    const result = saveDemoInquiry({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || '',
      serviceType: data.serviceType,
      projectType: data.projectType,
      location: data.location,
      estimatedTimeline: data.estimatedTimeline,
      message: data.message,
      consultationPreferredChannel: data.isConsultation ? data.consultationPreferredChannel : undefined,
      consultationPreferredTime: data.isConsultation ? data.consultationPreferredTime : undefined,
      consultationDate: data.isConsultation ? data.consultationDate : undefined,
      demoConsent: data.demoConsent,
    });

    if (result.success && result.inquiry) {
      setSubmittedInquiry(result.inquiry);
      setDemoSavedCount(getDemoInquiries().length);
    }
  };

  const handleCopyInquiry = () => {
    if (!submittedInquiry) return;
    const text = formatInquiryForClipboard(submittedInquiry);
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback('Inquiry text copied to clipboard!');
      setTimeout(() => setCopyFeedback(null), 3500);
    }).catch(() => {
      setCopyFeedback('Unable to copy automatically. Please select and copy manually.');
    });
  };

  const handleClearDemoRecords = () => {
    if (window.confirm('Clear all local demo inquiry records from this browser?')) {
      clearDemoInquiries();
      setDemoSavedCount(0);
      setSubmittedInquiry(null);
      reset();
    }
  };

  return (
    <div className="w-full pt-28 pb-16">
      {/* 1. Masthead */}
      <section className="py-12 md:py-16 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <div className="max-w-3xl">
            <span className="text-eyebrow text-muted-brass block mb-3">Initiate Dialogue</span>
            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-4">
              Begin with a conversation.
            </h1>
            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
              Every architectural commission begins with listening. Share details about your site, residence, or commercial scheme to start our collaborative discovery.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Main Two-Column Interactive Area */}
      <Section spacing="generous" bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column: 7 cols */}
            <div className="lg:col-span-7">
              {submittedInquiry ? (
                <div
                  role="region"
                  aria-live="polite"
                  className="bg-warm-ivory p-8 sm:p-10 rounded border border-border-custom/80 shadow-sm space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-muted-brass flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-ui text-xs tracking-widest uppercase text-muted-brass font-semibold block">
                        Record Saved
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl text-ink font-normal mt-1">
                        Demo enquiry saved on this device.
                      </h2>
                      <p className="font-ui text-sm text-slate-custom mt-2 leading-relaxed">
                        It has <strong>NOT</strong> been sent to the studio, as this is a private development preview. Your entries are safely stored in your browser's local memory.
                      </p>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 bg-paper rounded border border-border-custom/60 space-y-2 font-ui text-xs sm:text-sm">
                    <div className="flex justify-between py-1 border-b border-border-custom/30">
                      <span className="text-slate-custom">Reference Number:</span>
                      <span className="font-mono font-medium text-ink">{submittedInquiry.referenceNumber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-custom/30">
                      <span className="text-slate-custom">Name:</span>
                      <span className="font-medium text-ink">{submittedInquiry.fullName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border-custom/30">
                      <span className="text-slate-custom">Service:</span>
                      <span className="capitalize text-ink">{submittedInquiry.serviceType}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-custom">Location:</span>
                      <span className="text-ink">{submittedInquiry.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={handleCopyInquiry}
                      className="w-full sm:w-auto px-5 py-3 bg-ink text-warm-ivory font-ui text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-ink-light transition-colors min-h-[44px] cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-muted-brass" />
                      <span>Copy My Enquiry</span>
                    </button>

                    <a
                      href={createWhatsAppDraftUrl(submittedInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3 bg-muted-brass text-white font-ui text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-brass-dark transition-colors min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Prepare WhatsApp Draft</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmittedInquiry(null);
                        reset();
                      }}
                      className="w-full sm:w-auto px-5 py-3 bg-transparent text-ink border border-ink/30 font-ui text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:bg-ink/5 transition-colors min-h-[44px] cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>

                  {copyFeedback && (
                    <div className="p-3 bg-soft-stone/70 rounded text-xs font-ui text-ink flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-muted-brass" />
                      <span>{copyFeedback}</span>
                    </div>
                  )}
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6 bg-warm-ivory p-6 sm:p-10 rounded border border-border-custom/80"
                >
                  <div className="border-b border-border-custom/40 pb-4 mb-2">
                    <h2 className="font-display text-2xl text-ink font-normal">
                      Project Inquiry Form
                    </h2>
                    <p className="font-ui text-xs text-slate-custom mt-1">
                      Fill out the fields below. Pre-filled parameters from portfolio links are automatically applied.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                      Full Name <span className="text-muted-brass">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Priya Sharma"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass focus:ring-1 focus:ring-muted-brass"
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600 font-ui flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                        Email Address <span className="text-muted-brass">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="priya@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass focus:ring-1 focus:ring-muted-brass"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600 font-ui flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                        Phone Number <span className="text-slate-custom text-[11px] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass focus:ring-1 focus:ring-muted-brass"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-600 font-ui flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                        Primary Discipline <span className="text-muted-brass">*</span>
                      </label>
                      <select
                        id="serviceType"
                        className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass"
                        {...register('serviceType')}
                      >
                        <option value="architecture">Architecture Concept & Planning</option>
                        <option value="interior-design">Interior Design & Millwork</option>
                        <option value="space-planning">Space Planning & Layout</option>
                        <option value="design-consultation">Design Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                        Project Typology <span className="text-muted-brass">*</span>
                      </label>
                      <select
                        id="projectType"
                        className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass"
                        {...register('projectType')}
                      >
                        <option value="residential">Residential (Villa / Penthouse / Apartment)</option>
                        <option value="commercial">Commercial / Executive Office</option>
                        <option value="hospitality">Hospitality / Boutique Venue</option>
                        <option value="healthcare">Healthcare / Wellness</option>
                        <option value="institutional">Institutional / Civic</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                        Site Location / City <span className="text-muted-brass">*</span>
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="e.g. Golf Course Ext, Gurugram"
                        className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass"
                        {...register('location')}
                      />
                      {errors.location && (
                        <p className="mt-1.5 text-xs text-red-600 font-ui">{errors.location.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="estimatedTimeline" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                        Estimated Timeline <span className="text-muted-brass">*</span>
                      </label>
                      <select
                        id="estimatedTimeline"
                        className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass"
                        {...register('estimatedTimeline')}
                      >
                        <option value="immediate">Immediate (Ready to begin)</option>
                        <option value="within-3-months">Within 1 to 3 months</option>
                        <option value="3-6-months">3 to 6 months</option>
                        <option value="planning-phase">Future planning / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-paper rounded border border-border-custom/50">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showConsultationFields}
                        onChange={(e) => {
                          setShowConsultationFields(e.target.checked);
                        }}
                        className="w-4 h-4 text-muted-brass rounded focus:ring-muted-brass"
                      />
                      <span className="font-ui text-xs sm:text-sm text-ink font-medium">
                        Request a dedicated design consultation session
                      </span>
                    </label>

                    {showConsultationFields && (
                      <div className="mt-4 pt-4 border-t border-border-custom/40 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
                        <div>
                          <label htmlFor="consultationPreferredChannel" className="block font-ui text-xs text-slate-custom mb-1">
                            Preferred Channel
                          </label>
                          <select
                            id="consultationPreferredChannel"
                            className="w-full px-3 py-2 bg-warm-ivory border border-border-custom rounded font-ui text-xs"
                            {...register('consultationPreferredChannel')}
                          >
                            <option value="video-call">Virtual Video Conference</option>
                            <option value="in-person">In-Person at Gurugram Studio</option>
                            <option value="phone">Telephone Call</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="consultationPreferredTime" className="block font-ui text-xs text-slate-custom mb-1">
                            Preferred Window
                          </label>
                          <select
                            id="consultationPreferredTime"
                            className="w-full px-3 py-2 bg-warm-ivory border border-border-custom rounded font-ui text-xs"
                            {...register('consultationPreferredTime')}
                          >
                            <option value="weekday-morning">Weekday Morning (10am - 1pm)</option>
                            <option value="weekday-afternoon">Weekday Afternoon (2pm - 5pm)</option>
                            <option value="saturday">Saturday Advisory Slot</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-ui text-xs uppercase tracking-wider text-ink font-medium mb-1.5">
                      Project Vision & Space Details <span className="text-muted-brass">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your property, key requirements, material interests, or any questions for our design team..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className="w-full px-4 py-3 bg-paper border border-border-custom rounded font-ui text-sm text-ink focus:outline-none focus:border-muted-brass focus:ring-1 focus:ring-muted-brass"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-600 font-ui flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        aria-invalid={!!errors.demoConsent}
                        className="w-4 h-4 text-muted-brass rounded mt-0.5 focus:ring-muted-brass"
                        {...register('demoConsent')}
                      />
                      <span className="font-ui text-xs text-slate-custom leading-relaxed">
                        I understand that this is a private development preview. This inquiry is saved locally on this browser for demonstration purposes and is not transmitted to a live email server.
                      </span>
                    </label>
                    {errors.demoConsent && (
                      <p className="mt-1.5 text-xs text-red-600 font-ui flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.demoConsent.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-ink text-warm-ivory font-ui text-xs uppercase tracking-widest font-medium rounded hover:bg-ink-light transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-muted-brass disabled:opacity-60"
                    >
                      <span>Record Demo Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Studio Information & FAQs Column: 5 cols */}
            <div className="lg:col-span-5 space-y-10">
              <div className="bg-warm-ivory p-8 rounded border border-border-custom/60 space-y-6">
                <div>
                  <span className="text-eyebrow text-muted-brass block mb-2">Practice Base</span>
                  <h3 className="font-display text-2xl text-ink font-normal">
                    {siteConfig.cityLocation}
                  </h3>
                  <p className="font-ui text-xs text-slate-custom mt-2 leading-relaxed">
                    Primary studio location based in Gurugram, Haryana. Street-level address and map coordinates reserved pending verified client disclosure.
                  </p>
                </div>

                <div className="pt-4 border-t border-border-custom/40 space-y-4 font-ui text-sm">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-custom block mb-1">
                      Professional Reach
                    </span>
                    <span className="text-ink font-medium">{siteConfig.panIndiaClaim}</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-custom block mb-1">
                      Sourced Studio Social
                    </span>
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-brass hover:underline"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-eyebrow text-muted-brass block mb-3">Inquiry Guide</span>
                <h3 className="font-display text-2xl text-ink font-normal mb-4">Common Questions</h3>
                <FaqAccordion items={generalFAQs.slice(0, 4)} />
              </div>

              <div className="p-4 bg-soft-stone/40 rounded border border-border-custom/50 font-ui text-xs text-slate-custom space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">Demo Storage Diagnostics</span>
                  <span className="px-2 py-0.5 bg-paper rounded font-mono text-[11px]">
                    {demoSavedCount} records
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Inquiries in this demo are namespaced strictly to your browser's localStorage. No external CRM or tracking pixels are connected.
                </p>
                {demoSavedCount > 0 && (
                  <div className="pt-2">
                    <button
                      onClick={handleClearDemoRecords}
                      className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-900 font-medium cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Reset Demo Inquiries</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
