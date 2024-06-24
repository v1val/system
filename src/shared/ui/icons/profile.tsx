import { LucideProps } from "lucide-react";

export function Profile({ ...props }: LucideProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 15.0293C15.3137 15.0293 18 12.343 18 9.0293C18 5.71559 15.3137 3.0293 12 3.0293C8.68629 3.0293 6 5.71559 6 9.0293C6 12.343 8.68629 15.0293 12 15.0293Z"
        stroke="#787F86"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M2.90625 20.2792C3.82775 18.6827 5.15328 17.357 6.74958 16.4353C8.34588 15.5136 10.1567 15.0283 12 15.0283C13.8433 15.0283 15.6541 15.5136 17.2504 16.4353C18.8467 17.357 20.1722 18.6827 21.0938 20.2792"
        stroke="#787F86"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
