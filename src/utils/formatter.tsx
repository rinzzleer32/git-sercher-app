import dayjs from "dayjs"

export const joinedDate =(ISO: string): string =>{
    const date = dayjs(ISO);
    const formateDate = `Joined ${date.format("DD MM YYYY")}`

    return formateDate;
}