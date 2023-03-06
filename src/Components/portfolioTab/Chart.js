

import { Line } from "react-chartjs-2";
import ChartJS from 'chart.js/auto'

import React from "react";



export default function LineChart(props) {

    const [labelElements, setLabelElements] = React.useState([]);


    React.useEffect(() => {
        fetch("http://192.168.191.249:8008/api/registered-users")
            .then(res => { return res.json() })
            .then(data => setLabelElements(data.data))
            .catch(error => console.log('ERROR'))

    }, [])

    const labels = labelElements.map(el => el.attributes.Day)
    const fetchData = labelElements.map(el => el.attributes.registeredUsers)




    const data = {

        labels: labels,
        datasets: [{
            label: "New Users",
            data: fetchData,
            tension: 0.25,
            borderColor: 'rgb(33, 34, 34)',
            backgroundColor: 'rgb(33, 34, 34)',
            color: 'rgb(33, 34, 34)'
        }]

    }

    const options = {
        scales: {
            y: {
                ticks: {
                    color: 'rgb(33, 34, 34)'
                }
            },
            x: {
                ticks: {
                    color: 'rgb(33, 34, 34)'
                }
            },

        },
        legend: {
            labels: {
                fontColor: 'rgb(33, 34, 34)'
            }
        }
    }
    return (

        <Line data={data} options={options} />

    )

}