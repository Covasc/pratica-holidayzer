import express from "express";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br.js';

const holidayzer = express();
const holidayList = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

holidayzer.get('/holidays', (request, response) => {
    response.send(holidayList);
})

holidayzer.get('/is-today-holiday', (request, response) => {

    let control = false;
    const today = dayjs().locale('pt-br').format('M/D/YYYY');
    let holidayName;

    holidayList.forEach( (holiday) => {
        if (today === holiday.date) {
            holidayName = holiday.name;
            control = true;
        }
    } );

    control === true ? response.send(`Sim, hoje é ${holidayName}`) : response.send('Não, hoje não é feriado') ;
})

holidayzer.listen(5001);



