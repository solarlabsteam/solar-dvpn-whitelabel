import type { Ref } from "vue";
import { ref } from "vue";
import { AxiosError } from "axios";
import { useI18n } from "vue-i18n";

const error = ref<string>();

export default function useError(): {
  error: Ref<string | undefined>;
  setError(message: string | undefined): void;
  resetError(): void;
  handleError(e: any): void;
} {
  const { t, te } = useI18n();

  const setError = (message: string) => {
    error.value = message;
  };

  const resetError = () => {
    error.value = undefined;
  };

  const handleError = (e: any) => {
    if (e instanceof AxiosError) {
      if (e.code === "ERR_NETWORK") {
        setError(t("error.noConnection"));
      } else if (e.response?.data && e.response.data?.reason) {
        const reason = e.response.data.reason;
        const reasonObject = typeof reason !== "string" ? parseJsonSafe(reason) : undefined;
        if (reasonObject) {
          setError(reasonObject.message);
        } else if (te(`error.${reason}`)) {
          setError(t(`error.${reason}`));
        } else {
          setError(reason);
        }
      } else {
        setError(e.message);
      }
    } else if (e instanceof TypeError) {
      return;
    } else if (typeof e === "string") {
      setError(e);
    } else {
      setError(JSON.stringify(e.message || "Unknown error"));
    }

    function parseJsonSafe(value: string) {
      try {
        return JSON.parse(value);
      } catch {
        return undefined;
      }
    }
  };

  return {
    error,
    setError,
    resetError,
    handleError,
  };
}
