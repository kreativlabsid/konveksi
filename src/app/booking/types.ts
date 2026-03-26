export interface BookingFormData {
  // Step 1: Client Info
  fullName: string;
  brandName: string;
  email: string;
  whatsapp: string;
  shippingAddress: string;

  // Step 2: Product Details
  garmentType: string;
  fabricPreference: string;
  primaryColor: string;

  // Step 3: Design & Customization
  decorationTypes: string[];
  decorationPoints: string;
  designFile: File | null;
  designFileName: string;
  referenceLink: string;

  // Step 4: Quantity & Sizing
  moqRange: string;
  sizeBreakdown: {
    pria: { S: number; M: number; L: number; XL: number; XXL: number };
    wanita: { S: number; M: number; L: number; XL: number; XXL: number };
  };

  // Step 5: Timeline & Budget
  budgetPerPcs: string;
  deadline: string;
  additionalNotes: string;
}

export const initialFormData: BookingFormData = {
  fullName: "",
  brandName: "",
  email: "",
  whatsapp: "",
  shippingAddress: "",

  garmentType: "",
  fabricPreference: "",
  primaryColor: "",

  decorationTypes: [],
  decorationPoints: "",
  designFile: null,
  designFileName: "",
  referenceLink: "",

  moqRange: "",
  sizeBreakdown: {
    pria: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
    wanita: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
  },

  budgetPerPcs: "",
  deadline: "",
  additionalNotes: "",
};

export const STEPS = [
  { id: 1, title: "Informasi Klien", shortTitle: "Klien" },
  { id: 2, title: "Detail Produk", shortTitle: "Produk" },
  { id: 3, title: "Desain & Custom", shortTitle: "Desain" },
  { id: 4, title: "Kuantitas & Ukuran", shortTitle: "Ukuran" },
  { id: 5, title: "Timeline & Budget", shortTitle: "Timeline" },
  { id: 6, title: "Review & Submit", shortTitle: "Review" },
] as const;
