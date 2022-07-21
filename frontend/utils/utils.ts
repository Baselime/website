export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: number;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise((resolve) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      //@ts-ignore
      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};

export function isEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}
