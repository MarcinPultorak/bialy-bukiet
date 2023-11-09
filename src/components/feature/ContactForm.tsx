import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../ui/FormInput";
import FormTextarea from "../ui/FormTextarea";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from "@/utils/validators";
import { ContactFormDto } from "@/interfaces/types";

type Props = {
  callback: (payload: ContactFormDto) => Promise<void>;
};

const ContactForm: FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFormReset, setIsFormReset] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<
    "success" | "failure" | "none"
  >("none");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormDto>();

  const _submit = (payload: ContactFormDto) => {
    setIsFormReset(true);
    setIsLoading(true);
    props
      .callback(payload)
      .then(() => {
        reset();
        setMessageStatus("success");
      })
      .catch(() => {
        setMessageStatus("failure");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    let resetInterval: NodeJS.Timeout;
    if (messageStatus == "failure" || messageStatus == "success") {
      resetInterval = setTimeout(() => {
        setMessageStatus("none");
      }, 5000);
    }
    return () => {
      clearTimeout(resetInterval);
    };
  }, [messageStatus]);

  return (
    <form noValidate onSubmit={handleSubmit(_submit)}>
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <FormInput
            {...register("name", {
              ...validateRequired(),
            })}
            label="Imię i nazwisko"
            maxLength={50}
            required
            errorMessage={errors.name?.message}
          />
        </div>
        <div>
          <FormInput
            {...register("phone", {
              ...validateRequired(),
              ...validatePhone(),
            })}
            label="Telefon"
            required
            errorMessage={errors.phone?.message}
          />
        </div>
        <div>
          <FormInput
            {...register("email", {
              ...validateRequired(),
              ...validateEmail(),
            })}
            label="Email"
            required
            errorMessage={errors.email?.message}
          />
        </div>
        <div>
          <FormInput
            {...register("date", {
              ...validateRequired(),
            })}
            label="Data"
            required
            errorMessage={errors.date?.message}
          />
        </div>
        <div>
          <FormInput
            {...register("place", {
              ...validateRequired(),
            })}
            label="Miejsce"
            required
            errorMessage={errors.place?.message}
          />
        </div>
      </fieldset>
      <fieldset className="mt-5">
        <div>
          <FormTextarea
            {...register("message", { ...validateRequired() })}
            label="Wiadomość"
            maxLength={500}
            required
            errorMessage={errors.message?.message}
            rows={8}
            isReset={isFormReset}
            setIsReset={setIsFormReset}
            placeholder="Wpisz swoją wiadomość"
          />
        </div>
        <div className="mt-10">
          <Checkbox
            {...register("consent", { ...validateRequired() })}
            errorMessage={errors.consent?.message}
            label="Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Biały Bukiet Wedding Planner."
            required
          />
        </div>
      </fieldset>
      <div className="md:max-w-[360px] mx-auto mt-10">
        <Button
          isSubmitting={isLoading}
          type={"submit"}
          title="Wyślij wiadomość"
        >
          Wyślij wiadomość
        </Button>
      </div>
      {messageStatus == "success" ? (
        <p className="text-center mt-4 text-sm text-emerald-400 font-bold">
          Twoja wiadomość została wysłana!
        </p>
      ) : messageStatus == "failure" ? (
        <p className="text-center mt-4 text-sm text-red-400 font-bold">
          Wystąpił błąd wysyłania wiadomości, spróbuj ponownie.
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
