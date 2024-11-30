import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  valore1: Yup.string().required("This field is required"),
  valore2: Yup.string().required("This field is required"),
  valore3: Yup.string().required("This field is required"),
  valore4: Yup.string().required("This field is required"),
  valore5: Yup.string().required("This field is required"),
  valore6: Yup.string().required("This field is required"),
  valore7: Yup.string().required("This field is required"),
  valore8: Yup.string().required("This field is required"),
  valore9: Yup.string().required("This field is required"),
  valore10: Yup.string().required("This field is required"),
  valore11: Yup.string().required("This field is required"),
  valore12: Yup.string().required("This field is required"),
  valore13: Yup.string().required("This field is required"),
  valore14: Yup.string().required("This field is required"),
  //   customCheckbox: Yup.boolean().oneOf(
  //     [true],
  //     "You must accept the terms and conditions"
  //   ),
});

export const validationSchema2 = Yup.object().shape({
  valore5: Yup.string().required("This field is required"),
  valore6: Yup.string().required("This field is required"),
  valore7: Yup.string().required("This field is required"),
  valore8: Yup.string().required("This field is required"),
  valore9: Yup.string().required("This field is required"),
  valore10: Yup.string().required("This field is required"),
  valore11: Yup.string().required("This field is required"),
  valore12: Yup.string().required("This field is required"),
  valore13: Yup.string().required("This field is required"),
  valore14: Yup.string().required("This field is required"),
  valore1: Yup.boolean().oneOf([true], "valore1"),
  valore2: Yup.boolean().oneOf([true], "valore2"),
  valore3: Yup.boolean().oneOf([true], "valore3"),
  valore4: Yup.boolean().oneOf([true], "valore4"),
});

export const validationSchema3 = Yup.object().shape({
  Tipodianagrafica: Yup.string().required("This field is required"),
  Nomedellanagrafica: Yup.string().required("This field is required"),
  Codice: Yup.string().required("This field is required"),
  IT: Yup.string().required("This field is required"),
  PIVA: Yup.string().required("This field is required"),
  TAG: Yup.string().required("This field is required"),
  Indirizzo: Yup.string().required("This field is required"),
  Città: Yup.string().required("This field is required"),
  CAP: Yup.string().required("This field is required"),
  PR: Yup.string().required("This field is required"),
  Regione: Yup.string().required("This field is required"),
  SDI: Yup.string().required("This field is required"),
  PEC: Yup.string().required("This field is required"),
});

export const validationSchema4 = Yup.object().shape({
  "Nome del prodotto": Yup.string().required("This field is required"),
  Categoria: Yup.string().required("This field is required"),
  "Codice Prodotto": Yup.string().required("This field is required"),
  "Codice EAN": Yup.string().required("This field is required"),
  "Centri di ricavo/costo": Yup.string().required("This field is required"),
  "Prz.m.vendita": Yup.string().required("This field is required"),
  "Prz.m.acquisto": Yup.string().required("This field is required"),
  "Utile medio": Yup.string().required("This field is required"),
  IVA: Yup.string().required("This field is required"),
  Attivo: Yup.string().required("This field is required"),
  Note: Yup.string().required("This field is required"),
});

export const validationSchemaPasswordReset = Yup.object().shape({
  email: Yup
    .string()
    .email("Deve essere un'email valida")
    .required("L'email è richiesta"),
  code: Yup
    .array()
    .of(Yup.string().matches(/^\d$/, "Ogni cifra deve essere un numero"))
    .length(6, "Il codice deve avere esattamente 6 cifre"),
  password: Yup
    .string()
    .min(8, 'La password deve avere almeno 8 caratteri')
    .required('La password è richiesta'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Le password non corrispondono')
    .required('La conferma della password è richiesta'),
})

export const validationSchemaForgotPassword = Yup.object({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
}).required();

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Inserire un indirizzo email valido")
    .required("Email è obbligatorio"),
  password: Yup.string()
    .min(6, "La password deve contenere almeno 6 caratteri")
    .required("Password è obbligatorio"),
});
