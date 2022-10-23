import dayjs from "dayjs";

export function formatDate(date: Date | undefined) {
    const formattedDate = dayjs(date).format('YYYY.MM.DD. HH:mm:ss').slice(0, 17)
    if (
        formattedDate !== 'Invalid Date'
    ) {
        return formattedDate;
    }
    return '';
}
