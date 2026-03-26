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
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="glass rounded-2xl p-4 md:p-5 card-shadow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-on-surface-variant">
            Langkah {currentStep} dari {STEPS.length}
          </span>
          <span className="text-xs font-medium text-secondary">
            {Math.round((currentStep / STEPS.length) * 100)}%
          </span>
        </div>

        {/* Progress track */}
        <div className="relative h-1.5 bg-outline-variant/40 rounded-full overflow-hidden mb-5">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-secondary/80 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
          />
        </div>

        {/* Step indicators */}
        <div className="flex items-center justify-between">
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
                className={`flex flex-col items-center gap-1.5 transition-all duration-300 group ${
                  isCompleted || isActive
                    ? "cursor-pointer"
                    : "cursor-default opacity-40"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-white shadow-lg shadow-secondary/25 scale-110"
                      : isCompleted
                        ? "bg-secondary/15 text-secondary"
                        : "bg-surface-variant text-on-surface-variant"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="size-4" />
                  ) : (
                    <Icon className="size-4" />
                  )}
                </div>
                <span
                  className={`text-[10px] md:text-xs font-medium transition-colors hidden sm:block ${
                    isActive
                      ? "text-secondary"
                      : isCompleted
                        ? "text-primary/70"
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

      {/* Step Content */}
      <div className="glass rounded-2xl p-5 md:p-7 card-shadow">
        <div className="mb-6">
          <h2 className="font-heading text-lg md:text-xl font-semibold text-primary">
            {STEPS[currentStep - 1].title}
          </h2>
          <div className="mt-1.5 h-0.5 w-10 rounded-full bg-secondary" />
        </div>

        <div className="min-h-[300px]">{renderStep()}</div>
      </div>

      {/* Validation Error Summary */}
      {showErrors && Object.keys(errors).length > 0 && (
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <AlertCircle className="size-4 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Ada {Object.keys(errors).length} field yang perlu dilengkapi</p>
            <p className="text-xs mt-0.5 text-red-600/70">Lengkapi semua field bertanda (*) sebelum melanjutkan.</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      {!isSubmitted && (
        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={goBack}
            disabled={currentStep === 1}
            className="gap-1.5 px-5 h-11 rounded-xl"
          >
            <ChevronLeft className="size-4" />
            Kembali
          </Button>

          {currentStep < 6 ? (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={goNext}
              className="gap-1.5 px-6 h-11 rounded-xl text-white font-semibold shadow-lg shadow-secondary/25 hover:shadow-secondary/35 hover:scale-[1.02] transition-all"
            >
              Lanjutkan
              <ChevronRight className="size-4" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={handleSubmit}
              className="gap-1.5 px-6 h-11 rounded-xl text-white font-semibold shadow-lg shadow-secondary/25 hover:shadow-secondary/35 hover:scale-[1.02] transition-all"
            >
              <Check className="size-4" />
              Kirim Pesanan
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
