import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";
import { ui, defaultLang } from "../i18n/ui";

type Language = keyof typeof ui;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function getLangFromRequest(context: any): Language {
  const url = context.url;
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

function getTranslation(lang: Language, key: string): string {
  return (
    ui[lang][key as keyof (typeof ui)[Language]] ||
    ui[defaultLang][key as keyof (typeof ui)[Language]] ||
    key
  );
}

export const contact = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      object: z.string().min(1),
      message: z.string().min(1),
      phone: z.string().optional(),
    }),
    handler: async ({ name, email, object, message, phone }, context) => {
      const lang = getLangFromRequest(context);

      // Validate with translated messages
      const validationSchema = z.object({
        name: z
          .string()
          .min(1, getTranslation(lang, "contact.validation.nameRequired")),
        email: z
          .string()
          .email(getTranslation(lang, "contact.validation.emailInvalid")),
        object: z
          .string()
          .min(1, getTranslation(lang, "contact.validation.subjectRequired")),
        message: z
          .string()
          .min(1, getTranslation(lang, "contact.validation.messageRequired")),
        phone: z.string().optional(),
      });

      const validationResult = validationSchema.safeParse({
        name,
        email,
        object,
        message,
        phone,
      });

      if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors;
        throw new ActionError({
          code: "BAD_REQUEST",
          message:
            getTranslation(lang, "contact.error.title") +
            ": " +
            JSON.stringify(errors),
        });
      }
      try {
        const { data, error } = await resend.emails.send({
          from: "Site internet - Domaine de Pipangaille <contact@domaine-de-pipangaille.fr>",
          replyTo: email,
          to:
            import.meta.env.CONTACT_MAIL || "contact@domaine-de-pipangaille.fr",
          subject: `Site internet | ${object}`,
          html: `
            <body style="font-family: Arial; background-color: #fffbf8;">
              <div style="background-color: #f5efe9; padding: 20px; border-radius: 16px;">
                <h1 style="font-weight: bold; font-size: 24px; color: #525e27;">Formulaire Domaine de Pipangaille</h1>
                <p style="padding: 4px 0px; color: #212121;">
                  <span style="font-weight: bold;">Objet : </span>
                  ${object}
                </p>
                <p style="padding: 4px 0px; color: #212121;">
                  <span style="font-weight: bold;">Nom : </span>
                  ${name}
                </p>
                ${
                  phone
                    ? `
                <p style="padding: 4px 0px; color: #212121;">
                  <span style="font-weight: bold;">Tel : </span>
                  <a style="color: #525e27; text-decoration: none;" href="tel:${phone}">
                    ${phone}
                  </a>
                </p>
                `
                    : ""
                }
                <p style="padding: 4px 0px; color: #212121;">
                  <span style="font-weight: bold;">Email : </span>
                  <a style="color: #525e27; text-decoration: none;" href="mailto:${email}">
                    ${email}
                  </a>
                </p>
                <p style="padding-top: 4px; color: #212121;">
                  <span style="font-weight: bold;">Message :</span>
                </p>
                <pre style="font-family: Arial; white-space: pre-wrap; padding-bottom: 4px; color: #212121;">${message}</pre>
              </div>
            </body>
          `,
        });

        if (error) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: getTranslation(lang, "contact.genericError"),
          });
        }

        return { success: true, data };
      } catch {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: getTranslation(lang, "contact.genericError"),
        });
      }
    },
  }),
};
