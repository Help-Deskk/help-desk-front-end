export const TIME_PERIODS = {
  morning: {
    label: "Manhã",
    hours: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
  },
  afternoon: {
    label: "Tarde",
    hours: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  },
  evening: {
    label: "Noite",
    hours: ["19:00", "20:00", "21:00", "22:00", "23:00"],
  },
};

export const TIME_PERIODS_KEYS = Object.keys(TIME_PERIODS) as Array<
  keyof typeof TIME_PERIODS
>;
