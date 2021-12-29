// Импортируем React
import React from 'react';
// Импортируем CSS
import './Greeting.css'

export default class Greeting extends React.Component {
    greeting() {
        // Получаем текущее время в часах
        const hours = new Date().getHours();
        // Проверяем часы на время суток и возвращаем приветствие
        if (hours >= 6 && hours < 12) {
            return 'Доброе утро, '
        } else if (hours >= 12 && hours < 18) {
            return 'Добрый день, '
        } else if (hours >= 18 && hours !== 0) {
            return 'Добрый вечер, '
        } return 'Пора спать, '
    }

    render() {
        return (
            <div>
                <h1>{this.greeting() + localStorage.getItem('userName') + '!'}</h1>
            </div>
        );
    }
}