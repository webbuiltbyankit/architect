export interface DemoInquiry {
  id: string;
  referenceNumber: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone?: string;
  serviceType: string;
  projectType: string;
  location: string;
  estimatedTimeline: string;
  message: string;
  consultationPreferredChannel?: string;
  consultationPreferredTime?: string;
  consultationDate?: string;
  demoConsent: boolean;
}

const STORAGE_KEY = "arun_saini_demo_inquiries_v1";

export function generateReference(): string {
  const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
  const year = new Date().getFullYear();
  return `ASA-${year}-${randomHex}`;
}

export function saveDemoInquiry(data: Omit<DemoInquiry, 'id' | 'referenceNumber' | 'createdAt'>): { success: boolean; inquiry?: DemoInquiry; error?: string } {
  try {
    const referenceNumber = generateReference();
    const newInquiry: DemoInquiry = {
      ...data,
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      referenceNumber,
      createdAt: new Date().toISOString(),
    };

    const existingJson = localStorage.getItem(STORAGE_KEY);
    const inquiries: DemoInquiry[] = existingJson ? JSON.parse(existingJson) : [];
    inquiries.unshift(newInquiry);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
    return { success: true, inquiry: newInquiry };
  } catch (err: unknown) {
    console.error("Local storage error while saving demo inquiry:", err);
    return {
      success: false,
      error: "Browser local storage is full, disabled, or in private browsing restriction mode. You can still copy your inquiry text below.",
    };
  }
}

export function getDemoInquiries(): DemoInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Could not read demo inquiries from localStorage:", err);
    return [];
  }
}

export function clearDemoInquiries(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (err) {
    console.error("Could not clear demo inquiries:", err);
    return false;
  }
}

export function formatInquiryForClipboard(inquiry: DemoInquiry): string {
  return `--- ARUN SAINI ARCHITECTS (DEMO INQUIRY) ---
Reference: ${inquiry.referenceNumber}
Date: ${new Date(inquiry.createdAt).toLocaleString()}
Client Name: ${inquiry.fullName}
Email: ${inquiry.email}
${inquiry.phone ? `Phone: ${inquiry.phone}\n` : ''}Service Requested: ${inquiry.serviceType}
Project Typology: ${inquiry.projectType}
Location: ${inquiry.location}
Estimated Timeline: ${inquiry.estimatedTimeline}
${inquiry.consultationDate ? `Preferred Consultation Date: ${inquiry.consultationDate}\n` : ''}${inquiry.consultationPreferredTime ? `Preferred Window: ${inquiry.consultationPreferredTime}\n` : ''}
Message:
${inquiry.message}
---------------------------------------------
* Notice: Demo submission record saved locally in browser.`;
}

export function createWhatsAppDraftUrl(inquiry: {
  fullName: string;
  serviceType: string;
  projectType: string;
  location: string;
  message: string;
}): string {
  const text = `Hello Arun Saini Architects team,\n\nI am contacting you regarding a potential design project.\n\n• Name: ${inquiry.fullName}\n• Service: ${inquiry.serviceType}\n• Project Type: ${inquiry.projectType}\n• Location: ${inquiry.location}\n\nProject Overview:\n"${inquiry.message}"\n\n(Draft inquiry prepared via digital portfolio preview)`;
  
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
