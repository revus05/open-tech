import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

const logoBase64 = (() => {
  try {
    const logoPath = path.join(process.cwd(), "public", "logo.png");
    return fs.readFileSync(logoPath).toString("base64");
  } catch {
    return "";
  }
})();

function smtpHost(email: string): {
  host: string;
  port: number;
  secure: boolean;
} {
  const domain = (email.split("@")[1] ?? "").toLowerCase();

  if (domain.includes("gmail"))
    return { host: "smtp.gmail.com", port: 465, secure: true };
  if (domain.includes("yandex"))
    return { host: "smtp.yandex.ru", port: 465, secure: true };
  if (/mail\.ru|list\.ru|inbox\.ru|bk\.ru/.test(domain))
    return { host: "smtp.mail.ru", port: 465, secure: true };
  if (domain.includes("yahoo"))
    return { host: "smtp.mail.yahoo.com", port: 465, secure: true };
  if (/outlook|hotmail|live/.test(domain))
    return { host: "smtp.office365.com", port: 587, secure: false };

  return { host: `smtp.${domain}`, port: 465, secure: true };
}

const fromEmail = process.env.MAIL_FROM ?? "";
const { host, port, secure } = smtpHost(fromEmail);

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user: fromEmail,
    pass: process.env.MAIL_PASS,
  },
});

function emailHtml(name: string, phone: string, message: string): string {
  const now = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Minsk",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e0e0e0;">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;padding:24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:28px;font-weight:900;color:#d50037;letter-spacing:-1px;">ОТ</span>
                    <span style="font-size:13px;font-weight:600;color:#ffffff;margin-left:10px;vertical-align:middle;">Открытые технологии</span>
                  </td>
                  <td align="right">
                    <span style="font-size:11px;color:#666666;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;">Новая заявка</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Red accent line -->
          <tr>
            <td style="height:3px;background:#d50037;"></td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 32px 8px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#d50037;letter-spacing:0.15em;text-transform:uppercase;">Заявка с сайта</p>
              <h1 style="margin:0;font-size:22px;font-weight:900;color:#0a0a0a;line-height:1.2;">${name}</h1>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:16px 32px 0;">
              <hr style="border:none;border-top:1px solid #e8e8e8;margin:0;" />
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#999999;letter-spacing:0.12em;text-transform:uppercase;">Телефон</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#0a0a0a;">
                      <a href="tel:${phone.replace(/\D/g, "")}" style="color:#d50037;text-decoration:none;">${phone}</a>
                    </p>
                  </td>
                </tr>

                ${
                  message
                    ? `
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#999999;letter-spacing:0.12em;text-transform:uppercase;">Сообщение</p>
                    <p style="margin:0;font-size:14px;color:#333333;line-height:1.6;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>`
                    : ""
                }

              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <hr style="border:none;border-top:1px solid #e8e8e8;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background:#f8f8f8;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;color:#999999;">Заявка получена: ${now} (Минск)</p>
                    <p style="margin:4px 0 0;font-size:11px;color:#999999;">ot.by — системная интеграция и IT-решения с 1994 года</p>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:#d50037;color:#ffffff;font-size:10px;font-weight:700;padding:4px 10px;letter-spacing:0.08em;text-transform:uppercase;">ot.by</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return Response.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 },
      );
    }

    await transporter.sendMail({
      from: `"Сайт ot.by" <${fromEmail}>`,
      to: process.env.MAIL_TO ?? fromEmail,
      subject: `Заявка с сайта: ${name}`,
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message || "—"}`,
      html: emailHtml(name, phone, message),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Ошибка отправки" }, { status: 500 });
  }
}
