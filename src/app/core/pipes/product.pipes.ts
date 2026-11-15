import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "currency", standalone: true })
export class CurrencyPipe implements PipeTransform {
  transform(
    value: number,
    code = "USD",
    display: "symbol" | "code" = "symbol",
    digits = "1.2-2",
  ): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      currencyDisplay: display === "symbol" ? "symbol" : "code",
      minimumFractionDigits: Number(digits.split("-")[0].split(".")[1] || 0),
      maximumFractionDigits: Number(digits.split("-")[1] || 2),
    }).format(value);
  }
}

@Pipe({ name: "productImage", standalone: true })
export class ProductImagePipe implements PipeTransform {
  transform(type: string): string {
    const common = 'viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg"';
    const art: Record<string, string> = {
      headphones: `<svg ${common}><path d="M68 90V64a52 52 0 0 1 104 0v26" fill="none" stroke="#171724" stroke-width="15" stroke-linecap="round"/><rect x="45" y="78" width="43" height="59" rx="20" fill="#262632"/><rect x="152" y="78" width="43" height="59" rx="20" fill="#262632"/><circle cx="174" cy="108" r="16" fill="#303044" stroke="#8d5cff" stroke-width="3"/><path d="M168 108l10-5-10 12z" fill="#ddd6ff"/></svg>`,
      watch: `<svg ${common}><rect x="91" y="12" width="58" height="136" rx="20" fill="#252631"/><rect x="77" y="33" width="86" height="94" rx="22" fill="#12131a" stroke="#7d8195" stroke-width="3"/><circle cx="120" cy="77" r="28" fill="#1c2230"/><text x="103" y="73" fill="white" font-size="16" font-family="sans-serif">10:09</text><circle cx="108" cy="98" r="5" fill="#f34868"/><circle cx="126" cy="98" r="5" fill="#5df0bd"/></svg>`,
      laptop: `<svg ${common}><path d="M52 36h136v85H52z" fill="#151525" stroke="#9c8aff" stroke-width="3"/><path d="M57 42h126v70H57z" fill="#3b2b76"/><path d="M32 129h176l-17 12H49z" fill="#272733"/><path d="M72 68q44-29 88 0-44 26-88 0" fill="#693fff" opacity=".7"/></svg>`,
      speaker: `<svg ${common}><ellipse cx="120" cy="122" rx="62" ry="17" fill="#151520"/><path d="M68 51q52-24 104 0v71q-52 25-104 0z" fill="#30303c"/><ellipse cx="120" cy="54" rx="52" ry="16" fill="#242430"/><path d="M77 57h86" stroke="#8c5cff" stroke-width="4"/><path d="M90 70v48M103 68v52M117 67v53M132 68v52M146 70v48" stroke="#555563" stroke-width="4"/></svg>`,
      camera: `<svg ${common}><ellipse cx="120" cy="126" rx="63" ry="13" fill="#bbbcc2"/><rect x="74" y="51" width="92" height="72" rx="14" fill="#f4f4f5" stroke="#c8c9d1" stroke-width="4"/><circle cx="120" cy="83" r="25" fill="#20212b"/><circle cx="120" cy="83" r="13" fill="#5e6677"/><path d="M98 51l8-12h28l8 12" fill="#dddde3"/></svg>`,
      controller: `<svg ${common}><path d="M55 76q10-34 30-26l24 13q11 5 22 0l24-13q20-8 30 26l6 35q-8 17-23 4l-24-21H96l-24 21q-15 13-23-4z" fill="#e8e9ef" stroke="#b6b8c5" stroke-width="3"/><circle cx="97" cy="85" r="13" fill="#262735"/><circle cx="144" cy="85" r="13" fill="#262735"/><path d="M75 80h17M84 71v18" stroke="#7f56e8" stroke-width="4"/></svg>`,
      bulb: `<svg ${common}><path d="M84 72a36 36 0 1 1 72 0c0 16-9 22-15 32H99c-6-10-15-16-15-32z" fill="url(#g)"/><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#72e8ff"/><stop offset=".5" stop-color="#cf4dff"/><stop offset="1" stop-color="#ffe15a"/></linearGradient></defs><path d="M103 106h34v19h-34zM99 125h42v8h-42z" fill="#aeb0b8"/></svg>`,
      actioncam: `<svg ${common}><rect x="52" y="52" width="136" height="78" rx="14" fill="#22232a"/><rect x="66" y="65" width="64" height="48" fill="#6f91af"/><circle cx="158" cy="91" r="25" fill="#111219" stroke="#555861" stroke-width="6"/><circle cx="158" cy="91" r="12" fill="#536070"/><text x="75" y="78" font-size="8" fill="white">4K</text></svg>`,
    };
    return art[type] || art["headphones"];
  }
}
