"use client";

import { useState } from "react";
import {
  User,
  Package,
  Palette,
  Ruler,
  Calendar,
  ClipboardCheck,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingFormData, initialFormData, STEPS } from "./types";
import StepClientInfo from "./steps/StepClientInfo";
import StepProductDetails from "./steps/StepProductDetails";
import StepDesignCustomization from "./steps/StepDesignCustomization";
import StepQuantitySizing from "./steps/StepQuantitySizing";
import StepTimelineBudget from "./steps/StepTimelineBudget";
import FormSummary from "./steps/FormSummary";

const STEP_ICONS = [User, Package, Palette, Ruler, Calendar, ClipboardCheck];

type ValidationErrors = Record<string, string>;

function validateStep(step: number, formData: BookingFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (step === 1) {
    if (!formData.fullName.trim()) errors.fullName = "Nama lengkap wajib diisi.";
    if (!formData.brandName.trim()) errors.brandName = "Nama brand wajib diisi.";
    if (!formData.email.trim()) {
      errors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format email tidak valid.";
    }
    if (!formData.whatsapp.trim()) {
      errors.whatsapp = "No. WhatsApp wajib diisi.";
    } else if (!/^[\d\s+\-()]{8,}$/.test(formData.whatsapp)) {
      errors.whatsapp = "Format nomor telepon tidak valid.";
    }
    if (!formData.shippingAddress.trim()) errors.shippingAddress = "Alamat pengiriman wajib diisi.";
  }

  if (step === 2) {
    if (!formData.garmentType) errors.garmentType = "Pilih jenis pakaian.";
    if (!formData.fabricPreference) errors.fabricPreference = "Pilih preferensi bahan kain.";
    if (!formData.primaryColor.trim()) errors.primaryColor = "Warna utama wajib diisi.";
  }

  if (step === 3) {
    if (formData.decorationTypes.length === 0) errors.decorationTypes = "Pilih minimal satu jenis dekorasi.";
    if (!formData.decorationPoints) errors.decorationPoints = "Pilih jumlah titik dekorasi.";
    if (formData.referenceLink && !/^https?:\/\/.+/.test(formData.referenceLink)) {
      errors.referenceLink = "Link harus dimulai dengan http:// atau https://";
    }
  }

  if (step === 4) {
    if (!formData.moqRange) errors.moqRange = "Pilih estimasi jumlah produksi.";
    const grandTotal =
      Object.values(formData.sizeBreakdown.pria).reduce((s, v) => s + v, 0) +
      Object.values(formData.sizeBreakdown.wanita).reduce((s, v) => s + v, 0);
    if (grandTotal === 0) errors.sizeBreakdown = "Isi minimal satu ukuran di tabel size breakdown.";
  }

  if (step === 5) {
    if (!formData.deadline) errors.deadline = "Tentukan target deadline.";
    if (formData.budgetPerPcs && isNaN(Number(formData.budgetPerPcs.replace(/\./g, "")))) {
      errors.budgetPerPcs = "Format budget tidak valid.";
    }
  }

  return errors;
}

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [showErrors, setShowErrors] = useState(false);

  const updateFormData = (updates: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    // Clear specific error when field is updated
    if (showErrors) {
      const updatedKeys = Object.keys(updates);
      setErrors((prev) => {
        const next = { ...prev };
        updatedKeys.forEach((key) => delete next[key]);
        return next;
      });
    }
  };

  const goNext = () => {
    const validationErrors = validateStep(currentStep, formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowErrors(true);
      return;
    }
    setErrors({});
    setShowErrors(false);
    if (currentStep < 6) setCurrentStep((s) => s + 1);
  };

  const goBack = () => {
    setErrors({});
    setShowErrors(false);
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const goToStep = (step: number) => {
    setErrors({});
    setShowErrors(false);
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepClientInfo formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <StepProductDetails formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <StepDesignCustomization formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 4:
        return <StepQuantitySizing formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 5:
        return <StepTimelineBudget formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 6:
        return <FormSummary formData={formData} goToStep={goToStep} isSubmitted={isSubmitted} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-outline-variant/50 overflow-hidden flex flex-col relative w-full mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Progress Header Area */}
      <div className="bg-surface/50 px-5 pt-6 pb-4 sm:px-8 sm:pt-8 sm:pb-5 border-b border-outline-variant/40">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
            Langkah {currentStep} <span className="opacity-40">/</span> {STEPS.length}
          </span>
          <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
            {Math.round((currentStep / STEPS.length) * 100)}%
          </span>
        </div>

        {/* Progress track */}
        <div className="relative h-2 bg-outline-variant/40 rounded-full overflow-hidden mb-6">
          <div
            className="absolute inset-y-0 left-0 bg-secondary rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
          />
        </div>

        {/* Step indicators */}
        <div className="flex justify-between items-center relative px-1 sm:px-2">
          {STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index];
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  if (isCompleted || isActive) goToStep(step.id);
                }}
                className={`flex flex-col items-center gap-2 transition-all duration-300 group outline-none ${
                  isCompleted || isActive
                    ? "cursor-pointer"
                    : "cursor-default opacity-50"
                }`}
                aria-label={`Go to step ${step.id}`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-white shadow-md shadow-secondary/30 ring-4 ring-secondary/10"
                      : isCompleted
                        ? "bg-secondary/15 text-secondary"
                        : "bg-surface-variant/80 text-on-surface-variant/70"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  ) : (
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>
                {/* Hide text on very small screens to avoid clutter */}
                <span
                  className={`text-[9px] sm:text-[10px] font-bold transition-colors hidden sm:block tracking-wide ${
                    isActive
                      ? "text-secondary"
                      : isCompleted
                        ? "text-primary/80"
                        : "text-on-surface-variant/60"
                  }`}
                >
                   {step.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content Area */}
      <div className="p-5 sm:p-8 md:p-10 flex-1 bg-white">
        <div className="mb-8">
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-primary tracking-tight">
            {STEPS[currentStep - 1].title}
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-secondary" />
        </div>

        <div className="min-h-[350px]">
          {renderStep()}
        </div>

        {/* Validation Error Summary */}
        {showErrors && Object.keys(errors).length > 0 && (
          <div className="flex items-start gap-3 p-4 mt-8 rounded-xl bg-red-50/80 border border-red-100/80 text-red-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <div>
              <p className="text-sm font-bold">Ada {Object.keys(errors).length} isian yang belum lengkap</p>
              <p className="text-xs mt-1 text-red-700/80 leading-relaxed">
                Mohon lengkapi semua field bertanda (*) sebelum melanjutkan.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      {!isSubmitted && (
        <div className="bg-surface-variant/20 px-5 py-4 sm:px-8 sm:py-5 border-t border-outline-variant/40 flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={goBack}
            disabled={currentStep === 1}
            className={`gap-2 px-5 h-11 sm:h-12 rounded-xl border-outline-variant/60 hover:bg-surface-variant/60 transition-all font-semibold ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            <ChevronLeft className="w-4 h-4" />
            Kembali
          </Button>

          {currentStep < 6 ? (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={goNext}
              className="gap-2 px-6 sm:px-8 h-11 sm:h-12 rounded-xl text-white font-bold tracking-wide shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
            >
              Lanjutkan
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleSubmit}
              className="gap-2 px-6 sm:px-8 h-11 sm:h-12 rounded-xl text-white font-bold tracking-wide shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Check className="w-4 h-4" />
              Kirim Pesanan
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
