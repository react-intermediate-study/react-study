import { type ReactNode } from "react";

interface ToastRootProps {
    children: ReactNode;
    variant?: "default" | "success" | "error" | "warning";
}

interface ToastTitleProps {
    children: ReactNode;
}

interface ToastDescriptionProps {
    children: ReactNode;
}

interface ToastHeaderProps {
    children: ReactNode;
}

interface ToastFooterProps {
    children: ReactNode;
}

const variantClasses: Record<NonNullable<ToastRootProps["variant"]>, string> = {
    default: "bg-slate-800 border-slate-700",
    success: "bg-emerald-700 border-emerald-500",
    error: "bg-red-700 border-red-500",
    warning: "bg-amber-700 border-amber-500",
};

const Toast = ({ children, variant = "default" }: ToastRootProps) => {
    return (
        <div className={`flex w-full max-w-md flex-col gap-3 rounded-lg border px-4 py-3 text-white shadow-lg ${variantClasses[variant]}`}>
            {children}
        </div>
    );
};

const ToastHeader = ({ children }: ToastHeaderProps) => {
    return (
        <div className="flex w-full items-center justify-between gap-2">
            {children}
        </div>
    );
};

const ToastTitle = ({ children }: ToastTitleProps) => {
    return <h3 className="text-base font-semibold leading-tight">{children}</h3>;
};

const ToastDescription = ({ children }: ToastDescriptionProps) => {
    return <p className="text-sm text-slate-100/80">{children}</p>;
};

const ToastFooter = ({ children }: ToastFooterProps) => {
    return (
        <div className="mt-1 flex w-full items-center justify-end gap-2">
            {children}
        </div>
    );
};

export const ToastMessage = Object.assign(Toast, {
    Header: ToastHeader,
    Title: ToastTitle,
    Description: ToastDescription,
    Footer: ToastFooter,
});

