"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              alt="Julian Flieller"
              className="w-32 h-32 rounded-full"
              src="/headshot.png"
              width={128}
              height={128}
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-slate-900 font-bold text-3xl sm:text-4xl tracking-tight">
                Julian Flieller
              </h1>
              <p className="text-slate-600 text-lg font-medium">AI Engineer</p>
            </div>

            <div className="text-slate-700 text-lg leading-relaxed max-w-3xl">
              <p>
                I develop ai agents for battery teams{" "}
                <a
                  href="https://ohm.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Ohm
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
